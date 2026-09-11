import type { ScenarioTemplate } from './scenarioTemplates';

/** User scenarios C10 (10 templates) */
export const USER_SCENARIO_TEMPLATES_C10: ScenarioTemplate[] = [
  {
    id: "mixed_communication_group_chat",
    title: "Mixed Communication Group Chat",
    titleZh: "群組訊息誤會",
    level: ["highschool", "toeic"],
    domain: "social",
    content:
      "A class group chat became confusing when several students sent messages at the same time. One student thought the meeting had been canceled, while another believed the location had changed. The class leader asked everyone to {{s1}} the final plan in one clear message. After checking the original announcement, she posted the correct time and place. The confusion began to {{s2}}, and everyone confirmed the details with a simple thumbs-up. The experience showed that group chats can become difficult to follow when too many messages arrive without a clear summary.",
    contentZh:
      "群組訊息誤會",
    slots: [
      { id: "s1", pos: "v", tags: ["communication"] },
      { id: "s2", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "mixed_process_online_course",
    title: "Mixed Process Online Course",
    titleZh: "完成線上課程",
    level: ["highschool", "toeic"],
    domain: "academic",
    content:
      "Chris signed up for a six-week online course about digital design. At first, the number of lessons seemed {{s1}}, so he was unsure whether he could finish. He created a weekly schedule to {{s2}} the course into manageable sections. Whenever he did not understand a concept, he watched the lesson again and tried to {{s3}} the example before moving on. After three weeks, his confidence began to grow. By the final week, he had completed every assignment and felt {{s4}} about the progress he had made.",
    contentZh:
      "完成線上課程",
    slots: [
      { id: "s1", pos: "adj", tags: ["quantity"] },
      { id: "s2", pos: "v", tags: ["process"] },
      { id: "s3", pos: "v", tags: ["cognitive"] },
      { id: "s4", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "mixed_social_charity_drive",
    title: "Mixed Social Charity Drive",
    titleZh: "募款活動",
    level: ["highschool", "toeic"],
    domain: "social",
    content:
      "A group of students organized a charity drive to collect school supplies for children in need. They created posters, shared information online, and asked local stores to {{s1}} the project. At first, the number of donations was small, and the organizers felt {{s2}}. Then a local business offered to match every donation, causing interest to {{s3}}. By the end of the week, the students had collected a {{s4}} amount of supplies. They were surprised by how quickly community support grew once more people learned about the project.",
    contentZh:
      "募款活動",
    slots: [
      { id: "s1", pos: "v", tags: ["social"] },
      { id: "s2", pos: "adj", tags: ["emotion"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
      { id: "s4", pos: "adj", tags: ["quantity"] },
    ],
  },
  {
    id: "mixed_quantity_harvest",
    title: "Mixed Quantity Harvest",
    titleZh: "農場收成",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "A small family farm had a surprisingly good harvest after a season with enough sunlight and rain. The farmers collected an {{s1}} amount of tomatoes and vegetables. They sold some at the local market and donated part of the extra produce to a community kitchen. Because there was more food than expected, the family needed to organize storage carefully. One farmer suggested using the extra tomatoes to make sauce for later. The successful harvest was a welcome change after the previous year, when poor weather had produced a much smaller crop.",
    contentZh:
      "農場收成",
    slots: [
      { id: "s1", pos: "adj", tags: ["quantity"] },
    ],
  },
  {
    id: "mixed_time_old_friend",
    title: "Mixed Time Old Friend",
    titleZh: "久別重逢",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "After moving to different cities, Emma and Lisa had not seen each other for several years. When they finally met again at a cafe, both felt {{s1}}. They spent hours talking about school, jobs, and the changes in their lives. Although a {{s2}} period had passed, the conversation quickly felt natural again. They laughed about old memories and promised to stay in contact more regularly. When the meeting ended, Emma realized that some friendships can remain meaningful even when people spend a long time apart.",
    contentZh:
      "久別重逢",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "adj", tags: ["time"] },
    ],
  },
  {
    id: "mixed_advanced_environment_policy",
    title: "Mixed Advanced Environment Policy",
    titleZh: "環境政策討論",
    level: ["toefl_ielts", "advanced"],
    domain: "academic",
    content:
      "A city council was considering a new policy to reduce plastic waste. Supporters argued that the policy could {{s1}} lower waste levels over time, while critics worried about higher costs for small businesses. Before making a decision, the council invited researchers and business owners to speak. Several members argued that the proposal was {{s2}} but still needed more evidence. They requested a pilot program so officials could measure the effects before applying the policy citywide. The discussion showed how public decisions often require balancing environmental goals, economic concerns, and evidence from real-world results.",
    contentZh:
      "環境政策討論",
    slots: [
      { id: "s1", pos: "v", tags: ["cause_effect"] },
      { id: "s2", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "mixed_emotion_performance",
    title: "Mixed Emotion Performance",
    titleZh: "舞台演出",
    level: ["highschool", "toeic"],
    domain: "social",
    content:
      "Before a school theater performance, the main actor stood behind the curtain and listened to the audience. He felt {{s1}}, even though he had practiced for months. When the lights came on, he took a deep breath and began the first line. After a few minutes, his nervousness started to {{s2}}. The other actors followed their cues, and the performance went smoothly. At the end, the audience applauded loudly. The actor later said that the strongest moment was not hearing the applause but realizing that his fear had not stopped him from performing.",
    contentZh:
      "舞台演出",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "mixed_health_weekend_walk",
    title: "Mixed Health Weekend Walk",
    titleZh: "週末散步",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "Every Sunday morning, Lily takes a walk around a nearby park with her brother. They usually walk for thirty minutes and talk about school or hobbies. One weekend, Lily felt {{s1}} after a stressful week, so her brother suggested taking a longer route. The fresh air and quiet environment helped her mood begin to {{s2}}. They stopped beside a pond and watched the ducks before returning home. Lily said the walk was simple, but it gave her a useful break from screens and schoolwork.",
    contentZh:
      "週末散步",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "mixed_science_space_news",
    title: "Mixed Science Space News",
    titleZh: "太空任務消息",
    level: ["toefl_ielts", "advanced"],
    domain: "science",
    content:
      "A space agency announced that a robotic spacecraft had completed another stage of its mission. Scientists were {{s1}} because the spacecraft had transmitted more data than expected. The team now planned to {{s2}} the information before publishing the first results. Engineers also checked the spacecraft's systems to make sure the equipment remained stable. The mission could {{s3}} new discoveries about the distant object being studied. Researchers emphasized that the first images would be interesting, but careful analysis would be necessary before making strong scientific claims.",
    contentZh:
      "太空任務消息",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["process"] },
      { id: "s3", pos: "v", tags: ["cause_effect"] },
    ],
  },
  {
    id: "mixed_evaluation_school_trip",
    title: "Mixed Evaluation School Trip",
    titleZh: "評估校外教學",
    level: ["highschool", "toeic"],
    domain: "academic",
    content:
      "After a school field trip, students were asked to evaluate the experience. Most enjoyed the museum, but several thought the schedule was too crowded. One student tried to {{s1}} which parts of the day had been most useful. The teacher explained that the feedback was {{s2}} because the school wanted to improve future trips. Students suggested adding more free time and shortening the bus journey. The teacher collected all the comments and promised to review them before planning the next visit.",
    contentZh:
      "評估校外教學",
    slots: [
      { id: "s1", pos: "v", tags: ["cognitive"] },
      { id: "s2", pos: "adj", tags: ["evaluation"] },
    ],
  }
];
