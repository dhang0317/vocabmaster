/**
 * Semantic Ontology v3 — hierarchical + free secondary tags
 * Why this is better than a flat 200+ string union:
 * ─────────────────────────────────────────────────
 * 1. Hierarchy: slot asks for "emotion" → joy / anger still match (lower score)
 *    slot asks for "emotion.anger" → only anger cluster matches
 * 2. Exclusive groups: joy cluster never mixes with anger cluster
 * 3. Free secondary tags: open vocabulary for edge cases
 *    (register, region, collocation, domain nuance…) without touching types
 * 4. UI: tree browse + search; free tags as chips / autocomplete
 * 5. Growth: add ontology nodes rarely; free tags grow freely in data
 *
 * Data model on a word / slot:
 *   {
 *     ontology: string[]   // node ids, e.g. ["emotion.joy", "evaluation.intensity"]
 *     freeTags: string[]   // open strings, e.g. ["formal", "BrE", "colloc:make"]
 *     polarity?: "positive" | "negative" | "neutral"
 *   }
 */

export type PosKey = 'n' | 'v' | 'adj' | 'adv' | 'other';

export type Polarity = 'positive' | 'negative' | 'neutral';

/** One node in the fixed ontology tree */
export type OntologyNode = {
  id: string;
  parent: string | null;
  labelZh: string;
  polarity?: Polarity;
  exclusiveGroup?: string;
  hint?: string;
};

/** What we store / match against */
export type SemanticProfile = {
  ontology: string[];
  freeTags: string[];
  polarity?: Polarity;
};

export const ONTOLOGY: OntologyNode[] = [
  { id: 'emotion', parent: null, labelZh: '情緒', hint: 'coarse emotion' },
  { id: 'evaluation', parent: null, labelZh: '評價' },
  { id: 'time', parent: null, labelZh: '時間' },
  { id: 'cognitive', parent: null, labelZh: '認知' },
  { id: 'communication', parent: null, labelZh: '溝通' },
  { id: 'social', parent: null, labelZh: '社交' },
  { id: 'process', parent: null, labelZh: '過程／動作' },
  { id: 'state', parent: null, labelZh: '狀態／因果' },
  { id: 'physical', parent: null, labelZh: '感官／身體' },
  { id: 'entity', parent: null, labelZh: '實體' },
  { id: 'domain', parent: null, labelZh: '情境領域' },
  { id: 'emotion.positive', parent: 'emotion', labelZh: '正向情緒', polarity: 'positive' },
  { id: 'emotion.negative', parent: 'emotion', labelZh: '負向情緒', polarity: 'negative' },
  { id: 'emotion.other', parent: 'emotion', labelZh: '其他情緒' },
  { id: 'emotion.joy', parent: 'emotion.positive', labelZh: '喜悅', polarity: 'positive', exclusiveGroup: 'emotion_fine', hint: 'happy, glad, cheerful' },
  { id: 'emotion.delight', parent: 'emotion.positive', labelZh: '欣喜／狂喜', polarity: 'positive', exclusiveGroup: 'emotion_fine', hint: 'delighted, thrilled' },
  { id: 'emotion.contentment', parent: 'emotion.positive', labelZh: '滿足', polarity: 'positive', exclusiveGroup: 'emotion_fine' },
  { id: 'emotion.pride', parent: 'emotion.positive', labelZh: '自豪', polarity: 'positive', exclusiveGroup: 'emotion_fine' },
  { id: 'emotion.affection', parent: 'emotion.positive', labelZh: '喜愛', polarity: 'positive', exclusiveGroup: 'emotion_fine' },
  { id: 'emotion.love', parent: 'emotion.positive', labelZh: '愛', polarity: 'positive', exclusiveGroup: 'emotion_fine' },
  { id: 'emotion.hope', parent: 'emotion.positive', labelZh: '希望', polarity: 'positive', exclusiveGroup: 'emotion_fine' },
  { id: 'emotion.gratitude', parent: 'emotion.positive', labelZh: '感激', polarity: 'positive', exclusiveGroup: 'emotion_fine' },
  { id: 'emotion.amusement', parent: 'emotion.positive', labelZh: '好笑／娛樂', polarity: 'positive', exclusiveGroup: 'emotion_fine' },
  { id: 'emotion.interest', parent: 'emotion.positive', labelZh: '興趣', exclusiveGroup: 'emotion_fine' },
  { id: 'emotion.excitement', parent: 'emotion.positive', labelZh: '興奮', polarity: 'positive', exclusiveGroup: 'emotion_fine' },
  { id: 'emotion.relief', parent: 'emotion.positive', labelZh: '鬆一口氣', polarity: 'positive', exclusiveGroup: 'emotion_fine' },
  { id: 'emotion.calm', parent: 'emotion.positive', labelZh: '平靜', polarity: 'positive', exclusiveGroup: 'emotion_fine' },
  { id: 'emotion.confidence', parent: 'emotion.positive', labelZh: '自信', polarity: 'positive', exclusiveGroup: 'emotion_fine' },
  { id: 'emotion.sadness', parent: 'emotion.negative', labelZh: '悲傷', polarity: 'negative', exclusiveGroup: 'emotion_fine', hint: 'sad, unhappy' },
  { id: 'emotion.grief', parent: 'emotion.negative', labelZh: '悲痛', polarity: 'negative', exclusiveGroup: 'emotion_fine' },
  { id: 'emotion.disappointment', parent: 'emotion.negative', labelZh: '失望', polarity: 'negative', exclusiveGroup: 'emotion_fine' },
  { id: 'emotion.despair', parent: 'emotion.negative', labelZh: '絕望', polarity: 'negative', exclusiveGroup: 'emotion_fine' },
  { id: 'emotion.loneliness', parent: 'emotion.negative', labelZh: '孤獨', polarity: 'negative', exclusiveGroup: 'emotion_fine' },
  { id: 'emotion.anger', parent: 'emotion.negative', labelZh: '憤怒', polarity: 'negative', exclusiveGroup: 'emotion_fine', hint: 'angry, mad' },
  { id: 'emotion.irritation', parent: 'emotion.negative', labelZh: '惱怒／煩躁', polarity: 'negative', exclusiveGroup: 'emotion_fine', hint: 'irritated, annoyed' },
  { id: 'emotion.rage', parent: 'emotion.negative', labelZh: '盛怒', polarity: 'negative', exclusiveGroup: 'emotion_fine', hint: 'furious, livid' },
  { id: 'emotion.resentment', parent: 'emotion.negative', labelZh: '怨恨', polarity: 'negative', exclusiveGroup: 'emotion_fine' },
  { id: 'emotion.fear', parent: 'emotion.negative', labelZh: '恐懼', polarity: 'negative', exclusiveGroup: 'emotion_fine', hint: 'afraid, scared' },
  { id: 'emotion.anxiety', parent: 'emotion.negative', labelZh: '焦慮', polarity: 'negative', exclusiveGroup: 'emotion_fine' },
  { id: 'emotion.worry', parent: 'emotion.negative', labelZh: '擔心', polarity: 'negative', exclusiveGroup: 'emotion_fine' },
  { id: 'emotion.panic', parent: 'emotion.negative', labelZh: '驚慌', polarity: 'negative', exclusiveGroup: 'emotion_fine' },
  { id: 'emotion.shame', parent: 'emotion.negative', labelZh: '羞愧', polarity: 'negative', exclusiveGroup: 'emotion_fine' },
  { id: 'emotion.guilt', parent: 'emotion.negative', labelZh: '罪惡感', polarity: 'negative', exclusiveGroup: 'emotion_fine' },
  { id: 'emotion.embarrassment', parent: 'emotion.negative', labelZh: '尷尬', polarity: 'negative', exclusiveGroup: 'emotion_fine' },
  { id: 'emotion.disgust', parent: 'emotion.negative', labelZh: '厭惡', polarity: 'negative', exclusiveGroup: 'emotion_fine' },
  { id: 'emotion.contempt', parent: 'emotion.negative', labelZh: '輕蔑', polarity: 'negative', exclusiveGroup: 'emotion_fine' },
  { id: 'emotion.envy', parent: 'emotion.negative', labelZh: '羡慕', polarity: 'negative', exclusiveGroup: 'emotion_fine' },
  { id: 'emotion.jealousy', parent: 'emotion.negative', labelZh: '嫉妒', polarity: 'negative', exclusiveGroup: 'emotion_fine' },
  { id: 'emotion.boredom', parent: 'emotion.negative', labelZh: '無聊', polarity: 'negative', exclusiveGroup: 'emotion_fine' },
  { id: 'emotion.frustration', parent: 'emotion.negative', labelZh: '挫折感', polarity: 'negative', exclusiveGroup: 'emotion_fine' },
  { id: 'emotion.hate', parent: 'emotion.negative', labelZh: '憎恨', polarity: 'negative', exclusiveGroup: 'emotion_fine' },
  { id: 'emotion.regret', parent: 'emotion.negative', labelZh: '後悔', polarity: 'negative', exclusiveGroup: 'emotion_fine' },
  { id: 'emotion.surprise', parent: 'emotion.other', labelZh: '驚訝', exclusiveGroup: 'emotion_fine' },
  { id: 'emotion.shock', parent: 'emotion.other', labelZh: '震驚', exclusiveGroup: 'emotion_fine' },
  { id: 'emotion.confusion', parent: 'emotion.other', labelZh: '困惑', exclusiveGroup: 'emotion_fine' },
  { id: 'emotion.curiosity', parent: 'emotion.other', labelZh: '好奇心', exclusiveGroup: 'emotion_fine' },
  { id: 'emotion.nostalgia', parent: 'emotion.other', labelZh: '懷舊', exclusiveGroup: 'emotion_fine' },
  { id: 'emotion.awe', parent: 'emotion.other', labelZh: '敬畏', exclusiveGroup: 'emotion_fine' },
  { id: 'evaluation.intensity', parent: 'evaluation', labelZh: '強度', exclusiveGroup: 'eval_dim' },
  { id: 'evaluation.quality', parent: 'evaluation', labelZh: '品質', exclusiveGroup: 'eval_dim' },
  { id: 'evaluation.importance', parent: 'evaluation', labelZh: '重要性', exclusiveGroup: 'eval_dim' },
  { id: 'evaluation.accuracy', parent: 'evaluation', labelZh: '精確度', exclusiveGroup: 'eval_dim' },
  { id: 'evaluation.difficulty', parent: 'evaluation', labelZh: '難易度', exclusiveGroup: 'eval_dim' },
  { id: 'evaluation.probability', parent: 'evaluation', labelZh: '可能性', exclusiveGroup: 'eval_dim' },
  { id: 'evaluation.size', parent: 'evaluation', labelZh: '規模／大小', exclusiveGroup: 'eval_dim' },
  { id: 'evaluation.amount', parent: 'evaluation', labelZh: '數量多寡', exclusiveGroup: 'eval_dim' },
  { id: 'evaluation.degree', parent: 'evaluation', labelZh: '程度', exclusiveGroup: 'eval_dim' },
  { id: 'evaluation.desirability', parent: 'evaluation', labelZh: '合意度', exclusiveGroup: 'eval_dim' },
  { id: 'evaluation.acceptability', parent: 'evaluation', labelZh: '可接受度', exclusiveGroup: 'eval_dim' },
  { id: 'evaluation.effectiveness', parent: 'evaluation', labelZh: '有效性', exclusiveGroup: 'eval_dim' },
  { id: 'evaluation.reliability', parent: 'evaluation', labelZh: '可靠性', exclusiveGroup: 'eval_dim' },
  { id: 'evaluation.novelty', parent: 'evaluation', labelZh: '新穎性', exclusiveGroup: 'eval_dim' },
  { id: 'evaluation.typicality', parent: 'evaluation', labelZh: '典型性', exclusiveGroup: 'eval_dim' },
  { id: 'evaluation.completeness', parent: 'evaluation', labelZh: '完整度', exclusiveGroup: 'eval_dim' },
  { id: 'evaluation.clarity', parent: 'evaluation', labelZh: '清晰度', exclusiveGroup: 'eval_dim' },
  { id: 'evaluation.strength', parent: 'evaluation', labelZh: '力度', exclusiveGroup: 'eval_dim' },
  { id: 'evaluation.speed', parent: 'evaluation', labelZh: '速度', exclusiveGroup: 'eval_dim' },
  { id: 'evaluation.cost', parent: 'evaluation', labelZh: '成本／價值', exclusiveGroup: 'eval_dim' },
  { id: 'time.sequence', parent: 'time', labelZh: '先後順序', exclusiveGroup: 'time_dim' },
  { id: 'time.duration', parent: 'time', labelZh: '持續時間', exclusiveGroup: 'time_dim' },
  { id: 'time.frequency', parent: 'time', labelZh: '頻率', exclusiveGroup: 'time_dim' },
  { id: 'time.immediacy', parent: 'time', labelZh: '急迫／漸進', exclusiveGroup: 'time_dim' },
  { id: 'time.phase', parent: 'time', labelZh: '階段', exclusiveGroup: 'time_dim' },
  { id: 'time.era', parent: 'time', labelZh: '時態／年代', exclusiveGroup: 'time_dim' },
  { id: 'time.punctuality', parent: 'time', labelZh: '準時性', exclusiveGroup: 'time_dim' },
  { id: 'time.cycle', parent: 'time', labelZh: '週期', exclusiveGroup: 'time_dim' },
  { id: 'cognitive.perception', parent: 'cognitive', labelZh: '感知', exclusiveGroup: 'cog_dim' },
  { id: 'cognitive.attention', parent: 'cognitive', labelZh: '注意力', exclusiveGroup: 'cog_dim' },
  { id: 'cognitive.reasoning', parent: 'cognitive', labelZh: '推理', exclusiveGroup: 'cog_dim' },
  { id: 'cognitive.analysis', parent: 'cognitive', labelZh: '分析', exclusiveGroup: 'cog_dim' },
  { id: 'cognitive.judgment', parent: 'cognitive', labelZh: '判斷', exclusiveGroup: 'cog_dim' },
  { id: 'cognitive.decision', parent: 'cognitive', labelZh: '決策', exclusiveGroup: 'cog_dim' },
  { id: 'cognitive.memory', parent: 'cognitive', labelZh: '記憶', exclusiveGroup: 'cog_dim' },
  { id: 'cognitive.learning', parent: 'cognitive', labelZh: '學習', exclusiveGroup: 'cog_dim' },
  { id: 'cognitive.understanding', parent: 'cognitive', labelZh: '理解', exclusiveGroup: 'cog_dim' },
  { id: 'cognitive.belief', parent: 'cognitive', labelZh: '信念／假設', exclusiveGroup: 'cog_dim' },
  { id: 'cognitive.imagination', parent: 'cognitive', labelZh: '想像', exclusiveGroup: 'cog_dim' },
  { id: 'cognitive.planning', parent: 'cognitive', labelZh: '規劃', exclusiveGroup: 'cog_dim' },
  { id: 'cognitive.problem_solving', parent: 'cognitive', labelZh: '問題解決', exclusiveGroup: 'cog_dim' },
  { id: 'cognitive.creativity', parent: 'cognitive', labelZh: '創造力', exclusiveGroup: 'cog_dim' },
  { id: 'cognitive.metacognition', parent: 'cognitive', labelZh: '後設認知', exclusiveGroup: 'cog_dim' },
  { id: 'communication.request', parent: 'communication', labelZh: '請求', exclusiveGroup: 'speech_act' },
  { id: 'communication.inform', parent: 'communication', labelZh: '告知', exclusiveGroup: 'speech_act' },
  { id: 'communication.explain', parent: 'communication', labelZh: '解釋', exclusiveGroup: 'speech_act' },
  { id: 'communication.describe', parent: 'communication', labelZh: '描述', exclusiveGroup: 'speech_act' },
  { id: 'communication.negotiate', parent: 'communication', labelZh: '協商', exclusiveGroup: 'speech_act' },
  { id: 'communication.persuade', parent: 'communication', labelZh: '說服', exclusiveGroup: 'speech_act' },
  { id: 'communication.promise', parent: 'communication', labelZh: '承諾', exclusiveGroup: 'speech_act' },
  { id: 'communication.warn', parent: 'communication', labelZh: '警告', exclusiveGroup: 'speech_act' },
  { id: 'communication.apologize', parent: 'communication', labelZh: '道歉', exclusiveGroup: 'speech_act' },
  { id: 'communication.thank', parent: 'communication', labelZh: '感謝', exclusiveGroup: 'speech_act' },
  { id: 'communication.greet', parent: 'communication', labelZh: '打招呼', exclusiveGroup: 'speech_act' },
  { id: 'communication.refuse', parent: 'communication', labelZh: '拒絕', exclusiveGroup: 'speech_act' },
  { id: 'communication.agree', parent: 'communication', labelZh: '同意', exclusiveGroup: 'speech_act' },
  { id: 'communication.disagree', parent: 'communication', labelZh: '不同意', exclusiveGroup: 'speech_act' },
  { id: 'communication.question', parent: 'communication', labelZh: '提問', exclusiveGroup: 'speech_act' },
  { id: 'communication.command', parent: 'communication', labelZh: '命令', exclusiveGroup: 'speech_act' },
  { id: 'communication.suggest', parent: 'communication', labelZh: '建議', exclusiveGroup: 'speech_act' },
  { id: 'communication.criticize', parent: 'communication', labelZh: '批評', exclusiveGroup: 'speech_act' },
  { id: 'communication.praise', parent: 'communication', labelZh: '讚美', exclusiveGroup: 'speech_act' },
  { id: 'communication.complain', parent: 'communication', labelZh: '抱怨', exclusiveGroup: 'speech_act' },
  { id: 'communication.discuss', parent: 'communication', labelZh: '討論', exclusiveGroup: 'speech_act' },
  { id: 'communication.narrate', parent: 'communication', labelZh: '敘述', exclusiveGroup: 'speech_act' },
  { id: 'social.cooperation', parent: 'social', labelZh: '合作', exclusiveGroup: 'social_dim' },
  { id: 'social.conflict', parent: 'social', labelZh: '衝突', exclusiveGroup: 'social_dim' },
  { id: 'social.support', parent: 'social', labelZh: '支持', exclusiveGroup: 'social_dim' },
  { id: 'social.hierarchy', parent: 'social', labelZh: '層級', exclusiveGroup: 'social_dim' },
  { id: 'social.competition', parent: 'social', labelZh: '競爭', exclusiveGroup: 'social_dim' },
  { id: 'social.affiliation', parent: 'social', labelZh: '隸屬', exclusiveGroup: 'social_dim' },
  { id: 'social.exclusion', parent: 'social', labelZh: '排斥', exclusiveGroup: 'social_dim' },
  { id: 'social.trust', parent: 'social', labelZh: '信任', exclusiveGroup: 'social_dim' },
  { id: 'social.respect', parent: 'social', labelZh: '尊重', exclusiveGroup: 'social_dim' },
  { id: 'social.politeness', parent: 'social', labelZh: '禮貌', exclusiveGroup: 'social_dim' },
  { id: 'social.intimacy', parent: 'social', labelZh: '親密程度', exclusiveGroup: 'social_dim' },
  { id: 'social.authority', parent: 'social', labelZh: '權威', exclusiveGroup: 'social_dim' },
  { id: 'social.obligation', parent: 'social', labelZh: '義務', exclusiveGroup: 'social_dim' },
  { id: 'social.permission', parent: 'social', labelZh: '許可', exclusiveGroup: 'social_dim' },
  { id: 'social.reciprocity', parent: 'social', labelZh: '互惠', exclusiveGroup: 'social_dim' },
  { id: 'process.creation', parent: 'process', labelZh: '創造', exclusiveGroup: 'process_dim' },
  { id: 'process.destruction', parent: 'process', labelZh: '破壞', exclusiveGroup: 'process_dim' },
  { id: 'process.achievement', parent: 'process', labelZh: '達成', exclusiveGroup: 'process_dim' },
  { id: 'process.failure', parent: 'process', labelZh: '失敗', exclusiveGroup: 'process_dim' },
  { id: 'process.movement', parent: 'process', labelZh: '移動', exclusiveGroup: 'process_dim' },
  { id: 'process.transfer', parent: 'process', labelZh: '轉移／交付', exclusiveGroup: 'process_dim' },
  { id: 'process.maintenance', parent: 'process', labelZh: '維持', exclusiveGroup: 'process_dim' },
  { id: 'process.change', parent: 'process', labelZh: '改變', exclusiveGroup: 'process_dim' },
  { id: 'process.start', parent: 'process', labelZh: '開始', exclusiveGroup: 'process_dim' },
  { id: 'process.stop', parent: 'process', labelZh: '停止', exclusiveGroup: 'process_dim' },
  { id: 'process.increase', parent: 'process', labelZh: '增加', exclusiveGroup: 'process_dim' },
  { id: 'process.decrease', parent: 'process', labelZh: '減少', exclusiveGroup: 'process_dim' },
  { id: 'process.acquisition', parent: 'process', labelZh: '取得', exclusiveGroup: 'process_dim' },
  { id: 'process.loss', parent: 'process', labelZh: '失去', exclusiveGroup: 'process_dim' },
  { id: 'process.use', parent: 'process', labelZh: '使用', exclusiveGroup: 'process_dim' },
  { id: 'process.consumption', parent: 'process', labelZh: '消耗', exclusiveGroup: 'process_dim' },
  { id: 'process.production', parent: 'process', labelZh: '生產', exclusiveGroup: 'process_dim' },
  { id: 'process.repair', parent: 'process', labelZh: '修復', exclusiveGroup: 'process_dim' },
  { id: 'process.protection', parent: 'process', labelZh: '保護', exclusiveGroup: 'process_dim' },
  { id: 'process.search', parent: 'process', labelZh: '搜尋', exclusiveGroup: 'process_dim' },
  { id: 'process.discovery', parent: 'process', labelZh: '發現', exclusiveGroup: 'process_dim' },
  { id: 'process.selection', parent: 'process', labelZh: '選擇', exclusiveGroup: 'process_dim' },
  { id: 'process.organization', parent: 'process', labelZh: '組織', exclusiveGroup: 'process_dim' },
  { id: 'process.execution', parent: 'process', labelZh: '執行', exclusiveGroup: 'process_dim' },
  { id: 'state.improvement', parent: 'state', labelZh: '改善', polarity: 'positive', exclusiveGroup: 'state_dim' },
  { id: 'state.decline', parent: 'state', labelZh: '惡化', polarity: 'negative', exclusiveGroup: 'state_dim' },
  { id: 'state.trigger', parent: 'state', labelZh: '觸發', exclusiveGroup: 'state_dim' },
  { id: 'state.result', parent: 'state', labelZh: '結果', exclusiveGroup: 'state_dim' },
  { id: 'state.enable', parent: 'state', labelZh: '使能', exclusiveGroup: 'state_dim' },
  { id: 'state.prevent', parent: 'state', labelZh: '阻止', exclusiveGroup: 'state_dim' },
  { id: 'state.stability', parent: 'state', labelZh: '穩定', exclusiveGroup: 'state_dim' },
  { id: 'state.balance', parent: 'state', labelZh: '平衡', exclusiveGroup: 'state_dim' },
  { id: 'state.presence', parent: 'state', labelZh: '存在', exclusiveGroup: 'state_dim' },
  { id: 'state.availability', parent: 'state', labelZh: '可用性', exclusiveGroup: 'state_dim' },
  { id: 'physical.visual', parent: 'physical', labelZh: '視覺', exclusiveGroup: 'sense' },
  { id: 'physical.auditory', parent: 'physical', labelZh: '聽覺', exclusiveGroup: 'sense' },
  { id: 'physical.tactile', parent: 'physical', labelZh: '觸覺', exclusiveGroup: 'sense' },
  { id: 'physical.olfactory', parent: 'physical', labelZh: '嗅覺', exclusiveGroup: 'sense' },
  { id: 'physical.gustatory', parent: 'physical', labelZh: '味覺', exclusiveGroup: 'sense' },
  { id: 'physical.temperature', parent: 'physical', labelZh: '溫度', exclusiveGroup: 'sense' },
  { id: 'physical.pain', parent: 'physical', labelZh: '疼痛', exclusiveGroup: 'sense' },
  { id: 'physical.energy', parent: 'physical', labelZh: '體力／精力', exclusiveGroup: 'sense' },
  { id: 'physical.motion', parent: 'physical', labelZh: '肢體動作', exclusiveGroup: 'sense' },
  { id: 'physical.appearance', parent: 'physical', labelZh: '外觀', exclusiveGroup: 'sense' },
  { id: 'physical.texture', parent: 'physical', labelZh: '質地', exclusiveGroup: 'sense' },
  { id: 'physical.weight', parent: 'physical', labelZh: '重量', exclusiveGroup: 'sense' },
  { id: 'physical.shape', parent: 'physical', labelZh: '形狀', exclusiveGroup: 'sense' },
  { id: 'physical.material', parent: 'physical', labelZh: '材質', exclusiveGroup: 'sense' },
  { id: 'entity.person', parent: 'entity', labelZh: '人' },
  { id: 'entity.group', parent: 'entity', labelZh: '群體' },
  { id: 'entity.profession', parent: 'entity', labelZh: '職業' },
  { id: 'entity.kinship', parent: 'entity', labelZh: '親屬' },
  { id: 'entity.location_geo', parent: 'entity', labelZh: '地理地點' },
  { id: 'entity.location_built', parent: 'entity', labelZh: '建築地點' },
  { id: 'entity.location_natural', parent: 'entity', labelZh: '自然地點' },
  { id: 'entity.artifact', parent: 'entity', labelZh: '工具／人造物' },
  { id: 'entity.document', parent: 'entity', labelZh: '文件' },
  { id: 'entity.substance', parent: 'entity', labelZh: '物質' },
  { id: 'entity.food', parent: 'entity', labelZh: '食物' },
  { id: 'entity.money', parent: 'entity', labelZh: '金錢' },
  { id: 'entity.time_unit', parent: 'entity', labelZh: '時間單位' },
  { id: 'entity.event', parent: 'entity', labelZh: '事件' },
  { id: 'entity.idea', parent: 'entity', labelZh: '想法／概念' },
  { id: 'entity.information', parent: 'entity', labelZh: '資訊' },
  { id: 'entity.system', parent: 'entity', labelZh: '系統' },
  { id: 'entity.rule', parent: 'entity', labelZh: '規則' },
  { id: 'domain.work', parent: 'domain', labelZh: '職場' },
  { id: 'domain.study', parent: 'domain', labelZh: '學習／學術' },
  { id: 'domain.daily', parent: 'domain', labelZh: '日常生活' },
  { id: 'domain.travel', parent: 'domain', labelZh: '旅行' },
  { id: 'domain.health', parent: 'domain', labelZh: '健康' },
  { id: 'domain.science', parent: 'domain', labelZh: '科學' },
  { id: 'domain.social', parent: 'domain', labelZh: '社交場合' },
  { id: 'domain.nature', parent: 'domain', labelZh: '自然' },
  { id: 'domain.tech', parent: 'domain', labelZh: '科技' },
  { id: 'domain.art', parent: 'domain', labelZh: '藝術／文化' },
];

const NODE_BY_ID = new Map(ONTOLOGY.map((n) => [n.id, n]));

export function ancestors(id: string): string[] {
  const out: string[] = [];
  let cur: string | null | undefined = id;
  const guard = new Set<string>();
  while (cur && !guard.has(cur)) {
    guard.add(cur);
    out.push(cur);
    cur = NODE_BY_ID.get(cur)?.parent ?? null;
  }
  return out;
}

export function childrenOf(id: string): OntologyNode[] {
  return ONTOLOGY.filter((n) => n.parent === id);
}

export function roots(): OntologyNode[] {
  return ONTOLOGY.filter((n) => n.parent === null);
}

export function isValidOntologyId(id: string): boolean {
  return NODE_BY_ID.has(id);
}

export const FREE_TAG_PREFIXES = [
  'register:',
  'region:',
  'colloc:',
  'cefr:',
  'pos:',
  'tone:',
  'field:',
  'note:',
] as const;

export type MatchResult = {
  score: number;
  reason?: string;
};

export function matchProfiles(
  word: SemanticProfile,
  required: SemanticProfile,
  posKey?: PosKey,
  requiredPos?: PosKey | PosKey[]
): MatchResult {
  if (requiredPos && posKey) {
    const allowed = Array.isArray(requiredPos) ? requiredPos : [requiredPos];
    if (!allowed.includes(posKey) && posKey !== 'other') {
      return { score: 0, reason: 'pos mismatch' };
    }
  }

  const reqOnt = required.ontology ?? [];
  const wordOnt = word.ontology ?? [];
  const reqFree = (required.freeTags ?? []).map((t) => t.toLowerCase());
  const wordFree = (word.freeTags ?? []).map((t) => t.toLowerCase());

  if (reqOnt.length === 0 && reqFree.length === 0) {
    return { score: 0.5, reason: 'no requirements' };
  }

  const wPol = word.polarity;
  const rPol = required.polarity;
  if (wPol && rPol && wPol !== 'neutral' && rPol !== 'neutral' && wPol !== rPol) {
    return { score: 0, reason: 'polarity conflict' };
  }

  const wordFine = wordOnt.filter((id) => NODE_BY_ID.get(id)?.exclusiveGroup != null);
  const reqFine = reqOnt.filter((id) => NODE_BY_ID.get(id)?.exclusiveGroup != null);
  for (const r of reqFine) {
    const rn = NODE_BY_ID.get(r)!;
    for (const w of wordFine) {
      const wn = NODE_BY_ID.get(w)!;
      if (rn.exclusiveGroup && rn.exclusiveGroup === wn.exclusiveGroup && r !== w) {
        return { score: 0, reason: `exclusive: ${r} vs ${w}` };
      }
    }
  }

  let ontScore = 0;
  let anyOntHit = false;
  for (const r of reqOnt) {
    let best = 0;
    const rAnc = new Set(ancestors(r));
    for (const w of wordOnt) {
      if (w === r) best = Math.max(best, 1.0);
      else if (rAnc.has(w)) best = Math.max(best, 0.25);
      else if (ancestors(w).includes(r)) best = Math.max(best, 0.55);
    }
    if (best > 0) anyOntHit = true;
    ontScore += best;
  }

  let freeHits = 0;
  for (const t of reqFree) {
    if (wordFree.includes(t)) freeHits += 1;
  }
  const freeScore = freeHits * 0.2;

  if (!anyOntHit && freeHits === 0 && reqOnt.length + reqFree.length > 0) {
    return { score: 0, reason: 'no overlap' };
  }

  let score = ontScore + freeScore;
  if (wPol && rPol && wPol === rPol && wPol !== 'neutral') score += 0.35;
  return { score, reason: 'ok' };
}

export function normalizePos(pos?: string | null): PosKey {
  if (!pos) return 'other';
  const p = pos.toLowerCase().trim();
  if (/^n\b|noun|n\./.test(p) || p === 'n') return 'n';
  if (/^v\b|verb|v\./.test(p) || p === 'v') return 'v';
  if (/^adj\b|adjective|adj\./.test(p) || p === 'adj' || p === 'a') return 'adj';
  if (/^adv\b|adverb|adv\./.test(p) || p === 'adv') return 'adv';
  return 'other';
}

export function inferProfile(
  word: string,
  _pos?: string | null,
  definition?: string | null
): SemanticProfile {
  const ontology = new Set<string>();
  let polarity: Polarity | undefined;
  const w = (word || '').toLowerCase().trim();
  const def = (definition || '').toLowerCase();
  const blob = `${w} ${def}`;

  const add = (id: string, pol?: Polarity) => {
    if (!NODE_BY_ID.has(id)) return;
    ontology.add(id);
    for (const a of ancestors(id)) ontology.add(a);
    if (pol) polarity = pol;
  };

  if (/happ|glad|cheer(ful)?|joyful/.test(blob)) add('emotion.joy', 'positive');
  if (/delight|overjoy|thrill|ecstatic/.test(blob)) add('emotion.delight', 'positive');
  if (/\bangr|mad\b/.test(blob)) add('emotion.anger', 'negative');
  if (/irritat|annoy|bother/.test(blob)) add('emotion.irritation', 'negative');
  if (/furious|enrag|livid|rage\b/.test(blob)) add('emotion.rage', 'negative');
  if (/\bsad\b|unhappy/.test(blob)) add('emotion.sadness', 'negative');
  if (/afraid|scar(ed)?|frighten/.test(blob)) add('emotion.fear', 'negative');
  if (/anxious|uneasy|tense\b/.test(blob)) add('emotion.anxiety', 'negative');
  if (/worr(y|ied)/.test(blob)) add('emotion.worry', 'negative');
  if (/calm|peaceful|serene/.test(blob)) add('emotion.calm', 'positive');
  if (/surpris/.test(blob)) add('emotion.surprise');
  if (/request|ask\b|appeal/.test(blob)) add('communication.request');
  if (/inform|notify|report|tell\b/.test(blob)) add('communication.inform');
  if (/persuad|convince|urge\b/.test(blob)) add('communication.persuade');
  if (/explain|clarif/.test(blob)) add('communication.explain');
  if (/collabor|cooperat/.test(blob)) add('social.cooperation');
  if (/conflict|clash|confront/.test(blob)) add('social.conflict');
  if (/creat|make\b|produc|build\b/.test(blob)) add('process.creation');
  if (/achiev|accomplish|succeed/.test(blob)) add('process.achievement');
  if (/improv|enhanc|recover/.test(blob)) add('state.improvement', 'positive');
  if (/declin|worsen|deterior/.test(blob)) add('state.decline', 'negative');
  if (/office|workplace|career|business/.test(blob)) add('domain.work');
  if (/school|university|student|academic/.test(blob)) add('domain.study');
  if (/travel|trip\b|tour|journey/.test(blob)) add('domain.travel');

  if (!polarity) {
    if (/improv|benefit|succeed|good|positive/.test(blob)) polarity = 'positive';
    if (/declin|fail|harm|bad|negative/.test(blob)) polarity = 'negative';
  }

  return { ontology: Array.from(ontology), freeTags: [], polarity };
}

const LEGACY_MAP: Record<string, string> = {
  emotion: 'emotion',
  evaluation: 'evaluation',
  time: 'time',
  cognitive: 'cognitive',
  communication: 'communication',
  social: 'social',
  process: 'process',
  action: 'process',
  state_change: 'state',
  cause_effect: 'state',
  physical: 'physical',
  positive: 'emotion.positive',
  negative: 'emotion.negative',
  joy: 'emotion.joy',
  anger: 'emotion.anger',
  sadness: 'emotion.sadness',
  fear: 'emotion.fear',
  calm: 'emotion.calm',
  surprise: 'emotion.surprise',
  request: 'communication.request',
  inform: 'communication.inform',
  persuade: 'communication.persuade',
  cooperation: 'social.cooperation',
  conflict: 'social.conflict',
  creation: 'process.creation',
  achievement: 'process.achievement',
  improvement: 'state.improvement',
  decline: 'state.decline',
};

export function legacyTagsToProfile(tags: string[]): SemanticProfile {
  const ontology = new Set<string>();
  let polarity: Polarity | undefined;
  const freeTags: string[] = [];
  for (const t of tags) {
    if (t === 'positive') polarity = 'positive';
    else if (t === 'negative') polarity = 'negative';
    else if (LEGACY_MAP[t]) {
      const id = LEGACY_MAP[t];
      ontology.add(id);
      for (const a of ancestors(id)) ontology.add(a);
    } else if (t.includes('.') && NODE_BY_ID.has(t)) {
      ontology.add(t);
      for (const a of ancestors(t)) ontology.add(a);
    } else {
      freeTags.push(t);
    }
  }
  return { ontology: Array.from(ontology), freeTags, polarity };
}

export function ontologyTree(): { root: OntologyNode; children: OntologyNode[] }[] {
  return roots().map((root) => ({ root, children: childrenOf(root.id) }));
}

export function subtree(rootId: string): OntologyNode[] {
  const out: OntologyNode[] = [];
  const q = [rootId];
  while (q.length) {
    const id = q.shift()!;
    const n = NODE_BY_ID.get(id);
    if (!n) continue;
    if (id !== rootId) out.push(n);
    for (const c of childrenOf(id)) q.push(c.id);
  }
  return out;
}
