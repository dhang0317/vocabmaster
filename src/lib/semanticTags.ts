/**
 * Semantic tag system for context-aware cloze generation.
 * Keep tags coarse enough for reliable matching, fine enough for natural fit.
 */

import { COMMON_WORD_TAGS } from './commonWordTags';

export type PosKey = 'n' | 'v' | 'adj' | 'adv' | 'other';

/** Core semantic tags used in templates and word tagging */
export type SemanticTag =
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
  | 'object';

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
];

export const TAG_LABELS_ZH: Record<SemanticTag, string> = {
  emotion: '情緒',
  evaluation: '評價',
  state_change: '狀態變化',
  communication: '溝通',
  process: '流程',
  cognitive: '認知',
  quantity: '程度/數量',
  time: '時間',
  cause_effect: '因果',
  social: '社交',
  physical: '物理',
  abstract: '抽象',
  action: '動作',
  positive: '正面',
  negative: '負面',
  place: '地點',
  role: '角色',
  object: '物件',
};

/** Normalize free-form POS strings into a stable key */
export function normalizePos(pos?: string): PosKey {
  const p = (pos || '').toLowerCase().trim();
  if (/^n\b|noun|n\./.test(p)) return 'n';
  if (/^v\b|verb|v\./.test(p)) return 'v';
  if (/adj|a\./.test(p)) return 'adj';
  if (/adv/.test(p)) return 'adv';
  return 'other';
}

function isSemanticTag(t: string): t is SemanticTag {
  return (ALL_SEMANTIC_TAGS as string[]).includes(t);
}

/**
 * Infer semantic tags for a word.
 * Priority: explicitTags (user) > common-word dictionary > heuristics.
 */
export function inferSemanticTags(
  word: string,
  pos?: string,
  definition?: string,
  explicitTags?: string[]
): SemanticTag[] {
  // 1) User-provided tags win
  if (explicitTags && explicitTags.length > 0) {
    const cleaned = explicitTags.map(t => t.trim().toLowerCase()).filter(isSemanticTag);
    if (cleaned.length > 0) return Array.from(new Set(cleaned));
  }

  const w = word.toLowerCase().trim();

  // 2) Hand-curated dictionary
  if (COMMON_WORD_TAGS[w]) {
    return [...COMMON_WORD_TAGS[w]];
  }

  // 3) Heuristics
  const tags = new Set<SemanticTag>();
  const posKey = normalizePos(pos);
  const def = (definition || '').toLowerCase();

  // Do NOT auto-tag every adjective as evaluation — that causes absurd cloze fills
  // (e.g. "subsequent" matching an evaluation slot). Prefer definition cues.
  if (posKey === 'adj' && /good|bad|better|worse|critical|crucial|essential|important|significant|effective|severe|minor|major|appropriate|suitable|useful|positive|negative|strong|weak/.test(def + ' ' + w)) {
    tags.add('evaluation');
  }

  const emotionWords =
    /anxio|delight|frustrat|angr|happ|sad|nervous|calm|excit|fear|worri|confiden|embarrass|proud|guilt|lonely|optim|pessim/;
  if (emotionWords.test(w) || emotionWords.test(def)) tags.add('emotion');

  const stateChange =
    /subsid|escalat|improv|deterior|recover|worsen|rise|fall|increas|decreas|shift|transform|evol|stabil|fluctuat/;
  if (stateChange.test(w) || stateChange.test(def)) tags.add('state_change');

  const communication =
    /negotiat|convey|articulat|propos|suggest|argu|discuss|express|communicat|persuad|inform|announc|emphas/;
  if (communication.test(w) || communication.test(def)) tags.add('communication');

  const process =
    /implement|execut|streamlin|coordinat|organiz|manag|operat|conduct|perform|carry|establish|develop|deliver/;
  if (process.test(w) || process.test(def)) tags.add('process');

  const cognitive =
    /analy[sz]|perceiv|assum|conclud|infer|reason|consider|evaluat|assess|judg|think|believ|recogn|realis|interpret|notic|spot\b|identify|recall|remember/;
  if (cognitive.test(w) || cognitive.test(def)) tags.add('cognitive');

  const quantity =
    /substanti|scarce|abundant|limit|sufficien|excess|minimal|vast|numerous|few|enormous|considerable/;
  if (quantity.test(w) || quantity.test(def)) tags.add('quantity');

  const time =
    /temporar|prolong|eventual|immediat|gradual|sudden|permanent|brief|lasting|previous|current|subsequent/;
  if (time.test(w) || time.test(def)) tags.add('time');

  const causeEffect =
    /trigger|result|stem|lead|caus|provok|prompt|bring about|give rise|contribut|affect|influenc/;
  if (causeEffect.test(w) || causeEffect.test(def)) tags.add('cause_effect');

  const social =
    /collabor|support|conflict|persuad|cooperat|team|partner|ally|oppos|compet|assist|encourag/;
  if (social.test(w) || social.test(def)) tags.add('social');

  const physical =
    /fragil|robust|dense|flexibl|solid|soft|hard|heavy|light|stiff|tough/;
  if (physical.test(w) || physical.test(def)) tags.add('physical');

  const positive =
    /thrive|enhanc|benefit|succeed|prosper|flourish|optim|advantage|gain|strengthen/;
  if (positive.test(w) || positive.test(def)) tags.add('positive');

  const negative =
    /declin|fail|risk|threaten|damage|harm|loss|weak|poor|bad|disadvantage/;
  if (negative.test(w) || negative.test(def)) tags.add('negative');

  const place = /venue|destination|facilit|location|site|area|region|building/;
  if (place.test(w) || place.test(def)) tags.add('place');

  const role = /manager|resident|client|researcher|student|teacher|staff|officer|guest|customer/;
  if (role.test(w) || role.test(def)) tags.add('role');

  const object = /device|document|package|tool|item|product|equipment|material/;
  if (object.test(w) || object.test(def)) tags.add('object');

  if (posKey === 'adj' && /good|positive|favor|strong|useful/.test(def)) tags.add('positive');
  if (posKey === 'adj' && /bad|negative|weak|poor|harmful/.test(def)) tags.add('negative');

  return Array.from(tags);
}

/** Score how well a word's tags match a required slot tag list (higher = better) */
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
  return hits / required.length + hits * 0.1;
}
