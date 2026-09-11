import type { ScenarioTemplate } from './scenarioTemplates';

/** User scenarios C5 (10 templates) */
export const USER_SCENARIO_TEMPLATES_C5: ScenarioTemplate[] = [
  {
    id: "communication_public_speaking",
    title: "Communication Public Speaking",
    titleZh: "第一次演講",
    level: ["highschool", "toeic"],
    domain: "social",
    content:
      "Before giving a five-minute speech in class, Mia practiced several times in front of a mirror. She felt {{s1}} when she imagined everyone looking at her. Her teacher suggested slowing down and using examples to {{s2}} her main idea. During the speech, Mia paused whenever she needed a moment to think. Her words became clearer as she continued, and her confidence began to {{s3}}. Afterward, her classmates said the examples made the topic easy to understand. Mia realized that good speaking is not only about memorizing words but also about making ideas clear for the listener.",
    contentZh:
      "第一次演講",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["communication"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "communication_friendship_apology",
    title: "Communication Friendship Apology",
    titleZh: "向朋友道歉",
    level: ["elementary", "highschool"],
    domain: "social",
    content:
      "After forgetting a friend's birthday, Leo knew he needed to apologize. He felt {{s1}} because he cared about the friendship. Instead of sending a short message, he decided to {{s2}} his feelings honestly and explain why he had forgotten. His friend was disappointed at first but appreciated the sincere apology. They talked for several minutes and agreed to move on. The uncomfortable feeling began to {{s3}} after they cleared up the situation. Leo learned that admitting a mistake can be difficult, but honest communication can help repair trust.",
    contentZh:
      "向朋友道歉",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["communication"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "communication_customer_order",
    title: "Communication Customer Order",
    titleZh: "餐廳點餐",
    level: ["elementary", "highschool"],
    domain: "social",
    content:
      "At a busy restaurant, Nora wanted to order a meal without dairy. She told the server about her preference and asked the staff to {{s1}} whether the sauce contained milk. The server checked with the kitchen and returned with a clear answer. Nora was {{s2}} because the restaurant took her question seriously. The server then suggested another dish that better matched her needs. Nora chose the alternative and enjoyed her meal. She appreciated that a simple question had helped her make a safe and comfortable choice without creating confusion for the kitchen staff.",
    contentZh:
      "餐廳點餐",
    slots: [
      { id: "s1", pos: "v", tags: ["communication"] },
      { id: "s2", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "communication_school_email",
    title: "Communication School Email",
    titleZh: "寫信給老師",
    level: ["highschool", "toeic"],
    domain: "social",
    content:
      "Alex missed class because of a family appointment and wanted to know what homework had been assigned. He wrote an email to his teacher and tried to {{s1}} his question politely. The teacher replied with the assignment details and explained that the homework was {{s2}} for the next lesson. Alex thanked the teacher and completed the work that evening. He was glad he had asked rather than guessing what he had missed. The experience taught him that clear questions can prevent small misunderstandings from becoming larger problems.",
    contentZh:
      "寫信給老師",
    slots: [
      { id: "s1", pos: "v", tags: ["communication"] },
      { id: "s2", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "process_event_planning",
    title: "Process Event Planning",
    titleZh: "籌備校園活動",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "The student council was preparing a school festival with food stalls, performances, and games. Because there were many tasks, the leaders created a shared schedule to {{s1}} the work. Each student received a specific responsibility, and the organizers checked progress every afternoon. At first, the number of unfinished tasks seemed {{s2}}, but the list became shorter after everyone started working. The team also used a group chat to {{s3}} urgent changes. By the final week, the preparation had become much more organized, and the event was ready without major problems.",
    contentZh:
      "籌備校園活動",
    slots: [
      { id: "s1", pos: "v", tags: ["process"] },
      { id: "s2", pos: "adj", tags: ["quantity"] },
      { id: "s3", pos: "v", tags: ["communication"] },
    ],
  },
  {
    id: "process_library_renovation",
    title: "Process Library Renovation",
    titleZh: "圖書館整修",
    level: ["toefl_ielts", "advanced"],
    domain: "daily",
    content:
      "A public library was planning a major renovation while trying to remain open to visitors. The project manager created a detailed schedule to {{s1}} construction work without blocking the busiest areas. Some rooms would close temporarily, so staff needed to {{s2}} the changes clearly to visitors. The manager warned that the renovation might cause {{s3}} periods of inconvenience. However, the final result was expected to improve accessibility and create more study space. By carefully coordinating each stage, the library hoped to complete the work with as little disruption as possible.",
    contentZh:
      "圖書館整修",
    slots: [
      { id: "s1", pos: "v", tags: ["process"] },
      { id: "s2", pos: "v", tags: ["communication"] },
      { id: "s3", pos: "adj", tags: ["time"] },
    ],
  },
  {
    id: "process_restaurant_kitchen",
    title: "Process Restaurant Kitchen",
    titleZh: "廚房工作流程",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "A restaurant owner noticed that customers were waiting too long for lunch orders. She watched the kitchen for several days and found that cooks often repeated the same steps. To improve the system, she decided to {{s1}} the workflow by preparing common ingredients earlier. The goal was to {{s2}} shorter waiting times without lowering food quality. After two weeks, the average order time began to {{s3}}. The owner was {{s4}} by the improvement and asked the staff for more suggestions. The kitchen became faster because everyone understood the new routine.",
    contentZh:
      "廚房工作流程",
    slots: [
      { id: "s1", pos: "v", tags: ["process"] },
      { id: "s2", pos: "v", tags: ["cause_effect"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
      { id: "s4", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "process_student_project",
    title: "Process Student Project",
    titleZh: "分組專題流程",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "For a science project, three students needed to build a model bridge. Before buying materials, they created a simple plan and decided how to {{s1}} the project. One student designed the bridge, another measured the materials, and the third prepared the presentation. During the first test, the bridge broke. Instead of giving up, they tried to {{s2}} what had caused the failure. They discovered that the center needed extra support. After making the change, the model became stronger. The students were {{s3}} when it survived the final test.",
    contentZh:
      "分組專題流程",
    slots: [
      { id: "s1", pos: "v", tags: ["process"] },
      { id: "s2", pos: "v", tags: ["cognitive"] },
      { id: "s3", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "process_moving_house",
    title: "Process Moving House",
    titleZh: "搬家計畫",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "When Julia moved to a new apartment, she realized that packing everything at once would be too difficult. She created a checklist and began to {{s1}} the move by room. She packed books first, then clothes, kitchen items, and decorations. A friend helped her {{s2}} the heavier boxes downstairs. The work took several days, but the organized approach reduced stress. By moving day, only a {{s3}} number of small items remained. Julia felt {{s4}} when she saw the empty apartment and realized that the hardest part was already finished.",
    contentZh:
      "搬家計畫",
    slots: [
      { id: "s1", pos: "v", tags: ["process"] },
      { id: "s2", pos: "v", tags: ["physical"] },
      { id: "s3", pos: "adj", tags: ["quantity"] },
      { id: "s4", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "evaluation_restaurant_review",
    title: "Evaluation Restaurant Review",
    titleZh: "餐廳評論",
    level: ["highschool", "toeic"],
    domain: "academic",
    content:
      "After trying a new restaurant, David wrote an online review. He liked the food and described the soup as rich and flavorful, but he thought the waiting time was too long. Before posting the review, he tried to {{s1}} whether his experience was typical or just unusual that evening. He decided to mention both the good and bad points. His final review was {{s2}} because it included specific examples instead of making a vague judgment. Several readers thanked him for the balanced description, and one even said the review helped them decide what to order.",
    contentZh:
      "餐廳評論",
    slots: [
      { id: "s1", pos: "v", tags: ["cognitive"] },
      { id: "s2", pos: "adj", tags: ["evaluation"] },
    ],
  }
];
