import type { ScenarioTemplate } from './scenarioTemplates';

/** User scenarios C12 (10 templates) */
export const USER_SCENARIO_TEMPLATES_C12: ScenarioTemplate[] = [
  {
    id: "mixed_process_library_books",
    title: "Mixed Process Library Books",
    titleZh: "整理圖書館書籍",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "The school library needed to reorganize several shelves before the new semester. Student volunteers helped staff {{s1}} the books by subject and number. Some shelves contained a {{s2}} number of books, so the work took longer than expected. Volunteers checked each label carefully and placed books in the correct order. Whenever someone found a confusing title, they asked the librarian to {{s3}} where it belonged. By the end of the afternoon, the shelves looked much cleaner, and students would have an easier time finding what they needed.",
    contentZh:
      "整理圖書館書籍",
    slots: [
      { id: "s1", pos: "v", tags: ["process"] },
      { id: "s2", pos: "adj", tags: ["quantity"] },
      { id: "s3", pos: "v", tags: ["communication"] },
    ],
  },
  {
    id: "mixed_cause_effect_study_space",
    title: "Mixed Cause Effect Study Space",
    titleZh: "學習環境影響",
    level: ["toefl_ielts", "advanced"],
    domain: "academic",
    content:
      "A student compared two study environments: a quiet library and a noisy cafe. She noticed that frequent conversations could {{s1}} more interruptions during difficult tasks. However, she also found that the cafe's background noise helped her stay motivated during simple work. Instead of deciding that one environment was always better, she concluded that the best choice depended on the task. Her concentration began to {{s2}} when she matched the environment to the type of work. The experience taught her that effective study habits often require flexibility rather than a single fixed rule.",
    contentZh:
      "學習環境影響",
    slots: [
      { id: "s1", pos: "v", tags: ["cause_effect"] },
      { id: "s2", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "mixed_evaluation_hotel_service",
    title: "Mixed Evaluation Hotel Service",
    titleZh: "飯店服務評價",
    level: ["highschool", "toeic"],
    domain: "travel",
    content:
      "After staying at a hotel for three nights, Nina reviewed the service. She praised the clean room and friendly staff but mentioned that the breakfast area was crowded in the morning. Before writing her review, she tried to {{s1}} whether the problem had happened every day or only once. She decided that the service was generally {{s2}}, although the breakfast system could be improved. Her balanced review explained both strengths and weaknesses. The hotel manager later thanked Nina for the detailed feedback and said the staff would consider changes for future guests.",
    contentZh:
      "飯店服務評價",
    slots: [
      { id: "s1", pos: "v", tags: ["cognitive"] },
      { id: "s2", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "mixed_description_forest_trail",
    title: "Mixed Description Forest Trail",
    titleZh: "森林小徑",
    level: ["highschool", "toeic"],
    domain: "travel",
    content:
      "Early one morning, Daniel walked along a forest trail outside the city. The path was narrow, and a {{s1}} layer of fog covered the trees. Birdsong echoed between the hills, while tiny drops of water rested on the leaves. Daniel walked slowly and tried to {{s2}} around the wet stones. After half an hour, the fog began to disappear, revealing a wider view of the valley. He felt {{s3}} as the landscape became clearer. The quiet walk gave him a peaceful start to the day.",
    contentZh:
      "森林小徑",
    slots: [
      { id: "s1", pos: "adj", tags: ["description"] },
      { id: "s2", pos: "v", tags: ["physical"] },
      { id: "s3", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "mixed_communication_team_leader",
    title: "Mixed Communication Team Leader",
    titleZh: "團隊領導溝通",
    level: ["toefl_ielts", "advanced"],
    domain: "workplace",
    content:
      "A project leader noticed that several team members had different ideas about the final goal. Before assigning more tasks, she asked everyone to {{s1}} their expectations. She discovered that the team agreed on the main objective but had different ideas about timing and quality. The leader explained that this was {{s2}} because misunderstandings could become more expensive later in the project. The team created a clearer timeline and agreed on common standards. After the meeting, everyone knew what success should look like and how their work contributed to it.",
    contentZh:
      "團隊領導溝通",
    slots: [
      { id: "s1", pos: "v", tags: ["communication"] },
      { id: "s2", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "mixed_quantity_concert_tickets",
    title: "Mixed Quantity Concert Tickets",
    titleZh: "演唱會門票",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "When ticket sales opened for a popular concert, a {{s1}} number of people entered the website at the same time. The page became slow, and some buyers were unable to complete their orders. Emma felt {{s2}} because she had been waiting for months. She refreshed the page carefully and finally reached the payment screen. The website warned users not to open several windows at once because doing so could cause errors. After several attempts, Emma successfully bought two tickets and immediately sent a message to her friend with the good news.",
    contentZh:
      "演唱會門票",
    slots: [
      { id: "s1", pos: "adj", tags: ["quantity"] },
      { id: "s2", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "mixed_time_project_deadline",
    title: "Mixed Time Project Deadline",
    titleZh: "專案最後期限",
    level: ["highschool", "toeic"],
    domain: "workplace",
    content:
      "With the project deadline approaching, the team realized that several tasks still needed to be completed. The manager said there was only a {{s1}} amount of time left, so everyone needed to focus on the highest priorities. Instead of adding new features, the team decided to finish the core functions first. This decision helped {{s2}} the remaining work more efficiently. As the final day approached, some stress began to {{s3}}, but the team stayed organized. They submitted the project on time and saved the extra ideas for a future update.",
    contentZh:
      "專案最後期限",
    slots: [
      { id: "s1", pos: "adj", tags: ["time"] },
      { id: "s2", pos: "v", tags: ["process"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "mixed_physical_kitchen_help",
    title: "Mixed Physical Kitchen Help",
    titleZh: "幫忙準備晚餐",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "Before dinner, Ben helped his father prepare the kitchen. He was asked to {{s1}} the vegetables carefully and place them in separate bowls. Then he carried plates to the table and filled glasses with water. At first, Ben felt {{s2}} because he was worried about making a mistake. His father showed him how to handle the knife safely and work slowly. After a while, Ben became more confident. When dinner was ready, he was proud that he had helped with several parts of the meal instead of simply waiting for it to be served.",
    contentZh:
      "幫忙準備晚餐",
    slots: [
      { id: "s1", pos: "v", tags: ["physical"] },
      { id: "s2", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "mixed_social_community_garden",
    title: "Mixed Social Community Garden",
    titleZh: "社區花園",
    level: ["highschool", "toeic"],
    domain: "social",
    content:
      "Residents in one neighborhood created a shared community garden on an unused piece of land. Volunteers worked together to plant vegetables, paint signs, and build simple paths. The organizers asked neighbors to {{s1}} regardless of age or gardening experience. At first, some residents felt {{s2}} because they had never taken part in a community project before. Over time, the garden became a popular meeting place. People began sharing tools, recipes, and gardening tips. The project showed how a shared space can help strengthen relationships among people who might otherwise rarely talk.",
    contentZh:
      "社區花園",
    slots: [
      { id: "s1", pos: "v", tags: ["social"] },
      { id: "s2", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "mixed_state_change_business",
    title: "Mixed State Change Business",
    titleZh: "小店生意改善",
    level: ["toefl_ielts", "advanced"],
    domain: "daily",
    content:
      "A small bookstore had struggled with low sales for several months. The owner decided to organize weekend events and create a section for local authors. At first, the changes had little effect, but customer visits gradually began to {{s1}}. The owner tracked sales carefully and discovered that the events attracted new visitors who often bought books afterward. She was {{s2}} by the results and decided to continue the strategy. The experience showed that meaningful changes in a business may take time, especially when customers need time to notice and trust a new approach.",
    contentZh:
      "小店生意改善",
    slots: [
      { id: "s1", pos: "v", tags: ["state_change"] },
      { id: "s2", pos: "adj", tags: ["emotion"] },
    ],
  }
];
