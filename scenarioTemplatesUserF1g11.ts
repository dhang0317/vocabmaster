import type { ScenarioTemplate } from './scenarioTemplates';

/** bulk F1 group 11 */
export const USER_SCENARIO_TEMPLATES_F1g11: ScenarioTemplate[] = [
  {
    id: 'workplace_supply_chain_14',
    title: 'Supply Chain',
    titleZh: '供應鏈風險管理',
    level: ['toefl_ielts', 'advanced'],
    domain: 'workplace',
    content:
      'Global supply chain logistics require managers to {{s1}} geopolitical risks and transport bottlenecks. Procurement officers will {{s2}} suppliers regarding revised inventory buffers and safety standards. Preventing {{s3}} shortages requires companies to diversify raw material vendor networks. Operations leaders must {{s4}} emerging bottleneck indicators along shipping lines. Adaptive inventory management will {{s5}} consistent manufacturing output during disruptions.',
    contentZh:
      '供應鏈風險管理',
    slots: [
      { id: 's1', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'workplace_intellectual_property_15',
    title: 'Intellectual Property',
    titleZh: '智慧財產權保護',
    level: ['toefl_ielts', 'advanced'],
    domain: 'workplace',
    content:
      'Protecting intellectual property rights requires legal counsel to {{s1}} patent documentation meticulously. Corporate attorneys will {{s2}} research teams concerning patent filing procedures and boundaries. Safeguarding trade secrets is {{s3}} for maintaining commercial competitiveness in tech sectors. Companies will legally {{s4}} injunctions against competitors engaging in unfair practice. Firm legal protection will {{s5}} robust defense against market infringement.',
    contentZh:
      '智慧財產權保護',
    slots: [
      { id: 's1', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['request', 'communication'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'workplace_digital_transformation_16',
    title: 'Digital Transformation',
    titleZh: '企業數位化轉型',
    level: ['toefl_ielts', 'advanced'],
    domain: 'workplace',
    content:
      'Embarking on digital transformation mandates leaders to {{s1}} outdated legacy IT infrastructure. Chief Technology Officers must {{s2}} stakeholders on cloud migration benefits and timelines. Successful deployment requires departments to {{s3}} on cross-functional software integration. It is {{s4}} to train staff effectively on newly adopted digital workflows. Enterprise-wide digitization will {{s5}} operational agility across global business operations.',
    contentZh:
      '企業數位化轉型',
    slots: [
      { id: 's1', pos: 'v', tags: ['state_change'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's4', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'workplace_esg_compliance_17',
    title: 'Esg Compliance',
    titleZh: '永續經營合規',
    level: ['toefl_ielts', 'advanced'],
    domain: 'workplace',
    content:
      'Implementing environmental governance mandates companies to {{s1}} investors regarding carbon emission metrics. Sustainability officers must {{s2}} environmental footprints across all manufacturing facilities. Demonstrating a {{s3}} commitment to green energy enhances institutional investor trust. Enterprise management will {{s4}} with environmental agencies on green compliance audits. Sustainable operational strategies will {{s5}} corporate reputation within modern global markets.',
    contentZh:
      '永續經營合規',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's3', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's5', pos: 'v', tags: ['state_change'] },
    ],
  },
  {
    id: 'workplace_cross_cultural_18',
    title: 'Cross Cultural',
    titleZh: '跨文化團隊管理',
    level: ['toefl_ielts', 'advanced'],
    domain: 'workplace',
    content:
      'Managing multinational teams requires managers to {{s1}} subtle cultural communication nuances. Leaders should {{s2}} team members about diverse business etiquette and expectations. Promoting cross-cultural understanding helps to {{s3}} mutual respect among colleagues. It is {{s4}} to establish inclusive decision-making frameworks across international offices. Effective management will {{s5}} multicultural teams into high-performing collaborative units.',
    contentZh:
      '跨文化團隊管理',
    slots: [
      { id: 's1', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['cause_effect'] },
      { id: 's4', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's5', pos: 'v', tags: ['state_change'] },
    ],
  }
];
