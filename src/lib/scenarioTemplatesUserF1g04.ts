import type { ScenarioTemplate } from './scenarioTemplates';

/** bulk F1 group 4 */
export const USER_SCENARIO_TEMPLATES_F1g04: ScenarioTemplate[] = [
  {
    id: 'travel_flight_delay_04',
    title: 'Flight Delay',
    titleZh: '班機延誤處理',
    level: ['highschool', 'toeic'],
    domain: 'travel',
    content:
      'Bad weather conditions caused a {{s1}} delay at the international airport. Airline agents worked tirelessly to {{s2}} stranded passengers about rebooking options. Travelers expressed {{s3}} frustration over missed flight connections and lost time. Ground staff attempted to {{s4}} with hotel partners for emergency accommodations. Timely updates helped to {{s5}} passenger anxiety during the long wait.',
    contentZh:
      '班機延誤處理',
    slots: [
      { id: 's1', pos: 'adj', tags: ['duration', 'time'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'travel_car_rental_05',
    title: 'Car Rental',
    titleZh: '租車自駕體驗',
    level: ['highschool', 'toeic'],
    domain: 'travel',
    content:
      'Renting a car allows travelers to {{s1}} hidden gems along coastal routes. Drivers must {{s2}} local traffic regulations before navigating unfamiliar city streets. The agency agent will {{s3}} customers about insurance coverage and fuel policies. It is {{s4}} to inspect the vehicle thoroughly for existing exterior scratches. Selecting a {{s5}} rental vehicle guarantees a safe and pleasant road trip.',
    contentZh:
      '租車自駕體驗',
    slots: [
      { id: 's1', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's3', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's4', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['quality', 'evaluation'] },
    ],
  },
  {
    id: 'travel_guided_museum_06',
    title: 'Guided Museum',
    titleZh: '博物館導覽行',
    level: ['highschool', 'toeic'],
    domain: 'travel',
    content:
      'Visiting historical museums offers a {{s1}} opportunity to study regional heritage. Expert curators will {{s2}} visitors on the origin of rare historical artifacts. Guests can {{s3}} subtle details in classical oil paintings up close. It is {{s4}} to refrain from flash photography inside exhibit galleries. Taking guided tours will {{s5}} a deeper cultural appreciation among travelers.',
    contentZh:
      '博物館導覽行',
    slots: [
      { id: 's1', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's4', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'travel_lost_passport_07',
    title: 'Lost Passport',
    titleZh: '護照遺失應變',
    level: ['highschool', 'toeic'],
    domain: 'travel',
    content:
      'Losing important travel documents causes {{s1}} worry for any overseas tourist. You should immediately {{s2}} local police and visit the nearest embassy. Embassy staff will {{s3}} proper identification papers before issuing emergency travel certificates. Maintaining a {{s4}} photocopy of your passport prevents prolonged identity verification issues. Quick action will {{s5}} faster resolution during such travel emergencies.',
    contentZh:
      '護照遺失應變',
    slots: [
      { id: 's1', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['request', 'communication'] },
      { id: 's4', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'travel_hiking_trail_08',
    title: 'Hiking Trail',
    titleZh: '登山步道探索',
    level: ['highschool', 'toeic'],
    domain: 'travel',
    content:
      'Hiking along mountain trails demands {{s1}} preparation and proper athletic gear. Park Rangers often {{s2}} hikers regarding sudden weather shifts and trail conditions. Trekkers should {{s3}} landmarks to stay on designated pathways safely. It is {{s4}} to carry sufficient drinking water for long strenuous ascents. Respecting nature helps to {{s5}} pristine wilderness environments for future generations.',
    contentZh:
      '登山步道探索',
    slots: [
      { id: 's1', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's4', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's5', pos: 'v', tags: ['state_change'] },
    ],
  },
];
