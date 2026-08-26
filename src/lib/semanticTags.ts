/**
 * Semantic tag system for context-aware cloze generation.
 * Coarse tags keep template matching stable; fine tags improve natural fit.
 */

import { COMMON_WORD_TAGS } from './commonWordTags';

export type PosKey = 'n' | 'v' | 'adj' | 'adv' | 'other';

/**
 * Semantic tags.
 * - Coarse (original): emotion, evaluation, state_change, ...
 * - Fine (new): sequence, duration, intensity, perception, ...
 * Templates may use either; matchScore rewards overlapping tags.
 */
export type SemanticTag =
  // Coarse core
  | 'emotion'
  | 'evaluation'
  | 'state_change'
  | 'communication'
  | 'process'
  | 'cognitive'
  | 'quantity'
  | 'time'
  | 'cause_effect'
  | 'social'
  | 'physical'
  | 'abstract'
  | 'action'
  | 'positive'
  | 'negative'
  | 'place'
  | 'role'
  | 'object'
  | 'description'
  // Fine — time family
  | 'sequence'
  | 'duration'
  | 'frequency'
  // Fine — evaluation family
  | 'intensity'
  | 'quality'
  | 'importance'
  // Fine — cognitive family
  | 'perception'
  | 'reasoning'
  // Fine — communication family
  | 'request'
  | 'inform'
  // Fine — social family
  | 'cooperation'
  | 'conflict';

export const ALL_SEMANTIC_TAGS: SemanticTag[] = [
  'emotion',
  'evaluation',
  'state_change',
  'communication',
  'process',
  'cognitive',
  'quantity',
  'time',
  'cause_effect',
  'social',
  'physical',
  'abstract',
  'action',
  'positive',
  'negative',
  'place',
  'role',
  'object',
  'description',
  'sequence',
  'duration',
  'frequency',
  'intensity',
  'quality',
  'importance',
  'perception',
  'reasoning',
  'request',
  'inform',
  'cooperation',
  'conflict',
];

/** Grouped for UI (label + tags) */
export const TAG_GROUPS: { key: string; labelZh: string; tags: SemanticTag[] }[] = [
  {
    key: 'emotion',
    labelZh: '情緒',
    tags: ['emotion', 'positive', 'negative'],
  },
  {
    key: 'evaluation',
    labelZh: '評價',
    tags: ['evaluation', 'intensity', 'quality', 'importance', 'quantity'],
  },
  {
    key: 'time',
    labelZh: '時間',
    tags: ['time', 'sequence', 'duration', 'frequency'],
  },
  {
    key: 'cognitive',
    labelZh: '認知',
    tags: ['cognitive', 'perception', 'reasoning'],
  },
  {
    key: 'communication',
    labelZh: '溝通',
    tags: ['communication', 'request', 'inform'],
  },
  {
    key: 'social',
    labelZh: '社交',
    tags: ['social', 'cooperation', 'conflict'],
  },
  {
    key: 'process',
    labelZh: '過程/動作',
    tags: ['process', 'action', 'state_change', 'cause_effect', 'physical'],
  },
  {
    key: 'other',
    labelZh: '其他',
    tags: ['abstract', 'place', 'role', 'object', 'description'],
  },
];

export function normalizePos(pos?: string | null): PosKey {
  if (!pos) return 'other';
  const p = pos.toLowerCase().trim();
  if (/^n\b|noun|n\./.test(p) || p === 'n') return 'n';
  if (/^v\b|verb|v\./.test(p) || p === 'v') return 'v';
  if (/^adj\b|adjective|adj\./.test(p) || p === 'adj' || p === 'a') return 'adj';
  if (/^adv\b|adverb|adv\./.test(p) || p === 'adv') return 'adv';
  return 'other';
}

/**
 * Infer semantic tags for a vocabulary item.
 * Priority: user tags > commonWordTags dictionary > heuristics.
 */
export function inferSemanticTags(
  word: string,
  pos?: string | null,
  definition?: string | null,
  userTags?: string[] | null
): SemanticTag[] {
  // 1) User-selected tags win
  if (userTags && userTags.length > 0) {
    const valid = userTags.filter((t): t is SemanticTag =>
      (ALL_SEMANTIC_TAGS as string[]).includes(t)
    );
    if (valid.length > 0) return valid;
  }

  const w = (word || '').toLowerCase().trim();

  // 2) Hand-curated dictionary
  if (COMMON_WORD_TAGS[w]) {
    return [...COMMON_WORD_TAGS[w]];
  }

  // 3) Heuristics
  const tags = new Set<SemanticTag>();
  const posKey = normalizePos(pos);
  const def = (definition || '').toLowerCase();
  const blob = `${w} ${def}`;

  const emotionWords =
    /anxio|delight|frustrat|angr|happ|sad|nervous|calm|excit|fear|worri|confiden|embarrass|proud|guilt|lonely|optim|pessim|joy|grief|shame|relief|irritat|pleased|cheerful|upset|annoy|disappoint|miserab|furious|glad/;
  if (emotionWords.test(blob)) tags.add('emotion');

  // Polarity for emotion / evaluation words
  const posEmo =
    /happ|delight|glad|cheer|joy|pleased|content|proud|confiden|optim|excit|relief|relieved|calm/;
  const negEmo =
    /anxio|frustrat|angr|sad|nervous|fear|worri|embarrass|guilt|lonely|pessim|grief|shame|irritat|upset|annoy|disappoint|miserab|furious|bored|boring/;
  if (posEmo.test(blob)) tags.add('positive');
  if (negEmo.test(blob)) tags.add('negative');

  if (
    posKey === 'adj' &&
    /good|bad|better|worse|critical|crucial|essential|important|significant|effective|severe|minor|major|appropriate|suitable|useful|positive|negative|strong|weak|accurate|precise|vague|reliable|intolerable/.test(
      blob
    )
  ) {
    tags.add('evaluation');
  }
  if (/severe|extreme|mild|intens|intolerab|harsh|acute/.test(blob)) {
    tags.add('intensity');
    tags.add('evaluation');
  }
  if (/accurate|precise|vague|reliable|exact|sloppy|flawed/.test(blob)) {
    tags.add('quality');
    tags.add('evaluation');
  }
  if (/crucial|essential|vital|important|minor|major|significant|trivial/.test(blob)) {
    tags.add('importance');
    tags.add('evaluation');
  }

  const stateChange =
    /subsid|escalat|improv|deterior|recover|worsen|rise|fall|increas|decreas|shift|transform|evol|stabil|fluctuat/;
  if (stateChange.test(blob)) tags.add('state_change');

  const communication =
    /negotiat|convey|articulat|propos|suggest|argu|discuss|express|communicat|persuad|inform|announc|emphas|request|explain|describ|report/;
  if (communication.test(blob)) tags.add('communication');
  if (/propos|suggest|request|ask\b|appeal|petition/.test(blob)) tags.add('request');
  if (/inform|announc|explain|describ|report|notify|declar/.test(blob)) tags.add('inform');

  const process =
    /implement|execut|streamlin|coordinat|organiz|manag|operat|conduct|perform|carry|establish|develop|deliver/;
  if (process.test(blob)) tags.add('process');
  if (posKey === 'v') tags.add('action');

  const cognitive =
    /analy[sz]|perceiv|assum|conclud|infer|reason|consider|evaluat|assess|judg|think|believ|recogn|realis|interpret|notic|spot\b|identify|recall|remember/;
  if (cognitive.test(blob)) tags.add('cognitive');
  if (/notic|spot\b|perceiv|recogn|identify|observ|detect/.test(blob)) {
    tags.add('perception');
    tags.add('cognitive');
  }
  if (/analy[sz]|conclud|infer|assum|assess|reason|deduc|evaluat/.test(blob)) {
    tags.add('reasoning');
    tags.add('cognitive');
  }

  const quantity =
    /substanti|scarce|abundant|limit|sufficien|excess|minimal|vast|numerous|few|enormous|considerable/;
  if (quantity.test(blob)) tags.add('quantity');

  const time =
    /temporar|prolong|eventual|immediat|gradual|sudden|permanent|brief|lasting|previous|current|subsequent|prior|constant|continuous|occasional|frequent|rare/;
  if (time.test(blob)) tags.add('time');
  if (/subsequent|previous|prior|following|preceding|next\b|former|latter/.test(blob)) {
    tags.add('sequence');
    tags.add('time');
  }
  if (/prolong|temporary|permanent|brief|lasting|short-lived|enduring/.test(blob)) {
    tags.add('duration');
    tags.add('time');
  }
  if (/constant|continuous|incessant|occasional|frequent|rare|periodic|ongoing/.test(blob)) {
    tags.add('frequency');
    tags.add('time');
  }

  const causeEffect =
    /trigger|result|stem|lead|caus|provok|prompt|bring about|give rise|contribut|affect|influenc/;
  if (causeEffect.test(blob)) tags.add('cause_effect');

  const social =
    /collabor|support|conflict|persuad|cooperat|team|partner|ally|oppos|compet|assist|encourag|disput/;
  if (social.test(blob)) tags.add('social');
  if (/collabor|cooperat|support|assist|ally|partner|help/.test(blob)) {
    tags.add('cooperation');
    tags.add('social');
  }
  if (/conflict|oppos|argu|disput|compet|confront|clash/.test(blob)) {
    tags.add('conflict');
    tags.add('social');
  }

  const physical =
    /fragil|robust|dense|flexibl|solid|soft|hard|heavy|light|stiff|tough/;
  if (physical.test(blob)) tags.add('physical');
  if (
    posKey === 'adj' &&
    /bright|dark|quiet|noisy|spacious|narrow|color|shape|texture|smooth|rough|tall|short|wide/.test(
      blob
    )
  ) {
    tags.add('description');
  }

  const positive =
    /thrive|enhanc|benefit|succeed|prosper|flourish|optim|advantage|gain|strengthen/;
  if (positive.test(blob)) tags.add('positive');
  const negative =
    /declin|fail|risk|threaten|damage|harm|loss|weak|poor|bad|disadvantage/;
  if (negative.test(blob)) tags.add('negative');

  const place = /venue|destination|facilit|location|site|area|region|building/;
  if (place.test(blob)) tags.add('place');
  const role =
    /manager|resident|client|researcher|student|teacher|staff|officer|guest|customer/;
  if (role.test(blob)) tags.add('role');
  const object = /device|document|package|tool|item|product|equipment|material/;
  if (object.test(blob)) tags.add('object');

  if (posKey === 'adj' && /good|positive|favor|strong|useful/.test(def)) tags.add('positive');
  if (posKey === 'adj' && /bad|negative|weak|poor|harmful/.test(def)) tags.add('negative');

  return Array.from(tags);
}

/**
 * Score how well a word's tags match a required slot tag list (higher = better).
 * Fine tags count equally; partial overlap still scores.
 * Opposite polarity (positive vs negative) is hard-rejected.
 */
export function matchScore(
  wordTags: SemanticTag[],
  required: SemanticTag[],
  posKey: PosKey,
  requiredPos?: PosKey | PosKey[]
): number {
  if (requiredPos) {
    const allowed = Array.isArray(requiredPos) ? requiredPos : [requiredPos];
    if (!allowed.includes(posKey) && posKey !== 'other') return -1;
  }
  if (required.length === 0) return 0.5;

  let hits = 0;
  for (const t of required) {
    if (wordTags.includes(t)) hits += 1;
  }
  if (hits === 0) return 0;

  let score = hits / required.length + hits * 0.15;

  const fine: SemanticTag[] = [
    'sequence',
    'duration',
    'frequency',
    'intensity',
    'quality',
    'importance',
    'perception',
    'reasoning',
    'request',
    'inform',
    'cooperation',
    'conflict',
  ];
  for (const t of required) {
    if (fine.includes(t) && wordTags.includes(t)) score += 0.25;
  }

  // Polarity: reward agreement, strongly penalize conflict (happy ≠ no empty seats)
  const reqNeg = required.includes('negative');
  const reqPos = required.includes('positive');
  const wordNeg = wordTags.includes('negative');
  const wordPos = wordTags.includes('positive');
  if ((reqNeg && wordPos) || (reqPos && wordNeg)) {
    return 0; // hard reject opposite polarity
  }
  if ((reqNeg && wordNeg) || (reqPos && wordPos)) {
    score += 0.35;
  }

  return score;
}
