import type { ScenarioTemplate } from './scenarioTemplates';

/** bulk F1 group 1 */
export const USER_SCENARIO_TEMPLATES_F1g01: ScenarioTemplate[] = [
  {
    id: 'travel_train_ticket_01',
    title: 'Train Ticket',
    titleZh: '火車車票預訂',
    level: ['elementary', 'highschool'],
    domain: 'travel',
    content:
      'Booking train tickets early is a {{s1}} step when planning a trip. I called the station to {{s2}} a seat near the window. The station staff tried to {{s3}} me about the revised departure schedule. Fortunately, the online booking process turned out to be remarkably {{s4}}. Now I can enjoy a {{s5}} journey across the countryside without worry.',
    contentZh:
      '火車車票預訂',
    slots: [
      { id: 's1', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's2', pos: 'v', tags: ['request', 'communication'] },
      { id: 's3', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's4', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['duration', 'time'] },
    ],
  },
  {
    id: 'travel_city_tour_02',
    title: 'City Tour',
    titleZh: '城市觀光導覽',
    level: ['elementary', 'highschool'],
    domain: 'travel',
    content:
      'Our tour guide will {{s1}} us about the history of the old city. Visitors can easily {{s2}} ancient monuments scattered along the main avenue. It is {{s3}} to wear comfortable walking shoes during the tour. The guide will also {{s4}} everyone to follow the safety guidelines closely. This experience leaves a {{s5}} impression on every traveler who visits.',
    contentZh:
      '城市觀光導覽',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's3', pos: 'adj', tags: ['evaluation'] },
      { id: 's4', pos: 'v', tags: ['request', 'communication'] },
      { id: 's5', pos: 'adj', tags: ['emotion', 'evaluation'] },
    ],
  },
  {
    id: 'travel_packing_bags_03',
    title: 'Packing Bags',
    titleZh: '行李打包須知',
    level: ['elementary', 'highschool'],
    domain: 'travel',
    content:
      'Packing your luggage efficiently requires careful planning and a {{s1}} strategy. You should {{s2}} which items are truly necessary for the trip. Airlines often {{s3}} passengers regarding strict weight limits on baggage. It is {{s4}} to keep important documents in an easily accessible pocket. Taking these precautions helps to {{s5}} unnecessary stress at the airport.',
    contentZh:
      '行李打包須知',
    slots: [
      { id: 's1', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's2', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's3', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's4', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'shopping_supermarket_deal_01',
    title: 'Supermarket Deal',
    titleZh: '超市採購省錢',
    level: ['elementary', 'highschool'],
    domain: 'daily',
    content:
      'Smart shoppers like to {{s1}} discounts when buying weekly grocery items. The grocery manager decided to {{s2}} customers about special seasonal promotions today. It is always {{s3}} to compare prices before making final purchases. Buying in bulk offers a {{s4}} advantage for larger families saving money. Good choices will {{s5}} overall household expenses significantly over time.',
    contentZh:
      '超市採購省錢',
    slots: [
      { id: 's1', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['evaluation'] },
      { id: 's4', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'shopping_online_review_02',
    title: 'Online Review',
    titleZh: '網購商品評價',
    level: ['elementary', 'highschool'],
    domain: 'daily',
    content:
      'Before buying clothes online, customers usually {{s1}} existing product reviews carefully. Reviewers often {{s2}} potential buyers about fabric texture and accurate sizing. It is {{s3}} to verify seller credibility before placing order payments. Reliable feedback ensures a {{s4}} shopping experience for online consumers worldwide. Clear customer ratings help to {{s5}} return rates for digital stores.',
    contentZh:
      '網購商品評價',
    slots: [
      { id: 's1', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's4', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
];
