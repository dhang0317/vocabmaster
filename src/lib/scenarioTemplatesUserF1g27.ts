import type { ScenarioTemplate } from './scenarioTemplates';

/** bulk F1 group 27 */
export const USER_SCENARIO_TEMPLATES_F1g27: ScenarioTemplate[] = [
  {
    id: 'hotel_inform_policy_01',
    title: 'Inform Policy',
    titleZh: '入住政策說明',
    level: ['elementary', 'highschool'],
    domain: 'travel',
    content:
      'Front desk staff will {{s1}} arriving guests about checkout times and parking rules. Guests can {{s2}} extra towels or pillows from housekeeping staff anytime. Maintaining clean facilities is {{s3}} for guest comfort and satisfaction. Great hospitality will {{s4}} pleasant stays for vacationers.',
    contentZh:
      '飯店政策說明',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'v', tags: ['request', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'workplace_sequence_phase_01',
    title: 'Sequence Phase',
    titleZh: '專案前後階段',
    level: ['toefl_ielts', 'advanced'],
    domain: 'workplace',
    content:
      'Following system testing, team members initiated a {{s1}} phase of software deployment. Directors will {{s2}} clients regarding implementation timelines and training support. Achieving a {{s3}} software launch requires rigorous quality assurance testing. Seamless deployment will {{s4}} elevated operational productivity for client teams.',
    contentZh:
      '專案前後階段',
    slots: [
      { id: 's1', pos: 'adj', tags: ['sequence', 'time'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'travel_cooperation_tour_01',
    title: 'Cooperation Tour',
    titleZh: '旅行團團體合作',
    level: ['elementary', 'highschool'],
    domain: 'travel',
    content:
      'Tour participants are asked to {{s1}} with guides during group excursions. Tour leaders will {{s2}} travelers about meeting locations and departure times. Punctuality is {{s3}} to keep travel itineraries running on schedule. Good teamwork will {{s4}} a smooth and enjoyable trip for everyone.',
    contentZh:
      '旅行團團體合作',
    slots: [
      { id: 's1', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'academic_perception_pattern_01',
    title: 'Perception Pattern',
    titleZh: '發現研究規律',
    level: ['toefl_ielts', 'advanced'],
    domain: 'academic',
    content:
      'Through systematic observation, scientists were able to {{s1}} key statistical patterns in experimental data. Researchers will {{s2}} journal editors about their new empirical findings. Conducting a {{s3}} data analysis is vital for academic publication success. Clear findings will {{s4}} breakthroughs in theoretical understanding across disciplines.',
    contentZh:
      '發現研究規律',
    slots: [
      { id: 's1', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'shopping_quality_products_01',
    title: 'Quality Products',
    titleZh: '選購高品質商品',
    level: ['elementary', 'highschool'],
    domain: 'daily',
    content:
      'Choosing {{s1}} products ensures longer durability and better personal satisfaction. Store clerks will {{s2}} customers about product warranties and materials. Shoppers should {{s3}} whether items are worth their listed retail price. Wise purchasing habits will {{s4}} long-term savings for household budgets.',
    contentZh:
      '選購高品質商品',
    slots: [
      { id: 's1', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's4', pos: 'v', tags: ['cause_effect'] },
    ],
  },
];
