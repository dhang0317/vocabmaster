import type { ScenarioTemplate } from './scenarioTemplates';

/** bulk F1 group 17 */
export const USER_SCENARIO_TEMPLATES_F1g17: ScenarioTemplate[] = [
  {
    id: 'health_chronic_disease_09',
    title: 'Chronic Disease',
    titleZh: '慢性病管理學',
    level: ['toefl_ielts', 'advanced'],
    domain: 'daily',
    content:
      'Managing chronic medical conditions requires physicians to {{s1}} patients about long-term therapies. Healthcare providers try to {{s2}} with dietitians to create customized wellness plans. Patients must {{s3}} early symptom escalations to seek timely medical intervention. Maintaining a {{s4}} treatment regimen reduces long-term hospitalization risks. Continuous patient monitoring will {{s5}} quality of life for individuals with chronic illnesses.',
    contentZh:
      '慢性病管理學',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's3', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's4', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's5', pos: 'v', tags: ['state_change'] },
    ],
  },
  {
    id: 'health_mental_health_policy_10',
    title: 'Mental Health Policy',
    titleZh: '心理健康政策',
    level: ['toefl_ielts', 'advanced'],
    domain: 'daily',
    content:
      'Developing mental health policy mandates governments to {{s1}} communities regarding support services. Policy makers must {{s2}} socio-economic factors that exacerbate psychological distress in populations. Expanding community therapy access is {{s3}} for reducing societal mental health burdens. Healthcare organizations should {{s4}} to destigmatize psychological counseling seeking. Comprehensive healthcare strategies will {{s5}} healthier urban communities overall.',
    contentZh:
      '心理健康政策',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's3', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'travel_eco_tourism_11',
    title: 'Eco Tourism',
    titleZh: '生態永續旅遊',
    level: ['toefl_ielts', 'advanced'],
    domain: 'travel',
    content:
      'Promoting sustainable eco-tourism requires agencies to {{s1}} tourists about wildlife conservation protocols. Local guides try to {{s2}} with indigenous communities to preserve local habitats. It is {{s3}} to limit visitor numbers in ecologically vulnerable wilderness areas. Travelers must {{s4}} environmental impact indicators during wilderness trekking trips. Responsible tourism practices will {{s5}} long-term preservation of natural world heritage sites.',
    contentZh:
      '生態永續旅遊',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's3', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'travel_expedition_planning_12',
    title: 'Expedition Planning',
    titleZh: '極地探險規劃',
    level: ['toefl_ielts', 'advanced'],
    domain: 'travel',
    content:
      'Organizing polar expeditions requires explorers to {{s1}} extreme environmental hazards meticulously. Expedition leaders will {{s2}} crew members regarding safety protocols and navigation routes. Carrying a {{s3}} inventory of survival gear is essential in remote polar zones. Trekkers must {{s4}} subtle signs of hypothermia during extended ice field traverses. Thorough preparation will {{s5}} successful exploration missions in extreme planetary environments.',
    contentZh:
      '極地探險規劃',
    slots: [
      { id: 's1', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'travel_cultural_immersion_13',
    title: 'Cultural Immersion',
    titleZh: '深度文化體驗',
    level: ['toefl_ielts', 'advanced'],
    domain: 'travel',
    content:
      'Engaging in deep cultural immersion encourages travelers to {{s1}} traditional customs with respect. Local hosts will {{s2}} international guests regarding historical rituals and community etiquette. Participating in local traditions offers a {{s3}} perspective on global cultural diversity. Visitors should try to {{s4}} with community social projects during longer stays. Meaningful cultural exchanges will {{s5}} international travel into transformational life experiences.',
    contentZh:
      '深度文化體驗',
    slots: [
      { id: 's1', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's5', pos: 'v', tags: ['state_change'] },
    ],
  }
];
