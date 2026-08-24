import { GoogleGenerativeAI } from '@google/generative-ai';
import { RawWordInput, GeneratedWord, GeneratedCloze, GeneratedQuiz, GenerationLevel } from '@/types';

interface GenerationResponse {
  words: GeneratedWord[];
  article: GeneratedCloze;
  quizzes: GeneratedQuiz[];
  source: 'ai' | 'offline';
  fallbackReason?: string;
}

export async function translateVocabulary(words: string[], apiKey?: string): Promise<Record<string, string>> {
  const key = apiKey?.trim() || process.env.GEMINI_API_KEY?.trim();
  if (!key) throw new Error('No Gemini API Key was provided.');
  const model = new GoogleGenerativeAI(key).getGenerativeModel({
    model: 'gemini-3.6-flash',
    generationConfig: { responseMimeType: 'application/json', temperature: 0.2 },
  });
  const result = await model.generateContent(
    `Translate each English vocabulary word into concise Traditional Chinese. Return JSON only in this exact shape: {"translations":{"word":"中文翻譯"}}. Words: ${JSON.stringify(words)}`,
  );
  const parsed = JSON.parse(result.response.text()) as { translations?: Record<string, string> };
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

function normalizeQuizzes(quizzes: GeneratedQuiz[], rawWords: RawWordInput[]): GeneratedQuiz[] {
  const seenQuestions = new Set<string>();
  const wordByText = new Map(rawWords.map(word => [word.word.trim().toLowerCase(), word]));

  return shuffle(quizzes).map((quiz, index) => {
    const source = wordByText.get(quiz.targetWord.trim().toLowerCase());
    const targetWord = quiz.targetWord || source?.word || '';
    const answer = source?.translation && !/\(翻譯\)|\(translation\)/i.test(source.translation)
      ? source.translation
      : (quiz.explanation || targetWord);
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
    const uniqueOptions = sourceOptions.filter((option, optionIndex, all) =>
      all.findIndex(candidate => candidate.trim().toLowerCase() === option.trim().toLowerCase()) === optionIndex,
    );
    const correctOption = isMeaningComparison ? originalCorrect : targetWord;
    if (!uniqueOptions.some(option => option.trim().toLowerCase() === correctOption.trim().toLowerCase())) {
      uniqueOptions[0] = correctOption;
    }
    const options = shuffle(uniqueOptions).slice(0, 4);
    const normalizedCorrect = options.find(option => option.trim().toLowerCase() === correctOption.trim().toLowerCase()) || correctOption;
    if (!options.some(option => option.trim().toLowerCase() === correctOption.trim().toLowerCase())) options[0] = normalizedCorrect;

    return {
      ...quiz,
      question,
      questionZh,
      targetWord,
      options,
      correctIdx: options.findIndex(option => option.trim().toLowerCase() === correctOption.trim().toLowerCase()),
      explanation: `Correct answer: ${correctOption}. "${targetWord}" means "${source?.translation || 'the provided meaning'}".`,
    };
  });
}

export async function generateLearningMaterials(
  rawWords: RawWordInput[],
  level: GenerationLevel = 'highschool',
  apiKey?: string
): Promise<GenerationResponse> {
  const effectiveKey = apiKey || process.env.GEMINI_API_KEY;

  if (effectiveKey && effectiveKey.trim() !== '') {
    try {
      const genAI = new GoogleGenerativeAI(effectiveKey.trim());
      const model = genAI.getGenerativeModel({
        model: 'gemini-3.6-flash',
        generationConfig: {
          responseMimeType: 'application/json',
          temperature: 0.7,
        },
      });

      const wordListStr = rawWords.map(w => {
        let str = w.word;
        if (w.translation) str += ` (備註中文: ${w.translation})`;
        if (w.pos) str += ` (詞性: ${w.pos})`;
        return str;
      }).join(', ');

      const prompt = `
You are an expert English vocabulary teacher. Return valid JSON only.
Create one unique multiple-choice question for each target word. Mix two question styles: meaning questions and sentence-completion questions.
Use each target word naturally according to its meaning, part of speech, and common collocations.
Never use a word in a grammatically incorrect phrase: for example, use "comply with a rule/request", but use "acknowledge an achievement".
The blank must have exactly one correct answer. Make distractors plausible but incorrect.
Set correctIdx to the correct option's zero-based index and include a concise explanation with the word meaning.

你是一位頂尖的英語教學專家與命題大師。請針對以下提供的英文單字清單，根據難度等級「${level}」，生成完整的學習資料（含單字卡資訊、填空短文、單選測驗題）。

目標單字清單: [${wordListStr}]

請輸出符合以下 JSON Schema 格式的純 JSON 資料（不要加入額外 Markdown 註解）：
{
  "words": [
    {
      "word": "目標單字（正確大小寫拼寫）",
      "phonetic": "/IPA 音標/",
      "pos": "詞性簡稱 (如: n., v., adj., adv.)",
      "translation": "精確且道地的繁體中文翻譯",
      "definition": "簡明清楚的英文定義",
      "example": "包含該單字的生動自然英文例句（難度符合 ${level}）",
      "exampleZh": "例句的流暢繁體中文翻譯"
    }
  ],
  "article": {
    "title": "一篇有趣且具情境的故事短文標題（英文）",
    "content": "故事英文短文。必須巧妙且自然地將所有目標單字融入文章中。文章中出現目標單字的地方，請替換為標籤 [blank_1], [blank_2], ... 對應 blanks 陣列中的 id。字數約 120-250 字。",
    "contentZh": "完整故事短文的對照繁體中文翻譯（包含答案處的中文）",
    "blanks": [
      {
        "id": 1,
        "word": "該空格正確填入的英文單字",
        "hint": "該空格的繁體中文提示或語境提示",
        "options": ["正確單字", "干擾單字1", "干擾單字2", "干擾單字3"]
      }
    ]
  },
  "quizzes": [
    {
      "question": "包含空格 _____ 的情境測驗題目（英文句子，難度符合 ${level}）",
      "questionZh": "題目的繁體中文翻譯",
      "targetWord": "被測驗的目標單字",
      "options": ["正確單字", "具備文法或形似干擾性的單字1", "干擾單字2", "干擾單字3"],
      "correctIdx": 0,
      "explanation": "詳細的解析（繁體中文），說明為什麼正確答案適合，以及其他干擾選項的意思與排除原因。"
    }
  ]
}

注意事項：
1. 確保繁體中文譯名道地，符合台灣常用語法。
2. quizzes 陣列中，請為清單中的每一個（或至少大部分）重要單字各設計 1 題高品質的單選測驗題。
3. options 陣列的 correctIdx 必須正確對應到 options 中的正確答案索引 (0 到 3)，請隨機將正確答案置於 0, 1, 2, 3 的位置。
4. blanks 陣列必須與 content 中的 [blank_1], [blank_2]... 完全一致。
`;

      const result = await model.generateContent(prompt);
      const text = result.response.text();
      const parsed: GenerationResponse = JSON.parse(text);
      return {
        ...parsed,
        quizzes: normalizeQuizzes(parsed.quizzes || [], rawWords),
        source: 'ai',
      };
    } catch (error) {
      console.warn('Gemini API call failed or rate-limited, fallback to smart offline generator:', error);
      const fallbackReason = error instanceof Error ? error.message : 'Unknown Gemini API error';
      return generateOfflineFallback(rawWords, level, fallbackReason);
    }
  }

  // Fallback / Offline Generator
  return generateOfflineFallback(rawWords, level, 'No API Key was provided.');
}

/**
 * Intelligent mock/offline generator for instant preview and offline experience
 */
function generateOfflineFallback(rawWords: RawWordInput[], level: GenerationLevel, fallbackReason: string): GenerationResponse {
  const words: GeneratedWord[] = rawWords.map(w => {
    const cleanWord = w.word.trim();
    return {
      word: cleanWord,
      phonetic: w.phonetic || `/${cleanWord.toLowerCase()}/`,
      pos: w.pos || 'n.',
      translation: w.translation || 'No definition provided',
      definition: w.definition || `A concept or action related to ${cleanWord}.`,
      example: w.example || `The teacher asked the students to explain the term "${cleanWord}".`,
      exampleZh: w.exampleZh || `老師要求學生們解釋「${cleanWord}」這個詞。`,
      isMastered: false,
    };
  });

  // Build a cloze story
  const blanks = words.map((w, idx) => {
    const distractors = words.filter(other => other.word.trim().toLowerCase() !== w.word.trim().toLowerCase()).map(o => o.word);
    while (distractors.length < 3) {
      distractors.push(['approach', 'perspective', 'significant', 'potential', 'efficient'][distractors.length % 5]);
    }
    const shuffledOptions = [w.word, distractors[0], distractors[1], distractors[2]].sort(() => Math.random() - 0.5);
    return {
      id: idx + 1,
      word: w.word,
      hint: `${w.translation} (${w.pos})`,
      options: shuffledOptions,
    };
  });

  let storyText = `In today's fast-paced world, understanding new concepts is essential. Many people find that studying [blank_1] can greatly improve their communication. `;
  for (let i = 1; i < blanks.length; i++) {
    storyText += `Furthermore, applying [blank_${i + 1}] helps reinforce long-term memory and practical usage. `;
  }
  storyText += `With continuous practice, mastering these vocabularies becomes natural and rewarding.`;

  const article: GeneratedCloze = {
    title: 'A Journey of Learning and Discovery',
    content: storyText,
    contentZh: '在當今快節奏的世界中，理解新概念至關重要。許多人發現學習這些詞彙可以極大地改善溝通，並在持續練習中獲得長期的成果。',
    blanks,
  };

  // Build Quizzes
  const sentenceTemplates = [
    (meaning: string) => `In class, students learned that _____ means "${meaning}".`,
    (meaning: string) => `The teacher wrote _____ on the board and explained that it means "${meaning}".`,
    (meaning: string) => `To remember the meaning "${meaning}", choose the word _____.`,
    (meaning: string) => `The vocabulary list defines _____ as "${meaning}".`,
    (meaning: string) => `Which word should complete this note? "_____ = ${meaning}."`,
  ];

  const quizzes: GeneratedQuiz[] = words.map((w, questionIndex) => {
    const distractors = words.filter(other => other.word.trim().toLowerCase() !== w.word.trim().toLowerCase()).map(o => o.word);
    while (distractors.length < 3) {
      distractors.push(['comprehend', 'sustainable', 'elaborate', 'innovative', 'phenomenon'][distractors.length % 5]);
    }
    const shuffled = shuffle([w.word, distractors[0], distractors[1], distractors[2]]);
    const correctIdx = shuffled.indexOf(w.word);

    return {
      question: questionIndex % 2 === 0
        ? `Which word best matches this meaning: "${w.translation || 'the meaning provided'}"?`
        : sentenceTemplates[Math.floor(questionIndex / 2) % sentenceTemplates.length](w.translation || 'the meaning provided'),
      questionZh: questionIndex % 2 === 0
        ? `哪一個單字最符合「${w.translation || '題目所提供的意思'}」？`
        : `請選出最適合填入空格的單字；這個單字的意思是「${w.translation || '題目所提供的意思'}」。`,
      targetWord: w.word,
      options: shuffled,
      correctIdx,
      explanation: `正確答案是「${w.word}」，意思是「${w.translation || '未提供中文意思'}」。這個單字符合題目所描述的語意與詞性。`,
    };
  });

  // Keep quiz order independent from the uploaded flashcard order.
  const shuffledQuizzes = shuffle(quizzes);

  return {
    words,
    article,
    quizzes: shuffledQuizzes,
    source: 'offline',
    fallbackReason,
  };
}
