import type { ScenarioTemplate } from './scenarioTemplates';

/** bulk F1 group 11 */
export const USER_SCENARIO_TEMPLATES_F1g11: ScenarioTemplate[] = [
  {
    id: 'academic_presentation_skills_04',
    title: 'Presentation Skills',
    titleZh: '口頭報告技巧',
    level: ['highschool', 'toeic'],
    domain: 'academic',
    content:
      'Delivering effective presentations requires speakers to {{s1}} audience engagement techniques carefully. Instructors will {{s2}} students about structuring slides with clear visual hierarchy. Presenters must {{s3}} nonverbal cues from listeners to adjust speaking pace. Maintaining {{s4}} eye contact builds credibility during formal academic talks. Consistent practice will {{s5}} nervous speakers into confident public communicators.',
    contentZh:
      '口頭報告技巧',
    slots: [
      { id: 's1', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's4', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's5', pos: 'v', tags: ['state_change'] },
    ],
  },
  {
    id: 'academic_peer_feedback_05',
    title: 'Peer Feedback',
    titleZh: '同儕互評回饋',
    level: ['highschool', 'toeic'],
    domain: 'academic',
    content:
      'Providing constructive peer feedback requires students to {{s1}} strengths and weaknesses objectively. Reviewers will {{s2}} authors about specific areas needing improvement or clarification. Writers should {{s3}} feedback comments without taking criticism personally. Establishing a {{s4}} peer review culture improves overall class writing quality. Thoughtful critique will {{s5}} better revision outcomes for academic assignments.',
    contentZh:
      '同儕互評回饋',
    slots: [
      { id: 's1', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['process'] },
      { id: 's4', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'science_lab_safety_01',
    title: 'Lab Safety',
    titleZh: '實驗室安全規範',
    level: ['highschool', 'toeic'],
    domain: 'science',
    content:
      'Following laboratory safety protocols is {{s1}} when handling chemical reagents carefully. Supervisors will {{s2}} students regarding proper protective equipment requirements. Researchers must {{s3}} potential hazards before beginning experimental procedures. Maintaining a {{s4}} workspace prevents accidental contamination of samples. Strict safety adherence will {{s5}} a secure environment for scientific investigation.',
    contentZh:
      '實驗室安全規範',
    slots: [
      { id: 's1', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's4', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'science_data_collection_02',
    title: 'Data Collection',
    titleZh: '科學數據蒐集',
    level: ['highschool', 'toeic'],
    domain: 'science',
    content:
      'Accurate data collection requires researchers to {{s1}} measurement instruments carefully before use. Lab technicians will {{s2}} team members about standardized recording procedures. Scientists must {{s3}} anomalies that could indicate equipment calibration errors. Maintaining {{s4}} documentation ensures reproducibility of experimental findings. Rigorous data practices will {{s5}} reliable conclusions for scientific publications.',
    contentZh:
      '科學數據蒐集',
    slots: [
      { id: 's1', pos: 'v', tags: ['process'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's4', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'science_hypothesis_testing_03',
    title: 'Hypothesis Testing',
    titleZh: '假說驗證方法',
    level: ['highschool', 'toeic'],
    domain: 'science',
    content:
      'Testing scientific hypotheses requires researchers to {{s1}} experimental variables systematically. Principal investigators will {{s2}} the team about expected outcomes and controls. Analysts must {{s3}} statistical significance before accepting or rejecting hypotheses. Designing a {{s4}} experimental protocol strengthens the validity of research conclusions. Sound methodology will {{s5}} credible advances in scientific understanding.',
    contentZh:
      '假說驗證方法',
    slots: [
      { id: 's1', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's4', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
];
