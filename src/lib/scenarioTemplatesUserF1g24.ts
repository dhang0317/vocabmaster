import type { ScenarioTemplate } from './scenarioTemplates';

/** bulk F1 group 24 */
export const USER_SCENARIO_TEMPLATES_F1g24: ScenarioTemplate[] = [
  {
    id: 'academic_sequence_phase_01',
    title: 'Sequence Phase',
    titleZh: '階段研究發展',
    level: ['toefl_ielts', 'advanced'],
    domain: 'academic',
    content:
      'Upon completing Phase 1 of clinical trials, researchers initiated a {{s1}} study involving human participants. Project leaders will {{s2}} ethics boards regarding safety oversight protocols. Adhering to strict methodological standards is {{s3}} for valid research outcomes. Thorough documentation will {{s4}} academic recognition in international medical journals.',
    contentZh:
      '階段研究發展',
    slots: [
      { id: 's1', pos: 'adj', tags: ['sequence', 'time'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'travel_duration_stay_01',
    title: 'Duration Stay',
    titleZh: '延長住宿旅行',
    level: ['highschool', 'toeic'],
    domain: 'travel',
    content:
      'Travelers decided to arrange a {{s1}} stay in the historic mountain city. Hotel receptionists will {{s2}} guests about weekly room rates and amenities. Visitors can {{s3}} beautiful sunset views from hilltop observation decks. Extending their vacation will {{s4}} deeper relaxation and cultural connection.',
    contentZh:
      '延長住宿旅行',
    slots: [
      { id: 's1', pos: 'adj', tags: ['duration', 'time'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's4', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'shopping_intensity_demand_01',
    title: 'Intensity Demand',
    titleZh: '強烈購物需求',
    level: ['highschool', 'toeic'],
    domain: 'daily',
    content:
      'The launch of new smartphones generated {{s1}} consumer demand across major electronics stores. Retailers must {{s2}} buyers regarding stock availability and pre-order dates. Cashiers need to {{s3}} with security guards to manage long queue lines. Efficient organization will {{s4}} a smoother purchasing experience for eager buyers.',
    contentZh:
      '強烈購物需求',
    slots: [
      { id: 's1', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's4', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'health_perception_symptom_01',
    title: 'Perception Symptom',
    titleZh: '察覺身體症狀',
    level: ['highschool', 'toeic'],
    domain: 'daily',
    content:
      'It is vital to {{s1}} early warning symptoms of fatigue before burnout occurs. Healthcare practitioners will {{s2}} patients about stress management strategies. Maintaining balanced lifestyle habits is {{s3}} for long-term health. Proactive self-care will {{s4}} overall life satisfaction and physical vitality.',
    contentZh:
      '察覺身體症狀',
    slots: [
      { id: 's1', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['state_change'] },
    ],
  },
  {
    id: 'science_reasoning_phenomenon_01',
    title: 'Reasoning Phenomenon',
    titleZh: '科學現象推理',
    level: ['toefl_ielts', 'advanced'],
    domain: 'science',
    content:
      'Theoretical physicists attempt to {{s1}} dark matter phenomena using mathematical models. Lead investigators will {{s2}} research institutes about novel simulation findings. Delivering {{s3}} empirical proofs remains the primary goal for computational scientists. Groundbreaking research will {{s4}} modern astrophysical paradigms fundamentally over time.',
    contentZh:
      '科學現象推理',
    slots: [
      { id: 's1', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['state_change'] },
    ],
  },
];
