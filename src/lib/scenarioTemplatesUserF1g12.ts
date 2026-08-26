import type { ScenarioTemplate } from './scenarioTemplates';

/** bulk F1 group 12 */
export const USER_SCENARIO_TEMPLATES_F1g12: ScenarioTemplate[] = [
  {
    id: 'workplace_executive_coaching_19',
    title: 'Executive Coaching',
    titleZh: '高階主管培訓',
    level: ['toefl_ielts', 'advanced'],
    domain: 'workplace',
    content:
      'Executive coaching programs aim to {{s1}} leadership vision among senior corporate managers. Executive mentors help leaders {{s2}} complex organizational challenges and strategic dilemmas. Coaches will {{s3}} participants about modern leadership methodologies and communication styles. Developing a {{s4}} leadership style is critical for driving long-term enterprise growth. Refined executive capabilities will {{s5}} organizational resilience in volatile markets.',
    contentZh:
      '高階主管培訓',
    slots: [
      { id: 's1', pos: 'v', tags: ['state_change'] },
      { id: 's2', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's3', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's4', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'workplace_compliance_audit_20',
    title: 'Compliance Audit',
    titleZh: '內部合規性審計',
    level: ['toefl_ielts', 'advanced'],
    domain: 'workplace',
    content:
      'Conducting internal compliance audits allows corporations to {{s1}} potential financial regulatory violations early. External auditors will {{s2}} board directors about identified compliance procedural vulnerabilities. Establishing {{s3}} oversight systems is necessary to maintain banking authority licenses. Management must {{s4}} with legal teams to update compliance protocols. Rigorous oversight will {{s5}} legal security for international financial investments.',
    contentZh:
      '內部合規性審計',
    slots: [
      { id: 's1', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'academic_research_method_01',
    title: 'Research Method',
    titleZh: '研究方法論論述',
    level: ['toefl_ielts', 'advanced'],
    domain: 'academic',
    content:
      'Developing a robust empirical methodology requires scholars to {{s1}} existing theoretical framework models. Researchers must {{s2}} the academic community regarding data collection sample limitations. Conducting rigorous statistical validation ensures a {{s3}} standard of scholarly inquiry. Peer reviewers will {{s4}} potential methodology biases during formal journal evaluation. Methodological clarity will {{s5}} higher citation impact within scientific literature.',
    contentZh:
      '研究方法論論述',
    slots: [
      { id: 's1', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'academic_peer_review_02',
    title: 'Peer Review',
    titleZh: '學術同儕審查',
    level: ['toefl_ielts', 'advanced'],
    domain: 'academic',
    content:
      'The peer review process requires qualified scholars to {{s1}} manuscript validity objectively. Reviewers will {{s2}} journal editors concerning necessary revisions or rejection arguments. Scholars often {{s3}} supplementary experimental data to verify ambiguous statistical findings. Maintaining an {{s4}} level of critical objectivity is essential for scientific integrity. Constructive review feedback helps to {{s5}} preliminary drafts into rigorous scientific publications.',
    contentZh:
      '學術同儕審查',
    slots: [
      { id: 's1', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['request', 'communication'] },
      { id: 's4', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's5', pos: 'v', tags: ['state_change'] },
    ],
  },
  {
    id: 'academic_literature_review_03',
    title: 'Literature Review',
    titleZh: '文獻回顧寫作',
    level: ['toefl_ielts', 'advanced'],
    domain: 'academic',
    content:
      'Writing a literature review mandates scholars to {{s1}} foundational studies in the field. Authors must {{s2}} readers about major historical theoretical debates and shifts. Identifying research gaps is {{s3}} for establishing original scholarly contributions. Academics need to {{s4}} emerging academic trends to formulate relevant research hypotheses. Comprehensive reviews will {{s5}} clearer direction for future investigative studies.',
    contentZh:
      '文獻回顧寫作',
    slots: [
      { id: 's1', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
];
