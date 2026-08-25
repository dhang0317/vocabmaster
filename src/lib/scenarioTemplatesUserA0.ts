import type { ScenarioTemplate } from './scenarioTemplates';

/** User scenarios A0 */
export const USER_SCENARIO_TEMPLATES_A0: ScenarioTemplate[] = [
  {
    id: "academic_ai_ethics_and_policy",
    title: "Academic Ai Ethics And Policy",
    titleZh: "人工智慧倫理與審查機制",
    level: ["toefl_ielts", "advanced"],
    domain: "academic",
    content:
      "As automated algorithmic systems expand across healthcare, academic panels must {{s1}} potential biases embedded in machine learning datasets. Overlooking these errors can {{s2}} serious ethical dilemmas in diagnostic accuracy. University scholars are encouraging computer engineers to {{s3}} with legal ethicists to establish robust evaluation standards before deploying algorithms publicly.",
    contentZh: "人工智慧倫理與審查機制",
    slots: [
      { id: "s1", pos: "v", tags: ["cognitive"] },
      { id: "s2", pos: "v", tags: ["cause_effect"] },
      { id: "s3", pos: "v", tags: ["social"] },
    ],
  },
  {
    id: "academic_ai_ethics_forum",
    title: "Academic Ai Ethics Forum",
    titleZh: "人工智慧倫理學術研討會",
    level: ["toefl_ielts", "advanced"],
    domain: "academic",
    content:
      "At the international summit, scholars met to {{s1}} the ethical implications of autonomous decision-making systems. Panelists highlighted a {{s2}} shift in regulatory standards, urging software engineers to {{s3}} closely with ethicists. Addressing algorithmic bias is considered {{s4}} to preventing widespread social inequality as modern technologies evolve rapidly.",
    contentZh: "人工智慧倫理學術研討會",
    slots: [
      { id: "s1", pos: "v", tags: ["cognitive"] },
      { id: "s2", pos: "adj", tags: ["evaluation"] },
      { id: "s3", pos: "v", tags: ["social"] },
      { id: "s4", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "academic_ai_ethics_research",
    title: "Academic Ai Ethics Research",
    titleZh: "人工智慧倫理與審查機制",
    level: ["toefl_ielts", "advanced"],
    domain: "academic",
    content:
      "As artificial intelligence systems become integrated into healthcare, scholars must {{s1}} the implicit biases present in algorithmic training data. Failing to evaluate these risk factors could {{s2}} severe ethical concerns regarding patient diagnostics. Academic institutions are urging engineers to {{s3}} with bioethicists to construct {{s4}} evaluation frameworks before deploying medical software publicly.",
    contentZh: "人工智慧倫理與審查機制",
    slots: [
      { id: "s1", pos: "v", tags: ["cognitive"] },
      { id: "s2", pos: "v", tags: ["cause_effect"] },
      { id: "s3", pos: "v", tags: ["social"] },
      { id: "s4", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "academic_biodiversity_research",
    title: "Academic Biodiversity Research",
    titleZh: "生物多樣性學術研究觀察",
    level: ["toefl_ielts", "advanced"],
    domain: "academic",
    content:
      "Recent biological studies demonstrate how minor habitat changes can {{s1}} significant shifts in wildlife movement patterns. Researchers spent months working to {{s2}} the complex data sets, eventually discovering a {{s3}} correlation that previous analyses had overlooked. These conclusions have attracted {{s4}} interest among conservation biologists.",
    contentZh: "生物多樣性學術研究觀察",
    slots: [
      { id: "s1", pos: "v", tags: ["cause_effect"] },
      { id: "s2", pos: "v", tags: ["cognitive"] },
      { id: "s3", pos: "adj", tags: ["evaluation"] },
      { id: "s4", pos: "adj", tags: ["quantity"] },
    ],
  },
  {
    id: "academic_linguistic_analysis",
    title: "Academic Linguistic Analysis",
    titleZh: "語言學實證研究發現",
    level: ["toefl_ielts", "advanced"],
    domain: "academic",
    content:
      "Cognitive researchers set out to {{s1}} how early multilingual exposure alters neural processing speed during language acquisition tasks. The empirical evidence unveiled a {{s2}} distinction in cognitive flexibility that prior studies had consistently failed to capture. Scholars believe these insights will prove {{s3}} for formulating modern immersion curricula across public school districts.",
    contentZh: "語言學實證研究發現",
    slots: [
      { id: "s1", pos: "v", tags: ["cognitive"] },
      { id: "s2", pos: "adj", tags: ["evaluation"] },
      { id: "s3", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "academic_research_finding",
    title: "Academic Research Finding",
    titleZh: "學術研究與數據觀察",
    level: ["toefl_ielts", "advanced"],
    domain: "academic",
    content:
      "Recent scientific studies demonstrate how subtle environmental factors can {{s1}} significant changes in animal behavior. Researchers spent months trying to {{s2}} the collected data, revealing a {{s3}} pattern that previous theories had completely failed to notice. The publication of these findings is expected to receive {{s4}} attention from experts worldwide.",
    contentZh: "學術研究與數據觀察",
    slots: [
      { id: "s1", pos: "v", tags: ["cause_effect"] },
      { id: "s2", pos: "v", tags: ["cognitive"] },
      { id: "s3", pos: "adj", tags: ["evaluation"] },
      { id: "s4", pos: "adj", tags: ["quantity"] },
    ],
  },
  {
    id: "daily_community_renovation",
    title: "Daily Community Renovation",
    titleZh: "社區公設整修溝通協調",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "Construction work on our building's elevator caused a {{s1}} inconvenience for elderly residents living on upper floors. Rather than venting frustration online, neighbors chose to {{s2}} with the building committee during an open meeting. The contractors agreed to adjust their working hours, leading to an immediate {{s3}} among all homeowners.",
    contentZh: "社區公設整修溝通協調",
    slots: [
      { id: "s1", pos: "adj", tags: ["evaluation"] },
      { id: "s2", pos: "v", tags: ["social"] },
      { id: "s3", pos: "n", tags: ["emotion"] },
    ],
  },
  {
    id: "daily_culinary_experiment",
    title: "Daily Culinary Experiment",
    titleZh: "假日廚藝嘗試與家庭時光",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "Deciding to bake sourdough bread from scratch, I took time to carefully {{s1}} the dough until it reached the right texture. The recipe called for {{s2}} adjustments in oven temperature to achieve a crispy crust. Seeing the golden loaf bake successfully brought a strong sense of {{s3}} to my entire family at breakfast.",
    contentZh: "假日廚藝嘗試與家庭時光",
    slots: [
      { id: "s1", pos: "v", tags: ["physical"] },
      { id: "s2", pos: "adj", tags: ["evaluation"] },
      { id: "s3", pos: "n", tags: ["emotion"] },
    ],
  },
  {
    id: "daily_neighborhood_noise_resolution",
    title: "Daily Neighborhood Noise Resolution",
    titleZh: "鄰居生活噪音溝通",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "My neighbor occasionally plays loud music late at night, creating a {{s1}} disturbance for the whole floor. Rather than filing a formal complaint, I decided to {{s2}} with him directly about the issue. He understood the concern right away and agreed to lower the volume, helping us maintain a peaceful environment.",
    contentZh: "鄰居生活噪音溝通",
    slots: [
      { id: "s1", pos: "adj", tags: ["evaluation"] },
      { id: "s2", pos: "v", tags: ["social"] },
    ],
  },
  {
    id: "daily_neighbors_dispute",
    title: "Daily Neighbors Dispute",
    titleZh: "鄰居之間的溝通問題",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "My neighbor tends to play loud music late at night, which causes a {{s1}} disturbance for everyone on our floor. Instead of getting angry, I chose to {{s2}} with him personally to discuss the matter. He apologized immediately and agreed to reduce the volume. I was glad we could handle the issue without any harsh conflict.",
    contentZh: "鄰居之間的溝通問題",
    slots: [
      { id: "s1", pos: "adj", tags: ["evaluation"] },
      { id: "s2", pos: "v", tags: ["social"] },
    ],
  },
  {
    id: "daily_public_transit_encounter",
    title: "Daily Public Transit Encounter",
    titleZh: "捷運上的遺失物善舉",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "While riding the subway during morning rush hour, I saw a commuter leave his leather wallet on the seat. I reacted without hesitation to {{s1}} the wallet and rush after him on the platform. Handing it back brought a look of profound {{s2}} to his face. Helping a stranger brightened my morning completely.",
    contentZh: "捷運上的遺失物善舉",
    slots: [
      { id: "s1", pos: "v", tags: ["physical"] },
      { id: "s2", pos: "n", tags: ["emotion"] },
    ],
  },
  {
    id: "daily_public_transit_reunion",
    title: "Daily Public Transit Reunion",
    titleZh: "公車上的意外重逢",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "While taking the bus home yesterday, I happened to glance up and {{s1}} a childhood friend sitting across from me. Meeting after nearly ten years was a completely {{s2}} surprise. We spent the rest of the ride catching up on old memories with genuine {{s3}}.",
    contentZh: "公車上的意外重逢",
    slots: [
      { id: "s1", pos: "v", tags: ["cognitive"] },
      { id: "s2", pos: "adj", tags: ["evaluation"] },
      { id: "s3", pos: "n", tags: ["emotion"] },
    ],
  },
  {
    id: "daily_unexpected_subway_reunion",
    title: "Daily Unexpected Subway Reunion",
    titleZh: "捷運車廂內的多年重逢",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "While taking the MRT home during rush hour yesterday, I happened to glance up and {{s1}} an old classmate from junior high school. Spotting her in the crowded train car was a completely {{s2}} coincidence. We spent the remainder of the commute catching up on old times, filling the carriage with warm laughter and genuine {{s3}}.",
    contentZh: "捷運車廂內的多年重逢",
    slots: [
      { id: "s1", pos: "v", tags: ["cognitive"] },
      { id: "s2", pos: "adj", tags: ["evaluation"] },
      { id: "s3", pos: "n", tags: ["emotion"] },
    ],
  },
  {
    id: "daily_community_garden_initiative",
    title: "Daily Community Garden Initiative",
    titleZh: "社區共融綠植農場推廣",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "Local volunteers gathered over the weekend to {{s1}} modular raised garden beds in our public park. Urban gardens provide a {{s2}} venue for neighbors to get together and learn about sustainable living. Participating in harvest events helps {{s3}} isolated community members, building genuine friendships while improving neighborhood green space for everyone.",
    contentZh: "社區共融綠植農場推廣",
    slots: [
      { id: "s1", pos: "v", tags: ["physical"] },
      { id: "s2", pos: "adj", tags: ["evaluation"] },
      { id: "s3", pos: "v", tags: ["social"] },
    ],
  },
  {
    id: "daily_community_garden_project",
    title: "Daily Community Garden Project",
    titleZh: "社區共享花園志工活動",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "Local residents gathered over the weekend to {{s1}} wooden planter boxes for a new community garden. Creating shared green spaces provides a {{s2}} opportunity for neighbors to meet and relax outdoors. Working together helped {{s3}} isolated community members, replacing loneliness with a warm feeling of connection.",
    contentZh: "社區共享花園志工活動",
    slots: [
      { id: "s1", pos: "v", tags: ["physical"] },
      { id: "s2", pos: "adj", tags: ["evaluation"] },
      { id: "s3", pos: "v", tags: ["social"] },
    ],
  },
  {
    id: "academic_subsequent_findings",
    title: "Subsequent Research Findings",
    titleZh: "後續研究發現",
    level: ["highschool", "toeic", "toefl_ielts"],
    domain: "academic",
    content:
      "The initial experiment produced mixed results, so the team designed a {{s1}} study with a larger sample. In the {{s2}} analysis, researchers found a clearer pattern than before. These {{s3}} findings helped them revise the original hypothesis and plan the next stage of work.",
    contentZh: "初步實驗結果不一，因此團隊設計了後續研究。在後續分析中發現更清楚的模式。",
    slots: [
      { id: "s1", pos: "adj", tags: ["time"] },
      { id: "s2", pos: "adj", tags: ["time"] },
      { id: "s3", pos: "adj", tags: ["time"] },
    ],
  },
  {
    id: "workplace_subsequent_meeting",
    title: "Subsequent Project Meeting",
    titleZh: "後續專案會議",
    level: ["highschool", "toeic"],
    domain: "workplace",
    content:
      "After the client rejected the first proposal, we scheduled a {{s1}} meeting to address their concerns. During that session, the team presented a revised timeline and budget. The {{s2}} discussion was more productive, and both sides agreed on the next steps. A short summary was sent to everyone the {{s3}} morning.",
    contentZh: "客戶退回初版提案後，我們安排了後續會議處理疑慮。",
    slots: [
      { id: "s1", pos: "adj", tags: ["time"] },
      { id: "s2", pos: "adj", tags: ["evaluation"] },
      { id: "s3", pos: "adj", tags: ["time"] },
    ],
  },
];
