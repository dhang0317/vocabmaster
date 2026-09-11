import type { ScenarioTemplate } from './scenarioTemplates';

export const USER_SCENARIO_TEMPLATES_F0a1: ScenarioTemplate[] = [
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
  },
  {
    id: 'hotel_facility_maintenance_03',
    title: 'Facility Maintenance',
    titleZh: '飯店設施維修',
    level: ['highschool', 'toeic'],
    domain: 'travel',
    content:
      'When hotel elevators stop working, technicians must {{s1}} repairs without unnecessary delay. Front desk staff should {{s2}} arriving guests about temporary service outages. Maintenance staff will {{s3}} with engineering teams to replace faulty mechanical parts. Temporary elevator outages cause {{s4}} inconvenience during peak check-in hours. Fixing technical problems rapidly remains an {{s5}} priority for management.',
    contentZh:
      '飯店設施維修',
    slots: [
      { id: 's1', pos: 'v', tags: ['process'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
  {
    id: 'hotel_vip_lounge_04',
    title: 'Vip Lounge',
    titleZh: '貴賓休息室服務',
    level: ['highschool', 'toeic'],
    domain: 'travel',
    content:
      'Executive lounge access allows business travelers to {{s1}} daily tasks in quiet surroundings. Staff members actively {{s2}} individual guest needs and offer personalized drink orders. Concierge agents will {{s3}} travelers about local transport options and meeting venues. Guests value a {{s4}} respite from noisy public areas during busy travel trips. Premium lounge amenities provide a {{s5}} environment for work and relaxation.',
    contentZh:
      '貴賓休息室服務',
    slots: [
      { id: 's1', pos: 'v', tags: ['process'] },
      { id: 's2', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's3', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's4', pos: 'adj', tags: ['duration', 'time'] },
      { id: 's5', pos: 'adj', tags: ['quality', 'evaluation'] },
    ],
  },
  {
    id: 'daily_home_renovation_01',
    title: 'Home Renovation',
    titleZh: '居家裝修溝通',
    level: ['highschool', 'toeic'],
    domain: 'daily',
    content:
      'Renovating an apartment requires homeowners to {{s1}} design expectations with structural contractors. Building workers must {{s2}} construction activities according to local housing safety regulations. Neighbors may {{s3}} excessive drilling noise during morning work hours. Contractors should {{s4}} residents in advance about temporary water supply shutoffs. Keeping project timelines clear is an {{s5}} factor in finishing homes smoothly.',
    contentZh:
      '居家裝修溝通',
    slots: [
      { id: 's1', pos: 'v', tags: ['communication'] },
      { id: 's2', pos: 'v', tags: ['process'] },
      { id: 's3', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's4', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's5', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
  {
    id: 'daily_community_meeting_02',
    title: 'Community Meeting',
    titleZh: '社區住戶大會',
    level: ['highschool', 'toeic'],
    domain: 'daily',
    content:
      'Neighborhood association meetings allow residents to {{s1}} board members about community issues. Neighbors often {{s2}} over shared parking space rules and noise guidelines. Committee leaders try to {{s3}} with local police to improve neighborhood security. Residents usually {{s4}} better maintenance for public gardens and lighting fixtures. Active resident participation provides a {{s5}} foundation for local neighborhood safety.',
    contentZh:
      '社區住戶大會',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'v', tags: ['conflict', 'social'] },
      { id: 's3', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's4', pos: 'v', tags: ['request', 'communication'] },
      { id: 's5', pos: 'adj', tags: ['quality', 'evaluation'] },
    ],
  },
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
  {
    id: 'shopping_online_review_02',
    title: 'Online Review',
    titleZh: '網購商品評價',
    level: ['highschool', 'toeic'],
    domain: 'daily',
    content:
      'Online consumers check customer feedback before making final electronic purchase decisions. Shoppers learn to {{s1}} fake reviews written by suspicious online automated accounts. Reviewers often {{s2}} buyers about inaccurate product sizing or shipping delays. Buyers can {{s3}} directly with sellers regarding missing product packaging parts. Reading authentic reviews is an {{s4}} step for smart digital shopping.',
    contentZh:
      '網購商品評價',
    slots: [
      { id: 's1', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['communication'] },
      { id: 's4', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
  {
    id: 'shopping_black_friday_03',
    title: 'Black Friday',
    titleZh: '購物節折扣戰',
    level: ['highschool', 'toeic'],
    domain: 'daily',
    content:
      'Major holiday sales events encourage shoppers to {{s1}} potential savings across retailers. Discount outlets will {{s2}} shoppers about limited stock on popular electronic items. Bargain hunters must {{s3}} transaction checkouts quickly before items sell out online. Standing in long store checkout lines causes {{s4}} fatigue among shoppers. Verifying price discounts remains an {{s5}} practice for budget-conscious consumers.',
    contentZh:
      '購物節折扣戰',
    slots: [
      { id: 's1', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['process'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
  {
    id: 'shopping_warranty_claim_04',
    title: 'Warranty Claim',
    titleZh: '家電保固理賠',
    level: ['highschool', 'toeic'],
    domain: 'daily',
    content:
      'When household appliances malfunction, owners can {{s1}} technical support teams for assistance. Technicians will {{s2}} whether equipment damage falls under active warranty coverage. Product owners may {{s3}} free replacement parts from authorized repair centers. Resolving technical disputes requires a {{s4}} inspection by certified repair specialists. Dependable warranty service reflects a {{s5}} manufacturer brand standard.',
    contentZh:
      '家電保固理賠',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's3', pos: 'v', tags: ['request', 'communication'] },
      { id: 's4', pos: 'adj', tags: ['duration', 'time'] },
      { id: 's5', pos: 'adj', tags: ['quality', 'evaluation'] },
    ],
  },
  {
    id: 'health_medical_checkup_01',
    title: 'Medical Checkup',
    titleZh: '定期健康檢查',
    level: ['highschool', 'toeic'],
    domain: 'daily',
    content:
      'Annual health checkups allow physicians to {{s1}} early indicators of physical conditions. Doctors will {{s2}} patients about dietary modifications necessary for improved wellness. Patients are urged to {{s3}} with medical staff during blood tests. Avoiding {{s4}} physical stress before lab tests ensures accurate medical results. Following preventative health advice remains an {{s5}} step for personal longevity.',
    contentZh:
      '定期健康檢查',
    slots: [
      { id: 's1', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
  {
    id: 'health_pharmacy_consultation_02',
    title: 'Pharmacy Consultation',
    titleZh: '藥局用藥諮詢',
    level: ['highschool', 'toeic'],
    domain: 'daily',
    content:
      'Pharmacists advise customers on how to {{s1}} prescription medications safely at home. Medical staff will {{s2}} patients regarding potential side effects like drowsiness. Patients should {{s3}} any existing medical allergies to attending clinic staff. Experiencing {{s4}} allergic reactions requires immediate emergency medical attention. Proper dosage adherence is an {{s5}} rule for effective medical treatment.',
    contentZh:
      '藥局用藥諮詢',
    slots: [
      { id: 's1', pos: 'v', tags: ['process'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['communication'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
  {
    id: 'health_physical_therapy_03',
    title: 'Physical Therapy',
    titleZh: '物理復健治療',
    level: ['highschool', 'toeic'],
    domain: 'daily',
    content:
      'Physical therapy helps injured athletes {{s1}} their physical strength after surgeries. Therapists will {{s2}} joint movement restrictions during initial mobility evaluations. Patients must {{s3}} targeted rehabilitation exercises under professional supervisory guidance. Enduring a {{s4}} recovery phase requires dedication from recovering patients. Consistent physical exercise yields {{s5}} improvements in overall bodily mobility.',
    contentZh:
      '物理復健治療',
    slots: [
      { id: 's1', pos: 'v', tags: ['state_change'] },
      { id: 's2', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's3', pos: 'v', tags: ['process'] },
      { id: 's4', pos: 'adj', tags: ['duration', 'time'] },
      { id: 's5', pos: 'adj', tags: ['evaluation'] },
    ],
  },
  {
    id: 'health_stress_management_04',
    title: 'Stress Management',
    titleZh: '職場減壓技巧',
    level: ['highschool', 'toeic'],
    domain: 'daily',
    content:
      'Chronic workplace tension prompts employees to {{s1}} effective stress management strategies. Wellness coaches will {{s2}} workers about deep breathing exercises and meditation techniques. Employees often {{s3}} immediate reductions in heart rate during structured relaxation. Managing {{s4}} pressure prevents professional burnout among busy corporate staff. Maintaining mental wellness is an {{s5}} goal for modern professionals.',
    contentZh:
      '職場減壓技巧',
    slots: [
      { id: 's1', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
];
