import type { ScenarioTemplate } from './scenarioTemplates';

/** User scenarios C4 (10 templates) */
export const USER_SCENARIO_TEMPLATES_C4: ScenarioTemplate[] = [
  {
    id: "daily_broken_phone",
    title: "Daily Broken Phone",
    titleZh: "手機突然故障",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "One morning, Claire's phone suddenly stopped charging. She tried a different cable, but nothing changed. She became {{s1}} because she needed the phone for school and transportation. A friend suggested checking the charging port and cleaning it carefully. Claire also searched the manufacturer's support page to {{s2}} the possible causes. The problem turned out to be a small piece of dust blocking the connection. After she removed it, the phone began to {{s3}} normally. Claire was relieved and decided to keep her phone and accessories in a cleaner place.",
    contentZh:
      "手機突然故障",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["cognitive"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "daily_cat_vet",
    title: "Daily Cat Vet",
    titleZh: "帶貓看獸醫",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "When Amy noticed that her cat was eating less than usual, she made an appointment with the veterinarian. At the clinic, she explained the changes and asked the vet to {{s1}} what symptoms might be important to watch. The vet asked several questions and performed a basic examination. Amy felt {{s2}}, but the vet reassured her that the problem did not appear urgent. He suggested monitoring the cat's food and water intake for a few days. Amy went home with a simple plan and felt more confident because she understood what signs would require another visit.",
    contentZh:
      "帶貓看獸醫",
    slots: [
      { id: "s1", pos: "v", tags: ["communication"] },
      { id: "s2", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "daily_bedroom_cleaning",
    title: "Daily Bedroom Cleaning",
    titleZh: "整理房間",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "On Sunday afternoon, Jack decided to clean his bedroom because his desk had become difficult to use. He sorted old papers into piles and tried to {{s1}} the work one step at a time. The room was initially {{s2}}, with books and clothes covering several surfaces. After an hour, the desk was clear and the floor was easier to walk across. Jack felt {{s3}} when he saw the difference. He realized that cleaning for fifteen minutes each day might be easier than waiting until the room became messy again.",
    contentZh:
      "整理房間",
    slots: [
      { id: "s1", pos: "v", tags: ["process"] },
      { id: "s2", pos: "adj", tags: ["description"] },
      { id: "s3", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "social_neighbor_noise",
    title: "Social Neighbor Noise",
    titleZh: "鄰居噪音",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "For several nights, Carlos heard loud music from a neighboring apartment. At first, he ignored it, but the noise continued late into the evening. He became {{s1}} because he was having trouble sleeping. Instead of confronting the neighbor angrily, Carlos decided to {{s2}} the issue politely. He explained how the noise affected him and asked whether the music could be turned down after ten. The neighbor apologized and agreed. Over the next few nights, the situation began to {{s3}}, and Carlos was able to sleep normally again. The experience reminded him that calm communication could solve many everyday conflicts.",
    contentZh:
      "鄰居噪音",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["communication"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "social_club_welcome",
    title: "Social Club Welcome",
    titleZh: "加入社團",
    level: ["elementary", "highschool"],
    domain: "social",
    content:
      "On her first week at a new school, Helen decided to join the photography club. She felt {{s1}} when she entered the first meeting because everyone else seemed to know one another. The club leader introduced herself and invited Helen to {{s2}} with two other new members. They discussed their favorite places to take pictures and planned a weekend photo walk. By the end of the meeting, Helen felt more comfortable. She was glad she had taken the first step instead of waiting for someone else to approach her. The club quickly became one of her favorite parts of school life.",
    contentZh:
      "加入社團",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["social"] },
    ],
  },
  {
    id: "social_misunderstanding",
    title: "Social Misunderstanding",
    titleZh: "化解誤會",
    level: ["highschool", "toeic"],
    domain: "social",
    content:
      "When Mei heard that her friend had canceled their weekend plan, she assumed her friend was upset with her. Mei felt {{s1}} and spent the whole evening thinking about the situation. The next day, she decided to {{s2}} what had happened instead of guessing. Her friend explained that a family event had suddenly been scheduled, so the cancellation had nothing to do with Mei. The misunderstanding began to {{s3}} once they talked openly. Mei realized that making assumptions can create unnecessary worry, while a simple question can often clear things up quickly.",
    contentZh:
      "化解誤會",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["communication"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "social_volunteer_event",
    title: "Social Volunteer Event",
    titleZh: "社區志工活動",
    level: ["highschool", "toeic"],
    domain: "social",
    content:
      "A group of students volunteered at a community food drive on Saturday. They worked together to sort boxes, check labels, and prepare bags for families. The organizers asked them to {{s1}} so that no single person had to handle every task. At first, the number of boxes seemed {{s2}}, and some volunteers were unsure how they would finish. However, once everyone had a clear role, the work became faster. By the afternoon, the team had completed the distribution and felt {{s3}}. The students said the experience showed them how much a group can accomplish when people share responsibilities.",
    contentZh:
      "社區志工活動",
    slots: [
      { id: "s1", pos: "v", tags: ["social"] },
      { id: "s2", pos: "adj", tags: ["quantity"] },
      { id: "s3", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "social_team_sports",
    title: "Social Team Sports",
    titleZh: "團隊運動",
    level: ["elementary", "highschool"],
    domain: "social",
    content:
      "During practice, the school basketball team lost several points in a row. Some players became {{s1}}, and their communication became less clear. The coach called a short timeout and reminded everyone to {{s2}} simple instructions rather than blaming each other. After the break, the players began to {{s3}} their performance. They passed the ball more carefully and encouraged one another after mistakes. Although the team did not win the practice game, the coach was happy with the improvement. He said teamwork mattered more than the final score during training.",
    contentZh:
      "團隊運動",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["communication"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "social_online_comment",
    title: "Social Online Comment",
    titleZh: "網路留言",
    level: ["toefl_ielts", "advanced"],
    domain: "social",
    content:
      "A student posted a controversial opinion online and soon received several angry replies. Instead of responding immediately, she took time to {{s1}} what each person was actually saying. She noticed that some comments disagreed with her argument, while others seemed to misunderstand her point. She decided to {{s2}} her position more clearly and removed a sentence that sounded too harsh. The discussion gradually became more respectful. The experience taught her that online conversations can {{s3}} conflict when people react without checking meaning, but careful wording can create space for useful disagreement.",
    contentZh:
      "網路留言",
    slots: [
      { id: "s1", pos: "v", tags: ["cognitive"] },
      { id: "s2", pos: "v", tags: ["communication"] },
      { id: "s3", pos: "v", tags: ["cause_effect"] },
    ],
  },
  {
    id: "communication_phone_call",
    title: "Communication Phone Call",
    titleZh: "打電話預約",
    level: ["elementary", "highschool"],
    domain: "social",
    content:
      "Before visiting the dentist, Ben called the clinic to make an appointment. He was slightly {{s1}} because he did not want to choose the wrong time. The receptionist asked about his schedule, and Ben tried to {{s2}} his available hours clearly. After checking the calendar, she offered two options. Ben chose the later appointment and repeated the date to make sure there was no misunderstanding. The call lasted only a few minutes, but the clear exchange of information made the process easy. Ben wrote the appointment in his phone immediately so he would not forget it.",
    contentZh:
      "打電話預約",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["communication"] },
    ],
  }
];
