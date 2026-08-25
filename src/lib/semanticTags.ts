/**
 * Semantic tag system for context-aware cloze generation.
 * Keep tags coarse enough for reliable matching, fine enough for natural fit.
 */

export type PosKey = 'n' | 'v' | 'adj' | 'adv' | 'other';

/** Core semantic tags used in templates and word tagging */
export type SemanticTag =
  | 'emotion'          // anxious, delighted, frustrated, calm
  | 'evaluation'       // crucial, effective, inadequate, reliable
  | 'state_change'     // subside, escalate, improve, deteriorate, recover
  | 'communication'    // negotiate, convey, articulate, propose
  | 'process'          // implement, execute, streamline, coordinate
  | 'cognitive'        // analyze, perceive, assume, conclude
  | 'quantity'         // substantial, scarce, abundant, limited
  | 'time'             // temporary, prolonged, eventual, immediate
  | 'cause_effect'     // trigger, result, stem, lead
  | 'social'           // collaborate, support, conflict, persuade
  | 'physical'         // fragile, robust, dense, flexible
  | 'abstract'         // notion, principle, framework, concept
  | 'action'           // pursue, achieve, maintain, avoid (general verbs)
  | 'positive'         // thrive, enhance, benefit, succeed
  | 'negative'         // decline, fail, risk, threaten
  | 'place'            // venue, destination, facility
  | 'role'             // manager, resident, client, researcher
  | 'object';           // device, document, package, tool

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

/** Normalize free-form POS strings into a stable key */
export function normalizePos(pos?: string): PosKey {
  const p = (pos || '').toLowerCase().trim();
  if (/^n\b|noun|n\./.test(p)) return 'n';
  if (/^v\b|verb|v\./.test(p)) return 'v';
  if (/adj|a\./.test(p)) return 'adj';
  if (/adv/.test(p)) return 'adv';
  return 'other';
}

/**
 * Lightweight heuristic tagger.
 * Prefer explicit tags when present; otherwise infer from POS + word shape / common patterns.
 * This is intentionally conservative — better a missed tag than a wrong one.
 */
export function inferSemanticTags(word: string, pos?: string, definition?: string): SemanticTag[] {
  const tags = new Set<SemanticTag>();
  const posKey = normalizePos(pos);
  const w = word.toLowerCase().trim();
  const def = (definition || '').toLowerCase();

  // POS-based defaults
  if (posKey === 'adj') {
    tags.add('evaluation');
  }
  if (posKey === 'v') {
    tags.add('action');
  }
  if (posKey === 'n') {
    tags.add('abstract');
  }

  // Keyword / definition heuristics
  const emotionWords =
    /anxio|delight|frustrat|angr|happ|sad|nervous|calm|excit|fear|worri|confiden|embarrass|proud|guilt/;
  if (emotionWords.test(w) || emotionWords.test(def)) tags.add('emotion');

  const stateChange =
    /subsid|escalat|improv|deterior|recover|worsen|rise|fall|increas|decreas|shift|transform|evol/;
  if (stateChange.test(w) || stateChange.test(def)) tags.add('state_change');

  const communication =
    /negotiat|convey|articulat|propos|suggest|argu|discuss|express|communicat|persuad|inform/;
  if (communication.test(w) || communication.test(def)) tags.add('communication');

  const process =
    /implement|execut|streamlin|coordinat|organiz|manag|operat|conduct|perform|carry/;
  if (process.test(w) || process.test(def)) tags.add('process');

  const cognitive =
    /analy[sz]|perceiv|assum|conclud|infer|reason|consider|evaluat|assess|judg|think|believ/;
  if (cognitive.test(w) || cognitive.test(def)) tags.add('cognitive');

  const quantity =
    /substanti|scarce|abundant|limit|sufficien|excess|minimal|vast|numerous|few/;
  if (quantity.test(w) || quantity.test(def)) tags.add('quantity');

  const time =
    /temporar|prolong|eventual|immediat|gradual|sudden|permanent|brief|lasting/;
  if (time.test(w) || time.test(def)) tags.add('time');

  const causeEffect =
    /trigger|result|stem|lead|caus|provok|prompt|bring about|give rise/;
  if (causeEffect.test(w) || causeEffect.test(def)) tags.add('cause_effect');

  const social =
    /collabor|support|conflict|persuad|cooperat|team|partner|ally|oppos/;
  if (social.test(w) || social.test(def)) tags.add('social');

  const physical =
    /fragil|robust|dense|flexibl|solid|soft|hard|heavy|light|stiff/;
  if (physical.test(w) || physical.test(def)) tags.add('physical');

  const positive =
    /thrive|enhanc|benefit|succeed|prosper|flourish|optim|advantage|gain/;
  if (positive.test(w) || positive.test(def)) tags.add('positive');

  const negative =
    /declin|fail|risk|threaten|damage|harm|loss|weak|poor|bad/;
  if (negative.test(w) || negative.test(def)) tags.add('negative');

  const place = /venue|destination|facilit|location|site|area|region|building/;
  if (place.test(w) || place.test(def)) tags.add('place');

  const role = /manager|resident|client|researcher|student|teacher|staff|officer|guest/;
  if (role.test(w) || role.test(def)) tags.add('role');

  const object = /device|document|package|tool|item|product|equipment|material/;
  if (object.test(w) || object.test(def)) tags.add('object');

  // Evaluation adjectives often carry positive/negative polarity via definition
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
  if (required.length === 0) return 0.5; // any word accepted

  let hits = 0;
  for (const t of required) {
    if (wordTags.includes(t)) hits += 1;
  }
  if (hits === 0) return 0;
  // Prefer more specific matches
  return hits / required.length + hits * 0.1;
}
