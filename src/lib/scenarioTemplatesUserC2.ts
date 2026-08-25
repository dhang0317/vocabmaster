import type { ScenarioTemplate } from './scenarioTemplates';

/** User scenarios C2 (10 templates) */
export const USER_SCENARIO_TEMPLATES_C2: ScenarioTemplate[] = [
  {
    id: "science_sleep_study",
    title: "Science Sleep Study",
    titleZh: "睡眠研究",
    level: ["toefl_ielts", "advanced"],
    domain: "science",
    content:
      "Researchers studying sleep asked volunteers to keep a daily record of their bedtime and morning routines. The scientists noticed that people who had a {{s1}} period of poor sleep often reported problems with concentration the next day. However, the researchers warned that the relationship did not prove that sleep alone caused every attention problem. Other factors, such as stress and exercise, might also {{s2}} concentration levels. The study encouraged scientists to collect more evidence before making strong conclusions. Its cautious approach was considered {{s3}} because it clearly separated observed patterns from proven causes.",
    contentZh:
      "睡眠研究",
    slots: [
      { id: "s1", pos: "adj", tags: ["time"] },
      { id: "s2", pos: "v", tags: ["cause_effect"] },
      { id: "s3", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "science_forest_recovery",
    title: "Science Forest Recovery",
    titleZh: "森林恢復",
    level: ["toefl_ielts", "advanced"],
    domain: "science",
    content:
      "After a large forest fire, ecologists returned to the area every year to measure how quickly the ecosystem recovered. At first, the landscape looked {{s1}}, with only a few young plants visible between the burned trees. Over time, grasses and small shrubs began to grow, and insects returned in greater numbers. The researchers found that recovery could {{s2}} quickly after periods of heavy rain. They also observed that some species returned much later than others. These findings suggest that ecological recovery is often a gradual process rather than an immediate transformation.",
    contentZh:
      "森林恢復",
    slots: [
      { id: "s1", pos: "adj", tags: ["description"] },
      { id: "s2", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "academic_research_topic",
    title: "Academic Research Topic",
    titleZh: "選擇研究題目",
    level: ["highschool", "toeic"],
    domain: "academic",
    content:
      "When Jason started a research assignment, he wanted to study too many topics at once. His teacher advised him to narrow the question and choose one {{s1}} topic. Jason reviewed several articles and tried to {{s2}} the main ideas before making a final decision. He eventually selected a project about how social media affects study habits. The subject was interesting, but the teacher reminded him that clear evidence was {{s3}} for a strong report. Jason created a simple outline and divided the work into smaller sections so he could complete each stage on time.",
    contentZh:
      "選擇研究題目",
    slots: [
      { id: "s1", pos: "adj", tags: ["evaluation"] },
      { id: "s2", pos: "v", tags: ["cognitive"] },
      { id: "s3", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "academic_library_research",
    title: "Academic Library Research",
    titleZh: "圖書館研究",
    level: ["elementary", "highschool"],
    domain: "academic",
    content:
      "Ella visited the library to find information for a history project. She expected the first book she opened to answer all her questions, but the information was too general. A librarian helped her {{s1}} which sources were more useful and showed her how to search by topic. Ella found several articles and began taking notes. She quickly learned that not every website was reliable. The librarian explained that checking the author's background was {{s2}} before using a source in schoolwork. Ella left the library with a clear plan and enough material to begin writing her report.",
    contentZh:
      "圖書館研究",
    slots: [
      { id: "s1", pos: "v", tags: ["cognitive"] },
      { id: "s2", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "academic_group_presentation",
    title: "Academic Group Presentation",
    titleZh: "小組簡報",
    level: ["highschool", "toeic"],
    domain: "academic",
    content:
      "Four students were preparing a presentation about renewable energy. They divided the topic into sections and agreed to {{s1}} through a shared online document. During practice, one student noticed that several slides contained too much text. The group decided to simplify the design so the main points would be easier to {{s2}}. The presenter was initially {{s3}} about speaking in front of the class, but repeated practice helped her confidence improve. On presentation day, the group stayed organized and answered the teacher's questions with clear examples.",
    contentZh:
      "小組簡報",
    slots: [
      { id: "s1", pos: "v", tags: ["social"] },
      { id: "s2", pos: "v", tags: ["cognitive"] },
      { id: "s3", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "academic_exam_prep",
    title: "Academic Exam Prep",
    titleZh: "準備考試",
    level: ["elementary", "highschool"],
    domain: "academic",
    content:
      "Before the final exam, Noah made a study schedule for each subject. He wanted to avoid studying everything on the last night because that usually left him tired and {{s1}}. He divided his notes into smaller sections and reviewed one topic at a time. When he found a difficult concept, he asked a classmate to {{s2}} it in simpler language. Over several days, his understanding began to {{s3}}. By the weekend, Noah felt more prepared and noticed that his study sessions were shorter but more effective. He planned to use the same method for his next exam.",
    contentZh:
      "準備考試",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["communication"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "academic_feedback_essay",
    title: "Academic Feedback Essay",
    titleZh: "修改英文作文",
    level: ["highschool", "toeic"],
    domain: "academic",
    content:
      "After receiving feedback on her English essay, Chloe felt slightly {{s1}} because her teacher had marked several paragraphs for revision. However, she read the comments carefully and tried to {{s2}} what the teacher wanted her to improve. The teacher suggested adding specific examples and removing repeated ideas. Chloe revised the introduction first and then worked through the body paragraphs. The process was slow, but her writing began to {{s3}}. When she submitted the second draft, the teacher said the argument was clearer and more convincing than before.",
    contentZh:
      "修改英文作文",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["cognitive"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "health_hydration_day",
    title: "Health Hydration Day",
    titleZh: "日常補充水分",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "During a busy school day, Ethan realized he had barely drunk any water since breakfast. By afternoon, he felt tired and found it harder to focus. A teacher reminded the class that regular hydration is an {{s1}} part of staying comfortable and alert. Ethan filled his bottle and started taking small drinks throughout the afternoon. After a while, his headache began to {{s2}}. He also decided to keep a reusable bottle in his backpack so drinking water would become easier to remember. By the end of the day, he felt better and had created a simple habit that fit his routine.",
    contentZh:
      "日常補充水分",
    slots: [
      { id: "s1", pos: "adj", tags: ["evaluation"] },
      { id: "s2", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "health_sleep_routine",
    title: "Health Sleep Routine",
    titleZh: "建立睡眠習慣",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "Sophie often stayed up late using her phone, so she felt tired during morning classes. She decided to build a more regular bedtime routine. Her first step was to reduce screen use before bed and prepare her schoolbag earlier in the evening. After a week, the change began to {{s1}} her daily energy levels. Sophie was {{s2}} to discover that getting enough rest made studying feel easier. She still enjoyed using her phone, but she started setting it aside before bedtime. The small adjustment helped her mornings become calmer and more manageable.",
    contentZh:
      "建立睡眠習慣",
    slots: [
      { id: "s1", pos: "v", tags: ["state_change"] },
      { id: "s2", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "health_exercise_break",
    title: "Health Exercise Break",
    titleZh: "讀書中的運動休息",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "During exam week, Ryan spent several hours studying without taking breaks. His shoulders became stiff, and he felt {{s1}}. A friend suggested standing up every hour and doing a few simple movements. Ryan decided to {{s2}} around the building for five minutes before returning to his desk. The short walk gave him a chance to rest his eyes and clear his mind. After several days, he noticed that short breaks helped him stay focused for longer periods. He kept the habit even after exams because it made long study sessions feel much more comfortable.",
    contentZh:
      "讀書中的運動休息",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["physical"] },
    ],
  }
];
