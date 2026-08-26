import type { ScenarioTemplate } from './scenarioTemplates';

/** bulk F1 group 7 */
export const USER_SCENARIO_TEMPLATES_F1g07: ScenarioTemplate[] = [
  {
    id: 'shopping_return_policy_03',
    title: 'Return Policy',
    titleZh: '退換貨品政策',
    level: ['highschool', 'toeic'],
    domain: 'daily',
    content:
      'Understanding return policies requires customers to {{s1}} store rules on receipts. Clerks will {{s2}} buyers whether items qualify for full cash refunds. It is {{s3}} to keep original packaging intact when returning electronics. Staff members will {{s4}} defects before issuing store credit to consumers. Fair policies will {{s5}} greater consumer confidence when making expensive purchases.',
    contentZh:
      '退換貨品政策',
    slots: [
      { id: 's1', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'shopping_electronics_warranty_04',
    title: 'Electronics Warranty',
    titleZh: '電子產品保固',
    level: ['highschool', 'toeic'],
    domain: 'daily',
    content:
      'Buying electronic gadgets often involves evaluating a {{s1}} warranty plan options. Store representatives will {{s2}} customers about repair services covered under warranty. It is {{s3}} to compare extended warranty costs against replacement prices. Technicians must {{s4}} hardware malfunctions to determine if claims are valid. Reliable coverage will {{s5}} long-term peace of mind for gadget owners.',
    contentZh:
      '電子產品保固',
    slots: [
      { id: 's1', pos: 'adj', tags: ['duration', 'time'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['evaluation'] },
      { id: 's4', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'shopping_clothing_fit_05',
    title: 'Clothing Fit',
    titleZh: '服飾尺寸挑選',
    level: ['highschool', 'toeic'],
    domain: 'daily',
    content:
      'Finding the ideal clothing size requires buyers to {{s1}} fit and comfort. Sales associates will {{s2}} shoppers about available color choices and sizes. Trying on garments provides a {{s3}} assessment of fabric feel and stitching. It is {{s4}} to follow washing instructions to prevent garment shrinkage. Well-fitting clothes will {{s5}} individual confidence during social or professional events.',
    contentZh:
      '服飾尺寸挑選',
    slots: [
      { id: 's1', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's4', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's5', pos: 'v', tags: ['state_change'] },
    ],
  },
  {
    id: 'shopping_seasonal_sale_06',
    title: 'Seasonal Sale',
    titleZh: '季節清倉特賣',
    level: ['highschool', 'toeic'],
    domain: 'daily',
    content:
      'Seasonal clearance sales attract a {{s1}} number of enthusiastic bargain hunters. Retailers use promotional flyers to {{s2}} shoppers about steep discount events. Smart consumers will {{s3}} whether discounted items meet actual personal needs. Store employees must {{s4}} together to manage crowded checkout registers efficiently. Organized sales events will {{s5}} higher overall revenue performance for retailers.',
    contentZh:
      '季節清倉特賣',
    slots: [
      { id: 's1', pos: 'v', tags: ['general'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's4', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'shopping_membership_perks_07',
    title: 'Membership Perks',
    titleZh: '會員專屬優惠',
    level: ['highschool', 'toeic'],
    domain: 'daily',
    content:
      'Joining store loyalty programs grants shoppers {{s1}} discounts and exclusive rewards. Cashiers will {{s2}} customers on how accumulated reward points work. Members can {{s3}} special gift rewards upon reaching specific spending tiers. It is {{s4}} to review expiration dates on promotional reward coupons. Valuable member perks will {{s5}} stronger brand devotion among recurring shoppers.',
    contentZh:
      '會員專屬優惠',
    slots: [
      { id: 's1', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['request', 'communication'] },
      { id: 's4', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  }
];
