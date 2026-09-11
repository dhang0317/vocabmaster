import type { ScenarioTemplate } from './scenarioTemplates';

/** bulk F1 group 2 */
export const USER_SCENARIO_TEMPLATES_F1g02: ScenarioTemplate[] = [
  {
    id: 'workplace_team_meeting_01',
    title: 'Team Meeting',
    titleZh: '團隊會議討論',
    level: ['highschool', 'toeic'],
    domain: 'workplace',
    content:
      'Our project manager opened the meeting to {{s1}} the team about revised goals. We need to {{s2}} across departments to finish the task on schedule. During the discussion, several members raised concerns about {{s3}} workload pressure. It is {{s4}} that everyone stays focused on high-priority deliverables. The director promised to {{s5}} resource allocation to relieve current operational bottlenecks.',
    contentZh:
      '團隊會議討論',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's3', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's4', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's5', pos: 'v', tags: ['state_change'] },
    ],
  },
  {
    id: 'workplace_client_feedback_02',
    title: 'Client Feedback',
    titleZh: '客戶回饋處理',
    level: ['highschool', 'toeic'],
    domain: 'workplace',
    content:
      'After releasing the product, we received a {{s1}} amount of user feedback. The customer service representative will {{s2}} clients regarding our upcoming software patch. Engineers will {{s3}} the root causes behind reported system glitches. Delivering a {{s4}} solution is crucial for maintaining overall brand reputation. We hope to {{s5}} client satisfaction levels within the next quarter.',
    contentZh:
      '客戶回饋處理',
    slots: [
      { id: 's1', pos: 'v', tags: ['general'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's4', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's5', pos: 'v', tags: ['state_change'] },
    ],
  },
  {
    id: 'workplace_annual_report_03',
    title: 'Annual Report',
    titleZh: '年度報告審查',
    level: ['highschool', 'toeic'],
    domain: 'workplace',
    content:
      'The finance committee met to {{s1}} the preliminary quarterly earnings figures. Executives must {{s2}} shareholders about both financial profits and potential risks. It requires a {{s3}} audit process to guarantee regulatory compliance standards. The managing director emphasized {{s4}} operational objectives for the coming year. Successful execution will likely {{s5}} substantial growth across regional market sectors.',
    contentZh:
      '年度報告審查',
    slots: [
      { id: 's1', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's4', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'workplace_office_renovation_04',
    title: 'Office Renovation',
    titleZh: '辦公環境改造',
    level: ['highschool', 'toeic'],
    domain: 'workplace',
    content:
      'Our company decided to {{s1}} the old floor layout into open workstations. Management wants to {{s2}} with interior designers to optimize lighting conditions. Workers raised concerns about {{s3}} noise disruptions during daily office hours. The facilities manager sent a message to {{s4}} staff regarding construction schedules. These changes aim to foster a {{s5}} working atmosphere for all staff.',
    contentZh:
      '辦公環境改造',
    slots: [
      { id: 's1', pos: 'v', tags: ['state_change'] },
      { id: 's2', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's3', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's5', pos: 'adj', tags: ['evaluation'] },
    ],
  },
  {
    id: 'workplace_conflict_resolution_05',
    title: 'Conflict Resolution',
    titleZh: '職場衝突化解',
    level: ['highschool', 'toeic'],
    domain: 'workplace',
    content:
      'When disagreement arises between department heads, HR must step in promptly. The mediator tried to {{s1}} underlying issues causing the workplace tension. Both parties were asked to {{s2}} their concerns clearly without personal blame. It is {{s3}} to establish common ground to maintain productive collaboration. Resolving disputes effectively will {{s4}} a more harmonious organizational culture overall.',
    contentZh:
      '職場衝突化解',
    slots: [
      { id: 's1', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['cause_effect'] },
    ],
  },
];
