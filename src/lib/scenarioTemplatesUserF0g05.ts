import type { ScenarioTemplate } from './scenarioTemplates';

/** bulk F0 group 5 */
export const USER_SCENARIO_TEMPLATES_F0g05: ScenarioTemplate[] = [
  {
    id: 'hotel_room_service_02',
    title: 'Room Service',
    titleZh: '客房服務需求',
    level: ['highschool', 'toeic'],
    domain: 'travel',
    content:
      'Hotel guests frequently {{s1}} additional towels or extra pillows from housekeeping staff. Room service teams try to {{s2}} orders rapidly during busy evening hours. Call attendants will {{s3}} diners regarding estimated delivery times for room meals. After a {{s4}} delay, fresh meals arrive directly at guest room doors. Providing reliable service reflects a {{s5}} commitment to hospitality excellence.',
    contentZh:
      '客房服務需求',
    slots: [
      { id: 's1', pos: 'v', tags: ['request', 'communication'] },
      { id: 's2', pos: 'v', tags: ['process'] },
      { id: 's3', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's4', pos: 'adj', tags: ['duration', 'time'] },
      { id: 's5', pos: 'adj', tags: ['quality', 'evaluation'] },
    ],
  },
  {
    id: 'hotel_facility_maintenance_03',
    title: 'Facility Maintenance',
    titleZh: '飯店設施維修',
    level: ['highschool', 'toeic'],
    domain: 'travel',
    content:
      'When hotel elevators stop working, technicians must {{s1}} repairs without unnecessary delay. Front desk staff should {{s2}} arriving guests about temporary service outages. Maintenance staff will {{s3}} with engineering teams to replace faulty mechanical parts. Temporary elevator outages cause {{s4}} inconvenience during peak check-in hours. Fixing technical problems rapidly remains an {{s5}} priority for management.',
    contentZh:
      '飯店設施維修',
    slots: [
      { id: 's1', pos: 'v', tags: ['process'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
  {
    id: 'hotel_vip_lounge_04',
    title: 'Vip Lounge',
    titleZh: '貴賓休息室服務',
    level: ['highschool', 'toeic'],
    domain: 'travel',
    content:
      'Executive lounge access allows business travelers to {{s1}} daily tasks in quiet surroundings. Staff members actively {{s2}} individual guest needs and offer personalized drink orders. Concierge agents will {{s3}} travelers about local transport options and meeting venues. Guests value a {{s4}} respite from noisy public areas during busy travel trips. Premium lounge amenities provide a {{s5}} environment for work and relaxation.',
    contentZh:
      '貴賓休息室服務',
    slots: [
      { id: 's1', pos: 'v', tags: ['process'] },
      { id: 's2', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's3', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's4', pos: 'adj', tags: ['duration', 'time'] },
      { id: 's5', pos: 'adj', tags: ['quality', 'evaluation'] },
    ],
  },
  {
    id: 'daily_home_renovation_01',
    title: 'Home Renovation',
    titleZh: '居家裝修溝通',
    level: ['highschool', 'toeic'],
    domain: 'daily',
    content:
      'Renovating an apartment requires homeowners to {{s1}} design expectations with structural contractors. Building workers must {{s2}} construction activities according to local housing safety regulations. Neighbors may {{s3}} excessive drilling noise during morning work hours. Contractors should {{s4}} residents in advance about temporary water supply shutoffs. Keeping project timelines clear is an {{s5}} factor in finishing homes smoothly.',
    contentZh:
      '居家裝修溝通',
    slots: [
      { id: 's1', pos: 'v', tags: ['communication'] },
      { id: 's2', pos: 'v', tags: ['process'] },
      { id: 's3', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's4', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's5', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
  {
    id: 'daily_community_meeting_02',
    title: 'Community Meeting',
    titleZh: '社區住戶大會',
    level: ['highschool', 'toeic'],
    domain: 'daily',
    content:
      'Neighborhood association meetings allow residents to {{s1}} board members about community issues. Neighbors often {{s2}} over shared parking space rules and noise guidelines. Committee leaders try to {{s3}} with local police to improve neighborhood security. Residents usually {{s4}} better maintenance for public gardens and lighting fixtures. Active resident participation provides a {{s5}} foundation for local neighborhood safety.',
    contentZh:
      '社區住戶大會',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'v', tags: ['conflict', 'social'] },
      { id: 's3', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's4', pos: 'v', tags: ['request', 'communication'] },
      { id: 's5', pos: 'adj', tags: ['quality', 'evaluation'] },
    ],
  },
];
