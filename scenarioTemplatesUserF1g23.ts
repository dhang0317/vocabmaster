import type { ScenarioTemplate } from './scenarioTemplates';

/** bulk F1 group 23 */
export const USER_SCENARIO_TEMPLATES_F1g23: ScenarioTemplate[] = [
  {
    id: 'workplace_perception_risk_01',
    title: 'Perception Risk',
    titleZh: '風險感知敏銳',
    level: ['toefl_ielts', 'advanced'],
    domain: 'workplace',
    content:
      'Experienced managers can quickly {{s1}} potential operational bottlenecks before project delays happen. Department heads will {{s2}} executives regarding corrective measures being taken. Conducting thorough risk assessments is {{s3}} for maintaining delivery timelines. Proactive management will {{s4}} higher client trust and project stability.',
    contentZh:
      '風險感知敏銳',
    slots: [
      { id: 's1', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'science_sequence_experiment_01',
    title: 'Sequence Experiment',
    titleZh: '連續實驗步驟',
    level: ['toefl_ielts', 'advanced'],
    domain: 'science',
    content:
      'Following the initial pilot test, scientists initiated a {{s1}} experiment with broader parameters. Researchers will {{s2}} colleagues about preliminary laboratory measurements. Maintaining a {{s3}} experimental control group ensures data integrity. Systematic testing protocols will {{s4}} reliable scientific conclusions for publication.',
    contentZh:
      '連續實驗步驟',
    slots: [
      { id: 's1', pos: 'adj', tags: ['sequence', 'time'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'hotel_intensity_complaint_01',
    title: 'Intensity Complaint',
    titleZh: '嚴肅顧客反映',
    level: ['highschool', 'toeic'],
    domain: 'travel',
    content:
      'When faced with an {{s1}} guest complaint regarding room cleanliness, staff acted immediately. The hotel manager will {{s2}} the customer about complimentary room upgrades. Housekeeping staff will {{s3}} to resolve all issues within minutes. Superior conflict resolution will {{s4}} guest dissatisfaction into long-term customer loyalty.',
    contentZh:
      '嚴肅顧客反映',
    slots: [
      { id: 's1', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's4', pos: 'v', tags: ['state_change'] },
    ],
  },
  {
    id: 'daily_request_assistance_01',
    title: 'Request Assistance',
    titleZh: '尋求生活協助',
    level: ['elementary', 'highschool'],
    domain: 'daily',
    content:
      'It is perfectly fine to {{s1}} assistance from neighbors when moving heavy furniture. Neighbors will often {{s2}} you about convenient local moving services. Cooperation makes heavy tasks feel remarkably {{s3}} and easy. Friendly relationships will {{s4}} a warm community atmosphere for everyone.',
    contentZh:
      '尋求生活協助',
    slots: [
      { id: 's1', pos: 'v', tags: ['request', 'communication'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['evaluation'] },
      { id: 's4', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'workplace_reasoning_budget_01',
    title: 'Reasoning Budget',
    titleZh: '預算合理推理',
    level: ['toefl_ielts', 'advanced'],
    domain: 'workplace',
    content:
      'Financial analysts must {{s1}} market projections before submitting annual budget reports. Department directors will {{s2}} board members regarding anticipated expenditure increases. Presenting a {{s3}} business plan is necessary for capital expenditure approval. Clear financial planning will {{s4}} sustained corporate expansion over upcoming years.',
    contentZh:
      '預算合理推理',
    slots: [
      { id: 's1', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['cause_effect'] },
    ],
  }
];
