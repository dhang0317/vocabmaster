import { GoogleGenerativeAI } from '@google/generative-ai';
import {
  RawWordInput,
  GeneratedWord,
  GeneratedCloze,
  GeneratedQuiz,
  GenerationLevel,
  GlossaryEntry,
  ClozeBlank,
} from '@/types';
import { buildOfflineStory, buildOfflineBlanks, buildOfflineQuizzes } from '@/lib/offlineTemplates';

interface GenerationResponse {
  words: GeneratedWord[];
  article: GeneratedCloze;
  quizzes: GeneratedQuiz[];
  source: 'ai' | 'offline';
  fallbackReason?: string;
}

const GEMINI_MODELS = ['gemini-2.0-flash', 'gemini-2.0-flash-lite', 'gemini-1.5-flash', 'gemini-3.6-flash'];

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function isRateLimitError(error: unknown): boolean {
  const msg = error instanceof Error ? error.message : String(error);
  return /429|Too Many Requests|quota|rate.?limit/i.test(msg);
}

async function generateJsonWithFallback(
  apiKey: string,
  prompt: string,
  temperature: number
): Promise<string> {
  let lastError: unknown;

  for (const modelName of GEMINI_MODELS) {
    const model = new GoogleGenerativeAI(apiKey.trim()).getGenerativeModel({
      model: modelName,
      generationConfig: {
        responseMimeType: 'application/json',
        temperature,
      },
    });

    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        const result = await model.generateContent(prompt);
        return result.response.text();
      } catch (err) {
        lastError = err;
        if (isRateLimitError(err) && attempt < 2) {
          await sleep(3500 * (attempt + 1));
          continue;
        }
        break;
      }
    }
  }

  throw lastError instanceof Error ? lastError : new Error(String(lastError));
}

export async function translateVocabulary(words: string[], apiKey?: string): Promise<Record<string, string>> {
  const key = apiKey?.trim() || process.env.GEMINI_API_KEY?.trim();
  if (!key) throw new Error('No Gemini API Key was provided.');

  const text = await generateJsonWithFallback(
    key,
    `Translate each English vocabulary word into concise Traditional Chinese. Return JSON only in this exact shape: {"translations":{"word":"中文翻譯"}}. Words: ${JSON.stringify(words)}`,
    0.2
  );
  const parsed = JSON.parse(text) as { translations?: Record<string, string> };
  return Object.fromEntries(
    Object.entries(parsed.translations || {}).map(([word, translation]) => [word.trim().toLowerCase(), translation]),
  );
}

function shuffle<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function normalizeGlossary(
  glossary: GlossaryEntry[] | undefined,
  words: GeneratedWord[],
  blanks: ClozeBlank[]
): GlossaryEntry[] {
  const map = new Map<string, GlossaryEntry>();

  const add = (en: string, zh: string, sense?: string, overwrite = false) => {
    const key = en.trim().toLowerCase();
    if (!key || !zh?.trim()) return;
    if (overwrite || !map.has(key)) {
      map.set(key, { en: en.trim(), zh: zh.trim(), sense: sense?.trim() || undefined });
    }
  };

  for (const w of words) {
    add(w.word, w.translation, w.pos ? `詞性 ${w.pos}` : undefined);
  }
  for (const b of blanks || []) {
    if (b.word && b.hint) add(b.word, b.hint.replace(/\s*\([^)]*\)\s*$/, '').trim());
  }
  for (const g of glossary || []) {
    if (g?.en && g?.zh) add(g.en, g.zh, g.sense, true);
  }

  return Array.from(map.values());
}

/**
 * Ensure each target word appears as at most one blank.
 * Extra [blank_n] markers in content are filled with the answer word.
 * Blanks are renumbered 1..N to match remaining markers.
 */
function normalizeArticleBlanks(article: GeneratedCloze): GeneratedCloze {
  const rawBlanks = Array.isArray(article.blanks) ? article.blanks : [];
  const content = article.content || '';

  // Keep first blank per answer word (case-insensitive)
  const seenWords = new Set<string>();
  const uniqueBlanks: ClozeBlank[] = [];
  const dropIds = new Set<number>();

  for (const b of rawBlanks) {
    const key = (b.word || '').trim().toLowerCase();
    if (!key) {
      dropIds.add(b.id);
      continue;
    }
    if (seenWords.has(key)) {
      dropIds.add(b.id);
      continue;
    }
    seenWords.add(key);
    uniqueBlanks.push(b);
  }

  // Also drop blank markers in content that are not in uniqueBlanks, replace with word
  const keepByOldId = new Map(uniqueBlanks.map(b => [b.id, b]));

  let newContent = content.replace(/\[blank_(\d+)\]/g, (match, idStr: string) => {
    const id = parseInt(idStr, 10);
    const blank = keepByOldId.get(id);
    if (blank) return match; // keep for now; renumber next
    // Duplicate or unknown blank → write the answer word as plain text
    const fallen = rawBlanks.find(b => b.id === id);
    return fallen?.word || match;
  });

  // Renumber remaining blanks to 1..N in order of appearance
  const order: number[] = [];
  newContent.replace(/\[blank_(\d+)\]/g, (_, idStr: string) => {
    const id = parseInt(idStr, 10);
    if (!order.includes(id)) order.push(id);
    return '';
  });

  const idMap = new Map<number, number>();
  order.forEach((oldId, idx) => idMap.set(oldId, idx + 1));

  newContent = newContent.replace(/\[blank_(\d+)\]/g, (_, idStr: string) => {
    const oldId = parseInt(idStr, 10);
    const newId = idMap.get(oldId) ?? oldId;
    return `[blank_${newId}]`;
  });

  const renumbered: ClozeBlank[] = order
    .map(oldId => keepByOldId.get(oldId))
    .filter((b): b is ClozeBlank => Boolean(b))
    .map((b, idx) => ({
      ...b,
      id: idx + 1,
    }));

  // Safety: if content still has more markers than blanks, strip extras
  const markerCount = (newContent.match(/\[blank_\d+\]/g) || []).length;
  if (markerCount !== renumbered.length) {
    // Fill any leftover markers with plain text from first matching blank word list
    let i = 0;
    newContent = newContent.replace(/\[blank_(\d+)\]/g, (match, idStr: string) => {
      i += 1;
      if (i <= renumbered.length) return `[blank_${i}]`;
      const id = parseInt(idStr, 10);
      const b = renumbered.find(x => x.id === id) || renumbered[0];
      return b?.word || '';
    });
  }

  return {
    ...article,
    content: newContent,
    blanks: renumbered,
  };
}

function normalizeQuizzes(quizzes: GeneratedQuiz[], rawWords: RawWordInput[]): GeneratedQuiz[] {
  const seenQuestions = new Set<string>();
  const wordByText = new Map(rawWords.map(word => [word.word.trim().toLowerCase(), word]));

  return shuffle(quizzes).map(quiz => {
    const source = wordByText.get(quiz.targetWord.trim().toLowerCase());
    const targetWord = quiz.targetWord || source?.word || '';
    const answer =
      source?.translation && !/\(翻譯\)|\(translation\)/i.test(source.translation)
        ? source.translation
        : quiz.explanation || targetWord;
    const questionKey = quiz.question.trim().toLowerCase().replace(/\s+/g, ' ');

    let question = quiz.question;
    let questionZh = quiz.questionZh;
    if (!questionKey || seenQuestions.has(questionKey)) {
      question = `Which word best matches this meaning: "${answer}"?`;
      questionZh = `哪一個單字最符合「${answer}」的意思？`;
    }
    seenQuestions.add(question.trim().toLowerCase().replace(/\s+/g, ' '));

    const originalCorrect = quiz.options?.[quiz.correctIdx] || targetWord;
    const isMeaningComparison = /closest in meaning|closest meaning|similar meaning|synonym/i.test(question);
    const sourceOptions = isMeaningComparison
      ? (quiz.options || []).filter(option => option.trim().toLowerCase() !== targetWord.trim().toLowerCase())
      : [targetWord, ...(quiz.options || [])];
    const uniqueOptions = sourceOptions.filter(
      (option, optionIndex, all) =>
        all.findIndex(candidate => candidate.trim().toLowerCase() === option.trim().toLowerCase()) === optionIndex
    );
    const correctOption = isMeaningComparison ? originalCorrect : targetWord;
    if (!uniqueOptions.some(option => option.trim().toLowerCase() === correctOption.trim().toLowerCase())) {
      uniqueOptions[0] = correctOption;
    }
    const options = shuffle(uniqueOptions).slice(0, 4);
    const normalizedCorrect =
      options.find(option => option.trim().toLowerCase() === correctOption.trim().toLowerCase()) || correctOption;
    if (!options.some(option => option.trim().toLowerCase() === correctOption.trim().toLowerCase())) {
      options[0] = normalizedCorrect;
    }

    return {
      ...quiz,
      question,
      questionZh,
      targetWord,
      options,
      correctIdx: options.findIndex(
        option => option.trim().toLowerCase() === correctOption.trim().toLowerCase()
      ),
      explanation: `Correct answer: ${correctOption}. "${targetWord}" means "${source?.translation || 'the provided meaning'}".`,
    };
  });
}

export async function generateLearningMaterials(
  rawWords: RawWordInput[],
  level: GenerationLevel = 'highschool',
  apiKey?: string
): Promise<GenerationResponse> {
  const effectiveKey = (apiKey || process.env.GEMINI_API_KEY || '').trim();

  if (effectiveKey) {
    try {
      const wordListStr = rawWords
        .map(w => {
          let str = w.word;
          if (w.translation) str += ` (備註中文: ${w.translation})`;
          if (w.pos) str += ` (詞性: ${w.pos})`;
          return str;
        })
        .join(', ');

      const prompt = `
You are an expert English vocabulary teacher. Return valid JSON only.

你是頂尖英語教學專家。難度「${level}」。目標單字: [${wordListStr}]

【嚴格順序——在同一個回應內完成】
1. 先寫完整英文故事 content（目標單字處用 [blank_1]、[blank_2]…）。
2. 再把「填入答案後的完整英文故事」翻成自然、道地的繁體中文 contentZh（台灣用法；完整篇章，非逐詞硬翻）。
3. 最後才根據「英文全文 + contentZh 全文對照」拆出 glossary：每個 en 的 zh 必須與 contentZh 裡的實際譯法一致，禁止與全文矛盾的字典義。

輸出純 JSON（不要 Markdown）：
{
  "words": [
    {
      "word": "目標單字",
      "phonetic": "/IPA/",
      "pos": "n./v./adj./adv.",
      "translation": "繁體中文",
      "definition": "英文定義",
      "example": "英文例句",
      "exampleZh": "例句中文"
    }
  ],
  "article": {
    "title": "英文標題",
    "content": "英文短文 120–250 字，目標單字以 [blank_n] 標記",
    "contentZh": "完整繁體中文翻譯",
    "blanks": [
      { "id": 1, "word": "正確英文", "hint": "繁中提示", "options": ["正確", "干擾1", "干擾2", "干擾3"] }
    ],
    "glossary": [
      { "en": "文中詞或片語", "zh": "與 contentZh 一致的意思", "sense": "可選用法說明" }
    ]
  },
  "quizzes": [
    {
      "question": "英文題",
      "questionZh": "中文題",
      "targetWord": "目標單字",
      "options": ["A", "B", "C", "D"],
      "correctIdx": 0,
      "explanation": "繁中解析"
    }
  ]
}

規則：
1. 【重要】每個目標單字在文章中只能出現「一次」空格 [blank_n]。blanks 數量必須等於目標單字數量。若同一單字在文中自然出現第二次，請寫出完整單字，不要再挖空。
2. blanks 的 id 必須是 1..N 連續編號，並與 content 中的 [blank_n] 一一對應。
3. 每個重要目標單字至少一題 quiz。
4. glossary 含所有目標單字 + 文中實義詞／片語（略過 a/the/is 等虛詞），約 30–70 筆；glossary.zh 必須能對上 contentZh。
`;

      const text = await generateJsonWithFallback(effectiveKey, prompt, 0.7);
      const parsed = JSON.parse(text) as GenerationResponse;

      let article = parsed.article || ({} as GeneratedCloze);
      article = normalizeArticleBlanks(article);
      article.glossary = normalizeGlossary(
        article.glossary,
        parsed.words || [],
        article.blanks || []
      );

      return {
        ...parsed,
        article,
        quizzes: normalizeQuizzes(parsed.quizzes || [], rawWords),
        source: 'ai',
      };
    } catch (error) {
      console.warn('Gemini API call failed or rate-limited, fallback to smart offline generator:', error);
      const fallbackReason = error instanceof Error ? error.message : 'Unknown Gemini API error';
      return generateOfflineFallback(rawWords, level, fallbackReason);
    }
  }

  return generateOfflineFallback(rawWords, level, 'Offline mode (no AI).');
}

function generateOfflineFallback(
  rawWords: RawWordInput[],
  level: GenerationLevel,
  fallbackReason: string
): GenerationResponse {
  const words: GeneratedWord[] = rawWords.map(w => {
    const cleanWord = w.word.trim();
    return {
      word: cleanWord,
      phonetic: w.phonetic || `/${cleanWord.toLowerCase()}/`,
      pos: w.pos || 'n.',
      translation: w.translation || '（未提供中文）',
      definition: w.definition || `A concept or action related to ${cleanWord}.`,
      example: w.example || '',
      exampleZh: w.exampleZh || '',
      isMastered: false,
    };
  });

  const blanks = buildOfflineBlanks(words);
  const story = buildOfflineStory(words, level);
  const quizzes = buildOfflineQuizzes(words);

  let article: GeneratedCloze = {
    title: story.title,
    content: story.content,
    contentZh: story.contentZh,
    blanks,
    glossary: normalizeGlossary(story.glossaryExtra, words, blanks),
  };
  article = normalizeArticleBlanks(article);

  return {
    words,
    article,
    quizzes,
    source: 'offline',
    fallbackReason,
  };
}
