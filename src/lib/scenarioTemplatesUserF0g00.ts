import type { ScenarioTemplate } from './scenarioTemplates';

/** bulk F0 group 0 */
export const USER_SCENARIO_TEMPLATES_F0g00: ScenarioTemplate[] = [
  {
    id: 'daily_morning_routine_01',
    title: 'Morning Routine',
    titleZh: '晨間習慣調整',
    level: ['elementary', 'highschool'],
    domain: 'daily',
    content:
      'Starting the day with a simple habit can make mornings more manageable. I usually {{s1}} how my body feels after waking up early. It is a {{s2}} quiet period before standard tasks begin. When I {{s3}} my thoughts during coffee, I feel less rushed. This small routine helps me {{s4}} my energy level naturally for the rest of the day.',
    contentZh:
      '晨間習慣調整',
    slots: [
      { id: 's1', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's2', pos: 'adj', tags: ['duration', 'time'] },
      { id: 's3', pos: 'v', tags: ['process'] },
      { id: 's4', pos: 'v', tags: ['state_change'] },
    ],
  },
  {
    id: 'daily_bus_commute_02',
    title: 'Bus Commute',
    titleZh: '公車通勤經驗',
    level: ['elementary', 'highschool'],
    domain: 'daily',
    content:
      'Taking the public bus every morning is a common routine for urban residents. Passengers usually {{s1}} available seats as soon as doors open. The route requires a {{s2}} ride through busy downtown streets. Most commuters try to {{s3}} quietly on their phones or listen to podcasts. Drivers must {{s4}} traffic conditions constantly to keep everyone safe during the trip.',
    contentZh:
      '公車通勤經驗',
    slots: [
      { id: 's1', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's2', pos: 'adj', tags: ['duration', 'time'] },
      { id: 's3', pos: 'v', tags: ['communication'] },
      { id: 's4', pos: 'v', tags: ['process'] },
    ],
  },
  {
    id: 'travel_train_booking_01',
    title: 'Train Booking',
    titleZh: '火車車票預訂',
    level: ['elementary', 'highschool'],
    domain: 'travel',
    content:
      'Planning a weekend trip requires buying train tickets early. Travelers should {{s1}} their companions about preferred departure times. Checking ticket options in a {{s2}} step prevents schedule conflicts later. Station staff will gladly {{s3}} with visitors who need directions. Choosing off-peak hours offers a {{s4}} travel experience with fewer crowds on board.',
    contentZh:
      '火車車票預訂',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'adj', tags: ['sequence', 'time'] },
      { id: 's3', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's4', pos: 'adj', tags: ['quality', 'evaluation'] },
    ],
  },
  {
    id: 'travel_packing_tips_02',
    title: 'Packing Tips',
    titleZh: '行李打包須知',
    level: ['elementary', 'highschool'],
    domain: 'travel',
    content:
      'Packing luggage efficiently makes traveling between cities much easier. You should first {{s1}} what weather conditions to expect at your destination. Carrying heavy items creates a {{s2}} strain on your shoulders during long walks. Airline agents usually {{s3}} passengers about baggage size restrictions before boarding. Keeping travel documents organized remains an {{s4}} step for every international journey.',
    contentZh:
      '行李打包須知',
    slots: [
      { id: 's1', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's2', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's3', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's4', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
  {
    id: 'hotel_checkin_process_01',
    title: 'Checkin Process',
    titleZh: '飯店辦理入住',
    level: ['elementary', 'highschool'],
    domain: 'travel',
    content:
      'Arriving at the hotel reception desk is the first step of any stay. Guests must {{s1}} the clerk of their reservation details upon arrival. The front desk team will {{s2}} quickly to prepare keys and provide room cards. A {{s3}} wait in the main lobby is standard during busy hours. Receptionists often {{s4}} essential hotel guidelines to ensure guest comfort throughout the stay.',
    contentZh:
      '飯店辦理入住',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's3', pos: 'adj', tags: ['duration', 'time'] },
      { id: 's4', pos: 'v', tags: ['communication'] },
    ],
  }
];
