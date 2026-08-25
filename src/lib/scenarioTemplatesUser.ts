import type { ScenarioTemplate } from './scenarioTemplates';

/** User-expanded scenario templates (batch 3) — partial while full 60 uploads */
export const USER_SCENARIO_TEMPLATES: ScenarioTemplate[] = [
  {
    id: "academic_ai_ethics_and_policy",
    title: "Academic Ai Ethics And Policy",
    titleZh: "人工智慧倫理與審查機制",
    level: ["toefl_ielts", "advanced"],
    domain: "academic",
    content:
      "As automated algorithmic systems expand across healthcare, academic panels must {{s1}} potential biases embedded in machine learning datasets. Overlooking these errors can {{s2}} serious ethical dilemmas in diagnostic accuracy. University scholars are encouraging computer engineers to {{s3}} with legal ethicists to establish robust evaluation standards before deploying algorithms publicly.",
    contentZh:
      "人工智慧倫理與審查機制",
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
    contentZh:
      "人工智慧倫理學術研討會",
    slots: [
      { id: "s1", pos: "v", tags: ["cognitive"] },
      { id: "s2", pos: "adj", tags: ["evaluation"] },
      { id: "s3", pos: "v", tags: ["social"] },
      { id: "s4", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "workplace_tech_migration",
    title: "Workplace Tech Migration",
    titleZh: "職場系統轉型與流程優化",
    level: ["highschool", "toeic"],
    domain: "workplace",
    content:
      "To maintain competitiveness, our company decided to {{s1}} an upgraded database management system across all branches. Initial technical glitches began to {{s2}} widespread confusion among staff members, leading to a {{s3}} drop in daily output. Management acted quickly to {{s4}} the new standard procedures, ensuring that operational efficiency would soon {{s5}} after initial adjustments.",
    contentZh:
      "職場系統轉型與流程優化",
    slots: [
      { id: "s1", pos: "v", tags: ["process"] },
      { id: "s2", pos: "v", tags: ["cause_effect"] },
      { id: "s3", pos: "adj", tags: ["quantity"] },
      { id: "s4", pos: "v", tags: ["communication"] },
      { id: "s5", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "hotel_overbooking_crisis",
    title: "Hotel Overbooking Crisis",
    titleZh: "飯店超訂危機應變處置",
    level: ["highschool", "toeic"],
    domain: "travel",
    content:
      "Due to a system error, the hotel accidentally overbooked several executive suites during peak season. Front desk staff had to deal with guests who expressed deep {{s1}} upon arrival. The front manager took swift action to {{s2}} alternative accommodations with a partner luxury resort nearby. By offering complimentary spa passes and personal assistance, the team successfully managed to {{s3}} a potentially disastrous review into positive feedback.",
    contentZh:
      "飯店超訂危機應變處置",
    slots: [
      { id: "s1", pos: "n", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["communication"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "travel_mountain_expedition",
    title: "Travel Mountain Expedition",
    titleZh: "高山健行探險回憶",
    level: ["elementary", "highschool"],
    domain: "travel",
    content:
      "Last autumn, I joined a guided hiking group to {{s1}} through the dense mountain trails. The surrounding landscape featured {{s2}} autumn foliage that left everyone in awe. When unexpected fog blanketed the peak, the guide stepped in to {{s3}} our nervous group members, helping us reach the summit safety hut with ease.",
    contentZh:
      "高山健行探險回憶",
    slots: [
      { id: "s1", pos: "v", tags: ["physical"] },
      { id: "s2", pos: "adj", tags: ["evaluation"] },
      { id: "s3", pos: "v", tags: ["social"] },
    ],
  },
  {
    id: "shopping_e_commerce_dispute",
    title: "Shopping E Commerce Dispute",
    titleZh: "跨境網購爭議退款申請",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "I ordered high-end audio equipment online, but the sound quality proved entirely {{s1}} compared to the advertised specs. I immediately initiated a formal ticket to {{s2}} with the seller regarding a refund. The vendor insisted that I {{s3}} the defective unit back to their overseas warehouse. While waiting for processing, I remained notably {{s4}} about whether my shipping costs would be fully reimbursed.",
    contentZh:
      "跨境網購爭議退款申請",
    slots: [
      { id: "s1", pos: "adj", tags: ["evaluation"] },
      { id: "s2", pos: "v", tags: ["communication"] },
      { id: "s3", pos: "v", tags: ["physical"] },
      { id: "s4", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "science_marine_ecosystem",
    title: "Science Marine Ecosystem",
    titleZh: "海洋生態危機與酸化研究",
    level: ["toefl_ielts", "advanced"],
    domain: "science",
    content:
      "Rising atmospheric carbon levels continue to accelerate ocean acidification, causing sensitive coral reefs to {{s1}} worldwide. Marine biologists report that loss of habitat threatens a {{s2}} proportion of marine biodiversity. It is {{s3}} for coastal governments to {{s4}} strict marine conservation policies to safeguard vulnerable aquatic species before ecosystems collapse.",
    contentZh:
      "海洋生態危機與酸化研究",
    slots: [
      { id: "s1", pos: "v", tags: ["state_change"] },
      { id: "s2", pos: "adj", tags: ["quantity"] },
      { id: "s3", pos: "adj", tags: ["evaluation"] },
      { id: "s4", pos: "v", tags: ["process"] },
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
    contentZh:
      "假日廚藝嘗試與家庭時光",
    slots: [
      { id: "s1", pos: "v", tags: ["physical"] },
      { id: "s2", pos: "adj", tags: ["evaluation"] },
      { id: "s3", pos: "n", tags: ["emotion"] },
    ],
  },
  {
    id: "workplace_merger_reorganization",
    title: "Workplace Merger Reorganization",
    titleZh: "企業併購與組織重組調適",
    level: ["toefl_ielts", "advanced"],
    domain: "workplace",
    content:
      "Following the sudden corporate merger, tension among department heads began to {{s1}} due to overlapping responsibilities. The executive board organized workshops to {{s2}} the strategic vision and prevent internal friction. By empowering cross-functional teams to {{s3}} effectively, leadership transformed anxiety into momentum, securing a {{s4}} victory for the newly unified company.",
    contentZh:
      "企業併購與組織重組調適",
    slots: [
      { id: "s1", pos: "v", tags: ["state_change"] },
      { id: "s2", pos: "v", tags: ["communication"] },
      { id: "s3", pos: "v", tags: ["social"] },
      { id: "s4", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "health_sleep_hygiene",
    title: "Health Sleep Hygiene",
    titleZh: "睡眠品質與身心修復",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "Sustained exposure to screen light at night creates a {{s1}} impact on your natural sleep cycle. Over time, poor resting habits can {{s2}} chronic daytime fatigue and mood instability. Health experts recommend that individuals {{s3}} a screen-free winding-down routine before bed.",
    contentZh:
      "睡眠品質與身心修復",
    slots: [
      { id: "s1", pos: "adj", tags: ["time"] },
      { id: "s2", pos: "v", tags: ["cause_effect"] },
      { id: "s3", pos: "v", tags: ["process"] },
    ],
  },
];
