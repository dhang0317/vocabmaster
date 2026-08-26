import type { ScenarioTemplate } from './scenarioTemplates';

/** bulk F0 group 6 */
export const USER_SCENARIO_TEMPLATES_F0g06: ScenarioTemplate[] = [
  {
    id: 'daily_fitness_routine_03',
    title: 'Fitness Routine',
    titleZh: '個人健身計畫',
    level: ['highschool', 'toeic'],
    domain: 'daily',
    content:
      'Establishing personal fitness habits requires individuals to {{s1}} realistic athletic goals. Personal trainers will {{s2}} clients on proper exercise form to prevent muscle injury. Beginners often {{s3}} significant physical energy improvement within six weeks. Experiencing {{s4}} muscle soreness after initial training workouts is entirely normal. Maintaining consistency remains an {{s5}} element in achieving personal health goals.',
    contentZh:
      '個人健身計畫',
    slots: [
      { id: 's1', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
  {
    id: 'daily_car_maintenance_04',
    title: 'Car Maintenance',
    titleZh: '汽車定期保養',
    level: ['highschool', 'toeic'],
    domain: 'daily',
    content:
      'Regular vehicle maintenance ensures auto safety and prevents sudden roadside breakdowns. Mechanics will {{s1}} worn brake pads during routine safety inspections. Service advisors must {{s2}} owners regarding necessary part replacements and labor fees. Fixing minor fluid leaks requires a {{s3}} visit to local service shops. Premium replacement parts deliver a {{s4}} performance boost for older cars.',
    contentZh:
      '汽車定期保養',
    slots: [
      { id: 's1', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['duration', 'time'] },
      { id: 's4', pos: 'adj', tags: ['quality', 'evaluation'] },
    ],
  },
  {
    id: 'daily_pet_care_05',
    title: 'Pet Care',
    titleZh: '寵物照護經驗',
    level: ['highschool', 'toeic'],
    domain: 'daily',
    content:
      'Adopting a domestic pet requires owners to {{s1}} daily commitments and healthcare costs. Veterinarians will {{s2}} pet owners about annual vaccination schedules and diets. Pet parents often {{s3}} behavioral changes when animals feel sick or anxious. Providing a {{s4}} outdoor walk every evening reduces canine behavioral anxiety. Proper pet care creates a {{s5}} living environment for whole families.',
    contentZh:
      '寵物照護經驗',
    slots: [
      { id: 's1', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's4', pos: 'adj', tags: ['duration', 'time'] },
      { id: 's5', pos: 'adj', tags: ['evaluation'] },
    ],
  },
  {
    id: 'daily_cooking_class_06',
    title: 'Cooking Class',
    titleZh: '烹飪課程學習',
    level: ['highschool', 'toeic'],
    domain: 'daily',
    content:
      'Attending culinary classes helps home cooks {{s1}} fresh ingredients with traditional techniques. Professional chefs will {{s2}} students about combining regional spices and herbs. Participants learn to {{s3}} subtle flavor differences during dish tasting sessions. Preparing complex recipes requires a {{s4}} cooking process over steady heat. Using fresh ingredients ensures a {{s5}} taste in finished culinary dishes.',
    contentZh:
      '烹飪課程學習',
    slots: [
      { id: 's1', pos: 'v', tags: ['process'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's4', pos: 'adj', tags: ['duration', 'time'] },
      { id: 's5', pos: 'adj', tags: ['quality', 'evaluation'] },
    ],
  },
  {
    id: 'shopping_refund_request_01',
    title: 'Refund Request',
    titleZh: '商品退款申請',
    level: ['highschool', 'toeic'],
    domain: 'daily',
    content:
      'Customers returning damaged goods must {{s1}} retail store clerks about product flaws. Store managers will {{s2}} physical defect spots before approving cash refunds. Buyers may {{s3}} direct product exchanges instead of monetary store credits. Customer service agents try to {{s4}} politely to resolve consumer disputes. Fair refund guidelines support a {{s5}} shopping environment for retail consumers.',
    contentZh:
      '商品退款申請',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's3', pos: 'v', tags: ['request', 'communication'] },
      { id: 's4', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's5', pos: 'adj', tags: ['quality', 'evaluation'] },
    ],
  },
];
