import type { ScenarioTemplate } from './scenarioTemplates';

/** bulk F0 group 8 */
export const USER_SCENARIO_TEMPLATES_F0g08: ScenarioTemplate[] = [
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
  {
    id: 'academic_thesis_proposal_01',
    title: 'Thesis Proposal',
    titleZh: '論文開題報告',
    level: ['highschool', 'toeic'],
    domain: 'academic',
    content:
      'Graduate students must {{s1}} advisory committees about prospective research methodology details. Academic advisors will {{s2}} whether proposed research questions are manageable. Researchers need to {{s3}} academic journal literature to identify knowledge gaps. Scholars might {{s4}} regarding theoretical frameworks during departmental seminar discussions. Conducting preliminary research is an {{s5}} phase of academic degree programs.',
    contentZh:
      '論文開題報告',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's3', pos: 'v', tags: ['process'] },
      { id: 's4', pos: 'v', tags: ['conflict', 'social'] },
      { id: 's5', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
  {
    id: 'academic_peer_review_02',
    title: 'Peer Review',
    titleZh: '學術同儕審查',
    level: ['highschool', 'toeic'],
    domain: 'academic',
    content:
      'Peer reviewers evaluate journal submissions to {{s1}} errors in statistical methodologies. Scholars will {{s2}} original authors regarding necessary revisions before journal publication. Researchers must {{s3}} alternative explanations for unexpected experimental results. Peer critique can generate {{s4}} debate among leading academic specialists. Reaching a {{s5}} scientific standard requires rigorous objective evaluation.',
    contentZh:
      '學術同儕審查',
    slots: [
      { id: 's1', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['quality', 'evaluation'] },
    ],
  },
  {
    id: 'academic_library_research_03',
    title: 'Library Research',
    titleZh: '圖書館文獻檢索',
    level: ['highschool', 'toeic'],
    domain: 'academic',
    content:
      'University students use digital archives to {{s1}} rare historical document collections. Research librarians will {{s2}} students about database navigation and citation formatting. Students can {{s3}} interlibrary loans for specialized texts not available locally. Reviewing sources carefully helps scholars {{s4}} biased perspectives in historical accounts. Reliable source attribution is an {{s5}} rule in scholarly writing.',
    contentZh:
      '圖書館文獻檢索',
    slots: [
      { id: 's1', pos: 'v', tags: ['process'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['request', 'communication'] },
      { id: 's4', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's5', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
];
