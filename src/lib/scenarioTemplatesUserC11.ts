import type { ScenarioTemplate } from './scenarioTemplates';

/** User scenarios C11 (10 templates) */
export const USER_SCENARIO_TEMPLATES_C11: ScenarioTemplate[] = [
  {
    id: "mixed_process_exam_day",
    title: "Mixed Process Exam Day",
    titleZh: "考試流程",
    level: ["elementary", "highschool"],
    domain: "academic",
    content:
      "On exam morning, the teacher arrived early and prepared the classroom. Students were asked to leave their bags at the front and {{s1}} to their seats quietly. Before handing out the papers, the teacher explained the rules and asked everyone to listen carefully. Some students looked {{s2}}, but the room became calmer once the instructions were clear. The teacher gave them the exam and reminded them to check each page before submitting. At the end of the test, students handed in their papers one by one and left the room quietly.",
    contentZh:
      "考試流程",
    slots: [
      { id: "s1", pos: "v", tags: ["process"] },
      { id: "s2", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "mixed_physical_garden_work",
    title: "Mixed Physical Garden Work",
    titleZh: "整理校園花園",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "A group of students volunteered to clean the school garden after a storm. Fallen branches covered the paths, and leaves were scattered across the grass. The students worked together to {{s1}} the larger branches and collect smaller pieces into bags. The garden looked much better after several hours of work. Some students felt {{s2}} because the task had been tiring, but they were also proud of the result. The teacher thanked them and said the clean garden would be easier for everyone to enjoy during lunch breaks.",
    contentZh:
      "整理校園花園",
    slots: [
      { id: "s1", pos: "v", tags: ["physical"] },
      { id: "s2", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "mixed_communication_travel_plan",
    title: "Mixed Communication Travel Plan",
    titleZh: "朋友討論旅程",
    level: ["highschool", "toeic"],
    domain: "travel",
    content:
      "Three friends were planning a weekend trip, but each person wanted to visit different places. Instead of arguing, they made a list of everyone's priorities and tried to {{s1}} which activities mattered most. They discovered that everyone wanted to visit the old town and try local food. After agreeing on those plans, they chose one optional activity for each day. The discussion was {{s2}} because it helped them avoid making the schedule too crowded. By the end of the evening, everyone felt satisfied with the plan and looked forward to the trip.",
    contentZh:
      "朋友討論旅程",
    slots: [
      { id: "s1", pos: "v", tags: ["communication"] },
      { id: "s2", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "mixed_cognition_fake_discount",
    title: "Mixed Cognition Fake Discount",
    titleZh: "判斷折扣真實性",
    level: ["toefl_ielts", "advanced"],
    domain: "daily",
    content:
      "While shopping online, Rachel saw a product marked as seventy percent off and wondered whether the deal was really as good as it looked. She tried to {{s1}} the original price by comparing the item with several other stores. She discovered that the same product was often sold near the discounted price anyway. The advertisement now seemed {{s2}}. Rachel decided not to buy immediately and waited for a better opportunity. The experience taught her that a large discount number can create excitement, but comparing actual prices is a more useful way to judge a deal.",
    contentZh:
      "判斷折扣真實性",
    slots: [
      { id: "s1", pos: "v", tags: ["cognitive"] },
      { id: "s2", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "mixed_state_change_recovery",
    title: "Mixed State Change Recovery",
    titleZh: "從失敗中恢復",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "After failing an important test, Eric felt {{s1}} and wanted to give up studying the subject. His teacher encouraged him to review the mistakes and identify which topics caused trouble. Eric created a new study plan and practiced a little every day. Over the next few weeks, his confidence began to {{s2}}. He also learned to ask questions when he was confused instead of hiding the problem. When he took another test, his score improved. Eric realized that one disappointing result did not define his ability to learn.",
    contentZh:
      "從失敗中恢復",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "mixed_social_new_neighborhood",
    title: "Mixed Social New Neighborhood",
    titleZh: "認識新鄰居",
    level: ["elementary", "highschool"],
    domain: "social",
    content:
      "After moving into a new apartment building, Daniel wanted to meet his neighbors. He felt {{s1}} when he saw people in the hallway because he was not sure how to start a conversation. One evening, he introduced himself to a neighbor and asked about a package that had been delivered to the wrong door. The neighbor helped him {{s2}} with the building residents by introducing him to several others. Daniel soon learned about a local park and a weekend market nearby. He was glad that a small conversation had helped him feel more connected to the neighborhood.",
    contentZh:
      "認識新鄰居",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["social"] },
    ],
  },
  {
    id: "mixed_advanced_research_report",
    title: "Mixed Advanced Research Report",
    titleZh: "研究報告寫作",
    level: ["toefl_ielts", "advanced"],
    domain: "academic",
    content:
      "While writing a research report, Maya discovered that several sources provided conflicting statistics. Rather than selecting the numbers that supported her argument, she tried to {{s1}} why the sources differed. She found that the researchers had used different definitions and sample sizes. Maya explained these differences in the report and avoided making a claim that the evidence could not support. Her professor said this was an {{s2}} approach because transparent limitations make research more trustworthy. Maya revised the conclusion and focused on what the available evidence could reasonably show.",
    contentZh:
      "研究報告寫作",
    slots: [
      { id: "s1", pos: "v", tags: ["cognitive"] },
      { id: "s2", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "mixed_hotel_breakfast_rush",
    title: "Mixed Hotel Breakfast Rush",
    titleZh: "早餐尖峰時間",
    level: ["elementary", "highschool"],
    domain: "travel",
    content:
      "At eight o'clock, the hotel breakfast room became crowded. Guests waited near the buffet, while staff refilled drinks and cleared tables. One guest looked {{s1}} because there were no empty seats. A staff member asked him to {{s2}} through to a smaller table near the window. After a few minutes, several families left, and the room became less busy. The guest thanked the staff and enjoyed a quiet breakfast. He later said that the hotel had handled the busy period well despite the sudden rush of customers.",
    contentZh:
      "早餐尖峰時間",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["physical"] },
    ],
  },
  {
    id: "mixed_travel_sunset_boat",
    title: "Mixed Travel Sunset Boat",
    titleZh: "夕陽船程",
    level: ["elementary", "highschool"],
    domain: "travel",
    content:
      "During a short boat trip, Anna watched the sun slowly disappear behind the hills. The sky turned orange and pink, creating a {{s1}} view across the water. A {{s2}} number of small boats moved quietly in the distance. Anna held her camera and tried to {{s3}} the best angle for a photo. She felt {{s4}} because the scene was more beautiful than she had expected. When the boat returned to the harbor, everyone remained quiet for a moment, as if they wanted to remember the view.",
    contentZh:
      "夕陽船程",
    slots: [
      { id: "s1", pos: "adj", tags: ["description"] },
      { id: "s2", pos: "adj", tags: ["quantity"] },
      { id: "s3", pos: "v", tags: ["physical"] },
      { id: "s4", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "mixed_health_study_lunch",
    title: "Mixed Health Study Lunch",
    titleZh: "健康午餐選擇",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "At school, Jason often skipped lunch when he was busy. One afternoon, he felt {{s1}} and realized that he had eaten very little that day. His teacher suggested planning a simple lunch in advance so he would not forget. Jason decided to {{s2}} his morning routine differently by preparing food the night before. He also tried to choose meals with enough variety to keep him satisfied. After following the new habit for a few weeks, his afternoon energy began to {{s3}}. He found it easier to focus in class and stopped skipping lunch.",
    contentZh:
      "健康午餐選擇",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["process"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
    ],
  }
];
