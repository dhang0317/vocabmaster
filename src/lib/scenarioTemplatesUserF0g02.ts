import type { ScenarioTemplate } from './scenarioTemplates';

/** bulk F0 group 2 */
export const USER_SCENARIO_TEMPLATES_F0g02: ScenarioTemplate[] = [
  {
    id: 'workplace_project_update_01',
    title: 'Project Update',
    titleZh: '專案進度報告',
    level: ['highschool', 'cet'],
    domain: 'workplace',
    content:
      'During our quarterly meeting, managers need to {{s1}} stakeholders about recent operational changes. The project leads will {{s2}} why key deadlines shifted earlier this month. Employees are expected to {{s3}} across teams to handle the extra workload. Facing a {{s4}} deadline requires effective time management strategies. Overall, maintaining a {{s5}} standard of work remains our top priority.',
    contentZh:
      '專案進度報告',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's3', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['quality', 'evaluation'] },
    ],
  },
  {
    id: 'workplace_client_negotiation_02',
    title: 'Client Negotiation',
    titleZh: '客戶商務談判',
    level: ['highschool', 'cet'],
    domain: 'workplace',
    content:
      'When negotiating contract terms, representatives must carefully {{s1}} their firm\'s financial expectations. Clients often {{s2}} lower prices or extended delivery windows. Representatives must {{s3}} whether those proposed terms remain profitable. Experiencing {{s4}} disagreement during negotiations is common before reaching compromise. Establishing a {{s5}} partnership depends on clear mutual understanding and fairness.',
    contentZh:
      '客戶商務談判',
    slots: [
      { id: 's1', pos: 'v', tags: ['communication'] },
      { id: 's2', pos: 'v', tags: ['request', 'communication'] },
      { id: 's3', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['quality', 'evaluation'] },
    ],
  },
  {
    id: 'workplace_office_relocation_03',
    title: 'Office Relocation',
    titleZh: '辦公室搬遷通知',
    level: ['highschool', 'cet'],
    domain: 'workplace',
    content:
      'Management plans to {{s1}} staff members regarding the upcoming office relocation. The transition will require a {{s2}} pause in standard desk operations next Friday. Department leads should {{s3}} closely to coordinate moving logistics and equipment packing. IT staff will {{s4}} network installations to minimize system downtime. Completing this move efficiently is considered an {{s5}} goal for the entire organization.',
    contentZh:
      '辦公室搬遷通知',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'adj', tags: ['duration', 'time'] },
      { id: 's3', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's4', pos: 'v', tags: ['process'] },
      { id: 's5', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
  {
    id: 'workplace_performance_review_04',
    title: 'Performance Review',
    titleZh: '年度績效考核',
    level: ['highschool', 'cet'],
    domain: 'workplace',
    content:
      'Annual performance appraisals allow supervisors to {{s1}} key achievements in employee contributions. During discussions, managers will {{s2}} staff about areas requiring career development. Employees can {{s3}} professional training resources to build modern skills. Handling workplace feedback with a {{s4}} mindset leads to long-term growth. Regular evaluation cycles provide a {{s5}} framework for structural progress.',
    contentZh:
      '年度績效考核',
    slots: [
      { id: 's1', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['request', 'communication'] },
      { id: 's4', pos: 'adj', tags: ['evaluation'] },
      { id: 's5', pos: 'adj', tags: ['quality', 'evaluation'] },
    ],
  },
  {
    id: 'workplace_software_migration_05',
    title: 'Software Migration',
    titleZh: '軟體系統升級',
    level: ['highschool', 'cet'],
    domain: 'workplace',
    content:
      'Upgrading enterprise software requires IT teams to {{s1}} users well before deployment. Engineers will {{s2}} system migration during off-peak weekend hours. Employees might {{s3}} minor interface changes upon logging in next Monday. Tech support specialists will {{s4}} with departments to resolve operational glitches. Thorough testing ensures a {{s5}} transition without causing business interruptions.',
    contentZh:
      '軟體系統升級',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'v', tags: ['process'] },
      { id: 's3', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's4', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's5', pos: 'adj', tags: ['quality', 'evaluation'] },
    ],
  }
];
