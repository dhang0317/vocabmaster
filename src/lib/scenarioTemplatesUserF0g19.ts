import type { ScenarioTemplate } from './scenarioTemplates';

/** bulk F0 group 19 */
export const USER_SCENARIO_TEMPLATES_F0g19: ScenarioTemplate[] = [
  {
    id: 'science_renewable_energy_02',
    title: 'Renewable Energy',
    titleZh: '再生能源科技',
    level: ['toefl_ielts', 'advanced'],
    domain: 'science',
    content:
      'Clean energy engineers work to {{s1}} solar radiation into electrical power with higher conversion efficiency. Researchers will {{s2}} policymakers about advanced grid battery storage capacities. Industry teams try to {{s3}} with government agencies to finance clean energy projects. Severe weather conditions exert {{s4}} physical stress on offshore wind turbine blades. Developing durable clean technology provides a {{s5}} alternative to fossil fuels.',
    contentZh:
      '再生能源科技',
    slots: [
      { id: 's1', pos: 'v', tags: ['process'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['quality', 'evaluation'] },
    ],
  },
  {
    id: 'science_ai_ethics_03',
    title: 'Ai Ethics',
    titleZh: '人工智慧倫理',
    level: ['toefl_ielts', 'advanced'],
    domain: 'science',
    content:
      'Computer scientists examine machine learning models to {{s1}} subtle demographic biases in training datasets. AI ethicists will {{s2}} regulatory bodies regarding automated decision-making risks. Developers must {{s3}} how neural networks arrive at specific automated outputs. Biased automated algorithms cause {{s4}} public debate over algorithmic fairness. Establishing ethical AI frameworks represents an {{s5}} duty for technology developers.',
    contentZh:
      '人工智慧倫理',
    slots: [
      { id: 's1', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
  {
    id: 'science_deep_sea_exploration_04',
    title: 'Deep Sea Exploration',
    titleZh: '深海探測研究',
    level: ['toefl_ielts', 'advanced'],
    domain: 'science',
    content:
      'Marine biologists using submersible vehicles {{s1}} unstudied biological organisms along ocean floor vents. Oceanographers will {{s2}} environmental agencies about unique hydrothermal ecosystem discoveries. Research crews must {{s3}} oceanic water samples to measure deep chemical compositions. Operating submersibles under immense ocean depth creates {{s4}} pressure on equipment seals. Deep ocean exploration provides a {{s5}} understanding of marine biodiversity.',
    contentZh:
      '深海探測研究',
    slots: [
      { id: 's1', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['process'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['quality', 'evaluation'] },
    ],
  },
  {
    id: 'science_nanotechnology_05',
    title: 'Nanotechnology',
    titleZh: '奈米科技應用',
    level: ['toefl_ielts', 'advanced'],
    domain: 'science',
    content:
      'Materials scientists manipulate atomic structures to {{s1}} lightweight composite materials with immense strength. Chemical engineers will {{s2}} industrial partners about scaled manufacturing possibilities. Researchers must {{s3}} how nanostructures behave under varying temperature extremes. Exposure to microscopic airborne nanoparticles poses {{s4}} health hazards for laboratory technicians. Establishing strict safety protocols is an {{s5}} priority for nanotech research.',
    contentZh:
      '奈米科技應用',
    slots: [
      { id: 's1', pos: 'v', tags: ['process'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
  {
    id: 'science_synthetic_biology_06',
    title: 'Synthetic Biology',
    titleZh: '合成生物科技',
    level: ['toefl_ielts', 'advanced'],
    domain: 'science',
    content:
      'Bioengineers design custom genetic circuits to {{s1}} biofuels from engineered micro-organisms. Geneticists will {{s2}} safety regulators before releasing modified strains for agricultural field testing. Scientists try to {{s3}} across international labs to standardize genetic part libraries. Accidental environmental contamination presents {{s4}} ecological concerns for safety monitoring boards. Maintaining strict containment protocols guarantees a {{s5}} biosafety framework.',
    contentZh:
      '合成生物科技',
    slots: [
      { id: 's1', pos: 'v', tags: ['process'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['quality', 'evaluation'] },
    ],
  },
];
