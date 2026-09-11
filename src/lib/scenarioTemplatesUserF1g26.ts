import type { ScenarioTemplate } from './scenarioTemplates';

/** bulk F1 group 26 */
export const USER_SCENARIO_TEMPLATES_F1g26: ScenarioTemplate[] = [
  {
    id: 'shopping_reasoning_value_01',
    title: 'Reasoning Value',
    titleZh: '理性消費衡量',
    level: ['highschool', 'toeic'],
    domain: 'daily',
    content:
      'Smart shoppers will always {{s1}} product quality and warranty terms before purchasing. Sales representatives must {{s2}} buyers regarding store return and refund policies. Making {{s3}} purchase choices prevents buyers remorse after shopping sprees. Careful deliberation will {{s4}} better personal financial management over time.',
    contentZh:
      '理性消費衡量',
    slots: [
      { id: 's1', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'science_perception_data_01',
    title: 'Perception Data',
    titleZh: '觀察數據變化',
    level: ['toefl_ielts', 'advanced'],
    domain: 'science',
    content:
      'Laboratory technicians must carefully {{s1}} minute changes in liquid chemical solutions. Lead scientists will {{s2}} research partners regarding observed experimental reactions. Maintaining high observation accuracy is {{s3}} for valid scientific experimentation. Detailed data tracking will {{s4}} precise experimental results for research papers.',
    contentZh:
      '觀察數據變化',
    slots: [
      { id: 's1', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'health_intensity_symptom_01',
    title: 'Intensity Symptom',
    titleZh: '劇烈不適診治',
    level: ['highschool', 'toeic'],
    domain: 'daily',
    content:
      'If patients experience {{s1}} pain, they must seek immediate emergency medical care. Triage nurses will {{s2}} attending physicians about vital signs upon arrival. Following doctor advice is {{s3}} during medical treatment recoveries. Prompt intervention will {{s4}} patient health back to stable condition.',
    contentZh:
      '劇烈不適診治',
    slots: [
      { id: 's1', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['state_change'] },
    ],
  },
  {
    id: 'workplace_importance_security_01',
    title: 'Importance Security',
    titleZh: '資訊安全重於一切',
    level: ['toefl_ielts', 'advanced'],
    domain: 'workplace',
    content:
      'Maintaining cybersecurity compliance is {{s1}} for protecting sensitive client financial records. IT directors will {{s2}} staff regarding mandatory password security updates. System administrators must {{s3}} suspicious network activity immediately to stop breaches. Robust security protocols will {{s4}} long-term trust among corporate partners.',
    contentZh:
      '資訊安全重於一切',
    slots: [
      { id: 's1', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's4', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'daily_duration_break_01',
    title: 'Duration Break',
    titleZh: '簡短休息充電',
    level: ['elementary', 'highschool'],
    domain: 'daily',
    content:
      'Taking a {{s1}} rest break during work helps refresh your mental energy. Ergonomic experts {{s2}} office workers to stretch regularly during screen work. Stepping away from desks can {{s3}} mood and reduce eye strain. Small rest breaks will {{s4}} higher productivity throughout the afternoon.',
    contentZh:
      '簡短休息充電',
    slots: [
      { id: 's1', pos: 'adj', tags: ['duration', 'time'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['state_change'] },
      { id: 's4', pos: 'v', tags: ['cause_effect'] },
    ],
  },
];
