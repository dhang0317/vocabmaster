/**
 * Match user words into scenario template slots and produce a coherent cloze article.
 *
 * Quality rules:
 * - Only assign a word when matchScore > 0 (POS must match AND at least one semantic tag hits).
 * - Never force-fit a random leftover word into a slot (that caused absurd fills like Designate / Subsequent).
 * - Prefer templates with higher semantic scoreSum; require a minimum fill ratio when possible.
 * - Unfilled slots use a soft, POS-aware connective — never the literal word "thing".
 */

import {
  GeneratedWord,
  ClozeBlank,
  GlossaryEntry,
  GenerationLevel,
} from '@/types';
import {
  inferSemanticTags,
  matchScore,
  normalizePos,
  PosKey,
  SemanticTag,
} from './semanticTags';
import {
  ScenarioTemplate,
  TemplateSlot,
  selectTemplates,
  SCENARIO_TEMPLATES,
} from './scenarioTemplates';

/** Minimum score to accept a word into a slot (0 = POS-only with no tag hit). */
const MIN_ASSIGN_SCORE = 0.01;

/** Prefer templates that can fill at least this fraction of slots well. */
const MIN_FILL_RATIO = 0.5;

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

interface TaggedWord {
  word: GeneratedWord;
  pos: PosKey;
  tags: SemanticTag[];
  used: boolean;
}

function tagWords(words: GeneratedWord[]): TaggedWord[] {
  return words.map(w => ({
    word: w,
    pos: normalizePos(w.pos),
    tags: inferSemanticTags(w.word, w.pos, w.definition, w.semanticTags),
    used: false,
  }));
}

/** Soft fillers by POS when no good word is available — keep the sentence readable. */
const SOFT_FILL: Record<PosKey, { en: string; zh: string }> = {
  v: { en: 'notice', zh: '注意到' },
  adj: { en: 'unexpected', zh: '意外的' },
  n: { en: 'feeling', zh: '感受' },
  adv: { en: 'carefully', zh: '小心地' },
  other: { en: 'then', zh: '然後' },
};

/** Greedy assignment: only place words with a real semantic match (score > 0). */
function assignWordsToSlots(
  tagged: TaggedWord[],
  slots: TemplateSlot[]
): Map<string, TaggedWord | null> {
  const assignment = new Map<string, TaggedWord | null>();

  type Cand = { slotId: string; tw: TaggedWord; score: number };
  const candidates: Cand[] = [];

  for (const slot of slots) {
    for (const tw of tagged) {
      const score = matchScore(tw.tags, slot.tags, tw.pos, slot.pos);
      if (score > MIN_ASSIGN_SCORE) {
        candidates.push({ slotId: slot.id, tw, score });
      }
    }
  }

  candidates.sort((a, b) => b.score - a.score);

  const usedSlots = new Set<string>();
  const usedWords = new Set<TaggedWord>();

  for (const c of candidates) {
    if (usedSlots.has(c.slotId) || usedWords.has(c.tw)) continue;
    usedSlots.add(c.slotId);
    usedWords.add(c.tw);
    c.tw.used = true;
    assignment.set(c.slotId, c.tw);
  }

  for (const slot of slots) {
    if (!assignment.has(slot.id)) {
      assignment.set(slot.id, null);
    }
  }

  return assignment;
}

function fillTemplate(
  template: ScenarioTemplate,
  assignment: Map<string, TaggedWord | null>
): { content: string; contentZh: string; used: TaggedWord[] } {
  let content = template.content;
  let contentZh = template.contentZh;
  const used: TaggedWord[] = [];

  const slotIds = template.slots.map(s => s.id);

  slotIds.forEach((slotId, index) => {
    const tw = assignment.get(slotId);
    const blankMarker = `[blank_${index + 1}]`;
    const pattern = new RegExp(`\\{\\{${slotId}\\}\\}`, 'g');
    const slot = template.slots.find(s => s.id === slotId);
    const pos = (slot?.pos as PosKey) || 'other';

    if (tw) {
      content = content.replace(pattern, blankMarker);
      contentZh = contentZh.replace(pattern, blankMarker);
      used.push(tw);
    } else {
      const soft = SOFT_FILL[pos] || SOFT_FILL.other;
      content = content.replace(pattern, soft.en);
      contentZh = contentZh.replace(pattern, soft.zh);
    }
  });

  return { content, contentZh, used };
}

const DISTRACTOR_POOL: Record<PosKey, string[]> = {
  n: ['strategy', 'resource', 'challenge', 'outcome', 'process', 'demand', 'benefit', 'risk', 'policy', 'budget'],
  v: ['improve', 'reduce', 'manage', 'support', 'require', 'produce', 'measure', 'adjust', 'consider', 'maintain'],
  adj: ['effective', 'limited', 'significant', 'practical', 'complex', 'stable', 'flexible', 'urgent', 'reliable', 'previous'],
  adv: ['carefully', 'quickly', 'clearly', 'usually', 'rarely', 'effectively', 'gradually', 'directly', 'mainly', 'nearly'],
  other: ['however', 'therefore', 'instead', 'although', 'meanwhile', 'otherwise'],
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

export interface ScenarioStoryResult {
  title: string;
  content: string;
  contentZh: string;
  blanks: ClozeBlank[];
  glossaryExtra: GlossaryEntry[];
  placedWords: GeneratedWord[];
  leftoverWords: GeneratedWord[];
  templateId: string;
}

export function buildScenarioStory(
  words: GeneratedWord[],
  level: GenerationLevel = 'highschool'
): ScenarioStoryResult {
  if (words.length === 0) {
    return {
      title: 'Empty',
      content: '',
      contentZh: '',
      blanks: [],
      glossaryExtra: [],
      placedWords: [],
      leftoverWords: [],
      templateId: '',
    };
  }

  const tagged = tagWords(words);
  const templates = selectTemplates(level, words.length, 12);
  const pool = templates.length ? templates : SCENARIO_TEMPLATES.slice(0, 8);

  let best: {
    template: ScenarioTemplate;
    assignment: Map<string, TaggedWord | null>;
    placedCount: number;
    scoreSum: number;
    fillRatio: number;
  } | null = null;

  for (const template of pool) {
    tagged.forEach(t => {
      t.used = false;
    });
    const assignment = assignWordsToSlots(tagged, template.slots);
    let placedCount = 0;
    let scoreSum = 0;
    for (const slot of template.slots) {
      const tw = assignment.get(slot.id);
      if (tw) {
        placedCount += 1;
        scoreSum += matchScore(tw.tags, slot.tags, tw.pos, slot.pos);
      }
    }
    const fillRatio =
      template.slots.length > 0 ? placedCount / template.slots.length : 0;

    const better =
      !best ||
      scoreSum > best.scoreSum ||
      (scoreSum === best.scoreSum && placedCount > best.placedCount) ||
      (scoreSum === best.scoreSum &&
        placedCount === best.placedCount &&
        fillRatio > best.fillRatio);

    const meetsMin = fillRatio >= MIN_FILL_RATIO && scoreSum > 0;
    const bestMeetsMin =
      best !== null && best.fillRatio >= MIN_FILL_RATIO && best.scoreSum > 0;

    if (meetsMin && !bestMeetsMin) {
      best = { template, assignment, placedCount, scoreSum, fillRatio };
    } else if (meetsMin === bestMeetsMin && better) {
      best = { template, assignment, placedCount, scoreSum, fillRatio };
    } else if (!best) {
      best = { template, assignment, placedCount, scoreSum, fillRatio };
    }
  }

  tagged.forEach(t => {
    t.used = false;
  });
  const template = best?.template || SCENARIO_TEMPLATES[0];
  const assignment =
    best?.assignment || assignWordsToSlots(tagged, template.slots);
  const { content, contentZh, used } = fillTemplate(template, assignment);

  const placedWords = used.map(u => u.word);
  const placedSet = new Set(placedWords.map(w => w.word.toLowerCase()));
  const leftoverWords = words.filter(w => !placedSet.has(w.word.toLowerCase()));

  const blanks: ClozeBlank[] = used.map((tw, idx) => {
    const unique = pickDistractors(tw.word, words);
    return {
      id: idx + 1,
      word: tw.word.word,
      hint: `${zhOf(tw.word)} (${tw.word.pos || tw.pos})`,
      options: shuffle([tw.word.word, unique[0], unique[1], unique[2]]),
    };
  });

  const glossaryExtra: GlossaryEntry[] = [
    ...(template.glossaryExtra || []),
    ...placedWords.map(w => ({
      en: w.word,
      zh: zhOf(w),
      sense: `詞性 ${w.pos || normalizePos(w.pos)} · 情境 ${template.titleZh}`,
    })),
  ];

  return {
    title: template.title,
    content,
    contentZh,
    blanks,
    glossaryExtra,
    placedWords,
    leftoverWords,
    templateId: template.id,
  };
}
