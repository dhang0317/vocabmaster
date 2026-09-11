import type { ScenarioTemplate } from './scenarioTemplates';

/** User batch F0_0 — bulk upload */
export const USER_SCENARIO_TEMPLATES_F0_0: ScenarioTemplate[] = [
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
];
