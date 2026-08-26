import type { ScenarioTemplate } from './scenarioTemplates';

/** bulk F1 group 20 */
export const USER_SCENARIO_TEMPLATES_F1g20: ScenarioTemplate[] = [
  {
    id: 'workplace_sequence_meeting_01',
    title: 'Sequence Meeting',
    titleZh: '後續會議安排',
    level: ['highschool', 'toeic'],
    domain: 'workplace',
    content:
      'Following the initial project briefing, the manager scheduled a {{s1}} meeting to review action items. During this session, team leaders will {{s2}} staff about detailed milestones. It is {{s3}} that all departments coordinate their schedules to avoid overlap. We must {{s4}} early risks before final deployment to ensure project success.',
    contentZh:
      '後續會議安排',
    slots: [
      { id: 's1', pos: 'adj', tags: ['sequence', 'time'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['perception', 'cognitive'] },
    ],
  },
  {
    id: 'health_duration_pain_01',
    title: 'Duration Pain',
    titleZh: '持續疼痛諮詢',
    level: ['highschool', 'toeic'],
    domain: 'daily',
    content:
      'Patients experiencing {{s1}} back pain should consult a specialist for thorough examination. The doctor will {{s2}} potential causes before recommending physical therapy. It is {{s3}} to refrain from heavy lifting during treatment. Proper rest will help {{s4}} physical recovery and prevent long-term complications.',
    contentZh:
      '持續疼痛諮詢',
    slots: [
      { id: 's1', pos: 'adj', tags: ['duration', 'time'] },
      { id: 's2', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's3', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['state_change'] },
    ],
  },
  {
    id: 'workplace_intensity_crisis_01',
    title: 'Intensity Crisis',
    titleZh: '高壓危機應變',
    level: ['toefl_ielts', 'advanced'],
    domain: 'workplace',
    content:
      'When facing {{s1}} pressure from shareholders, board directors must maintain clear judgment. Executives need to {{s2}} the public about corrective measures being executed. The crisis response team will {{s3}} with legal advisors to minimize overall brand liability. Swift strategic decision-making will {{s4}} stabilization across global operations.',
    contentZh:
      '高壓危機應變',
    slots: [
      { id: 's1', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's4', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'travel_perception_wildlife_01',
    title: 'Perception Wildlife',
    titleZh: '野生動物觀察',
    level: ['highschool', 'toeic'],
    domain: 'travel',
    content:
      'During the forest safari, tourists hope to {{s1}} rare bird species in their natural habitats. Local guides will {{s2}} visitors regarding safe observation distances. Carrying {{s3}} binoculars enhances the chance of spotting hidden animals. Respecting nature laws is {{s4}} for preserving ecological habitats.',
    contentZh:
      '野生動物觀察',
    slots: [
      { id: 's1', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's4', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
  {
    id: 'academic_reasoning_hypothesis_01',
    title: 'Reasoning Hypothesis',
    titleZh: '假設推理驗證',
    level: ['toefl_ielts', 'advanced'],
    domain: 'academic',
    content:
      'Before publishing empirical studies, scholars must {{s1}} gathered research data carefully. Authors should {{s2}} readers about statistical assumptions underlying their mathematical models. Ensuring a {{s3}} experimental process avoids flawed research conclusions. Peer reviewers will {{s4}} logical gaps before manuscript approval.',
    contentZh:
      '假設推理驗證',
    slots: [
      { id: 's1', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['perception', 'cognitive'] },
    ],
  }
];
