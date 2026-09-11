import type { ScenarioTemplate } from './scenarioTemplates';

/** Additional human-written scenario templates */
export const EXTRA_SCENARIO_TEMPLATES: ScenarioTemplate[] = [
  {
    id: 'restaurant_complaint',
    title: 'A Complaint at a Restaurant',
    titleZh: '餐廳申訴',
    level: ['elementary', 'highschool', 'toeic'],
    domain: 'daily',
    content:
      'The soup arrived cold, so I decided to {{s1}} the problem politely. The waiter looked {{s2}} and offered to replace the dish at once. The manager later gave us a small {{s3}} on the bill. Overall, the staff handled the situation in a {{s4}} way.',
    contentZh:
      '湯送來時是冷的，因此我決定有禮貌地{{s1}}這個問題。服務生看起來很{{s2}}，並立刻表示要換一道菜。經理後來在帳單上給了我們一點{{s3}}。整體來說，員工用相當{{s4}}的方式處理了這件事。',
    slots: [
      { id: 's1', pos: 'v', tags: ['communication', 'action'] },
      { id: 's2', pos: 'adj', tags: ['emotion'] },
      { id: 's3', pos: 'n', tags: ['abstract', 'quantity', 'object'] },
      { id: 's4', pos: 'adj', tags: ['evaluation', 'positive'] },
    ],
  },
  {
    id: 'academic_subsequent_findings',
    title: 'Subsequent Research Findings',
    titleZh: '後續研究發現',
    level: ['highschool', 'toeic', 'toefl_ielts'],
    domain: 'academic',
    content:
      'The initial experiment produced mixed results, so the team designed a {{s1}} study with a larger sample. In the {{s2}} analysis, researchers found a clearer pattern than before. These {{s3}} findings helped them revise the original hypothesis and plan the next stage of work.',
    contentZh:
      '初步實驗結果不一，因此團隊設計了後續研究。在後續分析中，研究人員發現了更清楚的模式。這些後續發現幫助他們修正原先的假設。',
    slots: [
      { id: 's1', pos: 'adj', tags: ['time'] },
      { id: 's2', pos: 'adj', tags: ['time'] },
      { id: 's3', pos: 'adj', tags: ['time'] },
    ],
  },
  {
    id: 'workplace_subsequent_meeting',
    title: 'Subsequent Project Meeting',
    titleZh: '後續專案會議',
    level: ['highschool', 'toeic'],
    domain: 'workplace',
    content:
      'After the client rejected the first proposal, we scheduled a {{s1}} meeting to address their concerns. During that session, the team presented a revised timeline and budget. The {{s2}} discussion was more productive, and both sides agreed on the next steps. A short summary was sent to everyone the {{s3}} morning.',
    contentZh:
      '客戶退回初版提案後，我們安排了後續會議處理疑慮。會中團隊提出修正時程與預算，後續討論更有效率，雙方也同意下一步。',
    slots: [
      { id: 's1', pos: 'adj', tags: ['time'] },
      { id: 's2', pos: 'adj', tags: ['evaluation'] },
      { id: 's3', pos: 'adj', tags: ['time'] },
    ],
  },
  {
    id: 'library_study',
    title: 'Studying in the Library',
    titleZh: '在圖書館讀書',
    level: ['elementary', 'highschool'],
    domain: 'campus',
    content:
      'I went to the library to {{s1}} for the final exam. The reading room was quiet and {{s2}}. After two hours I still could not {{s3}} one difficult concept. A classmate helped me with a short, {{s4}} explanation.',
    contentZh:
      '我到圖書館{{s1}}期末考。閱覽室安靜且{{s2}}。兩小時後我仍無法{{s3}}一個困難的概念。同學用簡短又{{s4}}的說明幫助了我。',
    slots: [
      { id: 's1', pos: 'v', tags: ['cognitive', 'process', 'action'] },
      { id: 's2', pos: 'adj', tags: ['evaluation', 'physical'] },
      { id: 's3', pos: 'v', tags: ['cognitive'] },
      { id: 's4', pos: 'adj', tags: ['evaluation', 'positive'] },
    ],
  },
];
