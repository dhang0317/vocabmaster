import type { ScenarioTemplate } from './scenarioTemplates';

/** bulk F0 group 13 */
export const USER_SCENARIO_TEMPLATES_F0g13: ScenarioTemplate[] = [
  {
    id: 'travel_aviation_safety_06',
    title: 'Aviation Safety',
    titleZh: '航空安全規範',
    level: ['toefl_ielts', 'advanced'],
    domain: 'travel',
    content:
      'Aviation regulatory authorities periodically {{s1}} air traffic control safety compliance records. Flight crews must {{s2}} passengers during sudden turbulent weather conditions. Pilots are trained to {{s3}} complex instrument data during emergency landing procedures. Encountering {{s4}} atmospheric turbulence requires immediate pilot reaction. Rigorous equipment maintenance remains an {{s5}} requirement for commercial aviation.',
    contentZh:
      '航空安全規範',
    slots: [
      { id: 's1', pos: 'v', tags: ['process'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
  {
    id: 'travel_volcano_monitoring_07',
    title: 'Volcano Monitoring',
    titleZh: '火山旅遊警報',
    level: ['toefl_ielts', 'advanced'],
    domain: 'travel',
    content:
      'Geologists monitoring active volcanic zones try to {{s1}} seismic activity signaling impending eruptions. Authorities will {{s2}} local tour operators to evacuate hazardous observation zones immediately. Safety teams must {{s3}} with emergency services to secure surrounding roads. Volcanic ash clouds cause {{s4}} disruption to regional air traffic networks. Timely public warnings play an {{s5}} role in protecting visiting tourists.',
    contentZh:
      '火山旅遊警報',
    slots: [
      { id: 's1', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
  {
    id: 'hotel_boutique_branding_01',
    title: 'Boutique Branding',
    titleZh: '精品飯店品牌',
    level: ['toefl_ielts', 'advanced'],
    domain: 'travel',
    content:
      'Luxury boutique hotels attempt to {{s1}} bespoke hospitality experiences to affluent international travelers. Interior designers work to {{s2}} custom artistic decor into guest room layouts. General managers carefully {{s3}} subtle shifts in luxury guest expectations. Facing {{s4}} competition from multinational chains requires constant service innovation. Delivering exceptional hospitality standards establishes a {{s5}} brand reputation.',
    contentZh:
      '精品飯店品牌',
    slots: [
      { id: 's1', pos: 'v', tags: ['communication'] },
      { id: 's2', pos: 'v', tags: ['process'] },
      { id: 's3', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['quality', 'evaluation'] },
    ],
  },
  {
    id: 'hotel_convention_hosting_02',
    title: 'Convention Hosting',
    titleZh: '大型會議承辦',
    level: ['toefl_ielts', 'advanced'],
    domain: 'travel',
    content:
      'Hosting global conventions requires hotel event directors to {{s1}} with international summit planners. Catering teams must {{s2}} thousands of specialized banquet meals simultaneously. Event coordinators should {{s3}} corporate guests regarding schedule changes across presentation halls. Unforeseen technical failures during live speeches cause {{s4}} embarrassment for organizers. Flawless execution remains an {{s5}} goal for convention venues.',
    contentZh:
      '大型會議承辦',
    slots: [
      { id: 's1', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's2', pos: 'v', tags: ['process'] },
      { id: 's3', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
  {
    id: 'hotel_sustainable_resort_03',
    title: 'Sustainable Resort',
    titleZh: '永續度假村營運',
    level: ['toefl_ielts', 'advanced'],
    domain: 'travel',
    content:
      'Eco-friendly luxury resorts strive to {{s1}} organic waste through modern on-site composting facilities. General managers will {{s2}} eco-conscious guests about solar power energy systems. Staff members learn to {{s3}} potential opportunities for minimizing plastic waste. Excessive water usage creates {{s4}} strain on local island freshwater reserves. Implementing green operational practices delivers a {{s5}} model for sustainable hospitality.',
    contentZh:
      '永續度假村營運',
    slots: [
      { id: 's1', pos: 'v', tags: ['process'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['quality', 'evaluation'] },
    ],
  },
];
