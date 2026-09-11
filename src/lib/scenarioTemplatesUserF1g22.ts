import type { ScenarioTemplate } from './scenarioTemplates';

/** bulk F1 group 22 */
export const USER_SCENARIO_TEMPLATES_F1g22: ScenarioTemplate[] = [
  {
    id: 'daily_quality_sleep_01',
    title: 'Quality Sleep',
    titleZh: '良好睡眠品質',
    level: ['elementary', 'highschool'],
    domain: 'daily',
    content:
      'Getting {{s1}} sleep every night is essential for maintaining physical wellness. Health experts {{s2}} individuals to establish consistent bedtime routines daily. Taking time to unwind will {{s3}} mental fatigue into restful recovery. Good habits will {{s4}} better concentration throughout demanding workdays.',
    contentZh:
      '良好睡眠品質',
    slots: [
      { id: 's1', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['state_change'] },
      { id: 's4', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'travel_sequence_itinerary_01',
    title: 'Sequence Itinerary',
    titleZh: '旅程前後安排',
    level: ['highschool', 'toeic'],
    domain: 'travel',
    content:
      'After completing the main mountain trek, travelers planned a {{s1}} tour of nearby coastal villages. Travel agents will {{s2}} clients about bus connection times. It is {{s3}} to review local weather forecasts before setting off. Exploring regional culture will {{s4}} unforgettable memories for every traveler.',
    contentZh:
      '旅程前後安排',
    slots: [
      { id: 's1', pos: 'adj', tags: ['sequence', 'time'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['evaluation'] },
      { id: 's4', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'academic_intensity_debate_01',
    title: 'Intensity Debate',
    titleZh: '學術激烈辯論',
    level: ['toefl_ielts', 'advanced'],
    domain: 'academic',
    content:
      'The scientific conference featured an {{s1}} debate regarding quantum mechanics interpretations. Presenters attempted to {{s2}} audience members using empirical measurement data. Panelists must {{s3}} opposing viewpoints with intellectual rigor and clarity. Healthy academic debate will {{s4}} deeper insights within scientific literature.',
    contentZh:
      '學術激烈辯論',
    slots: [
      { id: 's1', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's4', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'shopping_duration_sale_01',
    title: 'Duration Sale',
    titleZh: '限時促銷活動',
    level: ['highschool', 'toeic'],
    domain: 'daily',
    content:
      'The retail store launched a {{s1}} promotion to clear seasonal clothing stock. Store managers will {{s2}} customers about special discounts at register counters. Shoppers should {{s3}} tags carefully to verify sale eligibility. Wise shopping decisions will {{s4}} significant financial savings on quality apparel.',
    contentZh:
      '限時促銷活動',
    slots: [
      { id: 's1', pos: 'adj', tags: ['duration', 'time'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's4', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'health_cooperation_doctor_01',
    title: 'Cooperation Doctor',
    titleZh: '醫患合作治療',
    level: ['highschool', 'toeic'],
    domain: 'daily',
    content:
      'Patients are encouraged to {{s1}} closely with their doctors during rehabilitation. Physicians will {{s2}} patients about recovery progress and prescription adjustments. Adhering to medication schedules is {{s3}} for full recovery. Active participation will {{s4}} rehabilitation outcomes significantly for patients.',
    contentZh:
      '醫患合作治療',
    slots: [
      { id: 's1', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['state_change'] },
    ],
  },
];
