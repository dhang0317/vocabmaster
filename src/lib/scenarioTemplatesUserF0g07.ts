import type { ScenarioTemplate } from './scenarioTemplates';

/** bulk F0 group 7 */
export const USER_SCENARIO_TEMPLATES_F0g07: ScenarioTemplate[] = [
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
];
