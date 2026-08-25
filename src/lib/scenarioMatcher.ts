/**
 * Match user words into scenario template slots and produce a coherent cloze article.
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
    tags: inferSemanticTags(w.word, w.pos, w.definition),
    used: false,
  }));
}

/** Greedy assignment: for each slot, pick the best remaining word */
function assignWordsToSlots(
  tagged: TaggedWord[],
  slots: TemplateSlot[]
): Map<string, TaggedWord | null> {
  const assignment = new Map<string, TaggedWord | null>();
  const available = tagged.filter(t => !t.used);

  for (const slot of slots) {
    let best: TaggedWord | null = null;
    let bestScore = -1;

    for (const tw of available) {
      if (tw.used) continue;
      const score = matchScore(tw.tags, slot.tags, tw.pos, slot.pos);
      if (score > bestScore) {
        bestScore = score;
        best = tw;
      }
    }

    // Accept even weak matches if score >= 0 (POS ok). score -1 = hard POS reject.
    if (best && bestScore >= 0) {
      best.used = true;
      assignment.set(slot.id, best);
    } else {
      // Last resort: any unused word
      const fallback = available.find(t => !t.used);
      if (fallback) {
        fallback.used = true;
        assignment.set(slot.id, fallback);
      } else {
        assignment.set(slot.id, null);
      }
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

  // Sort slot ids so we replace in a stable order; use blank markers
  const slotIds = template.slots.map(s => s.id);

  slotIds.forEach((slotId, index) => {
    const tw = assignment.get(slotId);
    const blankMarker = `[blank_${index + 1}]`;
    const pattern = new RegExp(`\\{\\{${slotId}\\}\\}`, 'g');

    if (tw) {
      content = content.replace(pattern, blankMarker);
      // In Chinese, keep the blank marker too (UI shows word bank / options)
      contentZh = contentZh.replace(pattern, blankMarker);
      used.push(tw);
    } else {
      // No word — remove placeholder awkwardly; better leave a generic word
      content = content.replace(pattern, 'thing');
      contentZh = contentZh.replace(pattern, '事物');
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
  /** Words that were successfully placed into slots (order = blank order) */
  placedWords: GeneratedWord[];
  /** Words that could not fit this template (caller may append with legacy frames) */
  leftoverWords: GeneratedWord[];
  templateId: string;
}

/**
 * Build one cloze article by selecting a scenario template and filling slots
 * with the best-matching words from the user's list.
 */
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
  const templates = selectTemplates(level, words.length, 5);

  // Try each candidate template; pick the one that places the most words with best avg score
  let best: {
    template: ScenarioTemplate;
    assignment: Map<string, TaggedWord | null>;
    placedCount: number;
    scoreSum: number;
  } | null = null;

  for (const template of templates.length ? templates : SCENARIO_TEMPLATES.slice(0, 3)) {
    // Reset used flags
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
    if (
      !best ||
      placedCount > best.placedCount ||
      (placedCount === best.placedCount && scoreSum > best.scoreSum)
    ) {
      best = { template, assignment, placedCount, scoreSum };
    }
  }

  // Re-run assignment on the winning template with fresh flags
  tagged.forEach(t => {
    t.used = false;
  });
  const template = best?.template || SCENARIO_TEMPLATES[0];
  const assignment = assignWordsToSlots(tagged, template.slots);
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
