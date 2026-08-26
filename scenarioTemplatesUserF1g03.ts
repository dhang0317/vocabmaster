import type { ScenarioTemplate } from './scenarioTemplates';

/** bulk F1 group 3 */
export const USER_SCENARIO_TEMPLATES_F1g03: ScenarioTemplate[] = [
  {
    id: 'workplace_training_program_06',
    title: 'Training Program',
    titleZh: '員工培訓計畫',
    level: ['highschool', 'toeic'],
    domain: 'workplace',
    content:
      'The company established a {{s1}} training program for new software hires. Trainers will {{s2}} recruits on core technical standards and protocols. Mentors help recruits {{s3}} complex problem-solving strategies in real projects. Active participation leads to a {{s4}} improvement in individual job performance. This ongoing initiative helps to {{s5}} team productivity across operational divisions.',
    contentZh:
      '員工培訓計畫',
    slots: [
      { id: 's1', pos: 'adj', tags: ['duration', 'time'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's4', pos: 'adj', tags: ['evaluation'] },
      { id: 's5', pos: 'v', tags: ['state_change'] },
    ],
  },
  {
    id: 'workplace_budget_approval_07',
    title: 'Budget Approval',
    titleZh: '預算編列審核',
    level: ['highschool', 'toeic'],
    domain: 'workplace',
    content:
      'Department leads submitted their proposals to {{s1}} additional marketing funds. The finance director must {{s2}} each itemized expense before approving budgets. Due to {{s3}} economic pressure, fiscal spending must remain strictly controlled. Representatives pledged to {{s4}} closely to avoid unnecessary operational overhead. Proper management will {{s5}} greater financial stability for future investments.',
    contentZh:
      '預算編列審核',
    slots: [
      { id: 's1', pos: 'v', tags: ['request', 'communication'] },
      { id: 's2', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's3', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'workplace_remote_work_08',
    title: 'Remote Work',
    titleZh: '遠距工作協調',
    level: ['highschool', 'toeic'],
    domain: 'workplace',
    content:
      'Adopting remote work requires a {{s1}} communication infrastructure across teams. Supervisors need to {{s2}} employees about expected availability during work hours. Virtual tools help team members {{s3}} on shared documents in real time. Workers must {{s4}} personal boundaries to avoid burn-out from extended screen time. A flexible policy can {{s5}} employee satisfaction ratings significantly over time.',
    contentZh:
      '遠距工作協調',
    slots: [
      { id: 's1', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's4', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's5', pos: 'v', tags: ['state_change'] },
    ],
  },
  {
    id: 'workplace_performance_review_09',
    title: 'Performance Review',
    titleZh: '績效考核評估',
    level: ['highschool', 'toeic'],
    domain: 'workplace',
    content:
      'During annual performance reviews, managers {{s1}} employee achievements over time. Supervisors will {{s2}} staff regarding areas needing professional improvement next year. Setting {{s3}} professional targets helps guide future career development pathways. Employees who demonstrate {{s4}} leadership skills may receive early promotion offers. constructive feedback helps to {{s5}} personal commitment toward corporate goals.',
    contentZh:
      '績效考核評估',
    slots: [
      { id: 's1', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's4', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's5', pos: 'v', tags: ['state_change'] },
    ],
  },
  {
    id: 'workplace_vendor_negotiation_10',
    title: 'Vendor Negotiation',
    titleZh: '廠商合約談判',
    level: ['highschool', 'toeic'],
    domain: 'workplace',
    content:
      'Our procurement manager scheduled a meeting to {{s1}} better contract terms. Both sides attempted to {{s2}} their operational constraints without causing friction. Negotiators must {{s3}} key trade-offs to secure a mutually beneficial deal. Securing a {{s4}} supply agreement ensures uninterrupted production schedules for factories. Effective negotiation will {{s5}} substantial savings on raw material acquisition.',
    contentZh:
      '廠商合約談判',
    slots: [
      { id: 's1', pos: 'v', tags: ['request', 'communication'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's4', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  }
];
