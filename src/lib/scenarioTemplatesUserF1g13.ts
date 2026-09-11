import type { ScenarioTemplate } from './scenarioTemplates';

/** bulk F1 group 13 */
export const USER_SCENARIO_TEMPLATES_F1g13: ScenarioTemplate[] = [
  {
    id: 'academic_grant_proposal_04',
    title: 'Grant Proposal',
    titleZh: '研究計畫申請',
    level: ['toefl_ielts', 'advanced'],
    domain: 'academic',
    content:
      'Securing research funding requires principal investigators to {{s1}} review panels of potential impact. Applicants must {{s2}} proposed budget allocations and project timelines meticulously. Demonstrating a {{s3}} experimental design increases approval probability among grant committees. Researchers need to {{s4}} across institutions to tackle complex interdisciplinary questions. Successful funding acquisition will {{s5}} substantial advancements in scientific discovery.',
    contentZh:
      '研究計畫申請',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's3', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'academic_conference_keynote_05',
    title: 'Conference Keynote',
    titleZh: '學術研討會發言',
    level: ['toefl_ielts', 'advanced'],
    domain: 'academic',
    content:
      'Delivering a keynote address allows scholars to {{s1}} international delegates about breakthroughs. Speakers will {{s2}} complex theoretical ideas using visual evidence and data models. Presenters must {{s3}} audience feedback during question sessions with professional open-mindedness. It is {{s4}} to highlight future implications of empirical findings clearly. Engaging presentations will {{s5}} productive academic collaborations across global universities.',
    contentZh:
      '學術研討會發言',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's3', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's4', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'academic_dissertation_defense_06',
    title: 'Dissertation Defense',
    titleZh: '博士論文口試',
    level: ['toefl_ielts', 'advanced'],
    domain: 'academic',
    content:
      'Defending a doctoral dissertation requires candidates to {{s1}} committee members on original findings. Doctoral candidates must {{s2}} their research methodologies against academic panel inquiries. Committee members will {{s3}} logic inconsistencies or theoretical weaknesses in the work. Demonstrating a {{s4}} command of academic literature is required for degree defense approval. Successful defense performance will {{s5}} candidates into recognized independent scholars.',
    contentZh:
      '博士論文口試',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's3', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's4', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's5', pos: 'v', tags: ['state_change'] },
    ],
  },
  {
    id: 'academic_data_analysis_07',
    title: 'Data Analysis',
    titleZh: '數據分析與詮釋',
    level: ['toefl_ielts', 'advanced'],
    domain: 'academic',
    content:
      'Analyzing quantitative data requires statisticians to {{s1}} correlation parameters and confidence intervals. Analysts will {{s2}} researchers regarding potential statistical anomalies in survey results. Maintaining a {{s3}} methodology prevents false positive interpretations in published literature. Scholars must {{s4}} underlying variable relationships within complex data sets. Rigorous statistical interpretation will {{s5}} sound conclusions supported by solid empirical evidence.',
    contentZh:
      '數據分析與詮釋',
    slots: [
      { id: 's1', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'academic_interdisciplinary_study_08',
    title: 'Interdisciplinary Study',
    titleZh: '跨領域研究合作',
    level: ['toefl_ielts', 'advanced'],
    domain: 'academic',
    content:
      'Interdisciplinary research projects encourage scientists to {{s1}} across traditional field boundaries. Project leaders will {{s2}} collaborators regarding shared laboratory resources and schedules. Integrating distinct domain perspectives requires a {{s3}} framework for effective communication. Researchers must {{s4}} complex multi-faceted challenges from integrated academic viewpoints. Such collaboration will {{s5}} breakthrough solutions to global social and scientific issues.',
    contentZh:
      '跨領域研究合作',
    slots: [
      { id: 's1', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
];
