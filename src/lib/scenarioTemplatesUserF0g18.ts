import type { ScenarioTemplate } from './scenarioTemplates';

/** bulk F0 group 18 */
export const USER_SCENARIO_TEMPLATES_F0g18: ScenarioTemplate[] = [
  {
    id: 'academic_ethics_committee_03',
    title: 'Ethics Committee',
    titleZh: '研究倫理審查',
    level: ['toefl_ielts', 'advanced'],
    domain: 'academic',
    content:
      'Institutional review boards are mandated to {{s1}} ethical violations in human subject research. Investigators must {{s2}} research participants about potential psychological or physical risks. Committees will {{s3}} whether experimental benefits outweigh potential participant harms. Conducting unauthorized human experimentation causes {{s4}} legal and ethical repercussions. Upholding ethical guidelines remains an {{s5}} mandate for research institutions.',
    contentZh:
      '研究倫理審查',
    slots: [
      { id: 's1', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
  {
    id: 'academic_publication_bias_04',
    title: 'Publication Bias',
    titleZh: '學術出版偏誤',
    level: ['toefl_ielts', 'advanced'],
    domain: 'academic',
    content:
      'Journal editors work to {{s1}} publication bias prioritizing positive findings over negative results. Statisticians will {{s2}} whether published experimental effects are inflated across literature reviews. Researchers are encouraged to {{s3}} the academic community about unsuccessful experimental replications. Suppressing negative scientific results causes {{s4}} distortion in medical research consensus. Promoting open access data standards ensures a {{s5}} scientific record.',
    contentZh:
      '學術出版偏誤',
    slots: [
      { id: 's1', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's3', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['quality', 'evaluation'] },
    ],
  },
  {
    id: 'academic_archival_research_05',
    title: 'Archival Research',
    titleZh: '歷史檔案研究',
    level: ['toefl_ielts', 'advanced'],
    domain: 'academic',
    content:
      'Historians examining ancient manuscripts must {{s1}} fragile parchment documents with extreme delicate care. Academic researchers will {{s2}} museum curators upon identifying uncataloged historical letters. Scholars need to {{s3}} ideological biases embedded in historical primary sources. Deciphering faded ancient handwriting requires a {{s4}} paleographic analysis. Meticulous document analysis remains an {{s5}} skill for historical scholars.',
    contentZh:
      '歷史檔案研究',
    slots: [
      { id: 's1', pos: 'v', tags: ['process'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's4', pos: 'adj', tags: ['duration', 'time'] },
      { id: 's5', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
  {
    id: 'academic_citation_analysis_06',
    title: 'Citation Analysis',
    titleZh: '引文計量分析',
    level: ['toefl_ielts', 'advanced'],
    domain: 'academic',
    content:
      'Bibliometric analysts evaluate citation networks to {{s1}} emerging theoretical trends across disciplines. Academic committees will {{s2}} faculty candidates regarding citation impact requirements for tenure. Scholars must {{s3}} how conceptual ideas spread across international research groups. Unethical self-citation practices generate {{s4}} concern among academic publishers. Maintaining transparent citation metrics ensures a {{s5}} evaluation process.',
    contentZh:
      '引文計量分析',
    slots: [
      { id: 's1', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['quality', 'evaluation'] },
    ],
  },
  {
    id: 'science_quantum_computing_01',
    title: 'Quantum Computing',
    titleZh: '量子電腦研究',
    level: ['toefl_ielts', 'advanced'],
    domain: 'science',
    content:
      'Quantum physicists aim to {{s1}} complex calculations far beyond conventional supercomputing capabilities. Research scientists will {{s2}} the scientific community when quantum supremacy milestones are reached. Engineers must {{s3}} subatomic particle interference before system coherence breaks down. Environmental thermal noise creates {{s4}} instability in delicate quantum processors. Developing fault-tolerant systems remains an {{s5}} objective for quantum computing.',
    contentZh:
      '量子電腦研究',
    slots: [
      { id: 's1', pos: 'v', tags: ['process'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
];
