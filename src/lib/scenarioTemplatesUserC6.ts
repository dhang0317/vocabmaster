import type { ScenarioTemplate } from './scenarioTemplates';

/** User scenarios C6 (10 templates) */
export const USER_SCENARIO_TEMPLATES_C6: ScenarioTemplate[] = [
  {
    id: "evaluation_school_rule",
    title: "Evaluation School Rule",
    titleZh: "校規討論",
    level: ["toefl_ielts", "advanced"],
    domain: "academic",
    content:
      "A school committee was reviewing a rule that limited phone use during class. Some students argued that the policy was necessary, while others thought it was too strict. Before changing the rule, the committee collected feedback from teachers and students. They found that the rule was generally helpful, but some parts were {{s1}} because they did not consider special situations. The committee decided to {{s2}} a clearer policy with a few exceptions. Members agreed that good rules should be practical, understandable, and flexible enough to respond to real needs.",
    contentZh:
      "校規討論",
    slots: [
      { id: "s1", pos: "adj", tags: ["evaluation"] },
      { id: "s2", pos: "v", tags: ["process"] },
    ],
  },
  {
    id: "evaluation_job_offer",
    title: "Evaluation Job Offer",
    titleZh: "評估工作機會",
    level: ["highschool", "toeic"],
    domain: "academic",
    content:
      "After receiving two part-time job offers, Ethan made a list of the advantages and disadvantages of each one. One job paid more, but the schedule was less flexible. The other offered fewer hours but was closer to home. Ethan tried to {{s1}} which option would fit his school schedule better. He decided that location and flexibility were {{s2}} factors for him, even though the salary was lower. After accepting the second offer, he felt {{s3}} because the decision matched his priorities. The experience taught him to judge an opportunity by more than one number.",
    contentZh:
      "評估工作機會",
    slots: [
      { id: "s1", pos: "v", tags: ["cognitive"] },
      { id: "s2", pos: "adj", tags: ["evaluation"] },
      { id: "s3", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "evaluation_product_quality",
    title: "Evaluation Product Quality",
    titleZh: "產品品質比較",
    level: ["highschool", "toeic"],
    domain: "academic",
    content:
      "Before buying a backpack, Hana compared three different brands. She looked at the materials, zippers, storage space, and customer reviews. One model was cheaper, but several reviewers mentioned broken straps. Hana decided that durability was {{s1}} than a small difference in price. She also checked how much the bag weighed because she would use it every day. After considering all the evidence, she chose a slightly more expensive model. She felt {{s2}} with the decision because the backpack seemed practical and likely to last for several years.",
    contentZh:
      "產品品質比較",
    slots: [
      { id: "s1", pos: "adj", tags: ["evaluation"] },
      { id: "s2", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "evaluation_news_source",
    title: "Evaluation News Source",
    titleZh: "判斷新聞來源",
    level: ["toefl_ielts", "advanced"],
    domain: "social",
    content:
      "While researching a topic online, Kevin found an article making a dramatic claim. Before sharing it, he checked the author's name, publication date, and supporting evidence. He also tried to {{s1}} whether the article clearly separated facts from opinions. After comparing it with several reliable sources, he found that some of the claims were exaggerated. The original article now seemed {{s2}}. Kevin decided not to share it and instead sent his classmates a more trustworthy report. He realized that checking information carefully is especially important when a claim seems designed to create a strong emotional reaction.",
    contentZh:
      "判斷新聞來源",
    slots: [
      { id: "s1", pos: "v", tags: ["cognitive"] },
      { id: "s2", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "cause_effect_late_night",
    title: "Cause Effect Late Night",
    titleZh: "熬夜的影響",
    level: ["highschool", "toeic"],
    domain: "science",
    content:
      "During exam week, Kevin often stayed up late to study. He thought the extra hours would help, but the lack of sleep began to affect his attention in class. His tiredness could {{s1}} slower reading and more careless mistakes. When he noticed the pattern, he changed his schedule and stopped studying so late. After several nights of better sleep, his concentration started to {{s2}}. Kevin realized that studying for more hours was not always useful if he was too tired to remember what he had learned.",
    contentZh:
      "熬夜的影響",
    slots: [
      { id: "s1", pos: "v", tags: ["cause_effect"] },
      { id: "s2", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "cause_effect_heavy_rain",
    title: "Cause Effect Heavy Rain",
    titleZh: "大雨與淹水",
    level: ["highschool", "toeic"],
    domain: "science",
    content:
      "A coastal town experienced several days of heavy rain. Because the ground was already wet, additional rainfall quickly caused water levels to rise. Local officials explained that the flooding could {{s1}} blocked drains and poor water flow in some neighborhoods. Emergency workers placed signs near roads and asked residents to avoid low areas. As the rain began to {{s2}}, the water slowly moved away from the streets. Residents later discussed ways to improve drainage before the next storm. The event showed how several small factors can combine to create a larger problem.",
    contentZh:
      "大雨與淹水",
    slots: [
      { id: "s1", pos: "v", tags: ["cause_effect"] },
      { id: "s2", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "cause_effect_social_media",
    title: "Cause Effect Social Media",
    titleZh: "社群媒體與注意力",
    level: ["toefl_ielts", "advanced"],
    domain: "science",
    content:
      "A teacher noticed that many students checked their phones whenever a notification appeared during independent study. She explained that frequent interruptions could {{s1}} shorter periods of focused attention. Rather than banning phones completely, she asked students to silence notifications during study sessions. After several weeks, some students reported that their concentration had begun to {{s2}}. The teacher emphasized that the experiment did not prove that phones were harmful in every situation. Instead, it suggested that controlling interruptions could make focused work easier. The class decided to continue testing the strategy.",
    contentZh:
      "社群媒體與注意力",
    slots: [
      { id: "s1", pos: "v", tags: ["cause_effect"] },
      { id: "s2", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "cause_effect_work_stress",
    title: "Cause Effect Work Stress",
    titleZh: "工作量與壓力",
    level: ["highschool", "toeic"],
    domain: "science",
    content:
      "A small design team had received several new projects at the same time. The manager noticed that long working hours were beginning to {{s1}} frustration and lower concentration. She reviewed the deadlines and moved one project to a later date. This change allowed the team to focus on fewer tasks at once, and stress began to {{s2}}. The manager explained that reducing workload was not a sign of lower ambition. In some situations, it is a practical way to protect quality and help employees maintain steady performance over time.",
    contentZh:
      "工作量與壓力",
    slots: [
      { id: "s1", pos: "v", tags: ["cause_effect"] },
      { id: "s2", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "description_city_night",
    title: "Description City Night",
    titleZh: "城市夜景",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "After dinner, Emma walked to a rooftop viewpoint overlooking the city. Below her, the streets were filled with moving lights, while tall buildings formed a {{s1}} skyline. The sound of traffic was distant, and a cool breeze moved through the air. Emma noticed a {{s2}} number of windows glowing in the surrounding towers. She stood there quietly for several minutes, watching the city change as more lights appeared. The view was different from anything she had seen during the day. She took a photo but later said that the real scene had been much more impressive.",
    contentZh:
      "城市夜景",
    slots: [
      { id: "s1", pos: "adj", tags: ["description"] },
      { id: "s2", pos: "adj", tags: ["quantity"] },
    ],
  },
  {
    id: "description_old_library",
    title: "Description Old Library",
    titleZh: "老圖書館",
    level: ["toefl_ielts", "advanced"],
    domain: "daily",
    content:
      "The old library stood at the end of a narrow street, surrounded by large trees. Inside, the wooden shelves formed an {{s1}} pattern that seemed to continue around every corner. The air smelled faintly of paper and dust, and the reading room was unusually quiet. A librarian explained that the building had been expanded several times, which created some {{s2}} connections between the older and newer sections. Visitors were encouraged to explore slowly because the rooms could be difficult to navigate. Despite its unusual design, the library remained a popular place for students and researchers.",
    contentZh:
      "老圖書館",
    slots: [
      { id: "s1", pos: "adj", tags: ["description"] },
      { id: "s2", pos: "adj", tags: ["description"] },
    ],
  }
];
