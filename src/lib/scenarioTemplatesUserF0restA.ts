import type { ScenarioTemplate } from './scenarioTemplates';

/** User batch F0restA */
export const USER_SCENARIO_TEMPLATES_F0restA: ScenarioTemplate[] = [
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
  }
];
