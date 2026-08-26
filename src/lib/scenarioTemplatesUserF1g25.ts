import type { ScenarioTemplate } from './scenarioTemplates';

/** bulk F1 group 25 */
export const USER_SCENARIO_TEMPLATES_F1g25: ScenarioTemplate[] = [
  {
    id: 'hotel_importance_cleanliness_01',
    title: 'Importance Cleanliness',
    titleZh: '清潔衛生重於一切',
    level: ['elementary', 'highschool'],
    domain: 'travel',
    content:
      'Maintaining high sanitation standards is {{s1}} for every hotel establishment. Housekeepers will {{s2}} supervisors once room cleaning procedures are complete. Guests always {{s3}} fresh linens and tidy spaces with great satisfaction. Quality maintenance will {{s4}} recurring customer bookings year after year.',
    contentZh:
      '清潔衛生重於一切',
    slots: [
      { id: 's1', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's4', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'workplace_cooperation_project_01',
    title: 'Cooperation Project',
    titleZh: '跨部門專案合作',
    level: ['highschool', 'toeic'],
    domain: 'workplace',
    content:
      'Engineering and design teams agreed to {{s1}} on developing the new software interface. Project managers will {{s2}} stakeholders during weekly progress reviews. Meeting deadlines is {{s3}} to ensure timely product release dates. Collaborative effort will {{s4}} exceptional product functionality for end users.',
    contentZh:
      '跨部門專案合作',
    slots: [
      { id: 's1', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'daily_inform_event_01',
    title: 'Inform Event',
    titleZh: '社區活動通知',
    level: ['elementary', 'highschool'],
    domain: 'daily',
    content:
      'Community leaders posted notices to {{s1}} residents about the weekend park cleanup event. Volunteers will {{s2}} to plant trees and clean public walkways. Participating in civic activities is {{s3}} for fostering community spirit. Community effort will {{s4}} local neighborhoods into beautiful green spaces.',
    contentZh:
      '社區活動通知',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's3', pos: 'adj', tags: ['evaluation'] },
      { id: 's4', pos: 'v', tags: ['state_change'] },
    ],
  },
  {
    id: 'academic_quality_journal_01',
    title: 'Quality Journal',
    titleZh: '高品質期刊發表',
    level: ['toefl_ielts', 'advanced'],
    domain: 'academic',
    content:
      'Publishing in a {{s1}} academic journal requires extensive peer review verification. Authors must {{s2}} reviewers about detailed data collection procedures. Research teams should {{s3}} empirical data using validated statistical software tools. High publication standards will {{s4}} valuable contributions to world scientific knowledge.',
    contentZh:
      '高品質期刊發表',
    slots: [
      { id: 's1', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's4', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'travel_request_information_01',
    title: 'Request Information',
    titleZh: '旅遊資訊詢問',
    level: ['elementary', 'highschool'],
    domain: 'travel',
    content:
      'Tourists often stop at visitor centers to {{s1}} maps and excursion guides. Friendly staff will {{s2}} travelers about popular historical landmarks nearby. Finding accurate guidance is {{s3}} when exploring unfamiliar destination spots. Clear direction will {{s4}} an enjoyable vacation experience for visitors.',
    contentZh:
      '旅遊資訊詢問',
    slots: [
      { id: 's1', pos: 'v', tags: ['request', 'communication'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['cause_effect'] },
    ],
  },
];
