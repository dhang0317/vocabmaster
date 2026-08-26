import type { ScenarioTemplate } from './scenarioTemplates';

/** User scenarios C11 — batch of templates from batch2 */
export const USER_SCENARIO_TEMPLATES_C11: ScenarioTemplate[] = [
  {
    id: "academic_lab_report_revision",
    title: "Lab Report Revision",
    titleZh: "實驗報告修改",
    level: ["highschool", "toeic"],
    domain: "academic",
    content:
      "After receiving feedback on her lab report, Lena decided to rewrite the discussion section. She needed to {{s1}} the unexpected results more carefully and connect them to the original hypothesis. Her partner suggested that she {{s2}} the graphs so the trends were easier to see. Lena also added a short paragraph explaining possible measurement errors. When she submitted the revised version, the teacher noted that the explanation was clearer and more honest about the limitations of the experiment.",
    contentZh:
      "實驗報告修改",
    slots: [
      { id: "s1", pos: "v", tags: ["cognitive"] },
      { id: "s2", pos: "v", tags: ["process"] },
    ],
  },
  {
    id: "academic_group_presentation_prep",
    title: "Group Presentation Prep",
    titleZh: "小組報告準備",
    level: ["highschool", "toeic"],
    domain: "academic",
    content:
      "The group met in the library to prepare their history presentation. Mei was responsible for the opening slides, while others collected photographs and quotations. They agreed to {{s1}} the speaking time so that each person had a fair share. During the rehearsal, one member forgot a key date, so they paused to {{s2}} the timeline together. By the end of the evening, the team felt more confident and decided to practice once more the next morning before class.",
    contentZh:
      "小組報告準備",
    slots: [
      { id: "s1", pos: "v", tags: ["process"] },
      { id: "s2", pos: "v", tags: ["cognitive"] },
    ],
  },
  {
    id: "academic_research_report_writing",
    title: "Research Report Writing",
    titleZh: "研究報告寫作",
    level: ["toeic", "toefl_ielts", "advanced"],
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
      "At eight o'clock, the hotel breakfast room became crowded. Guests waited near the buffet, while staff refilled drinks and cleared tables. One guest looked {{s1}} after realizing there were no empty seats left. A staff member asked him to {{s2}} through to a smaller table near the window. After a few minutes, several families left, and the room became less busy. The guest thanked the staff and enjoyed a quiet breakfast. He later said that the hotel had handled the busy period well despite the sudden rush of customers.",
    contentZh:
      "早餐尖峰時間",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion", "negative"] },
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
      { id: "s4", pos: "adj", tags: ["emotion", "positive"] },
    ],
  },
];
