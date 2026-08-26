import {
  GeneratedWord,
  GeneratedQuiz,
  ClozeBlank,
  GlossaryEntry,
  GenerationLevel,
} from '@/types';
import { buildScenarioStory } from './scenarioMatcher';
import { normalizePos } from './semanticTags';

function shuffle<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function zhOf(w: GeneratedWord): string {
  const t = (w.translation || '').trim();
  if (!t || /^no definition/i.test(t) || t === '（未提供中文）') return w.word;
  return t;
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const DISTRACTOR_POOL: Record<'n' | 'v' | 'adj' | 'adv' | 'other', string[]> = {
  n: ['strategy', 'resource', 'challenge', 'outcome', 'process', 'demand', 'benefit', 'risk', 'policy', 'budget'],
  v: ['improve', 'reduce', 'manage', 'support', 'require', 'produce', 'measure', 'adjust', 'consider', 'maintain'],
  adj: ['effective', 'limited', 'significant', 'practical', 'complex', 'stable', 'flexible', 'urgent', 'reliable', 'previous'],
  adv: ['carefully', 'quickly', 'clearly', 'usually', 'rarely', 'effectively', 'gradually', 'directly', 'mainly', 'nearly'],
  other: ['however', 'therefore', 'instead', 'although', 'meanwhile', 'otherwise'],
};

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
      { en: 'Can you _____ this idea in a short sentence?', zh: '你能用_____表達這個想法嗎？' },
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
    other: [{ en: 'Choose the best word to complete the sentence: _____.', zh: '選出最能完成句子的字：_____。' }],
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
      { en: 'The team will _____ the proposal during tomorrow\'s meeting.', zh: '團隊將在明天會議中_____這份提案。' },
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
      { en: 'The passage discusses the _____ behind the researchers\' approach.', zh: '文章討論研究者方法背後的_____。' },
      { en: 'A key _____ in the study is the limited sample size.', zh: '本研究的一個關鍵_____是樣本數有限。' },
    ],
    v: [
      { en: 'These findings _____ earlier claims about the topic.', zh: '這些發現_____了先前相關主張。' },
      { en: 'The author attempts to _____ competing theories in the second section.', zh: '作者在第二節試圖_____相互競爭的理論。' },
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

/**
 * Renumber blanks in a second article so ids continue after the first article.
 */
function renumberBlanks(
  content: string,
  blanks: ClozeBlank[],
  startId: number
): { content: string; blanks: ClozeBlank[] } {
  let next = content;
  const newBlanks: ClozeBlank[] = [];
  blanks.forEach((b, i) => {
    const oldMarker = `[blank_${b.id}]`;
    const newId = startId + i;
    const newMarker = `[blank_${newId}]`;
    next = next.split(oldMarker).join(newMarker);
    newBlanks.push({ ...b, id: newId });
  });
  return { content: next, blanks: newBlanks };
}

export interface OfflineArticleResult {
  title: string;
  content: string;
  contentZh: string;
  blanks: ClozeBlank[];
  glossaryExtra: GlossaryEntry[];
  templateId: string;
}

/**
 * Offline cloze articles — quality first.
 *
 * 1. Match words into a coherent scenario template.
 * 2. For leftovers, try a *second* scenario (never stitch "plays a key role" junk).
 * 3. Words that still don't fit are omitted from the article (better short+good than long+absurd).
 */
export function buildOfflineArticle(
  words: GeneratedWord[],
  level: GenerationLevel = 'highschool'
): OfflineArticleResult {
  const primary = buildScenarioStory(words, level);

  let content = primary.content.trim();
  let contentZh = primary.contentZh.trim();
  let blanks = [...primary.blanks];
  let glossaryExtra = [...primary.glossaryExtra];
  let templateId = primary.templateId;

  // Second pass: try another scenario for leftovers (academic words etc.)
  if (primary.leftoverWords.length > 0) {
    const secondary = buildScenarioStory(primary.leftoverWords, level);

    // Only append if at least half the leftover slots got a real match
    const secondaryFill =
      secondary.placedWords.length / Math.max(1, primary.leftoverWords.length);

    if (secondary.placedWords.length > 0 && secondaryFill >= 0.4) {
      const ren = renumberBlanks(
        secondary.content,
        secondary.blanks,
        blanks.length + 1
      );
      content = `${content} ${ren.content}`.trim();
      contentZh = `${contentZh}${secondary.contentZh}`.trim();
      blanks = [...blanks, ...ren.blanks];
      glossaryExtra = [...glossaryExtra, ...secondary.glossaryExtra];
      templateId = `${primary.templateId}+${secondary.templateId}`;
    }
    // else: drop unmatched leftovers — do NOT append generic frames
  }

  // Safety: if primary produced nothing usable, return a minimal honest message
  if (!content || blanks.length === 0) {
    const w = words[0];
    const zh = w ? zhOf(w) : '';
    return {
      title: '練習提示',
      content:
        'These words did not match any scenario template well enough to build a natural article. Try adding more everyday words, or set semantic tags manually when creating the deck.',
      contentZh:
        '這些單字與現有情境範本的語意匹配不足，無法組成自然文章。建議加入較生活化的單字，或在建立牌組時手動設定語意標籤。',
      blanks: w
        ? [
            {
              id: 1,
              word: w.word,
              hint: `${zh} (${w.pos || 'n'})`,
              options: shuffle([w.word, 'strategy', 'process', 'outcome']),
            },
          ]
        : [],
      glossaryExtra: w ? [{ en: w.word, zh, sense: '未能匹配情境' }] : [],
      templateId: 'no_match',
    };
  }

  return {
    title: primary.title,
    content,
    contentZh,
    blanks,
    glossaryExtra,
    templateId,
  };
}

/** @deprecated Prefer buildOfflineArticle for consistency */
export function buildOfflineStory(
  words: GeneratedWord[],
  level: GenerationLevel = 'highschool'
): { content: string; contentZh: string; title: string; glossaryExtra: GlossaryEntry[] } {
  const article = buildOfflineArticle(words, level);
  return {
    title: article.title,
    content: article.content,
    contentZh: article.contentZh,
    glossaryExtra: article.glossaryExtra,
  };
}

/** @deprecated Prefer buildOfflineArticle for consistency */
export function buildOfflineBlanks(
  words: GeneratedWord[],
  level: GenerationLevel = 'highschool'
): ClozeBlank[] {
  return buildOfflineArticle(words, level).blanks;
}

type QuizKind = 'cloze' | 'example' | 'definition';

function buildClozeQuestion(
  w: GeneratedWord,
  level: GenerationLevel,
  stemIndex: number
): { question: string; questionZh: string } {
  const pos = normalizePos(w.pos);
  const stems = QUIZ_STEMS[level]?.[pos] || QUIZ_STEMS.highschool[pos];
  const stem = stems[stemIndex % stems.length];
  let question = stem.en.includes('_____') ? stem.en : `${stem.en} _____`;
  if (!question.includes('_____')) question = `${question} _____`;
  const questionZh = stem.zh.includes('_____') ? stem.zh : `${stem.zh}（_____）`;
  return { question, questionZh };
}

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
          : `依例句語境，選出正確單字。`;
    }
  }

  if (!question && kind === 'definition' && w.definition && w.definition.trim().length > 5) {
    question = `Based on this definition — "${w.definition.trim()}" — choose the word that best completes a related sentence: _____.`;
    questionZh = `根據定義「${w.definition.trim()}」，選出最合適的單字填入空格。`;
  }

  if (!question) {
    const cloze = buildClozeQuestion(w, level, stemIndex);
    question = cloze.question;
    questionZh = cloze.questionZh;
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

/** Offline quizzes: cloze (level+POS), user example, or definition-based cloze — no pure meaning-match. */
export function buildOfflineQuizzes(
  words: GeneratedWord[],
  level: GenerationLevel = 'highschool'
): GeneratedQuiz[] {
  const kinds: QuizKind[] = ['cloze', 'example', 'definition'];

  const quizzes = words.map((w, i) => {
    const kind = kinds[i % kinds.length];
    return buildOneQuiz(w, words, level, kind, i);
  });

  return shuffle(quizzes);
}
