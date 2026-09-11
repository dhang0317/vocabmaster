import type { ScenarioTemplate } from './scenarioTemplates';

/** bulk F1 group 19 */
export const USER_SCENARIO_TEMPLATES_F1g19: ScenarioTemplate[] = [
  {
    id: 'shopping_consumer_behavior_10',
    title: 'Consumer Behavior',
    titleZh: '消費者行為研究',
    level: ['toefl_ielts', 'advanced'],
    domain: 'daily',
    content:
      'Analyzing consumer behavior requires marketing experts to {{s1}} digital purchase patterns and demographics. Market researchers will {{s2}} product teams regarding shifting online consumer preferences. Identifying key purchasing motivators is {{s3}} for designing effective advertising campaigns. Analysts must {{s4}} subtle changes in consumer demand before competitors react. Insightful market research will {{s5}} strategic advantages for retail expansion plans.',
    contentZh:
      '消費者行為研究',
    slots: [
      { id: 's1', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'daily_urban_living_12',
    title: 'Urban Living',
    titleZh: '永續都市生活',
    level: ['toefl_ielts', 'advanced'],
    domain: 'daily',
    content:
      'Adopting sustainable urban living habits encourages citizens to {{s1}} on community recycling programs. City planners often {{s2}} residents about public transit expansions and bicycle infrastructure. Reducing household carbon emissions is an {{s3}} goal for modern city residents. People should {{s4}} opportunities to reduce plastic waste in daily consumer choices. Sustainable lifestyle changes will {{s5}} urban environments into healthier living spaces.',
    contentZh:
      '永續都市生活',
    slots: [
      { id: 's1', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's5', pos: 'v', tags: ['state_change'] },
    ],
  },
  {
    id: 'daily_digital_detox_13',
    title: 'Digital Detox',
    titleZh: '數位減毒實踐',
    level: ['toefl_ielts', 'advanced'],
    domain: 'daily',
    content:
      'Practicing digital detox allows individuals to {{s1}} how excessive smartphone usage affects mental wellbeing. Wellness coaches will {{s2}} participants about techniques for establishing screen-free boundaries. Taking a {{s3}} break from social media platforms reduces psychological stress significantly. It is {{s4}} to engage in offline hobbies and physical activities regularly. Reduced screen dependence will {{s5}} focus levels and interpersonal relationships.',
    contentZh:
      '數位減毒實踐',
    slots: [
      { id: 's1', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['duration', 'time'] },
      { id: 's4', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's5', pos: 'v', tags: ['state_change'] },
    ],
  },
  {
    id: 'daily_lifelong_learning_14',
    title: 'Lifelong Learning',
    titleZh: '終身學習發展',
    level: ['toefl_ielts', 'advanced'],
    domain: 'daily',
    content:
      'Pursuing lifelong learning enables adults to {{s1}} professional skill sets in evolving markets. Educators try to {{s2}} learners about self-paced online diploma options and workshops. Engaging in continuous education offers a {{s3}} advantage in competitive career environments. Individuals must {{s4}} personal knowledge gaps to choose appropriate educational courses. Dedicated self-improvement will {{s5}} sustained career advancement over time.',
    contentZh:
      '終身學習發展',
    slots: [
      { id: 's1', pos: 'v', tags: ['state_change'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'daily_community_leadership_15',
    title: 'Community Leadership',
    titleZh: '社區領導溝通',
    level: ['toefl_ielts', 'advanced'],
    domain: 'daily',
    content:
      'Community leaders work tirelessly to {{s1}} residents about local public policy changes. Organizer teams will {{s2}} with city councils to secure funds for public parks. It is {{s3}} to foster inclusive dialogue among diverse neighborhood groups. Leaders must {{s4}} underlying civic concerns before implementing major community projects. Strong neighborhood engagement will {{s5}} safer and more resilient residential areas.',
    contentZh:
      '社區領導溝通',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's3', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
];
