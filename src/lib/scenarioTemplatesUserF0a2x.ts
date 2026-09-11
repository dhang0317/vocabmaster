import type { ScenarioTemplate } from './scenarioTemplates';

export const USER_SCENARIO_TEMPLATES_F0a2x: ScenarioTemplate[] = [
  {
    id: 'academic_thesis_proposal_01',
    title: 'Thesis Proposal',
    titleZh: '論文開題報告',
    level: ['highschool', 'toeic'],
    domain: 'academic',
    content:
      'Graduate students must {{s1}} advisory committees about prospective research methodology details. Academic advisors will {{s2}} whether proposed research questions are manageable. Researchers need to {{s3}} academic journal literature to identify knowledge gaps. Scholars might {{s4}} regarding theoretical frameworks during departmental seminar discussions. Conducting preliminary research is an {{s5}} phase of academic degree programs.',
    contentZh:
      '論文開題報告',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's3', pos: 'v', tags: ['process'] },
      { id: 's4', pos: 'v', tags: ['conflict', 'social'] },
      { id: 's5', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
  {
    id: 'academic_peer_review_02',
    title: 'Peer Review',
    titleZh: '學術同儕審查',
    level: ['highschool', 'toeic'],
    domain: 'academic',
    content:
      'Peer reviewers evaluate journal submissions to {{s1}} errors in statistical methodologies. Scholars will {{s2}} original authors regarding necessary revisions before journal publication. Researchers must {{s3}} alternative explanations for unexpected experimental results. Peer critique can generate {{s4}} debate among leading academic specialists. Reaching a {{s5}} scientific standard requires rigorous objective evaluation.',
    contentZh:
      '學術同儕審查',
    slots: [
      { id: 's1', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['quality', 'evaluation'] },
    ],
  },
  {
    id: 'academic_library_research_03',
    title: 'Library Research',
    titleZh: '圖書館文獻檢索',
    level: ['highschool', 'toeic'],
    domain: 'academic',
    content:
      'University students use digital archives to {{s1}} rare historical document collections. Research librarians will {{s2}} students about database navigation and citation formatting. Students can {{s3}} interlibrary loans for specialized texts not available locally. Reviewing sources carefully helps scholars {{s4}} biased perspectives in historical accounts. Reliable source attribution is an {{s5}} rule in scholarly writing.',
    contentZh:
      '圖書館文獻檢索',
    slots: [
      { id: 's1', pos: 'v', tags: ['process'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['request', 'communication'] },
      { id: 's4', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's5', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
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
  {
    id: 'workplace_corporate_merger_01',
    title: 'Corporate Merger',
    titleZh: '企業併購策略',
    level: ['toefl_ielts', 'advanced'],
    domain: 'workplace',
    content:
      'During corporate acquisitions, senior executives must {{s1}} shareholders about strategic financial objectives. Legal advisors will {{s2}} whether regulatory approval faces potential antitrust challenges. Department heads are expected to {{s3}} closely to align corporate culture across merging entities. Navigating {{s4}} union resistance requires diplomatic executive leadership. Conducting thorough financial audits is an {{s5}} precursor to final deal execution.',
    contentZh:
      '企業併購策略',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's3', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
];
