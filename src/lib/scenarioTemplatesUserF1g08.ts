import type { ScenarioTemplate } from './scenarioTemplates';

/** bulk F1 group 8 */
export const USER_SCENARIO_TEMPLATES_F1g08: ScenarioTemplate[] = [
  {
    id: 'shopping_custom_orders_08',
    title: 'Custom Orders',
    titleZh: '客製化商品訂製',
    level: ['highschool', 'toeic'],
    domain: 'daily',
    content:
      'Ordering customized furniture requires customers to {{s1}} precise dimensions to designers. Craftsmen will {{s2}} with buyers to choose suitable wood and finishes. Creating bespoke items takes a {{s3}} manufacturing period before final delivery. Buyers should {{s4}} slight variations in natural materials like natural wood. Handcrafted quality will {{s5}} lasting satisfaction for homeowners seeking uniqueness.',
    contentZh:
      '客製化商品訂製',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's3', pos: 'adj', tags: ['duration', 'time'] },
      { id: 's4', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'daily_fitness_routine_06',
    title: 'Fitness Routine',
    titleZh: '健身運動計畫',
    level: ['highschool', 'toeic'],
    domain: 'daily',
    content:
      'Maintaining a regular exercise routine brings a {{s1}} improvement to wellness. Fitness trainers usually {{s2}} clients on proper weightlifting exercise form. Exercising regularly will {{s3}} physical strength and overall stamina over time. It is {{s4}} to rest adequately between intense workout sessions. Proper hydration will {{s5}} faster muscular recovery after strenuous training workouts.',
    contentZh:
      '健身運動計畫',
    slots: [
      { id: 's1', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['state_change'] },
      { id: 's4', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'daily_budgeting_tips_07',
    title: 'Budgeting Tips',
    titleZh: '個人理財規劃',
    level: ['highschool', 'toeic'],
    domain: 'daily',
    content:
      'Managing personal finances requires individuals to {{s1}} monthly income and expenses. Experts often {{s2}} young professionals about establishing emergency savings funds. Avoiding impulsive purchases offers a {{s3}} advantage toward long-term savings goals. It is {{s4}} to monitor credit card expenditure limits very carefully. Disciplined money management will {{s5}} financial stability during unexpected economic downturns.',
    contentZh:
      '個人理財規劃',
    slots: [
      { id: 's1', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's4', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'daily_time_management_08',
    title: 'Time Management',
    titleZh: '時間管理技巧',
    level: ['highschool', 'toeic'],
    domain: 'daily',
    content:
      'Effective time management allows professionals to {{s1}} tasks without overwhelming stress. Prioritizing daily obligations is an {{s2}} skill for productivity goals. Workers must {{s3}} distraction factors that consume valuable working hours daily. Planning schedules in advance will {{s4}} chaotic workdays into structured productivity. Organized daily habits consistently {{s5}} superior results in personal endeavors.',
    contentZh:
      '時間管理技巧',
    slots: [
      { id: 's1', pos: 'v', tags: ['process'] },
      { id: 's2', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's3', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's4', pos: 'v', tags: ['state_change'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'daily_community_gardening_09',
    title: 'Community Gardening',
    titleZh: '社區園藝活動',
    level: ['highschool', 'toeic'],
    domain: 'daily',
    content:
      'Participating in community gardens encourages residents to {{s1}} with neighbors. Experienced gardeners like to {{s2}} beginners about soil preparation techniques. Watching seeds sprout creates an {{s3}} feeling of joy for participants. Volunteers must {{s4}} signs of pest infestation to protect crops. Green urban projects will {{s5}} vacant neighborhood lots into vibrant spaces.',
    contentZh:
      '社區園藝活動',
    slots: [
      { id: 's1', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['evaluation'] },
      { id: 's4', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's5', pos: 'v', tags: ['state_change'] },
    ],
  },
];
