import type { ScenarioTemplate } from './scenarioTemplates';

/** User scenarios E12 — batch of 20 templates */
export const USER_SCENARIO_TEMPLATES_E12: ScenarioTemplate[] = [
  {
    id: "health_nutrition_advice_04",
    title: "營養飲食諮詢",
    titleZh: "營養飲食諮詢",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "Consulting a registered dietitian aids in achieving healthy eating goals. Dietitians will {{s1}} clients about balanced meal options and portion control. Clients are encouraged to {{s2}} unhealthy snacking habits into balanced eating. Consuming {{s3}} organic food boosts overall energy levels.",
    contentZh:
      "營養飲食諮詢",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["state_change"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "health_dental_hygiene_05",
    title: "牙科定期檢查",
    titleZh: "牙科定期檢查",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "Maintaining healthy teeth requires flossing and regular dental cleanings. Dentists will {{s1}} patients about proper brushing techniques. Hygienists try to {{s2}} early cavity signs during dental examinations. Daily care ensures a {{s3}} smile.",
    contentZh:
      "牙科定期檢查",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "health_pharmacy_prescription_07",
    title: "藥局領藥諮詢",
    titleZh: "藥局領藥諮詢",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "Pharmacists fill prescriptions and offer guidance on drug usage. They will {{s1}} patients about potential side effects or drug interactions. Customers should {{s2}} clarification if instructions seem unclear. Storing medicine properly is {{s3}} for safety.",
    contentZh:
      "藥局領藥諮詢",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["request", "communication"] },
      { id: "s3", pos: "adj", tags: ["importance", "evaluation"] },
    ],
  },
  {
    id: "health_fitness_rehab_08",
    title: "運動復健治療",
    titleZh: "運動復健治療",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "daily",
    content:
      "Recovering from sports injuries requires structured physical therapy. Therapists will {{s1}} muscle movement restrictions during initial mobility tests. Patients must endure a {{s2}} recovery process through customized exercises. Therapists {{s3}} with sports doctors to track progress.",
    contentZh:
      "運動復健治療",
    slots: [
      { id: "s1", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s2", pos: "adj", tags: ["duration", "time"] },
      { id: "s3", pos: "v", tags: ["cooperation", "social"] },
    ],
  },
  {
    id: "health_flu_vaccination_09",
    title: "流感疫苗接種",
    titleZh: "流感疫苗接種",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "Getting seasonal flu shots protects communities against viral outbreaks. Nurses will {{s1}} patients about post-vaccination care tips. Patients might feel {{s2}} soreness near the injection area briefly. Vaccination is an {{s3}} step during winter seasons.",
    contentZh:
      "流感疫苗接種",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "adj", tags: ["intensity", "evaluation"] },
      { id: "s3", pos: "adj", tags: ["importance", "evaluation"] },
    ],
  },
  {
    id: "health_sleep_hygiene_10",
    title: "改善睡眠品質",
    titleZh: "改善睡眠品質",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "Poor sleep quality affects immune function and daily performance. Sleep specialists {{s1}} patients about bedtime digital habits and dark environments. Individuals must {{s2}} factors causing nocturnal awakenings. Improving sleep quality leads to an {{s3}} boost in mood.",
    contentZh:
      "改善睡眠品質",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["reasoning", "cognitive"] },
      { id: "s3", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "academic_research_paper_01",
    title: "學術論文發布",
    titleZh: "學術論文發布",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "academic",
    content:
      "Publishing in peer-reviewed journals requires rigorous experimental methodology. Scholars must {{s1}} complex datasets before writing final manuscript drafts. Peer reviewers will {{s2}} methodological flaws or flawed assumptions in submitted papers. Authors must {{s3}} the committee about corrections made during revision. Publishing high {{s4}} research enhances academic standing.",
    contentZh:
      "學術論文發布",
    slots: [
      { id: "s1", pos: "v", tags: ["reasoning", "cognitive"] },
      { id: "s2", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s3", pos: "v", tags: ["inform", "communication"] },
      { id: "s4", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "academic_conference_speech_02",
    title: "學術研討發表",
    titleZh: "學術研討發表",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "academic",
    content:
      "International academic symposia offer platforms for scholarly discourse. Presenters will {{s1}} attendees regarding groundbreaking experimental findings. During Q&A sessions, scholars {{s2}} contrasting viewpoints on theoretical frameworks. Addressing critical questions is {{s3}} when defending research methodologies.",
    contentZh:
      "學術研討發表",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["communication"] },
      { id: "s3", pos: "adj", tags: ["importance", "evaluation"] },
    ],
  },
  {
    id: "academic_grant_proposal_03",
    title: "研究計畫申請",
    titleZh: "研究計畫申請",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "academic",
    content:
      "Securing research grants requires crafting compelling project proposals. Principal investigators must {{s1}} funding from institutional review boards. Proposals must {{s2}} why the proposed scientific investigation matters. Demonstrating {{s3}} methodology increases chances of approval.",
    contentZh:
      "研究計畫申請",
    slots: [
      { id: "s1", pos: "v", tags: ["request", "communication"] },
      { id: "s2", pos: "v", tags: ["reasoning", "cognitive"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "academic_thesis_defense_04",
    title: "碩士論文口試",
    titleZh: "碩士論文口試",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "academic",
    content:
      "Defending a Master's thesis tests candidate analytical rigor. Graduate students must {{s1}} committee members about core thesis arguments. Professors will {{s2}} weaknesses in empirical sampling or statistical logic. Successfully defending research creates an {{s3}} sense of academic accomplishment.",
    contentZh:
      "碩士論文口試",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s3", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "academic_literature_review_06",
    title: "文獻探討撰寫",
    titleZh: "文獻探討撰寫",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "academic",
    content:
      "A comprehensive literature review synthesizes prior scholarly works. Researchers must {{s1}} research gaps within current theoretical models. Authors will {{s2}} readers how historical studies connect to modern hypotheses. In the {{s3}} section, future research trajectories are outlined.",
    contentZh:
      "文獻探討撰寫",
    slots: [
      { id: "s1", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s2", pos: "v", tags: ["inform", "communication"] },
      { id: "s3", pos: "adj", tags: ["sequence", "time"] },
    ],
  },
  {
    id: "academic_data_analysis_07",
    title: "統計數據分析",
    titleZh: "統計數據分析",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "academic",
    content:
      "Analyzing empirical survey data requires statistical modeling software. Statisticians need to {{s1}} correlation coefficients to uncover underlying trends. It is {{s2}} to remove corrupted data entries before running models. Delivering {{s3}} charts makes research findings accessible.",
    contentZh:
      "統計數據分析",
    slots: [
      { id: "s1", pos: "v", tags: ["reasoning", "cognitive"] },
      { id: "s2", pos: "adj", tags: ["importance", "evaluation"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "academic_campus_lecture_08",
    title: "大學講座紀錄",
    titleZh: "大學講座紀錄",
    level: ["highschool", "toeic"],
    domain: "academic",
    content:
      "Visiting professors delivered an inspiring guest lecture on sociology. The speaker sought to {{s1}} students about contemporary urbanization trends. Attendees were encouraged to {{s2}} structural inequalities present in modern cities. Engaging in academic debate provides {{s3}} intellectual stimulation.",
    contentZh:
      "大學講座紀錄",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["reasoning", "cognitive"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "academic_plagiarism_policy_09",
    title: "學術倫理規範",
    titleZh: "學術倫理規範",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "academic",
    content:
      "Academic integrity demands strict attribution of external ideas. Universities use detection software to {{s1}} uncredited quotes in student essays. Instructors will {{s2}} students about citation standards during freshman orientation. Violating ethics rules can result in {{s3}} disciplinary penalties.",
    contentZh:
      "學術倫理規範",
    slots: [
      { id: "s1", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s2", pos: "v", tags: ["inform", "communication"] },
      { id: "s3", pos: "adj", tags: ["intensity", "evaluation"] },
    ],
  },
  {
    id: "academic_collaborative_study_10",
    title: "跨國學術合作",
    titleZh: "跨國學術合作",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "academic",
    content:
      "Cross-border scientific collaboration accelerates technological breakthroughs. Research labs must {{s1}} closely across international time zones. Scholars regularly {{s2}} experimental progress via virtual conferences. Joint projects generate {{s3}} scientific knowledge benefiting global society.",
    contentZh:
      "跨國學術合作",
    slots: [
      { id: "s1", pos: "v", tags: ["cooperation", "social"] },
      { id: "s2", pos: "v", tags: ["communication"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "science_space_exploration_01",
    title: "太空探索發現",
    titleZh: "太空探索發現",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "science",
    content:
      "Deep space telescopes continuously observe distant galaxy clusters. Astronomers hope to {{s1}} habitable exoplanets within far-off stellar systems. Scientists will {{s2}} the international media when significant atmospheric signals are verified. Analyzing space data requires {{s3}} mathematical calculations.",
    contentZh:
      "太空探索發現",
    slots: [
      { id: "s1", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s2", pos: "v", tags: ["inform", "communication"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "science_genetic_editing_03",
    title: "基因編輯技術",
    titleZh: "基因編輯技術",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "science",
    content:
      "Gene editing technologies like CRISPR revolutionize modern medicine. Geneticists attempt to {{s1}} DNA sequences to eradicate hereditary diseases. Bioethicists insist experts {{s2}} potential ecological consequences before outdoor trials. Maintaining {{s3}} safety compliance is mandatory across laboratories.",
    contentZh:
      "基因編輯技術",
    slots: [
      { id: "s1", pos: "v", tags: ["state_change"] },
      { id: "s2", pos: "v", tags: ["reasoning", "cognitive"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "science_volcanic_eruption_05",
    title: "火山活動監測",
    titleZh: "火山活動監測",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "science",
    content:
      "Monitoring active volcanoes helps protect nearby coastal communities. Geologists use sensors to {{s1}} seismic tremors before major eruptions occur. Authorities will {{s2}} residents to evacuate if danger levels spike. Eruptions can cause {{s3}} damage to surrounding ecosystems.",
    contentZh:
      "火山活動監測",
    slots: [
      { id: "s1", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s2", pos: "v", tags: ["inform", "communication"] },
      { id: "s3", pos: "adj", tags: ["intensity", "evaluation"] },
    ],
  },
  {
    id: "science_artificial_intelligence_06",
    title: "人工智慧進展",
    titleZh: "人工智慧進展",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "science",
    content:
      "Machine learning algorithms process massive datasets at remarkable speeds. AI models learn to {{s1}} complex visual patterns in diagnostic imaging. Computer scientists {{s2}} how neural networks process natural human languages. Ensuring {{s3}} training data prevents algorithmic bias.",
    contentZh:
      "人工智慧進展",
    slots: [
      { id: "s1", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s2", pos: "v", tags: ["reasoning", "cognitive"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "science_marine_biology_07",
    title: "海洋生物調查",
    titleZh: "海洋生物調查",
    level: ["highschool", "toeic"],
    domain: "science",
    content:
      "Exploring deep sea trenches reveals previously unknown marine species. Marine biologists try to {{s1}} unique bioluminescent creatures near hydrothermal vents. Researchers will {{s2}} environmental groups about ocean acidification effects. Protecting marine biomes is of {{s3}} significance.",
    contentZh:
      "海洋生物調查",
    slots: [
      { id: "s1", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s2", pos: "v", tags: ["inform", "communication"] },
      { id: "s3", pos: "adj", tags: ["importance", "evaluation"] },
    ],
  },
];
