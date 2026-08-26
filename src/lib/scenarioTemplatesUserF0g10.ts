import type { ScenarioTemplate } from './scenarioTemplates';

/** bulk F0 group 10 */
export const USER_SCENARIO_TEMPLATES_F0g10: ScenarioTemplate[] = [
  {
    id: 'workplace_corporate_merger_01',
    title: 'Corporate Merger',
    titleZh: '企業併購策略',
    level: ['toefl_ielts', 'advanced'],
    domain: 'workplace',
    content:
      'During corporate acquisitions, senior executives must {{s1}} shareholders about strategic financial objectives. Legal advisors will {{s2}} whether regulatory approval faces potential antitrust challenges. Department heads are expected to {{s3}} closely to align corporate culture across merging entities. Navigating {{s4}} union resistance requires diplomatic executive leadership. Conducting thorough financial audits is an {{s5}} precursor to final deal execution.',
    contentZh:
      '企業併購策略',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's3', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
  {
    id: 'workplace_supply_chain_crisis_02',
    title: 'Supply Chain Crisis',
    titleZh: '供應鏈危機處理',
    level: ['toefl_ielts', 'advanced'],
    domain: 'workplace',
    content:
      'Global shipping disruptions forced logistics managers to {{s1}} alternative transport routes across international corridors. Operations teams must {{s2}} corporate clients regarding expected delivery delays. Procurement specialists will {{s3}} with regional suppliers to mitigate inventory shortages. Unforeseen trade tariffs can cause a {{s4}} reduction in profit margins. Implementing flexible logistics strategies remains a {{s5}} decision for international commerce.',
    contentZh:
      '供應鏈危機處理',
    slots: [
      { id: 's1', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['quality', 'evaluation'] },
    ],
  },
  {
    id: 'workplace_regulatory_compliance_03',
    title: 'Regulatory Compliance',
    titleZh: '法規遵循查核',
    level: ['toefl_ielts', 'advanced'],
    domain: 'workplace',
    content:
      'Compliance officers are appointed to {{s1}} potential regulatory violations within financial operations. Legal auditors will {{s2}} executive boards of non-compliance vulnerabilities. Management must {{s3}} updated compliance procedures across all regional branches. Facing {{s4}} regulatory penalties can jeopardize firm solvency. Establishing continuous monitoring systems represents an {{s5}} corporate policy.',
    contentZh:
      '法規遵循查核',
    slots: [
      { id: 's1', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['process'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
  {
    id: 'workplace_executive_leadership_04',
    title: 'Executive Leadership',
    titleZh: '高階領導轉型',
    level: ['toefl_ielts', 'advanced'],
    domain: 'workplace',
    content:
      'Newly appointed CEOs must {{s1}} visionary long-term goals to organizational stakeholders. Executive leaders need to {{s2}} structural inefficiencies within legacy business divisions. Departmental leads should {{s3}} to streamline cross-functional operational workflows. Organizational restructuring often triggers {{s4}} internal debate among veteran employees. Implementing a {{s5}} corporate strategy secures sustainable market dominance.',
    contentZh:
      '高階領導轉型',
    slots: [
      { id: 's1', pos: 'v', tags: ['communication'] },
      { id: 's2', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's3', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['quality', 'evaluation'] },
    ],
  },
  {
    id: 'workplace_risk_management_05',
    title: 'Risk Management',
    titleZh: '企業風險控管',
    level: ['toefl_ielts', 'advanced'],
    domain: 'workplace',
    content:
      'Risk analysts continually {{s1}} geopolitical developments that might disrupt overseas expansion. Treasury departments will {{s2}} financial officers regarding foreign exchange rate volatility. Executives must {{s3}} potential loss scenarios before approving high-capital investments. Experiencing {{s4}} market volatility tests operational resilience. Formulating contingency action plans is an {{s5}} aspect of enterprise risk strategy.',
    contentZh:
      '企業風險控管',
    slots: [
      { id: 's1', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
];
