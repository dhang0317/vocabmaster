import type { ScenarioTemplate } from './scenarioTemplates';

/** bulk F1 group 15 */
export const USER_SCENARIO_TEMPLATES_F1g15: ScenarioTemplate[] = [
  {
    id: 'science_astronomy_exoplanets_04',
    title: 'Astronomy Exoplanets',
    titleZh: '系外行星探索',
    level: ['toefl_ielts', 'advanced'],
    domain: 'science',
    content:
      'Astronomers analyze space telescope images to {{s1}} atmospheric signatures on distant exoplanets. Researchers will {{s2}} the scientific community about planetary habitability conditions. Astrophysicists must {{s3}} orbital data to calculate planetary mass and surface gravity. Obtaining a {{s4}} spectrum sample requires state-of-the-art orbital instruments. Discovering Earth-like worlds will {{s5}} our fundamental understanding of life in the universe.',
    contentZh:
      '系外行星探索',
    slots: [
      { id: 's1', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's4', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's5', pos: 'v', tags: ['state_change'] },
    ],
  },
  {
    id: 'science_neuroscience_cognition_05',
    title: 'Neuroscience Cognition',
    titleZh: '腦神經科學研究',
    level: ['toefl_ielts', 'advanced'],
    domain: 'science',
    content:
      'Neuroscientists use brain imaging technology to {{s1}} neural activation patterns during memory formation. Researchers will {{s2}} clinicians regarding neurological mechanisms behind cognitive decline. Analyzing synaptic plasticity requires a {{s3}} experimental approach in laboratory settings. Scientists attempt to {{s4}} how neural circuits process complex sensory information. Understanding brain connectivity will {{s5}} breakthrough therapies for neurodegenerative disorders.',
    contentZh:
      '腦神經科學研究',
    slots: [
      { id: 's1', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'science_quantum_computing_06',
    title: 'Quantum Computing',
    titleZh: '量子運算突破',
    level: ['toefl_ielts', 'advanced'],
    domain: 'science',
    content:
      'Quantum physicists aim to {{s1}} information processing capabilities using quantum superposition. Physicists will {{s2}} computer scientists about qubit coherence maintenance advances. Maintaining extreme low temperatures is {{s3}} for stabilizing quantum computing hardware. Researchers must {{s4}} error correction algorithms to prevent calculation drift. Quantum processing power will {{s5}} unprecedented breakthroughs in cryptography and material science.',
    contentZh:
      '量子運算突破',
    slots: [
      { id: 's1', pos: 'v', tags: ['state_change'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'science_marine_biodiversity_07',
    title: 'Marine Biodiversity',
    titleZh: '海洋生物多樣性',
    level: ['toefl_ielts', 'advanced'],
    domain: 'science',
    content:
      'Marine biologists study coral reefs to {{s1}} changes in deep sea ecosystem health. Biologists will {{s2}} conservation agencies about ocean acidification impacts on aquatic life. Protecting fragile marine habitats is {{s3}} for maintaining global fish stocks. Scientists attempt to {{s4}} species adaptation capacity against rising ocean temperatures. Conservation efforts will {{s5}} better preservation of marine biodiversity.',
    contentZh:
      '海洋生物多樣性',
    slots: [
      { id: 's1', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['importance', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's5', pos: 'v', tags: ['cause_effect'] },
    ],
  },
  {
    id: 'science_nanotechnology_medicine_08',
    title: 'Nanotechnology Medicine',
    titleZh: '奈米科技醫療應用',
    level: ['toefl_ielts', 'advanced'],
    domain: 'science',
    content:
      'Engineers use bio-compatible nanoparticles to {{s1}} targeted drug delivery directly to tumor cells. Researchers will {{s2}} oncologists about clinical trial outcomes and safety profiles. Designing precise molecular carriers requires a {{s3}} fabrication methodology. Scientists need to {{s4}} cellular interactions at atomic scales during experimentation. Nano-scale medical innovations will {{s5}} cancer treatment protocols worldwide.',
    contentZh:
      '奈米科技醫療應用',
    slots: [
      { id: 's1', pos: 'v', tags: ['process'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'adj', tags: ['quality', 'evaluation'] },
      { id: 's4', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's5', pos: 'v', tags: ['state_change'] },
    ],
  },
];
