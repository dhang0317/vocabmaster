import type { ScenarioTemplate } from './scenarioTemplates';

/** bulk F0 group 3 */
export const USER_SCENARIO_TEMPLATES_F0g03: ScenarioTemplate[] = [
  {
    id: 'workplace_budget_approval_06',
    title: 'Budget Approval',
    titleZh: '部門預算審核',
    level: ['highschool', 'toeic'],
    domain: 'workplace',
    content:
      'Department heads must submit expense proposals before financial officers {{s1}} resource allocations. Finance teams will {{s2}} discrepancies between requested amounts and past spending. Directors need to {{s3}} team members about temporary spending restrictions. Unforeseen expenses may cause a {{s4}} budget squeeze across operations. Taking an {{s5}} step toward financial discipline ensures steady operational stability.',
    contentZh:
      '部門預算審核',
    slots: [
      { id: 's1', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's3', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
  {
    id: 'workplace_candidate_interview_07',
    title: 'Candidate Interview',
    titleZh: '新進員工面試',
    level: ['highschool', 'toeic'],
    domain: 'workplace',
    content:
      'Hiring managers interview candidates to {{s1}} their practical expertise and cultural fit. Interviewers usually {{s2}} specific examples of past problem-solving achievements. Applicants must {{s3}} their thoughts clearly under formal pressure. Panel members often {{s4}} subtle cues regarding a candidate\'s interpersonal habits. Selecting the right team member is a {{s5}} task for company expansion.',
    contentZh:
      '新進員工面試',
    slots: [
      { id: 's1', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['request', 'communication'] },
      { id: 's3', pos: 'v', tags: ['communication'] },
      { id: 's4', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's5', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
  {
    id: 'workplace_crisis_communication_08',
    title: 'Crisis Communication',
    titleZh: '危機公關處理',
    level: ['highschool', 'toeic'],
    domain: 'workplace',
    content:
      'When technical bugs occur, companies must {{s1}} customers immediately through official statements. PR officers should {{s2}} clear explanations to maintain client trust. Executive leaders will {{s3}} customer support tickets to measure user sentiment. Avoiding {{s4}} public criticism requires transparent explanations and quick remedies. Quick action demonstrates a {{s5}} commitment to user satisfaction.',
    contentZh:
      '危機公關處理',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'v', tags: ['communication'] },
      { id: 's3', pos: 'v', tags: ['process'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['quality', 'evaluation'] },
    ],
  },
  {
    id: 'travel_flight_cancellation_01',
    title: 'Flight Cancellation',
    titleZh: '航班取消應對',
    level: ['highschool', 'toeic'],
    domain: 'travel',
    content:
      'Severe weather conditions forced airline officers to {{s1}} passengers about flight cancellations. Stranded travelers had to {{s2}} hotel vouchers and meal tickets at service desks. Ground agents worked tirelessly to {{s3}} with stranded groups during the delay. Waiting in crowded terminals caused {{s4}} frustration among exhausted tourists. Receiving a {{s5}} update helped passengers organize alternative ground transportation.',
    contentZh:
      '航班取消應對',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'v', tags: ['request', 'communication'] },
      { id: 's3', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['sequence', 'time'] },
    ],
  },
  {
    id: 'travel_lost_passport_02',
    title: 'Lost Passport',
    titleZh: '護照遺失處理',
    level: ['highschool', 'toeic'],
    domain: 'travel',
    content:
      'Losing travel documents abroad creates a {{s1}} problem for foreign tourists. Travelers must immediately {{s2}} local embassy officers regarding the lost passport. Officials will {{s3}} temporary travel certificates after verifying identity records. Authorities need to {{s4}} whether identity theft risks exist in such cases. Following standard safety steps offers a {{s5}} solution to urgent travel emergencies.',
    contentZh:
      '護照遺失處理',
    slots: [
      { id: 's1', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['process'] },
      { id: 's4', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's5', pos: 'adj', tags: ['quality', 'evaluation'] },
    ],
  },
];
