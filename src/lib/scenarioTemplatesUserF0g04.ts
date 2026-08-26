import type { ScenarioTemplate } from './scenarioTemplates';

/** bulk F0 group 4 */
export const USER_SCENARIO_TEMPLATES_F0g04: ScenarioTemplate[] = [
  {
    id: 'travel_guided_tour_03',
    title: 'Guided Tour',
    titleZh: '城市導覽體驗',
    level: ['highschool', 'toeic'],
    domain: 'travel',
    content:
      'Joining a local walking tour helps visitors {{s1}} hidden historical sites across town. Tour guides will {{s2}} participants about ancient cultural stories behind old landmarks. Guests can {{s3}} recommendations for authentic local restaurants in the neighborhood. After a {{s4}} walk through historic streets, tourists stop for afternoon tea. Highly rated local guides deliver a {{s5}} experience for international visitors.',
    contentZh:
      '城市導覽體驗',
    slots: [
      { id: 's1', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['request', 'communication'] },
      { id: 's4', pos: 'adj', tags: ['duration', 'time'] },
      { id: 's5', pos: 'adj', tags: ['quality', 'evaluation'] },
    ],
  },
  {
    id: 'travel_car_rental_04',
    title: 'Car Rental',
    titleZh: '租車自駕體驗',
    level: ['highschool', 'toeic'],
    domain: 'travel',
    content:
      'Renting a vehicle gives travelers freedom when exploring remote coastal regions. Drivers should carefully {{s1}} existing scratches before leaving rental lots. Rental agents will {{s2}} clients about insurance policies and toll road payment systems. Drivers must {{s3}} navigational maps to plan optimal scenic driving routes. Ensuring proper vehicle insurance remains an {{s4}} step for road trip safety.',
    contentZh:
      '租車自駕體驗',
    slots: [
      { id: 's1', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['process'] },
      { id: 's4', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
  {
    id: 'travel_currency_exchange_05',
    title: 'Currency Exchange',
    titleZh: '外幣兌換技巧',
    level: ['highschool', 'toeic'],
    domain: 'travel',
    content:
      'Exchanging foreign currency requires smart planning to avoid excessive bank transaction fees. Travelers should {{s1}} current exchange rates across local money changers. Bank tellers will {{s2}} clients about service charges applied to cash exchanges. Keeping small currency bills handy is a {{s3}} tactic for paying street vendors. Taking a {{s4}} look at receipt figures prevents counting errors during transactions.',
    contentZh:
      '外幣兌換技巧',
    slots: [
      { id: 's1', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's4', pos: 'adj', tags: ['duration', 'time'] },
    ],
  },
  {
    id: 'travel_customs_declaration_06',
    title: 'Customs Declaration',
    titleZh: '海關申報流程',
    level: ['highschool', 'toeic'],
    domain: 'travel',
    content:
      'Passing through international customs requires passengers to {{s1}} border officers about imported goods. Customs agents will {{s2}} restricted items using advanced airport security scanners. Travelers must {{s3}} standard customs declaration forms accurately before border checkpoints. Failing to declare taxable goods leads to {{s4}} fines from border authorities. Truthful self-declaration provides a {{s5}} entry experience for foreign travelers.',
    contentZh:
      '海關申報流程',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's3', pos: 'v', tags: ['process'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['quality', 'evaluation'] },
    ],
  },
  {
    id: 'hotel_overbooking_issue_01',
    title: 'Overbooking Issue',
    titleZh: '飯店超訂處理',
    level: ['highschool', 'toeic'],
    domain: 'travel',
    content:
      'Overbooking forces hotel managers to {{s1}} incoming guests about immediate room changes. Receptionists try to {{s2}} with neighboring hotels to arrange alternative accommodations. Frustrated travelers often {{s3}} their anger regarding sudden schedule disruptions. Front desk staff work hard to {{s4}} full refunds and complimentary upgrade vouchers. Offering fair compensation remains an {{s5}} policy for preserving brand reputation.',
    contentZh:
      '飯店超訂處理',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's3', pos: 'v', tags: ['communication'] },
      { id: 's4', pos: 'v', tags: ['process'] },
      { id: 's5', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
];
