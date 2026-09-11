import type { ScenarioTemplate } from './scenarioTemplates';

/** bulk F0 group 9 */
export const USER_SCENARIO_TEMPLATES_F0g09: ScenarioTemplate[] = [
  {
    id: 'academic_conference_presentation_04',
    title: 'Conference Presentation',
    titleZh: '學術會議簡報',
    level: ['highschool', 'toeic'],
    domain: 'academic',
    content:
      'Presenting research at international conferences allows scholars to {{s1}} empirical findings globally. Attendees frequently {{s2}} clarifications during question sessions following keynotes. Keynote speakers must {{s3}} complex theoretical ideas into accessible presentation summaries. Engaging in a {{s4}} discussion period encourages future international research partnerships. Scholarly networking serves a {{s5}} role in career development.',
    contentZh:
      '學術會議簡報',
    slots: [
      { id: 's1', pos: 'v', tags: ['communication'] },
      { id: 's2', pos: 'v', tags: ['request', 'communication'] },
      { id: 's3', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's4', pos: 'adj', tags: ['duration', 'time'] },
      { id: 's5', pos: 'adj', tags: ['quality', 'evaluation'] },
    ],
  },
  {
    id: 'science_lab_safety_01',
    title: 'Lab Safety',
    titleZh: '實驗室安全規範',
    level: ['highschool', 'toeic'],
    domain: 'science',
    content:
      'Laboratory directors must {{s1}} researchers regarding hazardous chemical disposal procedures. Safety officers will {{s2}} non-compliance issues during unannounced lab inspections. Technicians are instructed to {{s3}} chemical specimens inside ventilated safety hoods. Toxic chemical spills create a {{s4}} risk for laboratory personnel nearby. Following safety protocols remains an {{s5}} requirement for laboratory operations.',
    contentZh:
      '實驗室安全規範',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's3', pos: 'v', tags: ['process'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
  {
    id: 'science_data_collection_02',
    title: 'Data Collection',
    titleZh: '科學數據採集',
    level: ['highschool', 'toeic'],
    domain: 'science',
    content:
      'Field biologists gather environmental samples to {{s1}} ecosystem health measurements. Scientists will {{s2}} public agencies if water contamination exceeds safety limits. Field researchers usually {{s3}} micro-organism variations under digital laboratory microscopes. Conducting field research requires a {{s4}} observation phase across changing seasons. High quality data yields {{s5}} conclusions for ecological conservation.',
    contentZh:
      '科學數據採集',
    slots: [
      { id: 's1', pos: 'v', tags: ['process'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's4', pos: 'adj', tags: ['duration', 'time'] },
      { id: 's5', pos: 'adj', tags: ['evaluation'] },
    ],
  },
  {
    id: 'science_climate_observation_03',
    title: 'Climate Observation',
    titleZh: '氣候變遷觀測',
    level: ['highschool', 'toeic'],
    domain: 'science',
    content:
      'Climatologists monitor weather satellites to {{s1}} subtle shifts in oceanic temperatures. Meteorologists will {{s2}} local authorities when violent storms threaten coastal regions. Researchers must {{s3}} how atmospheric warming affects regional rainfall patterns. Dealing with {{s4}} weather events requires resilient public infrastructure planning. Long-term atmospheric monitoring is an {{s5}} responsibility for global meteorologists.',
    contentZh:
      '氣候變遷觀測',
    slots: [
      { id: 's1', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
  {
    id: 'science_astronomy_discovery_04',
    title: 'Astronomy Discovery',
    titleZh: '天文新星發現',
    level: ['highschool', 'toeic'],
    domain: 'science',
    content:
      'Astronomers operating deep-space telescopes can {{s1}} faint light signals from distant galaxies. Research teams will {{s2}} the astronomical community upon confirming new planetary bodies. Astrophysicists must {{s3}} orbital trajectories using mathematical simulation models. Analyzing cosmic background radiation requires a {{s4}} processing phase. Advanced observational instruments ensure a {{s5}} measurement of astronomical phenomena.',
    contentZh:
      '天文新星發現',
    slots: [
      { id: 's1', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's4', pos: 'adj', tags: ['duration', 'time'] },
      { id: 's5', pos: 'adj', tags: ['quality', 'evaluation'] },
    ],
  },
];
