import type { ScenarioTemplate } from './scenarioTemplates';

/** bulk F1 group 21 */
export const USER_SCENARIO_TEMPLATES_F1g21: ScenarioTemplate[] = [
  {
    id: 'hotel_request_upgrade_01',
    title: 'Request Upgrade',
    titleZh: '升等房型請求',
    level: ['highschool', 'toeic'],
    domain: 'travel',
    content:
      'Frequent travelers often {{s1}} room upgrades upon checking into luxury hotels. Desk agents will {{s2}} guests regarding availability and loyalty tier benefits. Delivering {{s3}} customer service fosters strong guest retention over time. Attentive service will {{s4}} positive online travel recommendations.',
    contentZh:
      '升等房型請求',
    slots: [
      { id: 's1', pos: 'v', tags: ['request', 'communication'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'shopping_cooperation_brand_01',
    title: 'Cooperation Brand',
    titleZh: '品牌跨界合作',
    level: ['toefl_ielts', 'advanced'],
    domain: 'daily',
    content:
      'Retail brands often {{s1}} with renowned designers to launch limited apparel collections. Marketing managers will {{s2}} consumers through targeted social media announcements. It is {{s3}} to establish clear contract terms before campaign launches. Unique collaborations will {{s4}} higher customer engagement and sales revenue.',
    contentZh:
      '品牌跨界合作',
    slots: [
      { id: 's1', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'daily_frequency_exercise_01',
    title: 'Frequency Exercise',
    titleZh: '運動頻率規劃',
    level: ['elementary', 'highschool'],
    domain: 'daily',
    content:
      'Maintaining a {{s1}} exercise routine helps improve physical stamina significantly. Trainers will {{s2}} beginners on proper warmup exercises to prevent injury. It is {{s3}} to stay hydrated throughout strenuous workout sessions. Regular movement will {{s4}} energy levels across daily activities.',
    contentZh:
      '運動頻率規劃',
    slots: [
      { id: 's1', pos: 'adj', tags: ['frequency', 'time'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['state_change'] },
    ],
  },
  {
    id: 'science_importance_safety_01',
    title: 'Importance Safety',
    titleZh: '實驗安全規範',
    level: ['highschool', 'toeic'],
    domain: 'science',
    content:
      'Adhering to safety standards is {{s1}} when handling hazardous chemicals in laboratories. Supervisors will {{s2}} researchers regarding proper disposal protocols. Scientists must {{s3}} leaks or spills immediately to maintain safety. Proper procedures will {{s4}} a secure work environment for lab staff.',
    contentZh:
      '實驗安全規範',
    slots: [
      { id: 's1', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's4', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'workplace_inform_policy_01',
    title: 'Inform Policy',
    titleZh: '政策宣導說明',
    level: ['highschool', 'toeic'],
    domain: 'workplace',
    content:
      'Human resources called a company meeting to {{s1}} employees regarding new remote work policies. Management hopes to {{s2}} with staff to resolve operational challenges. It is {{s3}} that everyone reads the revised compliance handbook carefully. These changes will {{s4}} workplace flexibility for all remote workers.',
    contentZh:
      '政策宣導說明',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's3', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['state_change'] },
    ],
  }
];
