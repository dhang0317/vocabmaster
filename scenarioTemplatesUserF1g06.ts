import type { ScenarioTemplate } from './scenarioTemplates';

/** bulk F1 group 6 */
export const USER_SCENARIO_TEMPLATES_F1g06: ScenarioTemplate[] = [
  {
    id: 'hotel_complaint_handling_04',
    title: 'Complaint Handling',
    titleZh: '飯店客訴處理',
    level: ['highschool', 'toeic'],
    domain: 'travel',
    content:
      'When noise levels become intolerable, guests often {{s1}} the manager immediately. The manager must {{s2}} the situation calmly to find an acceptable solution. Front desk agents try to {{s3}} with housekeepers to arrange immediate room changes. Delivering a {{s4}} resolution helps restore customer confidence in hotel standards. Prompt action can {{s5}} a negative experience into a positive impression.',
    contentZh:
      '飯店客訴處理',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's3', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's4', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's5', pos: 'v', tags: ['state_change'] },
    ],
  },
  {
    id: 'hotel_conference_room_05',
    title: 'Conference Room',
    titleZh: '會議廳地預訂',
    level: ['highschool', 'toeic'],
    domain: 'travel',
    content:
      'Corporate clients often {{s1}} specialized equipment when booking hotel banquet halls. Event managers will {{s2}} organizers about catering packages and seating layouts. Technicians will {{s3}} with speakers to ensure seamless audio visual presentation. Maintaining high service levels is {{s4}} for securing recurring corporate bookings. Professional execution will {{s5}} successful conferences that impress attending delegates.',
    contentZh:
      '會議廳地預訂',
    slots: [
      { id: 's1', pos: 'v', tags: ['request', 'communication'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's4', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'hotel_shuttle_service_06',
    title: 'Shuttle Service',
    titleZh: '接駁巴士服務',
    level: ['highschool', 'toeic'],
    domain: 'travel',
    content:
      'The luxury resort provides a {{s1}} shuttle service to airport terminals. Front desk clerks will {{s2}} departing guests about exact bus departure times. It is {{s3}} to reserve seats early during peak holiday seasons. Shuttle drivers usually {{s4}} heavy traffic patterns to adjust routes accordingly. Timely transportation will {{s5}} a stress-free departure experience for all guests.',
    contentZh:
      '接駁巴士服務',
    slots: [
      { id: 's1', pos: 'adj', tags: ['frequency', 'time'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'hotel_executive_lounge_07',
    title: 'Executive Lounge',
    titleZh: '行政酒廊服務',
    level: ['highschool', 'toeic'],
    domain: 'travel',
    content:
      'Executive lounge access provides a {{s1}} space for quiet business work. Attendants will {{s2}} guests regarding evening complimentary food and beverage service. Guests can {{s3}} assistance with printing documents or arranging local taxis. Staff members attentively {{s4}} guest needs without creating unnecessary operational disturbance. This premium amenity will {{s5}} high loyalty among frequent business traveler guests.',
    contentZh:
      '行政酒廊服務',
    slots: [
      { id: 's1', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['request', 'communication'] },
      { id: 's4', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'hotel_express_checkout_08',
    title: 'Express Checkout',
    titleZh: '快速退房手續',
    level: ['highschool', 'toeic'],
    domain: 'travel',
    content:
      'Using express checkout allows departing guests to {{s1}} long lobby lines. Receptionists will {{s2}} guests about emailed itemized billing statements modernly. Customers should {{s3}} charged amounts carefully before leaving the resort premises. Maintaining accurate accounts is {{s4}} for hotel accounting and customer trust. Modern digital options {{s5}} traditional checkout procedures into convenient streamlined experiences.',
    contentZh:
      '快速退房手續',
    slots: [
      { id: 's1', pos: 'v', tags: ['cause_effect'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's4', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's5', pos: 'v', tags: ['state_change'] },
    ],
  }
];
