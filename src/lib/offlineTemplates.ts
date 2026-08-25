import {
  GeneratedWord,
  GeneratedQuiz,
  ClozeBlank,
  GlossaryEntry,
  GenerationLevel,
} from '@/types';

function shuffle<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function normalizePos(pos?: string): 'n' | 'v' | 'adj' | 'adv' | 'other' {
  const p = (pos || '').toLowerCase();
  if (/^n\b|noun|n\./.test(p)) return 'n';
  if (/^v\b|verb|v\./.test(p)) return 'v';
  if (/adj|a\./.test(p)) return 'adj';
  if (/adv/.test(p)) return 'adv';
  return 'other';
}

function zhOf(w: GeneratedWord): string {
  const t = (w.translation || '').trim();
  if (!t || /^no definition/i.test(t) || t === '（未提供中文）') return w.word;
  return t;
}

type Frame = { en: (blank: string, word: string, zh: string) => string; zh: (word: string, zh: string) => string };

/** Natural usage frames by part of speech (not meta "learn the word" talk). */
const FRAMES: Record<'n' | 'v' | 'adj' | 'adv' | 'other', Frame[]> = {
  n: [
    {
      en: (b, _w, zh) => `The report highlighted the importance of ${b} in this situation.`,
      zh: (_w, zh) => `報告強調了「${zh}」在此情境中的重要性。`,
    },
    {
      en: (b) => `Without enough ${b}, the team could not finish the project on time.`,
      zh: (_w, zh) => `若沒有足夠的「${zh}」，團隊就無法準時完成專案。`,
    },
    {
      en: (b) => `Experts said ${b} would continue to shape decisions this year.`,
      zh: (_w, zh) => `專家表示，「${zh}」今年仍會影響許多決策。`,
    },
    {
      en: (b) => `She took careful notes on every detail related to ${b}.`,
      zh: (_w, zh) => `她仔細記錄了與「${zh}」有關的每個細節。`,
    },
  ],
  v: [
    {
      en: (b) => `Managers must ${b} the new policy before next Monday.`,
      zh: (_w, zh) => `主管必須在下週一前${zh}這項新政策。`,
    },
    {
      en: (b) => `If we ${b} carefully, we can avoid the same mistake.`,
      zh: (_w, zh) => `若我們仔細${zh}，就能避免重蹈覆轍。`,
    },
    {
      en: (b) => `The company decided to ${b} its strategy after the meeting.`,
      zh: (_w, zh) => `會議之後，公司決定${zh}既有策略。`,
    },
    {
      en: (b) => `Students were asked to ${b} the main idea in their own words.`,
      zh: (_w, zh) => `老師要求學生用自己的話${zh}主旨。`,
    },
  ],
  adj: [
    {
      en: (b) => `The results were more ${b} than anyone expected.`,
      zh: (_w, zh) => `結果比任何人預期的都更${zh}。`,
    },
    {
      en: (b) => `A ${b} approach helped the team solve the problem faster.`,
      zh: (_w, zh) => `一個${zh}的做法幫助團隊更快解決問題。`,
    },
    {
      en: (b) => `His answer was clear, careful, and ${b}.`,
      zh: (_w, zh) => `他的回答清楚、謹慎，而且${zh}。`,
    },
    {
      en: (b) => `They needed a ${b} plan before investing more money.`,
      zh: (_w, zh) => `在投入更多資金前，他們需要一個${zh}的計畫。`,
    },
  ],
  adv: [
    {
      en: (b) => `She spoke ${b}, and everyone in the room understood her point.`,
      zh: (_w, zh) => `她${zh}地說明，全場都聽懂了重點。`,
    },
    {
      en: (b) => `The system updated ${b} during the night.`,
      zh: (_w, zh) => `系統在夜間${zh}完成更新。`,
    },
    {
      en: (b) => `If you prepare ${b}, the interview will feel much easier.`,
      zh: (_w, zh) => `若你${zh}準備，面試會輕鬆許多。`,
    },
  ],
  other: [
    {
      en: (b) => `In this context, ${b} plays a key role.`,
      zh: (_w, zh) => `在這個語境中，「${zh}」扮演關鍵角色。`,
    },
    {
      en: (b) => `People often misunderstand what ${b} really means.`,
      zh: (_w, zh) => `人們常誤解「${zh}」的真正意思。`,
    },
  ],
};

const OPENERS: Record<GenerationLevel, { en: string; zh: string; title: string }[]> = {
  elementary: [
    {
      title: 'A Day at School',
      en: 'It was an ordinary morning at school, and something interesting happened.',
      zh: '那是普通的一天早晨，學校裡發生了一件有趣的事。',
    },
    {
      title: 'Friends and New Words',
      en: 'Two friends talked about what they learned after class.',
      zh: '兩個朋友下課後聊起他們學到的內容。',
    },
  ],
  highschool: [
    {
      title: 'A Lesson Beyond the Textbook',
      en: 'During a project week, students faced a problem that textbooks did not fully explain.',
      zh: '專題週期間，學生遇到課本沒有完整說明的問題。',
    },
    {
      title: 'News from the Campus',
      en: 'A short campus news story captured several useful ideas.',
      zh: '一則簡短的校園新聞涵蓋了幾個實用概念。',
    },
  ],
  toeic: [
    {
      title: 'A Busy Week at the Office',
      en: 'In a busy office, the team had to finish an important client request.',
      zh: '在忙碌的辦公室裡，團隊必須完成一項重要的客戶需求。',
    },
    {
      title: 'Meeting Notes',
      en: 'After the weekly meeting, the manager summarized the key points.',
      zh: '每週會議結束後，經理整理了重點。',
    },
  ],
  toefl_ielts: [
    {
      title: 'An Academic Discussion',
      en: 'In a seminar, researchers compared different ways to understand the same issue.',
      zh: '在研討會上，研究人員比較了理解同一問題的不同方式。',
    },
    {
      title: 'Reading for the Exam',
      en: 'The practice passage introduced ideas that often appear in academic English.',
      zh: '練習文章介紹了學術英語中常見的概念。',
    },
  ],
  advanced: [
    {
      title: 'Beyond Simple Definitions',
      en: 'The case study showed how precise language changes decisions in complex settings.',
      zh: '這則個案顯示，在複雜情境中精確用字如何改變決策。',
    },
    {
      title: 'A Critical Review',
      en: 'The review examined several claims and tested them against recent evidence.',
      zh: '這篇評論檢視了若干主張，並以近期證據加以檢驗。',
    },
  ],
};

const CLOSERS = [
  {
    en: 'In the end, clear language helped everyone take the next step with confidence.',
    zh: '最後，清楚的表達讓大家更有信心踏出下一步。',
  },
  {
    en: 'These details may look small, but together they change the whole outcome.',
    zh: '這些細節看似微小，合在一起卻會改變整體結果。',
  },
];

const DISTRACTOR_POOL: Record<'n' | 'v' | 'adj' | 'adv' | 'other', string[]> = {
  n: ['strategy', 'resource', 'challenge', 'outcome', 'process', 'demand', 'benefit', 'risk'],
  v: ['improve', 'reduce', 'manage', 'support', 'require', 'produce', 'measure', 'adjust'],
  adj: ['effective', 'limited', 'significant', 'practical', 'complex', 'stable', 'flexible', 'urgent'],
  adv: ['carefully', 'quickly', 'clearly', 'usually', 'rarely', 'effectively', 'gradually', 'directly'],
  other: ['however', 'therefore', 'instead', 'although', 'meanwhile', 'otherwise'],
};

export function buildOfflineStory(
  words: GeneratedWord[],
  level: GenerationLevel = 'highschool'
): { content: string; contentZh: string; title: string; glossaryExtra: GlossaryEntry[] } {
  const openers = OPENERS[level] || OPENERS.highschool;
  const opener = openers[Math.floor(Math.random() * openers.length)];
  const closer = CLOSERS[Math.floor(Math.random() * CLOSERS.length)];

  const enParts: string[] = [opener.en];
  const zhParts: string[] = [opener.zh];
  const glossaryExtra: GlossaryEntry[] = [];

  // Prefer user-provided example sentences when available (best offline quality).
  words.forEach((w, i) => {
    const blank = `[blank_${i + 1}]`;
    const zh = zhOf(w);
    const pos = normalizePos(w.pos);

    if (w.example && w.example.trim().length > 8) {
      // Replace first occurrence of the word in the example with blank marker
      const re = new RegExp(`\\b${w.word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
      if (re.test(w.example)) {
        enParts.push(w.example.replace(re, blank));
        zhParts.push(
          w.exampleZh && w.exampleZh.trim()
            ? w.exampleZh.trim()
            : `（例句）與「${zh}」相關的用法。`
        );
        glossaryExtra.push({ en: w.word, zh, sense: '來自你提供的例句' });
        return;
      }
    }

    const pool = FRAMES[pos];
    const frame = pool[i % pool.length];
    enParts.push(frame.en(blank, w.word, zh));
    zhParts.push(frame.zh(w.word, zh));
    glossaryExtra.push({ en: w.word, zh, sense: `詞性 ${w.pos || pos}` });
  });

  enParts.push(closer.en);
  zhParts.push(closer.zh);

  // Glossary for common glue words in openers/closers
  glossaryExtra.push(
    { en: 'importance', zh: '重要性' },
    { en: 'situation', zh: '情境' },
    { en: 'project', zh: '專案' },
    { en: 'policy', zh: '政策' },
    { en: 'strategy', zh: '策略' },
    { en: 'outcome', zh: '結果' },
    { en: 'confidence', zh: '信心' }
  );

  return {
    title: opener.title,
    content: enParts.join(' '),
    contentZh: zhParts.join(''),
    glossaryExtra,
  };
}

export function buildOfflineBlanks(words: GeneratedWord[]): ClozeBlank[] {
  return words.map((w, idx) => {
    const pos = normalizePos(w.pos);
    const fromBank = words
      .filter(o => o.word.trim().toLowerCase() !== w.word.trim().toLowerCase())
      .map(o => o.word);
    const pool = DISTRACTOR_POOL[pos];
    const distractors = [
      ...fromBank,
      ...pool.filter(d => d.toLowerCase() !== w.word.toLowerCase()),
    ];
    const unique: string[] = [];
    for (const d of distractors) {
      if (!unique.some(u => u.toLowerCase() === d.toLowerCase())) unique.push(d);
      if (unique.length >= 3) break;
    }
    while (unique.length < 3) unique.push(`option${unique.length + 1}`);

    return {
      id: idx + 1,
      word: w.word,
      hint: `${zhOf(w)} (${w.pos || pos})`,
      options: shuffle([w.word, unique[0], unique[1], unique[2]]),
    };
  });
}

export function buildOfflineQuizzes(words: GeneratedWord[]): GeneratedQuiz[] {
  const quizzes: GeneratedQuiz[] = words.map((w, questionIndex) => {
    const pos = normalizePos(w.pos);
    const meaning = zhOf(w);
    const fromBank = words
      .filter(o => o.word.trim().toLowerCase() !== w.word.trim().toLowerCase())
      .map(o => o.word);
    const pool = DISTRACTOR_POOL[pos];
    const distractors = [
      ...fromBank,
      ...pool.filter(d => d.toLowerCase() !== w.word.toLowerCase()),
    ];
    const unique: string[] = [];
    for (const d of distractors) {
      if (!unique.some(u => u.toLowerCase() === d.toLowerCase())) unique.push(d);
      if (unique.length >= 3) break;
    }
    while (unique.length < 3) unique.push(`option${unique.length + 1}`);
    const options = shuffle([w.word, unique[0], unique[1], unique[2]]);
    const correctIdx = options.findIndex(o => o.toLowerCase() === w.word.toLowerCase());

    const useMeaning = questionIndex % 2 === 0;
    const question = useMeaning
      ? `Which word best matches this meaning: "${meaning}"?`
      : `Choose the word that best fits: the idea of "${meaning}" in context.`;
    const questionZh = useMeaning
      ? `哪一個單字最符合「${meaning}」的意思？`
      : `請選出最符合「${meaning}」這個概念的單字。`;

    return {
      question,
      questionZh,
      targetWord: w.word,
      options,
      correctIdx: correctIdx < 0 ? 0 : correctIdx,
      explanation: `正確答案是「${w.word}」，意思是「${meaning}」。`,
    };
  });

  return shuffle(quizzes);
}
