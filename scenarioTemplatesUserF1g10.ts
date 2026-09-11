import type { ScenarioTemplate } from './scenarioTemplates';

/** bulk F1 group 10 */
export const USER_SCENARIO_TEMPLATES_F1g10: ScenarioTemplate[] = [
  {
    id: 'health_sleep_hygiene_04',
    title: 'Sleep Hygiene',
    titleZh: '睡眠衛生習慣',
    level: ['highschool', 'toeic'],
    domain: 'daily',
    content:
      'Maintaining healthy sleeping habits guarantees a {{s1}} night of restorative rest. Physicians often {{s2}} patients to avoid digital screens before bedtime. Establishing fixed sleeping times will {{s3}} internal circadian rhythms for the body. It is {{s4}} to keep bedrooms dark, quiet, and cool. Quality restorative sleep will {{s5}} enhanced cognitive sharpness during daily activities.',
    contentZh:
      '睡眠衛生習慣',
    slots: [
      { id: 's1', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['state_change'] },
      { id: 's4', pos: 'adj', tags: ['evaluation'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'health_first_aid_05',
    title: 'First Aid',
    titleZh: '急救常識應變',
    level: ['highschool', 'toeic'],
    domain: 'daily',
    content:
      'Knowing standard first aid procedures is an {{s1}} skill for safety. In emergencies, bystanders must {{s2}} medical dispatchers about victim condition. Rescuers must {{s3}} signs of life before administering cardiopulmonary resuscitation. Proper training ensures a {{s4}} response during severe medical emergencies. Immediate first aid intervention can {{s5}} survival chances until paramedics arrive.',
    contentZh:
      '急救常識應變',
    slots: [
      { id: 's1', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's4', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'workplace_strategic_planning_11',
    title: 'Strategic Planning',
    titleZh: '企業戰略規劃',
    level: ['toefl_ielts', 'advanced'],
    domain: 'workplace',
    content:
      'Strategic organizational planning requires executives to {{s1}} emerging market dynamics and global economic volatility. Leadership must {{s2}} regional heads regarding overarching multi-year growth targets. To sustain competitive advantage, companies must {{s3}} with innovative technology vendors. It is {{s4}} to conduct thorough feasibility assessments before launching global expansion initiatives. Such forward-thinking leadership will {{s5}} structural efficiency across international operations.',
    contentZh:
      '企業戰略規劃',
    slots: [
      { id: 's1', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's4', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's5', pos: 'v', tags: ['state_change'] },
    ],
  },
  {
    id: 'workplace_merger_acquisition_12',
    title: 'Merger Acquisition',
    titleZh: '企業併購併整合',
    level: ['toefl_ielts', 'advanced'],
    domain: 'workplace',
    content:
      'Executing a corporate merger demands a {{s1}} due diligence process across all involved entities. Legal advisors must {{s2}} compliance frameworks to mitigate post-acquisition liability risks. Executives need to {{s3}} staff regarding corporate restructurings and operational synergies. Managing cultural differences requires leaders to {{s4}} employee concerns across both merging organizations. Seamless operational integration will ultimately {{s5}} market expansion and shareholder value.',
    contentZh:
      '企業併購併整合',
    slots: [
      { id: 's1', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's2', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's3', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's4', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'workplace_crisis_management_13',
    title: 'Crisis Management',
    titleZh: '企業危機處理',
    level: ['toefl_ielts', 'advanced'],
    domain: 'workplace',
    content:
      'During major corporate public relations crises, PR directors must {{s1}} media outlets with utmost clarity. Spokespersons need to {{s2}} public Sentiment before delivering official corporate responses. Addressing severe reputational damage requires a {{s3}} strategy to rebuild public trust. Companies must {{s4}} with regulatory investigators during formal compliance inquiries. Prompt accountability will {{s5}} long-term brand restoration among consumers and partners.',
    contentZh:
      '企業危機處理',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's3', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  }
];
