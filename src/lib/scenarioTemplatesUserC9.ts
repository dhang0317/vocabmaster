import type { ScenarioTemplate } from './scenarioTemplates';

/** User scenarios C9 (10 templates) */
export const USER_SCENARIO_TEMPLATES_C9: ScenarioTemplate[] = [
  {
    id: "mixed_travel_photo",
    title: "Mixed Travel Photo",
    titleZh: "旅途攝影回憶",
    level: ["highschool", "toeic"],
    domain: "travel",
    content:
      "During a trip to a coastal town, Sara woke up early to photograph the sunrise. The sky slowly changed color, creating a {{s1}} scene above the water. At first, the beach was almost empty, but an {{s2}} number of visitors arrived as the morning continued. Sara tried to {{s3}} around the rocks to find a better viewpoint without getting too close to the water. She felt {{s4}} when the sun appeared above the horizon. The photos later reminded her that quiet moments can become some of the strongest travel memories.",
    contentZh:
      "旅途攝影回憶",
    slots: [
      { id: "s1", pos: "adj", tags: ["description"] },
      { id: "s2", pos: "adj", tags: ["quantity"] },
      { id: "s3", pos: "v", tags: ["physical"] },
      { id: "s4", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "mixed_school_fair",
    title: "Mixed School Fair",
    titleZh: "學校園遊會",
    level: ["elementary", "highschool"],
    domain: "social",
    content:
      "For the school fair, Jason helped his class run a small drink stand. The group needed to {{s1}} so that someone was always serving customers, collecting money, or restocking supplies. During the busiest hour, the line became longer and everyone felt {{s2}}. Jason suggested a simpler way to organize orders, which helped the process begin to {{s3}}. By the end of the afternoon, the students had sold almost everything. They were tired but proud because the class had worked together and raised money for a school activity.",
    contentZh:
      "學校園遊會",
    slots: [
      { id: "s1", pos: "v", tags: ["social"] },
      { id: "s2", pos: "adj", tags: ["emotion"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "mixed_health_clinic",
    title: "Mixed Health Clinic",
    titleZh: "診所候診",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "At a busy clinic, Rachel arrived for an appointment and found a crowded waiting room. She became {{s1}} because she had another commitment later that afternoon. The receptionist explained that several patients had needed extra time with the doctor. Rachel asked the receptionist to {{s2}} how long the wait might be. After checking the schedule, the receptionist gave her an estimate. The explanation helped {{s3}} Rachel's worry because she could now make a plan. She decided to wait and used the time to read a book on her phone.",
    contentZh:
      "診所候診",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["communication"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "mixed_academic_debate",
    title: "Mixed Academic Debate",
    titleZh: "課堂辯論",
    level: ["toefl_ielts", "advanced"],
    domain: "academic",
    content:
      "In a classroom debate, students discussed whether cities should reduce private car use. One group argued that better public transportation was necessary, while the other focused on the inconvenience of sudden restrictions. Each speaker had to {{s1}} a clear claim and support it with evidence. At first, one student made an {{s2}} assumption about the opposing side's position. The teacher asked the class to examine the evidence before responding. By the end, the students understood that strong arguments require both careful reasoning and a willingness to reconsider an idea.",
    contentZh:
      "課堂辯論",
    slots: [
      { id: "s1", pos: "v", tags: ["communication"] },
      { id: "s2", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "mixed_shopping_furniture",
    title: "Mixed Shopping Furniture",
    titleZh: "購買家具",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "After moving into a new apartment, Helen needed a small table for her kitchen. She visited several stores and compared prices, materials, and sizes. One table looked attractive, but the surface seemed {{s1}}, and several reviews mentioned scratches. Helen decided to {{s2}} whether the lower price was worth the possible quality problem. She eventually chose a slightly more expensive table with stronger materials. When it arrived, she was {{s3}} with the purchase because it fit the space well and looked durable. She felt that careful comparison had saved her from making a quick decision.",
    contentZh:
      "購買家具",
    slots: [
      { id: "s1", pos: "adj", tags: ["description"] },
      { id: "s2", pos: "v", tags: ["cognitive"] },
      { id: "s3", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "mixed_daily_raincoat",
    title: "Mixed Daily Raincoat",
    titleZh: "突然下雨",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "Tom left home on a sunny morning without an umbrella. By lunchtime, dark clouds had appeared, and heavy rain suddenly started. Tom felt {{s1}} because he still had to walk to the bus stop. He checked a nearby shop and bought a cheap raincoat. The rain was {{s2}}, but the raincoat kept most of his clothes dry. After ten minutes, the storm began to {{s3}}, and Tom continued walking. He laughed at his bad planning and decided to keep a small umbrella in his backpack from then on.",
    contentZh:
      "突然下雨",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "adj", tags: ["quantity"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "mixed_science_garden",
    title: "Mixed Science Garden",
    titleZh: "校園植物實驗",
    level: ["highschool", "toeic"],
    domain: "science",
    content:
      "Students in a science club grew the same type of plant under different amounts of light. At the beginning, all the plants looked similar. After several weeks, however, the leaves showed a {{s1}} difference in size and color. The students recorded the results and tried to {{s2}} why the plants had developed differently. Their teacher explained that light availability could {{s3}} changes in plant growth. The students were {{s4}} by the results and planned another experiment to test the same idea with different soil conditions.",
    contentZh:
      "校園植物實驗",
    slots: [
      { id: "s1", pos: "adj", tags: ["description"] },
      { id: "s2", pos: "v", tags: ["cognitive"] },
      { id: "s3", pos: "v", tags: ["cause_effect"] },
      { id: "s4", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "mixed_workplace_feedback",
    title: "Mixed Workplace Feedback",
    titleZh: "主管回饋",
    level: ["toefl_ielts", "advanced"],
    domain: "workplace",
    content:
      "After completing a major report, Daniel received detailed feedback from his supervisor. Some comments praised the research, while others pointed out weak explanations. Daniel initially felt {{s1}}, but he decided to {{s2}} the criticism instead of reacting emotionally. He discovered that several sections needed clearer evidence. The supervisor said that this revision was {{s3}} because the report would be shared with senior management. Daniel created a revision schedule and asked a coworker to review the updated sections. By the end of the week, the report had become much stronger.",
    contentZh:
      "主管回饋",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["cognitive"] },
      { id: "s3", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "mixed_hotel_concierge",
    title: "Mixed Hotel Concierge",
    titleZh: "詢問城市景點",
    level: ["elementary", "highschool"],
    domain: "travel",
    content:
      "While staying at a hotel, Anna asked the concierge about places to visit nearby. She wanted somewhere quiet because she had already visited the busiest tourist sites. The concierge suggested a small park and a local museum. Anna asked him to {{s1}} how long it would take to walk there. He explained the route and marked it on a map. Anna was {{s2}} by the useful suggestion and decided to follow the route that afternoon. She later returned to the hotel and thanked the concierge for helping her discover a less crowded part of the city.",
    contentZh:
      "詢問城市景點",
    slots: [
      { id: "s1", pos: "v", tags: ["communication"] },
      { id: "s2", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "mixed_travel_ferry",
    title: "Mixed Travel Ferry",
    titleZh: "搭渡輪旅行",
    level: ["highschool", "toeic"],
    domain: "travel",
    content:
      "On a family trip, Mia took a ferry to a nearby island. The sea was calm when the boat left, but the wind became stronger halfway through the journey. Some passengers looked {{s1}}, so the crew reminded everyone to remain seated. Mia held the railing and tried to {{s2}} to the window carefully. The waves eventually began to {{s3}}, and the ride became smoother. When the ferry reached the island, Mia felt relieved and excited to explore. She said the changing weather had made the short trip more memorable.",
    contentZh:
      "搭渡輪旅行",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["physical"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
    ],
  }
];
