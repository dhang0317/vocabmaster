import type { ScenarioTemplate } from './scenarioTemplates';

/** bulk F1 group 5 */
export const USER_SCENARIO_TEMPLATES_F1g05: ScenarioTemplate[] = [
  {
    id: 'travel_currency_exchange_09',
    title: 'Currency Exchange',
    titleZh: '外幣兌換技巧',
    level: ['highschool', 'toeic'],
    domain: 'travel',
    content:
      'Exchanging foreign currency requires travelers to {{s1}} current conversion exchange rates. Financial teller officers will {{s2}} clients regarding applicable service transaction fees. Comparing rates online offers a {{s3}} advantage in avoiding high airport surcharges. It is {{s4}} to secure paper receipts for every financial transaction made. Proper planning can {{s5}} significant cost savings during international trips.',
    contentZh:
      '外幣兌換技巧',
    slots: [
      { id: 's1', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's4', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'travel_island_cruise_10',
    title: 'Island Cruise',
    titleZh: '跳島郵輪之旅',
    level: ['highschool', 'toeic'],
    domain: 'travel',
    content:
      'Cruising between tropical islands provides a {{s1}} retreat from urban stress. Onboard directors will {{s2}} guests about daily excursion itineraries and activities. Passengers frequently {{s3}} marine wildlife playing near the ship\'s bow deck. It is {{s4}} to pack adequate sun protection for outdoor deck activities. These memorable sea journeys will {{s5}} lifelong memories for whole families.',
    contentZh:
      '跳島郵輪之旅',
    slots: [
      { id: 's1', pos: 'adj', tags: ['duration', 'time'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's4', pos: 'adj', tags: ['evaluation'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'hotel_check_in_01',
    title: 'Check In',
    titleZh: '飯店登記入住',
    level: ['highschool', 'toeic'],
    domain: 'travel',
    content:
      'Upon arrival, the receptionist will {{s1}} guests regarding breakfast dining hours. Guests can {{s2}} a quiet room located on higher hotel floors. The front desk team maintains a {{s3}} standard of hospitality for international travelers. Staff members quickly {{s4}} special customer preferences to enhance overall room comfort. Superior service will {{s5}} favorable online guest reviews for the hotel.',
    contentZh:
      '飯店登記入住',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'v', tags: ['request', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'hotel_room_service_02',
    title: 'Room Service',
    titleZh: '客房餐飲服務',
    level: ['highschool', 'toeic'],
    domain: 'travel',
    content:
      'Ordering room service allows guests to enjoy a {{s1}} meal privately. You can call dining operations to {{s2}} specific dietary preparation adjustments. Staff will {{s3}} callers about expected delivery times during busy hours. Kitchen staff try to {{s4}} with guests to fulfill special dietary needs. Good room service will {{s5}} overall guest satisfaction during hotel stays.',
    contentZh:
      '客房餐飲服務',
    slots: [
      { id: 's1', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's2', pos: 'v', tags: ['request', 'communication'] },
      { id: 's3', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's4', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'hotel_facility_booking_03',
    title: 'Facility Booking',
    titleZh: '飯店設施預約',
    level: ['highschool', 'toeic'],
    domain: 'travel',
    content:
      'Guests wishing to access the spa must {{s1}} reservation times in advance. The concierge will {{s2}} visitors about pool rules and operating hours. Maintaining clean facilities is {{s3}} for preserving a luxury hotel reputation. Attendants closely {{s4}} safety conditions around the swimming pool area continuously. Proper maintenance will {{s5}} a pleasant environment for all vacationing families.',
    contentZh:
      '飯店設施預約',
    slots: [
      { id: 's1', pos: 'v', tags: ['request', 'communication'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  }
];
