import type { ScenarioTemplate } from './scenarioTemplates';

/** bulk F1 group 14 */
export const USER_SCENARIO_TEMPLATES_F1g14: ScenarioTemplate[] = [
  {
    id: 'academic_citation_ethics_09',
    title: 'Citation Ethics',
    titleZh: '學術引用與倫理',
    level: ['toefl_ielts', 'advanced'],
    domain: 'academic',
    content:
      'Upholding academic integrity requires authors to {{s1}} readers about original source attributions. Institutional boards will {{s2}} allegations of academic misconduct or data fabrication. It is {{s3}} to adhere strictly to ethical citation standards in research papers. Reviewers must {{s4}} uncredited ideas or improper paraphrasing during paper evaluation. Maintaining high ethical standards will {{s5}} public trust in scientific research outcomes.',
    contentZh:
      '學術引用與倫理',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's3', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'academic_publication_bias_10',
    title: 'Publication Bias',
    titleZh: '發表偏誤探討',
    level: ['toefl_ielts', 'advanced'],
    domain: 'academic',
    content:
      'Addressing academic publication bias requires journals to {{s1}} readers about negative results. Researchers must {{s2}} why studies yielding non-significant results often go unpublished. Overcoming this phenomenon is {{s3}} for establishing balanced scientific knowledge bases. Peer reviewers should {{s4}} methodological quality rather than positive experimental outcomes alone. Transparent publishing practices will {{s5}} scientific communication into a fairer ecosystem.',
    contentZh:
      '發表偏誤探討',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's3', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's5', pos: 'v', tags: ['state_change'] },
    ],
  },
  {
    id: 'science_climate_modeling_01',
    title: 'Climate Modeling',
    titleZh: '氣候模型預測',
    level: ['toefl_ielts', 'advanced'],
    domain: 'science',
    content:
      'Climate scientists use supercomputers to {{s1}} atmospheric temperature changes over centuries. Researchers will {{s2}} policymakers about predicted sea-level rise and severe weather risks. Analyzing complex climate feedback loops requires a {{s3}} computational modeling approach. Climatologists must {{s4}} subtle ecological disruptions caused by global ocean warming. Accurate predictive modeling will {{s5}} effective international environmental policy frameworks.',
    contentZh:
      '氣候模型預測',
    slots: [
      { id: 's1', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'science_genomic_sequencing_02',
    title: 'Genomic Sequencing',
    titleZh: '基因定序技術',
    level: ['toefl_ielts', 'advanced'],
    domain: 'science',
    content:
      'Advances in genomic sequencing enable geneticists to {{s1}} hereditary disease mutations rapidly. Laboratories will {{s2}} medical practitioners concerning individual patient genetic predispositions. Developing targeted gene therapies requires a {{s3}} understanding of molecular biology. Researchers must {{s4}} rare genetic variants that contribute to cellular malfunction. Gene editing techniques could {{s5}} modern medicine and disease prevention strategies.',
    contentZh:
      '基因定序技術',
    slots: [
      { id: 's1', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's5', pos: 'v', tags: ['state_change'] },
    ],
  },
  {
    id: 'science_renewable_energy_03',
    title: 'Renewable Energy',
    titleZh: '再生能源研發',
    level: ['toefl_ielts', 'advanced'],
    domain: 'science',
    content:
      'Developing efficient solar cells requires materials scientists to {{s1}} photovoltaic conversion rates. Engineers must {{s2}} energy grids regarding electricity storage efficiency during weather changes. Improving energy density in modern batteries is {{s3}} for electric vehicle adoption. Researchers aim to {{s4}} with industrial manufacturers to scale production. Clean technology innovation will {{s5}} a reduction in global fossil fuel reliance.',
    contentZh:
      '再生能源研發',
    slots: [
      { id: 's1', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  }
];
