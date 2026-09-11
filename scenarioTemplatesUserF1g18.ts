import type { ScenarioTemplate } from './scenarioTemplates';

/** bulk F1 group 18 */
export const USER_SCENARIO_TEMPLATES_F1g18: ScenarioTemplate[] = [
  {
    id: 'travel_solo_traveler_safety_14',
    title: 'Solo Traveler Safety',
    titleZh: '獨旅安全指引',
    level: ['toefl_ielts', 'advanced'],
    domain: 'travel',
    content:
      'Solo international travel requires adventurers to {{s1}} potential safety risks in unfamiliar settings. Travel advisors will {{s2}} independent tourists about emergency contact numbers and safe areas. Maintaining a {{s3}} communication plan with family ensures security during long journeys. It is {{s4}} to secure travel insurance covering medical emergency evacuations. Vigilant personal awareness will {{s5}} safe and fulfilling solo journeys worldwide.',
    contentZh:
      '獨旅安全指引',
    slots: [
      { id: 's1', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's4', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'travel_visa_immigration_15',
    title: 'Visa Immigration',
    titleZh: '簽證移民申請',
    level: ['toefl_ielts', 'advanced'],
    domain: 'travel',
    content:
      'Navigating international visa requirements requires applicants to {{s1}} immigration officials accurately. Legal consultants will {{s2}} specific documentation criteria for skilled worker visa categories. Providing {{s3}} supporting documents is mandatory to avoid visa application rejection. Applicants must {{s4}} strict deadline requirements for official documentation submissions. Careful visa preparation will {{s5}} smooth entry clearance into target destinations.',
    contentZh:
      '簽證移民申請',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's3', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'hotel_vip_concierge_09',
    title: 'Vip Concierge',
    titleZh: '貴賓禮賓服務',
    level: ['toefl_ielts', 'advanced'],
    domain: 'travel',
    content:
      'Providing luxury concierge services requires staff to {{s1}} unique guest desires before requested. Concierge managers will {{s2}} VIP clients regarding exclusive local cultural events and bookings. Delivering a {{s3}} hospitality experience requires seamless inter-departmental collaboration. Staff members will {{s4}} with local luxury vendors to arrange custom guest itineraries. Unparalleled service standards will {{s5}} prestigious international hospitality awards for hotels.',
    contentZh:
      '貴賓禮賓服務',
    slots: [
      { id: 's1', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'hotel_sustainability_10',
    title: 'Sustainability',
    titleZh: '綠色飯店營運',
    level: ['toefl_ielts', 'advanced'],
    domain: 'travel',
    content:
      'Implementing eco-friendly hotel practices mandates management to {{s1}} guests about energy conservation goals. Operations directors must {{s2}} water usage metrics across guest suites and laundry facilities. Adopting renewable energy systems is {{s3}} for reducing environmental footprint metrics. Staff will {{s4}} with local recycling organizations to minimize hospitality waste streams. Green hotel initiatives will {{s5}} brand appeal among environmentally conscious global travelers.',
    contentZh:
      '綠色飯店營運',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's3', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's5', pos: 'v', tags: ['state_change'] },
    ],
  },
  {
    id: 'shopping_e_commerce_logistics_09',
    title: 'E Commerce Logistics',
    titleZh: '電商物流優化',
    level: ['toefl_ielts', 'advanced'],
    domain: 'daily',
    content:
      'Optimizing e-commerce logistics requires companies to {{s1}} warehouse fulfillment speed and delivery costs. Logistics directors will {{s2}} clients about automated package tracking updates in real time. Maintaining a {{s3}} fulfillment network ensures timely order deliveries during holiday spikes. Operators must {{s4}} bottlenecks in distribution centers to prevent shipping delays. Efficient logistical operations will {{s5}} higher customer retention rates for online brands.',
    contentZh:
      '電商物流優化',
    slots: [
      { id: 's1', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  }
];
