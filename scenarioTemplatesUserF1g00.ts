import type { ScenarioTemplate } from './scenarioTemplates';

/** bulk F1 group 0 */
export const USER_SCENARIO_TEMPLATES_F1g00: ScenarioTemplate[] = [
  {
    id: 'daily_morning_routine_01',
    title: 'Morning Routine',
    titleZh: '晨間習慣養成',
    level: ['elementary', 'highschool'],
    domain: 'daily',
    content:
      'Every morning, I try to {{s1}} my schedule before starting work. It is very {{s2}} to stay organized throughout the day. When unexpected challenges arise, I try to {{s3}} small opportunities for growth. My friend often likes to {{s4}} me about new productivity apps. Following a structured routine helps me maintain a {{s5}} mindset during busy hours.',
    contentZh:
      '晨間習慣養成',
    slots: [
      { id: 's1', pos: 'v', tags: ['process'] },
      { id: 's2', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's3', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's4', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's5', pos: 'adj', tags: ['quality', 'evaluation'] },
    ],
  },
  {
    id: 'daily_cooking_dinner_02',
    title: 'Cooking Dinner',
    titleZh: '溫馨晚餐時光',
    level: ['elementary', 'highschool'],
    domain: 'daily',
    content:
      'Cooking at home can {{s1}} stress after a long day at the office. I like to {{s2}} fresh vegetables and prepare a simple meal. My family will {{s3}} with me to set the dining table nicely. We often {{s4}} each other about interesting events from our day. It creates a {{s5}} atmosphere that everyone truly enjoys.',
    contentZh:
      '溫馨晚餐時光',
    slots: [
      { id: 's1', pos: 'v', tags: ['cause_effect'] },
      { id: 's2', pos: 'v', tags: ['process'] },
      { id: 's3', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's4', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's5', pos: 'adj', tags: ['emotion', 'evaluation'] },
    ],
  },
  {
    id: 'daily_weekend_walk_03',
    title: 'Weekend Walk',
    titleZh: '週末公園散步',
    level: ['elementary', 'highschool'],
    domain: 'daily',
    content:
      'Walking in the neighborhood park provides a {{s1}} break from daily work. I always {{s2}} colorful flowers blooming near the central fountain. Neighbors frequently {{s3}} with each other about local community news. Taking regular walks helps to {{s4}} my energy level naturally. This simple habit keeps my body healthy and my mind {{s5}}.',
    contentZh:
      '週末公園散步',
    slots: [
      { id: 's1', pos: 'adj', tags: ['duration', 'time'] },
      { id: 's2', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's3', pos: 'v', tags: ['communication'] },
      { id: 's4', pos: 'v', tags: ['state_change'] },
      { id: 's5', pos: 'v', tags: ['general'] },
    ],
  },
  {
    id: 'daily_cleaning_house_04',
    title: 'Cleaning House',
    titleZh: '居家清潔整頓',
    level: ['elementary', 'highschool'],
    domain: 'daily',
    content:
      'Cleaning the living room requires a {{s1}} effort to remove hidden dust. I usually {{s2}} the shelves first before washing the floors. My roommate agreed to {{s3}} by organizing all the old books. We hope to {{s4}} our home into a comfortable living environment. Maintaining cleanliness brings a {{s5}} feeling of comfort to our daily life.',
    contentZh:
      '居家清潔整頓',
    slots: [
      { id: 's1', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's2', pos: 'v', tags: ['process'] },
      { id: 's3', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's4', pos: 'v', tags: ['state_change'] },
      { id: 's5', pos: 'adj', tags: ['evaluation'] },
    ],
  },
  {
    id: 'daily_reading_habits_05',
    title: 'Reading Habits',
    titleZh: '閱讀習慣養成',
    level: ['elementary', 'highschool'],
    domain: 'daily',
    content:
      'Reading books before sleeping is a {{s1}} habit that calms my mind. I often {{s2}} new ideas while turning through the pages. Authors try to {{s3}} readers about different perspectives on life. It is {{s4}} to select topics that spark genuine personal interest. Regular reading can gradually {{s5}} your understanding of the surrounding world.',
    contentZh:
      '閱讀習慣養成',
    slots: [
      { id: 's1', pos: 'adj', tags: ['frequency', 'time'] },
      { id: 's2', pos: 'v', tags: ['general'] },
      { id: 's3', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's4', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's5', pos: 'v', tags: ['state_change'] },
    ],
  }
];
