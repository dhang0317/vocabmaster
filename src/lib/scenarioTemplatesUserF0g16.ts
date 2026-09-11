import type { ScenarioTemplate } from './scenarioTemplates';

/** bulk F0 group 16 */
export const USER_SCENARIO_TEMPLATES_F0g16: ScenarioTemplate[] = [
  {
    id: 'shopping_luxury_market_03',
    title: 'Luxury Market',
    titleZh: '精品市場分析',
    level: ['toefl_ielts', 'advanced'],
    domain: 'daily',
    content:
      'Luxury fashion houses endeavor to {{s1}} brand heritage through exclusive marketing exhibitions. Market analysts will {{s2}} changing luxury consumption patterns among younger demographics. Counterfeit goods manufacturers {{s3}} directly with legitimate luxury brands over intellectual property. Counterfeit trading inflicts {{s4}} damage on luxury brand value worldwide. Maintaining strict quality control provides a {{s5}} standard for designer labels.',
    contentZh:
      '精品市場分析',
    slots: [
      { id: 's1', pos: 'v', tags: ['communication'] },
      { id: 's2', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's3', pos: 'v', tags: ['conflict', 'social'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['quality', 'evaluation'] },
    ],
  },
  {
    id: 'shopping_supply_ethics_04',
    title: 'Supply Ethics',
    titleZh: '道德採購規範',
    level: ['toefl_ielts', 'advanced'],
    domain: 'daily',
    content:
      'Ethical retail brands pledge to {{s1}} consumers regarding sustainable raw material sourcing. Compliance auditors will {{s2}} factory safety reports across overseas manufacturing plants. Retailers attempt to {{s3}} with fair trade organizations to guarantee fair worker pay. Unfair labor practices create {{s4}} public outrage among modern conscious shoppers. Verifying supply chain transparency remains an {{s5}} goal for ethical retailers.',
    contentZh:
      '道德採購規範',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'v', tags: ['process'] },
      { id: 's3', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
  {
    id: 'shopping_subscription_model_05',
    title: 'Subscription Model',
    titleZh: '訂閱制商業模式',
    level: ['toefl_ielts', 'advanced'],
    domain: 'daily',
    content:
      'Digital service providers use data analytics to {{s1}} customer churn rates in subscription services. Companies must {{s2}} users before automatic subscription renewal payments occur. Customer success teams work to {{s3}} with users seeking custom account tier adjustments. Complex cancellation procedures generate {{s4}} customer dissatisfaction online. Offering transparent cancellation policies ensures a {{s5}} user experience.',
    contentZh:
      '訂閱制商業模式',
    slots: [
      { id: 's1', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['quality', 'evaluation'] },
    ],
  },
  {
    id: 'health_epidemic_control_01',
    title: 'Epidemic Control',
    titleZh: '流行病學防制',
    level: ['toefl_ielts', 'advanced'],
    domain: 'daily',
    content:
      'Public health agencies must {{s1}} the general population during regional disease outbreaks. Epidemiators work around the clock to {{s2}} infection tracking data from local hospitals. Government health officials need to {{s3}} with international health organizations to secure vaccine supplies. Facing a {{s4}} viral surge strains intensive care unit capacities nationwide. Enforcing strict quarantine measures remains an {{s5}} public health policy.',
    contentZh:
      '流行病學防制',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'v', tags: ['process'] },
      { id: 's3', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
  {
    id: 'health_clinical_trials_02',
    title: 'Clinical Trials',
    titleZh: '臨床試驗規範',
    level: ['toefl_ielts', 'advanced'],
    domain: 'daily',
    content:
      'Pharmaceutical researchers conduct clinical trials to {{s1}} experimental drug safety and efficacy profiles. Medical scientists will {{s2}} trial participants about prospective side effects before enrollment. Independent oversight boards will {{s3}} any protocol violations during clinical testing. Experiencing {{s4}} adverse reactions triggers immediate suspension of experimental drug trials. Rigorous ethical review is an {{s5}} prerequisite for medical advancement.',
    contentZh:
      '臨床試驗規範',
    slots: [
      { id: 's1', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
];
