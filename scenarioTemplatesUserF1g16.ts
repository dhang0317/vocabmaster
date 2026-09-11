import type { ScenarioTemplate } from './scenarioTemplates';

/** bulk F1 group 16 */
export const USER_SCENARIO_TEMPLATES_F1g16: ScenarioTemplate[] = [
  {
    id: 'science_artificial_intelligence_09',
    title: 'Artificial Intelligence',
    titleZh: '人工智慧倫理',
    level: ['toefl_ielts', 'advanced'],
    domain: 'science',
    content:
      'Computer scientists evaluate neural networks to {{s1}} algorithmic bias in automated decisions. Researchers must {{s2}} regulators regarding transparency and data privacy standard enforcement. Establishing {{s3}} ethical guidelines prevents automated discrimination in algorithmic scoring systems. Engineers need to {{s4}} decision pathways in complex machine learning models. Ethical AI governance will {{s5}} greater societal trust in autonomous technologies.',
    contentZh:
      '人工智慧倫理',
    slots: [
      { id: 's1', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'science_volcanic_eruption_10',
    title: 'Volcanic Eruption',
    titleZh: '火山活動監測',
    level: ['toefl_ielts', 'advanced'],
    domain: 'science',
    content:
      'Geologists monitor seismic activity to {{s1}} signs of imminent volcanic eruption events. Monitoring teams will {{s2}} local emergency authorities regarding evacuation zone boundaries. Interpreting magma movement signals requires a {{s3}} network of volcanic sensors. Scientists attempt to {{s4}} eruptive probability using real-time gas emission readings. Early warning systems will {{s5}} enhanced safety for communities near active volcanoes.',
    contentZh:
      '火山活動監測',
    slots: [
      { id: 's1', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'health_epidemiology_study_06',
    title: 'Epidemiology Study',
    titleZh: '流行病學調查',
    level: ['toefl_ielts', 'advanced'],
    domain: 'daily',
    content:
      'Epidemiologists analyze transmission data to {{s1}} disease outbreak trajectories across regions. Public health officials will {{s2}} citizens about preventive measures and vaccination clinics. Deploying effective containment measures is {{s3}} to prevent health system collapse. Researchers must {{s4}} mutations in viral strains through continuous genomic surveillance. Coordinated international responses will {{s5}} faster control over global health emergencies.',
    contentZh:
      '流行病學調查',
    slots: [
      { id: 's1', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'health_pharmacology_trials_07',
    title: 'Pharmacology Trials',
    titleZh: '藥物臨床試驗',
    level: ['toefl_ielts', 'advanced'],
    domain: 'daily',
    content:
      'Conducting clinical trial phases requires pharmacologists to {{s1}} ethics committees of risks. Researchers must {{s2}} therapeutic efficacy compared to standard placebo treatments. Maintaining a {{s3}} trial protocol ensures participant safety and regulatory compliance. Doctors need to {{s4}} adverse reactions among human trial subjects immediately. Rigorous testing procedures will {{s5}} safer drug releases for patient treatments.',
    contentZh:
      '藥物臨床試驗',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's3', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'health_hospital_management_08',
    title: 'Hospital Management',
    titleZh: '醫院資源調配',
    level: ['toefl_ielts', 'advanced'],
    domain: 'daily',
    content:
      'Hospital administrators must {{s1}} patient triage rates to allocate emergency resources efficiently. Medical directors will {{s2}} healthcare teams regarding critical care bed availability. Preventing {{s3}} operational strain requires staff to {{s4}} across specialty departments. It is {{s5}} to maintain adequate medical supplies during seasonal flu surges. Streamlined emergency management will {{s6}} better patient outcomes in critical care settings.',
    contentZh:
      '醫院資源調配',
    slots: [
      { id: 's1', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's5', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's6', pos: 'v', tags: ['cause_effect'] },
    ],
  }
];
