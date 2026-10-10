import { RawWordInput, GeneratedWord, GeneratedCloze, GeneratedQuiz, GenerationLevel } from '@/types';

interface GenerationResponse {
  words: GeneratedWord[];
  article: GeneratedCloze;
  quizzes: GeneratedQuiz[];
  source: 'ai' | 'offline';
  fallbackReason?: string;
}

function cleanJsonString(raw: string): string {
  let cleaned = raw.trim();
  if (cleaned.startsWith('```json')) {
    cleaned = cleaned.replace(/^```json\s*/, '').replace(/\s*```$/, '');
  } else if (cleaned.startsWith('```')) {
    cleaned = cleaned.replace(/^```\s*/, '').replace(/\s*```$/, '');
  }
  return cleaned.trim();
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

  return shuffle(quizzes).map((quiz) => {
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

// Gemma free model on OpenRouter
const GEMMA_MODEL = 'google/gemma-2-9b-it:free';

export async function translateVocabularyWithGemma(words: string[], apiKey?: string): Promise<Record<string, string>> {
  const key = apiKey?.trim() || process.env.OPENROUTER_API_KEY?.trim() || process.env.GROQ_API_KEY?.trim();
  if (!key) throw new Error('No OpenRouter API Key was provided for Gemma.');

  const prompt = `Translate each English vocabulary word into concise Traditional Chinese (台灣繁體中文).
Return ONLY a valid JSON object matching this exact shape:
{"translations":{"word":"中文翻譯"}}

Words to translate: ${JSON.stringify(words)}
Do not include any explanation or markdown formatting other than the JSON string.`;

  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${key}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': 'http://localhost:3000',
      'X-Title': 'Vocab Master AI',
    },
    body: JSON.stringify({
      model: GEMMA_MODEL,
      messages: [
        { role: 'system', content: 'You are a translation assistant that only responds in valid JSON.' },
        { role: 'user', content: prompt }
      ],
      response_format: { type: 'json_object' },
      temperature: 0.2,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData?.error?.message || `OpenRouter API error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  const content = data.choices?.[0]?.message?.content || '{}';
  const parsed = JSON.parse(cleanJsonString(content)) as { translations?: Record<string, string> };

  return Object.fromEntries(
    Object.entries(parsed.translations || {}).map(([word, translation]) => [word.trim().toLowerCase(), translation]),
  );
}

export async function generateLearningMaterialsWithGemma(
  rawWords: RawWordInput[],
  level: GenerationLevel = 'highschool',
  apiKey?: string
): Promise<GenerationResponse> {
  const key = apiKey?.trim() || process.env.OPENROUTER_API_KEY?.trim() || process.env.GROQ_API_KEY?.trim();
  if (!key) {
    throw new Error('No OpenRouter API Key provided for Gemma.');
  }

  const wordListStr = rawWords.map(w => {
    let str = w.word;
    if (w.translation) str += ` (備註中文: ${w.translation})`;
    if (w.pos) str += ` (詞性: ${w.pos})`;
    return str;
  }).join(', ');

  const prompt = `
You are an expert English vocabulary teacher. Return valid JSON only.
Create learning materials for the following target words based on difficulty level "${level}".
Include:
1. "words": Detailed flashcard information for all target words.
2. "article": An interesting contextual cloze story of 120-250 words that naturally incorporates all target words. Replace target words with [blank_1], [blank_2], etc., matching the blanks array IDs.
3. "quizzes": Exactly one unique multiple-choice question for each target word with plausible distractors, questionZh, correctIdx (0-3), and detailed explanation in Traditional Chinese.

目標單字清單: [${wordListStr}]

請輸出符合以下 JSON Schema 格式的純 JSON 資料（不要加入任何額外 Markdown 註解）：
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
      "options": ["正確單字", "干擾單字1", "干擾單字2", "干擾單字3"],
      "correctIdx": 0,
      "explanation": "詳細的解析（繁體中文），說明為什麼正確答案適合，以及其他干擾選項的意思與排除原因。"
    }
  ]
}

注意事項：
1. 確保繁體中文譯名道地，符合台灣常用語法。
2. quizzes 陣列中，請為每個單字設計 1 題單選測驗題。
3. options 陣列的 correctIdx 必須正確對應到 options 中的正確答案索引 (0 到 3)。
4. blanks 陣列必須與 content 中的 [blank_1], [blank_2]... 完全一致。
`;

  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${key}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': 'http://localhost:3000',
      'X-Title': 'Vocab Master AI',
    },
    body: JSON.stringify({
      model: GEMMA_MODEL,
      messages: [
        {
          role: 'system',
          content: 'You are an expert English teacher who outputs strictly valid JSON according to the schema specified by the user.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      response_format: { type: 'json_object' },
      temperature: 0.6,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData?.error?.message || `OpenRouter API error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  const content = data.choices?.[0]?.message?.content || '{}';
  const parsed = JSON.parse(cleanJsonString(content)) as GenerationResponse;

  return {
    ...parsed,
    quizzes: normalizeQuizzes(parsed.quizzes || [], rawWords),
    source: 'ai',
  };
}

