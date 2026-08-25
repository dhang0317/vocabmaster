/**
 * Scenario template library for context-aware cloze generation.
 * Templates use slots: {{SLOT_ID}} where SLOT_ID maps to required POS + semantic tags.
 */

import { PosKey, SemanticTag } from './semanticTags';
import { GenerationLevel } from '@/types';
import { EXTRA_SCENARIO_TEMPLATES } from './scenarioTemplatesExtra';

export interface TemplateSlot {
  id: string;
  pos: PosKey | PosKey[];
  tags: SemanticTag[];
  hint?: string;
}

export interface ScenarioTemplate {
  id: string;
  title: string;
  titleZh: string;
  level: GenerationLevel[];
  domain: 'daily' | 'travel' | 'workplace' | 'academic' | 'campus' | 'science' | 'social';
  content: string;
  contentZh: string;
  slots: TemplateSlot[];
  glossaryExtra?: { en: string; zh: string; sense?: string }[];
}

const BASE_SCENARIO_TEMPLATES: ScenarioTemplate[] = [
  {
    id: 'hotel_checkout',
    title: 'Checking Out of the Hotel',
    titleZh: '飯店退房',
    level: ['elementary', 'highschool', 'toeic'],
    domain: 'travel',
    content:
      'When I arrived at the front desk to check out, the receptionist was surprisingly {{s1}}. She explained that the bill included a small {{s2}} for late departure. I tried to {{s3}} the charge, but the policy was clear. In the end, I paid and left with a more {{s4}} understanding of hotel rules.',
    contentZh:
      '當我到櫃檯辦理退房時，接待人員出乎意料地{{s1}}。她解釋帳單包含一筆因延後退房產生的小額{{s2}}。我試著{{s3}}這筆費用，但規定寫得很清楚。最後我還是付了錢，並對飯店規定有了更{{s4}}的認識。',
    slots: [
      { id: 's1', pos: 'adj', tags: ['emotion', 'evaluation'], hint: 'staff attitude' },
      { id: 's2', pos: 'n', tags: ['abstract', 'object', 'quantity'], hint: 'fee / charge' },
      { id: 's3', pos: 'v', tags: ['communication', 'action'], hint: 'dispute / negotiate' },
      { id: 's4', pos: 'adj', tags: ['evaluation', 'cognitive'], hint: 'clearer understanding' },
    ],
    glossaryExtra: [
      { en: 'front desk', zh: '櫃檯' },
      { en: 'receptionist', zh: '接待人員' },
      { en: 'departure', zh: '離開；退房' },
      { en: 'policy', zh: '規定；政策' },
    ],
  },
  {
    id: 'airport_delay',
    title: 'A Delayed Flight',
    titleZh: '班機延誤',
    level: ['highschool', 'toeic', 'toefl_ielts'],
    domain: 'travel',
    content:
      'The announcement said our flight would be delayed for at least two hours. Many passengers looked {{s1}}, and a few began to {{s2}} with the airline staff. The delay was caused by a sudden {{s3}} in the weather system. After a long wait, the situation finally began to {{s4}}.',
    contentZh:
      '廣播說我們的班機將延誤至少兩小時。許多乘客看起來很{{s1}}，有幾位開始與航空公司人員{{s2}}。延誤是由天氣系統突然的{{s3}}造成的。經過漫長等待後，情況終於開始{{s4}}。',
    slots: [
      { id: 's1', pos: 'adj', tags: ['emotion'], hint: 'passenger feeling' },
      { id: 's2', pos: 'v', tags: ['communication', 'social'], hint: 'argue / negotiate' },
      { id: 's3', pos: 'n', tags: ['state_change', 'abstract'], hint: 'change / shift' },
      { id: 's4', pos: 'v', tags: ['state_change'], hint: 'improve / subside' },
    ],
  },
  {
    id: 'office_meeting',
    title: 'A Busy Week at the Office',
    titleZh: '辦公室的忙碌一週',
    level: ['toeic', 'highschool', 'toefl_ielts'],
    domain: 'workplace',
    content:
      'During the weekly meeting, the manager asked the team to {{s1}} the new client request before Friday. The proposal needed a more {{s2}} analysis of costs and risks. One colleague tried to {{s3}} an alternative plan, but time was limited. By the end of the day, everyone felt the pressure was becoming {{s4}}.',
    contentZh:
      '在每週會議中，經理要求團隊在週五前{{s1}}新的客戶需求。這份提案需要對成本與風險做更{{s2}}的分析。有位同事試著{{s3}}另一套方案，但時間有限。到了下班時，大家都覺得壓力變得{{s4}}。',
    slots: [
      { id: 's1', pos: 'v', tags: ['process', 'action'], hint: 'complete / handle' },
      { id: 's2', pos: 'adj', tags: ['evaluation', 'cognitive'], hint: 'thorough / careful' },
      { id: 's3', pos: 'v', tags: ['communication', 'cognitive'], hint: 'propose / suggest' },
      { id: 's4', pos: 'adj', tags: ['quantity', 'evaluation', 'emotion'], hint: 'intense / overwhelming' },
    ],
    glossaryExtra: [
      { en: 'proposal', zh: '提案' },
      { en: 'colleague', zh: '同事' },
      { en: 'client', zh: '客戶' },
    ],
  },
  {
    id: 'email_followup',
    title: 'Following Up by Email',
    titleZh: '用郵件追蹤進度',
    level: ['toeic', 'highschool'],
    domain: 'workplace',
    content:
      'I sent a short email to {{s1}} the status of the shipment. The supplier replied that production had been {{s2}} by a shortage of materials. They promised to {{s3}} the order as soon as possible. I found their explanation reasonably {{s4}}, so I agreed to wait two more days.',
    contentZh:
      '我寄了一封簡短郵件{{s1}}出貨進度。供應商回覆說生產因材料短缺而遭到{{s2}}。他們承諾會盡快{{s3}}這筆訂單。我覺得他們的解釋還算{{s4}}，因此同意再等兩天。',
    slots: [
      { id: 's1', pos: 'v', tags: ['communication', 'cognitive'], hint: 'check / inquire' },
      { id: 's2', pos: 'v', tags: ['state_change', 'negative'], hint: 'delayed / affected' },
      { id: 's3', pos: 'v', tags: ['process', 'action'], hint: 'fulfill / complete' },
      { id: 's4', pos: 'adj', tags: ['evaluation'], hint: 'acceptable / clear' },
    ],
  },
  {
    id: 'lab_discussion',
    title: 'An Academic Discussion',
    titleZh: '一場學術討論',
    level: ['toefl_ielts', 'advanced', 'highschool'],
    domain: 'academic',
    content:
      'In the seminar, researchers compared different ways to {{s1}} the same set of data. One study offered a {{s2}} explanation, while another challenged its main assumption. The debate helped students {{s3}} why careful design matters. Overall, the discussion was both lively and {{s4}}.',
    contentZh:
      '在研討會上，研究人員比較了{{s1}}同一組資料的不同方式。一項研究提出了{{s2}}的解釋，另一項則挑戰其主要假設。這場辯論幫助學生{{s3}}謹慎設計為何重要。整體而言，討論既熱烈又{{s4}}。',
    slots: [
      { id: 's1', pos: 'v', tags: ['cognitive', 'process'], hint: 'analyze / interpret' },
      { id: 's2', pos: 'adj', tags: ['evaluation'], hint: 'convincing / limited' },
      { id: 's3', pos: 'v', tags: ['cognitive'], hint: 'understand / grasp' },
      { id: 's4', pos: 'adj', tags: ['evaluation', 'positive'], hint: 'productive / insightful' },
    ],
  },
  {
    id: 'climate_report',
    title: 'A Short Science Report',
    titleZh: '一則科學短報',
    level: ['toefl_ielts', 'advanced', 'highschool'],
    domain: 'science',
    content:
      'The latest report shows that regional temperatures continue to {{s1}}. Scientists warn that without {{s2}} action, the effects will become harder to reverse. Local communities have started to {{s3}} new adaptation plans. Many experts describe the current trend as {{s4}}.',
    contentZh:
      '最新報告顯示，區域氣溫持續{{s1}}。科學家警告，若沒有{{s2}}的行動，影響將更難逆轉。在地社群已開始{{s3}}新的調適計畫。許多專家形容目前的趨勢相當{{s4}}。',
    slots: [
      { id: 's1', pos: 'v', tags: ['state_change'], hint: 'rise / increase' },
      { id: 's2', pos: 'adj', tags: ['evaluation', 'quantity'], hint: 'strong / immediate' },
      { id: 's3', pos: 'v', tags: ['process', 'action'], hint: 'implement / develop' },
      { id: 's4', pos: 'adj', tags: ['evaluation', 'negative', 'emotion'], hint: 'concerning / urgent' },
    ],
  },
  {
    id: 'group_project',
    title: 'A Group Project at School',
    titleZh: '學校的小組專題',
    level: ['elementary', 'highschool'],
    domain: 'campus',
    content:
      'Our group had to {{s1}} a presentation about local history. At first the task felt {{s2}}, but we divided the work carefully. One member helped {{s3}} the main ideas into clear slides. By the final rehearsal, everyone felt more {{s4}}.',
    contentZh:
      '我們小組必須{{s1}}一場關於在地歷史的報告。一開始任務顯得{{s2}}，但我們仔細分工。有位成員幫忙把主要想法{{s3}}成清楚的投影片。到了最後一次彩排，大家都覺得比較{{s4}}。',
    slots: [
      { id: 's1', pos: 'v', tags: ['process', 'action'], hint: 'prepare / deliver' },
      { id: 's2', pos: 'adj', tags: ['evaluation', 'emotion'], hint: 'difficult / overwhelming' },
      { id: 's3', pos: 'v', tags: ['process', 'cognitive'], hint: 'organize / shape' },
      { id: 's4', pos: 'adj', tags: ['emotion', 'positive'], hint: 'confident / ready' },
    ],
  },
  {
    id: 'travel_memory',
    title: 'A Travel Memory',
    titleZh: '一段旅遊回憶',
    level: ['elementary', 'highschool', 'toeic'],
    domain: 'daily',
    content:
      'Last summer I visited a quiet coastal town. The weather was mostly {{s1}}, which made long walks pleasant. I still {{s2}} the small market near the harbor. That trip taught me to {{s3}} simple moments more carefully. Looking back, the whole experience feels {{s4}}.',
    contentZh:
      '去年夏天我去了一個安靜的海濱小鎮。天氣大多{{s1}}，讓長途散步很舒服。我至今仍{{s2}}港口附近的小市集。那趟旅行讓我學會更仔細地{{s3}}平凡的時刻。回想起來，整段經歷相當{{s4}}。',
    slots: [
      { id: 's1', pos: 'adj', tags: ['evaluation', 'physical'], hint: 'mild / pleasant' },
      { id: 's2', pos: 'v', tags: ['cognitive', 'emotion'], hint: 'remember / cherish' },
      { id: 's3', pos: 'v', tags: ['cognitive', 'action'], hint: 'appreciate / notice' },
      { id: 's4', pos: 'adj', tags: ['evaluation', 'emotion', 'positive'], hint: 'meaningful / valuable' },
    ],
  },
  {
    id: 'difficult_conversation',
    title: 'A Difficult Conversation',
    titleZh: '一場難談的對話',
    level: ['highschool', 'toeic', 'toefl_ielts'],
    domain: 'social',
    content:
      'I needed to {{s1}} a sensitive issue with my teammate. At first the atmosphere felt {{s2}}, and neither of us spoke easily. After I explained my concerns, the tension began to {{s3}}. We finally reached a solution that both of us found {{s4}}.',
    contentZh:
      '我需要與隊友{{s1}}一件敏感的事情。起初氣氛顯得{{s2}}，兩人都不太容易開口。在我說明顧慮之後，緊張感開始{{s3}}。我們最後找到一個雙方都覺得{{s4}}的解決辦法。',
    slots: [
      { id: 's1', pos: 'v', tags: ['communication', 'social'], hint: 'discuss / raise' },
      { id: 's2', pos: 'adj', tags: ['emotion', 'evaluation'], hint: 'tense / awkward' },
      { id: 's3', pos: 'v', tags: ['state_change'], hint: 'ease / subside' },
      { id: 's4', pos: 'adj', tags: ['evaluation', 'positive'], hint: 'fair / acceptable' },
    ],
  },
  {
    id: 'community_event',
    title: 'A Community Event',
    titleZh: '一場社區活動',
    level: ['elementary', 'highschool', 'toeic'],
    domain: 'social',
    content:
      'Volunteers worked together to {{s1}} the annual neighborhood festival. The weather stayed {{s2}} all afternoon, so attendance was high. Organizers had to {{s3}} a last-minute change in the schedule. Most residents described the day as {{s4}}.',
    contentZh:
      '志工們一起{{s1}}年度的鄰里慶典。整個下午天氣保持{{s2}}，因此參加人數很多。主辦單位必須{{s3}}行程上的臨時變動。多數居民形容這一天相當{{s4}}。',
    slots: [
      { id: 's1', pos: 'v', tags: ['process', 'social', 'action'], hint: 'organize / run' },
      { id: 's2', pos: 'adj', tags: ['evaluation', 'physical'], hint: 'pleasant / stable' },
      { id: 's3', pos: 'v', tags: ['process', 'action'], hint: 'handle / manage' },
      { id: 's4', pos: 'adj', tags: ['evaluation', 'positive', 'emotion'], hint: 'successful / enjoyable' },
    ],
  },
];

/** Full library: base + expanded batch (28 templates) */
export const SCENARIO_TEMPLATES: ScenarioTemplate[] = [
  ...BASE_SCENARIO_TEMPLATES,
  ...EXTRA_SCENARIO_TEMPLATES,
];

export function selectTemplates(
  level: GenerationLevel,
  wordCount: number,
  maxTemplates = 3
): ScenarioTemplate[] {
  const candidates = SCENARIO_TEMPLATES.filter(t => t.level.includes(level));
  const pool = candidates.length > 0 ? candidates : SCENARIO_TEMPLATES;

  const scored = pool.map(t => ({
    t,
    score: -Math.abs(t.slots.length - Math.min(wordCount, 6)) + Math.random() * 0.3,
  }));
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, maxTemplates).map(x => x.t);
}
