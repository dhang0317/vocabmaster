import type { ScenarioTemplate } from './scenarioTemplates';

/** bulk F0 group 1 */
export const USER_SCENARIO_TEMPLATES_F0g01: ScenarioTemplate[] = [
  {
    id: 'hotel_breakfast_buffet_02',
    title: 'Breakfast Buffet',
    titleZh: '飯店自助早餐',
    level: ['elementary', 'highschool'],
    domain: 'travel',
    content:
      'Morning dining options at hotels offer various foods for travelers. Guests often {{s1}} fresh bakery items and seasonal fruits near the entrance. Kitchen staff work hard to {{s2}} hot dishes continuously during service hours. Visitors should {{s3}} special dietary accommodations directly from table servers. A overall {{s4}} meal gives guests sufficient energy before starting outdoor sightseeing tours.',
    contentZh:
      '飯店自助早餐',
    slots: [
      { id: 's1', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['process'] },
      { id: 's3', pos: 'v', tags: ['request', 'communication'] },
      { id: 's4', pos: 'adj', tags: ['quality', 'evaluation'] },
    ],
  },
  {
    id: 'shopping_grocery_list_01',
    title: 'Grocery List',
    titleZh: '超市採買清單',
    level: ['elementary', 'highschool'],
    domain: 'daily',
    content:
      'Making a shopping list helps shoppers avoid unnecessary spending at stores. People can {{s1}} discounts on seasonal produce near store entrances. Comparing prices carefully serves as an {{s2}} habit for household budgeting. Cashiers will {{s3}} customers about membership point rewards during checkout. Taking a {{s4}} moment to review receipts ensures pricing accuracy before leaving.',
    contentZh:
      '超市採買清單',
    slots: [
      { id: 's1', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's2', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's3', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's4', pos: 'adj', tags: ['duration', 'time'] },
    ],
  },
  {
    id: 'health_daily_walking_01',
    title: 'Daily Walking',
    titleZh: '日常散步健身',
    level: ['elementary', 'highschool'],
    domain: 'daily',
    content:
      'Walking every day offers surprising benefits for overall body wellness. Doctors frequently {{s1}} patients that light physical activity reduces stress. Taking a {{s2}} stroll after dinner supports healthy digestion for most people. Individuals often {{s3}} improved energy levels after maintaining this routine for weeks. Staying active remains an {{s4}} goal for maintaining good long-term health.',
    contentZh:
      '日常散步健身',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'adj', tags: ['duration', 'time'] },
      { id: 's3', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's4', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
  {
    id: 'workplace_daily_standup_01',
    title: 'Daily Standup',
    titleZh: '晨間團隊站會',
    level: ['elementary', 'highschool'],
    domain: 'workplace',
    content:
      'Team members meet briefly every morning to align on daily goals. Each person will {{s1}} colleagues about finished tasks and upcoming plans. Teammates readily {{s2}} whenever somebody runs into unexpected technical obstacles. Keeping these discussions brief ensures a {{s3}} workflow without wasting precious working hours. Clear communication during early meetings leads to {{s4}} progress across departments.',
    contentZh:
      '晨間團隊站會',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's3', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's4', pos: 'adj', tags: ['evaluation'] },
    ],
  },
  {
    id: 'workplace_desk_setup_02',
    title: 'Desk Setup',
    titleZh: '辦公座位整理',
    level: ['elementary', 'highschool'],
    domain: 'workplace',
    content:
      'A clean office workspace improves concentration and daily productivity. Workers should {{s1}} which items are necessary for immediate job tasks. Placing heavy monitors at eye level prevents {{s2}} strain on the neck muscles. Colleagues may {{s3}} additional storage supplies from office managers when needed. Maintaining tidy desks creates an overall {{s4}} environment for the whole department.',
    contentZh:
      '辦公座位整理',
    slots: [
      { id: 's1', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's2', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's3', pos: 'v', tags: ['request', 'communication'] },
      { id: 's4', pos: 'adj', tags: ['evaluation'] },
    ],
  },
];
