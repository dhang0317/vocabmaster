import type { ScenarioTemplate } from './scenarioTemplates';

/** bulk F1 group 28 */
export const USER_SCENARIO_TEMPLATES_F1g28: ScenarioTemplate[] = [
  {
    id: 'science_cooperation_research_01',
    title: 'Cooperation Research',
    titleZh: '跨國科學合作',
    level: ['toefl_ielts', 'advanced'],
    domain: 'science',
    content:
      'International research teams frequently {{s1}} on global climate monitoring projects. Lead scientists will {{s2}} environmental agencies concerning ocean temperature rise. Collecting {{s3}} planetary data is necessary for accurate predictive modeling. Global collaboration will {{s4}} effective environmental protection strategies worldwide.',
    contentZh:
      '跨國科學合作',
    slots: [
      { id: 's1', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'health_reasoning_diagnosis_01',
    title: 'Reasoning Diagnosis',
    titleZh: '診斷推理分析',
    level: ['toefl_ielts', 'advanced'],
    domain: 'daily',
    content:
      'Experienced physicians must {{s1}} patient medical histories before determining final diagnoses. Clinicians will {{s2}} patients regarding recommended diagnostic laboratory tests. Delivering a {{s3}} healthcare evaluation ensures appropriate medical treatment plans. Accurate diagnosis will {{s4}} patient treatment outcomes and recovery speed.',
    contentZh:
      '診斷推理分析',
    slots: [
      { id: 's1', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['state_change'] },
    ],
  },
  {
    id: 'daily_importance_balance_01',
    title: 'Importance Balance',
    titleZh: '生活工作平衡',
    level: ['highschool', 'toeic'],
    domain: 'daily',
    content:
      'Maintaining work-life balance is {{s1}} for long-term psychological wellbeing. Life coaches {{s2}} professionals to set clear boundaries between work and home. Making time for leisure activities will {{s3}} daily stress levels. Healthy lifestyle choices will {{s4}} greater personal happiness and vitality.',
    contentZh:
      '生活工作平衡',
    slots: [
      { id: 's1', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['state_change'] },
      { id: 's4', pos: 'v', tags: ['cause_effect'] },
    ],
  }
];
