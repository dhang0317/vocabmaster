import type { ScenarioTemplate } from './scenarioTemplates';

/** bulk F1 group 10 */
export const USER_SCENARIO_TEMPLATES_F1g10: ScenarioTemplate[] = [
  {
    id: 'health_sleep_quality_04',
    title: 'Sleep Quality',
    titleZh: '睡眠品質改善',
    level: ['highschool', 'toeic'],
    domain: 'daily',
    content:
      'Improving sleep quality requires people to {{s1}} caffeine intake during evenings. Sleep specialists will {{s2}} patients regarding healthy bedtime routines and habits. Creating a {{s3}} sleeping environment supports deeper restful recovery cycles. Individuals must {{s4}} signs of chronic insomnia before seeking medical treatment. Consistent sleep patterns will {{s5}} cognitive performance during demanding workdays.',
    contentZh:
      '睡眠品質改善',
    slots: [
      { id: 's1', pos: 'v', tags: ['process'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'health_physical_therapy_05',
    title: 'Physical Therapy',
    titleZh: '復健物理治療',
    level: ['highschool', 'toeic'],
    domain: 'daily',
    content:
      'Recovering from sports injuries requires a {{s1}} rehabilitation program with specialists. Physical therapists will {{s2}} patients about gradual mobility exercises for recovery. Patients must {{s3}} with therapists to achieve full joint flexibility restoration. It is {{s4}} to avoid overexertion during early recovery stages carefully. Dedicated rehabilitation will {{s5}} athletes back to competitive physical condition.',
    contentZh:
      '復健物理治療',
    slots: [
      { id: 's1', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's4', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's5', pos: 'v', tags: ['state_change'] },
    ],
  },
  {
    id: 'academic_study_group_01',
    title: 'Study Group',
    titleZh: '課業研討小組',
    level: ['highschool', 'toeic'],
    domain: 'academic',
    content:
      'Joining a study group allows students to {{s1}} difficult course materials together. Tutors will {{s2}} members about effective note-taking strategies before exams. Participants should {{s3}} complex theoretical concepts through group discussion sessions. Maintaining a {{s4}} collaborative atmosphere encourages active academic participation. Group learning consistently will {{s5}} individual academic performance across subject areas.',
    contentZh:
      '課業研討小組',
    slots: [
      { id: 's1', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's4', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'academic_library_research_02',
    title: 'Library Research',
    titleZh: '圖書館文獻查閱',
    level: ['highschool', 'toeic'],
    domain: 'academic',
    content:
      'Conducting thorough library research requires students to {{s1}} relevant academic sources carefully. Librarians will {{s2}} researchers about accessing online journal databases effectively. Scholars must {{s3}} source credibility before citing references in formal papers. It is {{s4}} to organize research notes systematically for efficient writing. Comprehensive literature reviews will {{s5}} stronger academic arguments in scholarly publications.',
    contentZh:
      '圖書館文獻查閱',
    slots: [
      { id: 's1', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's4', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'academic_essay_writing_03',
    title: 'Essay Writing',
    titleZh: '學術論文寫作',
    level: ['highschool', 'toeic'],
    domain: 'academic',
    content:
      'Writing a persuasive academic essay demands a {{s1}} logical structure and clear thesis. Instructors will {{s2}} students regarding proper citation formats and style guides. Writers should {{s3}} counterarguments to strengthen their overall analytical positions. Developing {{s4}} paragraph transitions improves readability throughout the essay. Rigorous revision practices will {{s5}} draft manuscripts into polished academic submissions.',
    contentZh:
      '學術論文寫作',
    slots: [
      { id: 's1', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's4', pos: 'adj', tags: ['evaluation'] },
      { id: 's5', pos: 'v', tags: ['state_change'] },
    ],
  },
];
