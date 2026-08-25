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

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

type Frame = { en: (blank: string, word: string, zh: string) => string; zh: (word: string, zh: string) => string };

const FRAMES: Record<'n' | 'v' | 'adj' | 'adv' | 'other', Frame[]> = {
  n: [
    {
      en: b => `The report highlighted the importance of ${b} in this situation.`,
      zh: (_w, zh) => `報告強調了「${zh}」在此情境中的重要性。`,
    },
    {
      en: b => `Without enough ${b}, the team could not finish the project on time.`,
      zh: (_w, zh) => `若沒有足夠的「${zh}」，團隊就無法準時完成專案。`,
    },
    {
      en: b => `Experts said ${b} would continue to shape decisions this year.`,
      zh: (_w, zh) => `專家表示，「${zh}」今年仍會影響許多決策。`,
    },
    {
      en: b => `She took careful notes on every detail related to ${b}.`,
      zh: (_w, zh) => `她仔細記錄了與「${zh}」有關的每個細節。`,
    },
  ],
  v: [
    {
      en: b => `Managers must ${b} the new policy before next Monday.`,
      zh: (_w, zh) => `主管必須在下週一前${zh}這項新政策。`,
    },
    {
      en: b => `If we ${b} carefully, we can avoid the same mistake.`,
      zh: (_w, zh) => `若我們仔細${zh}，就能避免重蹈覆轍。`,
    },
    {
      en: b => `The company decided to ${b} its strategy after the meeting.`,
      zh: (_w, zh) => `會議之後，公司決定${zh}既有策略。`,
    },
    {
      en: b => `Students were asked to ${b} the main idea in their own words.`,
      zh: (_w, zh) => `老師要求學生用自己的話${zh}主旨。`,
    },
  ],
  adj: [
    {
      en: b => `The results were more ${b} than anyone expected.`,
      zh: (_w, zh) => `結果比任何人預期的都更${zh}。`,
    },
    {
      en: b => `A ${b} approach helped the team solve the problem faster.`,
      zh: (_w, zh) => `一個${zh}的做法幫助團隊更快解決問題。`,
    },
    {
      en: b => `His answer was clear, careful, and ${b}.`,
      zh: (_w, zh) => `他的回答清楚、謹慎，而且${zh}。`,
    },
    {
      en: b => `They needed a ${b} plan before investing more money.`,
      zh: (_w, zh) => `在投入更多資金前，他們需要一個${zh}的計畫。`,
    },
  ],
  adv: [
    {
      en: b => `She spoke ${b}, and everyone in the room understood her point.`,
      zh: (_w, zh) => `她${zh}地說明，全場都聽懂了重點。`,
    },
    {
      en: b => `The system updated ${b} during the night.`,
      zh: (_w, zh) => `系統在夜間${zh}完成更新。`,
    },
    {
      en: b => `If you prepare ${b}, the interview will feel much easier.`,
      zh: (_w, zh) => `若你${zh}準備，面試會輕鬆許多。`,
    },
  ],
  other: [
    {
      en: b => `In this context, ${b} plays a key role.`,
      zh: (_w, zh) => `在這個語境中，「${zh}」扮演關鍵角色。`,
    },
    {
      en: b => `People often misunderstand what ${b} really means.`,
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
  n: ['strategy', 'resource', 'challenge', 'outcome', 'process', 'demand', 'benefit', 'risk', 'policy', 'budget'],
  v: ['improve', 'reduce', 'manage', 'support', 'require', 'produce', 'measure', 'adjust', 'consider', 'maintain'],
  adj: ['effective', 'limited', 'significant', 'practical', 'complex', 'stable', 'flexible', 'urgent', 'reliable', 'previous'],
  adv: ['carefully', 'quickly', 'clearly', 'usually', 'rarely', 'effectively', 'gradually', 'directly', 'mainly', 'nearly'],
  other: ['however', 'therefore', 'instead', 'although', 'meanwhile', 'otherwise'],
};

/** Level-flavored sentence stems for cloze-style quiz items (POS-aware). */
const QUIZ_STEMS: Record<
  GenerationLevel,
  Record<'n' | 'v' | 'adj' | 'adv' | 'other', { en: string; zh: string }[]>
> = {
  elementary: {
    n: [
      { en: 'We learned a new _____ in class today.', zh: '我們今天在課堂上學了一個新的_____。' },
      { en: 'Please write one sentence using the word _____.', zh: '請用_____這個字寫一個句子。' },
    ],
    v: [
      { en: 'Can you _____ this word in a short sentence?', zh: '你能用_____造一個短句嗎？' },
      { en: 'Students should _____ the answer carefully.', zh: '學生應該仔細_____答案。' },
    ],
    adj: [
      { en: 'That was a very _____ idea.', zh: '那是一個非常_____的想法。' },
      { en: 'Her answer was clear and _____.', zh: '她的回答清楚而且_____。' },
    ],
    adv: [
      { en: 'Please speak _____ so everyone can hear you.', zh: '請_____說話，好讓大家都能聽到。' },
      { en: 'He finished the work _____.', zh: '他_____完成了工作。' },
    ],
    other: [{ en: 'Choose the best word: _____.', zh: '選出最適合的字：_____。' }],
  },
  highschool: {
    n: [
      { en: 'The article focuses on the _____ of this issue.', zh: '這篇文章聚焦於這個問題的_____。' },
      { en: 'Without a clear _____, the plan is hard to follow.', zh: '若沒有清楚的_____，計畫很難執行。' },
    ],
    v: [
      { en: 'The writer tries to _____ the main argument in the final paragraph.', zh: '作者試圖在最後一段_____主要論點。' },
      { en: 'We need to _____ the results before drawing a conclusion.', zh: '下結論前，我們需要先_____結果。' },
    ],
    adj: [
      { en: 'A more _____ explanation would help readers understand the point.', zh: '更_____的說明能幫助讀者理解重點。' },
      { en: 'The evidence is not entirely _____.', zh: '證據並不完全_____。' },
    ],
    adv: [
      { en: 'The data should be checked _____ before the presentation.', zh: '報告前應_____檢查數據。' },
      { en: 'She answered the question _____.', zh: '她_____回答了問題。' },
    ],
    other: [{ en: 'Select the word that best completes the sentence: _____.', zh: '選出最能完成句子的字：_____。' }],
  },
  toeic: {
    n: [
      { en: 'The manager asked for a detailed _____ before approving the budget.', zh: '經理在核准預算前要求提供詳細的_____。' },
      { en: 'Customer _____ remains a top priority this quarter.', zh: '客戶_____仍是本季優先事項。' },
    ],
    v: [
      { en: 'All staff must _____ the new safety guidelines by Friday.', zh: '全體同仁須於週五前_____新的安全規範。' },
      { en: 'The team will _____ the proposal during tomorrow’s meeting.', zh: '團隊將在明天會議中_____這份提案。' },
    ],
    adj: [
      { en: 'We need a _____ solution that fits the current schedule.', zh: '我們需要一個符合目前時程的_____方案。' },
      { en: 'The report provides _____ information for decision-makers.', zh: '這份報告為決策者提供_____資訊。' },
    ],
    adv: [
      { en: 'Please submit the form _____ to avoid delays.', zh: '請_____繳交表格，以免延誤。' },
      { en: 'Sales improved _____ after the campaign launched.', zh: '活動上線後，銷售_____改善。' },
    ],
    other: [{ en: 'Choose the most appropriate business term: _____.', zh: '選出最適合的商務用語：_____。' }],
  },
  toefl_ielts: {
    n: [
      { en: 'The passage discusses the _____ behind the researchers’ approach.', zh: '文章討論研究者方法背後的_____。' },
      { en: 'A key _____ in the study is the limited sample size.', zh: '本研究的一個關鍵_____是樣本數有限。' },
    ],
    v: [
      { en: 'The author attempts to _____ competing theories in the second section.', zh: '作者在第二節試圖_____相互競爭的理論。' },
      { en: 'These findings _____ earlier claims about the topic.', zh: '這些發現_____了先前相關主張。' },
    ],
    adj: [
      { en: 'The argument becomes less _____ when alternative data are considered.', zh: '若納入其他資料，論點會變得較不_____。' },
      { en: 'A _____ analysis requires both qualitative and quantitative evidence.', zh: '_____的分析需要質化與量化證據。' },
    ],
    adv: [
      { en: 'The hypothesis was only _____ supported by the experiment.', zh: '實驗僅_____支持該假設。' },
      { en: 'Results should be interpreted _____.', zh: '結果應_____詮釋。' },
    ],
    other: [{ en: 'Which word best fits the academic context? _____.', zh: '哪個字最符合學術語境？_____。' }],
  },
  advanced: {
    n: [
      { en: 'The critique challenges the underlying _____ of the policy framework.', zh: '這篇評論質疑政策架構背後的_____。' },
      { en: 'Precision of _____ is essential in legal drafting.', zh: '法律起草時，_____的精確性至關重要。' },
    ],
    v: [
      { en: 'Scholars continue to _____ the implications of the new evidence.', zh: '學者持續_____新證據的意涵。' },
      { en: 'The committee refused to _____ responsibility for the oversight.', zh: '委員會拒絕_____疏失責任。' },
    ],
    adj: [
      { en: 'Such a _____ claim requires stronger empirical support.', zh: '如此_____的主張需要更強的實證支持。' },
      { en: 'The model is elegant but not fully _____.', zh: '模型優雅，但並不完全_____。' },
    ],
    adv: [
      { en: 'The variables are _____ correlated in longitudinal data.', zh: '在縱貫資料中，變項呈現_____相關。' },
      { en: 'The conclusion follows _____, given the stated assumptions.', zh: '在既定假設下，結論_____成立。' },
    ],
    other: [{ en: 'Select the most precise term: _____.', zh: '選出最精確的用語：_____。' }],
  },
};

function pickDistractors(w: GeneratedWord, all: GeneratedWord[]): string[] {
  const pos = normalizePos(w.pos);
  const fromBank = all
    .filter(o => o.word.trim().toLowerCase() !== w.word.trim().toLowerCase())
    .map(o => o.word);
  const pool = DISTRACTOR_POOL[pos];
  const candidates = [
    ...fromBank,
    ...pool.filter(d => d.toLowerCase() !== w.word.toLowerCase()),
  ];
  const unique: string[] = [];
  for (const d of candidates) {
    if (!unique.some(u => u.toLowerCase() === d.toLowerCase())) unique.push(d);
    if (unique.length >= 3) break;
  }
  while (unique.length < 3) unique.push(`option${unique.length + 1}`);
  return unique.slice(0, 3);
}

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

  words.forEach((w, i) => {
    const blank = `[blank_${i + 1}]`;
    const zh = zhOf(w);
    const pos = normalizePos(w.pos);

    if (w.example && w.example.trim().length > 8) {
      const re = new RegExp(`\\b${escapeRegExp(w.word)}\\b`, 'i');
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
    const unique = pickDistractors(w, words);
    return {
      id: idx + 1,
      word: w.word,
      hint: `${zhOf(w)} (${w.pos || pos})`,
      options: shuffle([w.word, unique[0], unique[1], unique[2]]),
    };
  });
}

type QuizKind = 'meaning' | 'cloze' | 'example' | 'definition';

function buildOneQuiz(
  w: GeneratedWord,
  all: GeneratedWord[],
  level: GenerationLevel,
  kind: QuizKind,
  stemIndex: number
): GeneratedQuiz {
  const meaning = zhOf(w);
  const pos = normalizePos(w.pos);
  const distractors = pickDistractors(w, all);
  const options = shuffle([w.word, distractors[0], distractors[1], distractors[2]]);
  const correctIdx = Math.max(
    0,
    options.findIndex(o => o.toLowerCase() === w.word.toLowerCase())
  );

  let question = '';
  let questionZh = '';

  if (kind === 'example' && w.example && w.example.trim().length > 8) {
    const re = new RegExp(`\\b${escapeRegExp(w.word)}\\b`, 'i');
    if (re.test(w.example)) {
      question = w.example.replace(re, '_____');
      questionZh =
        w.exampleZh && w.exampleZh.trim()
          ? `（依例句）選出正確單字：${w.exampleZh.trim()}`
          : `依例句語境，選出正確單字（意思：${meaning}）。`;
    }
  }

  if (!question && kind === 'cloze') {
    const stems = QUIZ_STEMS[level]?.[pos] || QUIZ_STEMS.highschool[pos];
    const stem = stems[stemIndex % stems.length];
    question = stem.en.includes('_____') ? stem.en : stem.en.replace(/\.?$/, ' _____.');
    // ensure blank present
    if (!question.includes('_____')) question = `${question} _____`;
    questionZh = stem.zh.includes('_____') ? stem.zh : `${stem.zh}（_____）`;
  }

  if (!question && kind === 'definition' && w.definition && w.definition.trim().length > 5) {
    question = `Which word matches this definition: "${w.definition.trim()}"?`;
    questionZh = `哪一個單字符合此定義：「${w.definition.trim()}」？（中文：${meaning}）`;
  }

  if (!question) {
    // meaning (default)
    const meaningStems = [
      {
        en: `Which word best matches this meaning: "${meaning}"?`,
        zh: `哪一個單字最符合「${meaning}」的意思？`,
      },
      {
        en: `Select the word that means "${meaning}".`,
        zh: `選出意思為「${meaning}」的單字。`,
      },
      {
        en: `"${meaning}" is best expressed by which word?`,
        zh: `「${meaning}」最接近下列哪個單字？`,
      },
    ];
    const m = meaningStems[stemIndex % meaningStems.length];
    question = m.en;
    questionZh = m.zh;
  }

  return {
    question,
    questionZh,
    targetWord: w.word,
    options,
    correctIdx,
    explanation: `正確答案是「${w.word}」（${w.pos || pos}），意思是「${meaning}」。`,
  };
}

/**
 * Offline quizzes: rotate question types so items feel less repetitive.
 * - meaning / definition / context cloze (level + POS) / user example
 */
export function buildOfflineQuizzes(
  words: GeneratedWord[],
  level: GenerationLevel = 'highschool'
): GeneratedQuiz[] {
  const kinds: QuizKind[] = ['meaning', 'cloze', 'definition', 'example'];

  const quizzes = words.map((w, i) => {
    const kind = kinds[i % kinds.length];
    return buildOneQuiz(w, words, level, kind, i);
  });

  return shuffle(quizzes);
}
