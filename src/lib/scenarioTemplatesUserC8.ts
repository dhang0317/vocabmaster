import type { ScenarioTemplate } from './scenarioTemplates';

/** User scenarios C8 (10 templates) */
export const USER_SCENARIO_TEMPLATES_C8: ScenarioTemplate[] = [
  {
    id: "cognition_reading_map",
    title: "Cognition Reading Map",
    titleZh: "判讀地圖",
    level: ["elementary", "highschool"],
    domain: "academic",
    content:
      "While hiking with friends, Sophie reached a fork in the trail and was unsure which path to take. She opened a paper map and tried to {{s1}} the symbols and direction lines. Her friend pointed out a small sign showing the distance to the viewpoint. After comparing the sign with the map, Sophie realized that the left path was shorter. She felt {{s2}} when she understood how the map worked. The group followed the correct route and reached the viewpoint before noon. Sophie later said that learning to read a map made her feel more independent.",
    contentZh:
      "判讀地圖",
    slots: [
      { id: "s1", pos: "v", tags: ["cognitive"] },
      { id: "s2", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "cognition_language_learning",
    title: "Cognition Language Learning",
    titleZh: "學習新單字",
    level: ["highschool", "toeic"],
    domain: "academic",
    content:
      "During English study, Leo found a new word in an article that he did not know. Instead of immediately checking a dictionary, he tried to {{s1}} its meaning from the surrounding sentences. He guessed that the word described a gradual improvement because the writer used it near several positive expressions. After checking the dictionary, Leo discovered that his guess was correct. He felt {{s2}} and wrote the word in his notebook with an example sentence. This method helped him remember vocabulary more easily because he had connected the word to its context.",
    contentZh:
      "學習新單字",
    slots: [
      { id: "s1", pos: "v", tags: ["cognitive"] },
      { id: "s2", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "cognition_science_evidence",
    title: "Cognition Science Evidence",
    titleZh: "分析科學證據",
    level: ["toefl_ielts", "advanced"],
    domain: "academic",
    content:
      "A student found two studies that seemed to reach different conclusions about exercise and concentration. Instead of choosing the study she preferred, she tried to {{s1}} the differences in their methods. One study used a small sample, while the other included many participants over a longer period. After reading the details, she understood why the results might not be directly comparable. The task was challenging, but she felt {{s2}} when the evidence finally made sense. Her teacher praised her for looking beyond the headline conclusions and examining how the research had been conducted.",
    contentZh:
      "分析科學證據",
    slots: [
      { id: "s1", pos: "v", tags: ["cognitive"] },
      { id: "s2", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "cognition_budget_planning",
    title: "Cognition Budget Planning",
    titleZh: "規劃旅遊預算",
    level: ["highschool", "toeic"],
    domain: "academic",
    content:
      "Before a weekend trip, Daniel listed his expected costs for transportation, food, and activities. He wanted to {{s1}} how much he could spend each day without using all his savings. When he added the numbers, he discovered that restaurant meals were more expensive than expected. He adjusted the plan and chose a few cheaper meals instead. Daniel felt {{s2}} because the new budget gave him enough room for an unexpected expense. He learned that thinking about small costs in advance could make a trip much less stressful.",
    contentZh:
      "規劃旅遊預算",
    slots: [
      { id: "s1", pos: "v", tags: ["cognitive"] },
      { id: "s2", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "physical_furniture_assembly",
    title: "Physical Furniture Assembly",
    titleZh: "組裝書桌",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "When Oliver bought a new desk, the box came with many small pieces and screws. He opened the instructions and began to {{s1}} the parts in the order shown. At first, he put two pieces together incorrectly and had to take them apart. After checking the diagram again, he understood the mistake. The rest of the assembly went smoothly. When the desk was finally complete, Oliver felt {{s2}} and tested it by placing his computer on top. He was glad he had followed the instructions instead of trying to build the desk from memory.",
    contentZh:
      "組裝書桌",
    slots: [
      { id: "s1", pos: "v", tags: ["physical"] },
      { id: "s2", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "physical_carry_boxes",
    title: "Physical Carry Boxes",
    titleZh: "搬運箱子",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "During a school event, several students needed to move boxes from a storage room to the main hall. Some boxes were light, but a few were heavy. The teacher reminded everyone to {{s1}} the boxes carefully and ask for help when necessary. The students worked in pairs and moved the supplies one group at a time. After twenty minutes, the storage room was almost empty. Everyone felt {{s2}} because the job had been completed quickly. The teacher thanked the group and reminded them that careful teamwork could make physical tasks safer and easier.",
    contentZh:
      "搬運箱子",
    slots: [
      { id: "s1", pos: "v", tags: ["physical"] },
      { id: "s2", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "physical_bicycle_repair",
    title: "Physical Bicycle Repair",
    titleZh: "修理腳踏車",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "Before riding to school, Ken noticed that his bicycle chain had come loose. He brought the bike into the garage and watched a repair video. The first step was to {{s1}} the chain gently and place it back on the gears. Ken followed the instructions slowly because he did not want to damage anything. After a few tries, the chain moved normally again. Ken was {{s2}} when the bicycle worked. He tested the brakes and tires before riding outside, then decided to learn a few more basic repair skills for future problems.",
    contentZh:
      "修理腳踏車",
    slots: [
      { id: "s1", pos: "v", tags: ["physical"] },
      { id: "s2", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "physical_crowded_station",
    title: "Physical Crowded Station",
    titleZh: "穿越車站人群",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "At rush hour, the train station was packed with commuters. Nina needed to reach the other platform before the train departed, so she had to {{s1}} through the crowd carefully. She kept her bag close and followed the signs above the stairs. At one point, the flow of people suddenly stopped, and Nina felt {{s2}}. After a few seconds, the crowd began moving again. She reached the platform just before the doors closed. The experience taught her that busy stations require patience, attention, and awareness of the space around you.",
    contentZh:
      "穿越車站人群",
    slots: [
      { id: "s1", pos: "v", tags: ["physical"] },
      { id: "s2", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "physical_camping_tent",
    title: "Physical Camping Tent",
    titleZh: "搭帳篷",
    level: ["elementary", "highschool"],
    domain: "travel",
    content:
      "When Maya arrived at the campsite, she had never set up a tent before. Her friend showed her how to {{s1}} the poles and connect them to the tent fabric. At first, the structure looked unstable, and Maya felt {{s2}}. After they adjusted the poles and secured the corners, the tent became firm. Maya smiled when she saw that the shelter was finally standing. She said the process was easier than she had expected. Before dinner, the friends checked the tent one more time to make sure everything was secure for the night.",
    contentZh:
      "搭帳篷",
    slots: [
      { id: "s1", pos: "v", tags: ["physical"] },
      { id: "s2", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "mixed_bookstore_job",
    title: "Mixed Bookstore Job",
    titleZh: "書店打工",
    level: ["highschool", "toeic"],
    domain: "workplace",
    content:
      "On her first shift at a bookstore, Grace had to organize shelves, help customers, and process returns. The number of tasks seemed {{s1}}, so she felt slightly {{s2}}. Her supervisor showed her how to {{s3}} the work by handling urgent requests first. Later, a customer asked about a book that was out of stock. Grace checked the system and tried to {{s4}} the expected delivery date clearly. By the end of the shift, she had completed most of the tasks and felt much more confident about the job.",
    contentZh:
      "書店打工",
    slots: [
      { id: "s1", pos: "adj", tags: ["quantity"] },
      { id: "s2", pos: "adj", tags: ["emotion"] },
      { id: "s3", pos: "v", tags: ["process"] },
      { id: "s4", pos: "v", tags: ["communication"] },
    ],
  }
];
