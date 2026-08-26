import type { ScenarioTemplate } from './scenarioTemplates';

/** bulk F1 group 9 */
export const USER_SCENARIO_TEMPLATES_F1g09: ScenarioTemplate[] = [
  {
    id: 'daily_home_repairs_10',
    title: 'Home Repairs',
    titleZh: '居家設備維修',
    level: ['highschool', 'toeic'],
    domain: 'daily',
    content:
      'Fixing household plumbing issues requires a {{s1}} set of basic tools. Homeowners often {{s2}} technicians when self-repair attempts prove too difficult. Plumbers will {{s3}} pipe systems to locate hidden water leakages. It is {{s4}} to shut off water mains during repair work. Quality maintenance work will {{s5}} long-term durability for home utility systems.',
    contentZh:
      '居家設備維修',
    slots: [
      { id: 's1', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's4', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'daily_pet_care_11',
    title: 'Pet Care',
    titleZh: '寵物日常照料',
    level: ['highschool', 'toeic'],
    domain: 'daily',
    content:
      'Taking care of domestic pets demands a {{s1}} commitment from owners. Veterinarians will {{s2}} pet owners about proper nutritional and vaccination schedules. Owners should {{s3}} behavioral changes indicating animal health issues early. Regular outdoor walks will {{s4}} better physical condition for energetic dogs. Responsible pet care helps to {{s5}} strong emotional bonds with animals.',
    contentZh:
      '寵物日常照料',
    slots: [
      { id: 's1', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's4', pos: 'v', tags: ['cause_effect'] },
      { id: 's5', pos: 'v', tags: ['state_change'] },
    ],
  },
  {
    id: 'health_clinic_checkup_01',
    title: 'Clinic Checkup',
    titleZh: '定期健康檢查',
    level: ['highschool', 'toeic'],
    domain: 'daily',
    content:
      'Scheduling regular medical checkups is {{s1}} for early disease prevention. Doctors will {{s2}} patients about overall health indicators and lab results. Diagnostic tests help physicians {{s3}} potential risks before symptoms become severe. Patients are encouraged to {{s4}} with lifestyle recommendations given by clinicians. Proper preventive care will {{s5}} better longevity and overall wellbeing.',
    contentZh:
      '定期健康檢查',
    slots: [
      { id: 's1', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's4', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'health_nutrition_advice_02',
    title: 'Nutrition Advice',
    titleZh: '營養飲食建議',
    level: ['highschool', 'toeic'],
    domain: 'daily',
    content:
      'A balanced dietary regimen offers a {{s1}} foundation for long-term health. Nutritionists often {{s2}} clients on reducing processed sugar and sodium intake. Consuming organic food can {{s3}} metabolic health and daily energy levels. It is {{s4}} to include adequate dietary fiber in daily meals. Healthy eating habits will {{s5}} stronger immune resistance against seasonal illnesses.',
    contentZh:
      '營養飲食建議',
    slots: [
      { id: 's1', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['state_change'] },
      { id: 's4', pos: 'adj', tags: ['evaluation'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'health_stress_management_03',
    title: 'Stress Management',
    titleZh: '心理壓力紓解',
    level: ['highschool', 'toeic'],
    domain: 'daily',
    content:
      'Chronic mental stress can cause {{s1}} health complications if left unmanaged. Therapists try to {{s2}} individuals about practical breathing and relaxation exercises. Mindfulness practices help people {{s3}} emotional triggers during high-pressure situations. It is {{s4}} to seek professional guidance when feeling overwhelmed continuously. Regular relaxation routines will {{s5}} mental resilience and personal tranquility.',
    contentZh:
      '心理壓力紓解',
    slots: [
      { id: 's1', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's4', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's5', pos: 'v', tags: ['state_change'] },
    ],
  },
];
