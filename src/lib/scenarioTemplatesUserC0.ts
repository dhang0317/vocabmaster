import type { ScenarioTemplate } from './scenarioTemplates';

/** User scenarios C0 (10 templates) */
export const USER_SCENARIO_TEMPLATES_C0: ScenarioTemplate[] = [
  {
    id: "hotel_late_check_in",
    title: "Hotel Late Check In",
    titleZh: "飯店深夜入住",
    level: ["elementary", "highschool"],
    domain: "travel",
    content:
      "Mia arrived at the hotel after a long flight and looked quite {{s1}}. The front desk clerk smiled and asked for her passport. Mia explained that her flight had been delayed and wanted to {{s2}} whether her room was still available. The clerk checked the computer and said the room was ready, but the hotel had received a {{s3}} number of late arrivals that evening. He asked Mia to wait a few minutes while another employee prepared her key. The short delay began to {{s4}} her frustration. When she finally entered the quiet room, she felt relieved and thanked the staff for their help.",
    contentZh:
      "飯店深夜入住",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["communication"] },
      { id: "s3", pos: "n", tags: ["quantity"] },
      { id: "s4", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "hotel_noisy_room",
    title: "Hotel Noisy Room",
    titleZh: "房間太吵",
    level: ["highschool", "toeic"],
    domain: "travel",
    content:
      "Daniel called the front desk because the room next door was extremely noisy. At first, he tried to ignore the sounds, but the disturbance continued for almost an hour. He politely asked the receptionist to {{s1}} the problem with the other guests. The receptionist apologized and said the hotel had a clear policy about nighttime noise. She promised to take {{s2}} action immediately. After a few minutes, the noise began to {{s3}}, and Daniel could finally hear the quiet hum of the air conditioner. He appreciated the staff's quick response and sent a message thanking them the next morning.",
    contentZh:
      "房間太吵",
    slots: [
      { id: "s1", pos: "v", tags: ["communication"] },
      { id: "s2", pos: "adj", tags: ["evaluation"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "hotel_lost_keycard",
    title: "Hotel Lost Keycard",
    titleZh: "弄丟房卡",
    level: ["elementary", "highschool"],
    domain: "travel",
    content:
      "After dinner, Lily returned to her hotel and discovered that her keycard was missing. She became {{s1}} because her phone was almost out of battery, and she could not call her travel partner. She went to the front desk and asked the clerk to {{s2}} her room number. The clerk quickly checked her reservation and printed a new card. Lily then tried to {{s3}} where she had last used the old one. She remembered leaving it beside the restaurant cashier. Although she felt embarrassed, she was grateful that the problem was easy to solve.",
    contentZh:
      "弄丟房卡",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["communication"] },
      { id: "s3", pos: "v", tags: ["cognitive"] },
    ],
  },
  {
    id: "hotel_breakfast_mixup",
    title: "Hotel Breakfast Mixup",
    titleZh: "早餐訂單出錯",
    level: ["highschool", "toeic"],
    domain: "travel",
    content:
      "During breakfast, Kevin ordered a vegetarian meal, but the plate arrived with bacon on the side. He looked {{s1}} and called the server over. Instead of becoming angry, Kevin calmly explained the problem and asked whether the kitchen could {{s2}} a new plate. The waiter apologized and said he would correct the order right away. Because the dining room was busy, the replacement took a little longer than expected. Still, the staff kept Kevin updated, which helped {{s3}} trust between the customer and the restaurant. When the new meal arrived, Kevin thanked the waiter for handling the mistake professionally.",
    contentZh:
      "早餐訂單出錯",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["process"] },
      { id: "s3", pos: "v", tags: ["social"] },
    ],
  },
  {
    id: "hotel_room_upgrade",
    title: "Hotel Room Upgrade",
    titleZh: "意外升等",
    level: ["elementary", "highschool"],
    domain: "travel",
    content:
      "Sofia checked into a small hotel for a weekend trip. At the front desk, the receptionist told her that the hotel was offering a free room upgrade because of a booking error. Sofia was {{s1}} by the unexpected news. The new room had a balcony and a much better view of the city. The receptionist explained that the original room had become unavailable and that the staff had decided to {{s2}} the situation by moving her to a larger room. Sofia said the upgrade was {{s3}} and took a photo of the sunset from the balcony before going out for dinner.",
    contentZh:
      "意外升等",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["process"] },
      { id: "s3", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "workplace_project_delay",
    title: "Workplace Project Delay",
    titleZh: "專案延遲",
    level: ["highschool", "toeic"],
    domain: "workplace",
    content:
      "Our marketing team planned to launch a new campaign on Monday, but an unexpected software problem delayed the final testing. The manager asked everyone to {{s1}} and focus on the most urgent tasks. At first, some team members felt {{s2}} because they had already worked late for several days. During the meeting, the manager explained that rushing the release could {{s3}} more serious problems later. The team agreed to divide the remaining work into smaller steps. By Friday, the situation had {{s4}}, and the campaign was ready for review. Everyone learned that clear priorities could prevent unnecessary stress.",
    contentZh:
      "專案延遲",
    slots: [
      { id: "s1", pos: "v", tags: ["social"] },
      { id: "s2", pos: "adj", tags: ["emotion"] },
      { id: "s3", pos: "v", tags: ["cause_effect"] },
      { id: "s4", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "workplace_email_clarification",
    title: "Workplace Email Clarification",
    titleZh: "確認工作內容",
    level: ["highschool", "toeic"],
    domain: "workplace",
    content:
      "Before starting the new project, Nina sent an email to her supervisor because one part of the instructions was unclear. She wanted to {{s1}} what the client actually expected. Her supervisor replied that the first draft should focus on customer feedback rather than sales numbers. He also said that this distinction was {{s2}} for the final report. Nina updated her notes and created a simple timeline for the team. The clarification helped everyone understand the goal and reduced the chance of duplicated work. Later that afternoon, Nina thanked her supervisor for taking the time to explain the project in detail.",
    contentZh:
      "確認工作內容",
    slots: [
      { id: "s1", pos: "v", tags: ["communication"] },
      { id: "s2", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "workplace_team_conflict",
    title: "Workplace Team Conflict",
    titleZh: "團隊意見衝突",
    level: ["highschool", "toeic"],
    domain: "workplace",
    content:
      "Two designers on the same team strongly disagreed about the layout of a new website. Their conversation became tense, and both started to feel {{s1}}. Rather than choosing sides, their manager asked them to {{s2}} the reasons behind their proposals. She then suggested a short test with real users. The results showed that one design was easier to navigate, while the other looked more attractive. The team decided to combine the strongest features of both ideas. This process helped {{s3}} cooperation and reminded everyone that disagreement can be useful when people remain respectful.",
    contentZh:
      "團隊意見衝突",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["communication"] },
      { id: "s3", pos: "v", tags: ["social"] },
    ],
  },
  {
    id: "workplace_new_intern",
    title: "Workplace New Intern",
    titleZh: "新進實習生",
    level: ["elementary", "highschool"],
    domain: "workplace",
    content:
      "On her first day as an intern, Emma arrived early and prepared her notebook. She was a little {{s1}} because she did not know anyone in the office. Her supervisor introduced her to the team and asked a colleague to {{s2}} with her during the first week. Emma learned how to use the company's project system and watched several training videos. The instructions seemed complicated at first, but her understanding began to {{s3}} after she practiced a few times. By lunchtime, she felt more comfortable and joined several coworkers for a casual meal at a nearby restaurant.",
    contentZh:
      "新進實習生",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["social"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "workplace_meeting_reschedule",
    title: "Workplace Meeting Reschedule",
    titleZh: "重新安排會議",
    level: ["elementary", "highschool"],
    domain: "workplace",
    content:
      "James received a message saying that his afternoon meeting had to be moved because the manager was traveling. Instead of waiting, he contacted the other participants and asked them to {{s1}} a new time. They compared their calendars and found a suitable hour the following morning. The change was {{s2}} because one team member had an important client call later that day. James updated the meeting invitation and added a short note explaining the reason for the change. Everyone confirmed the new time, and the meeting went ahead without further problems.",
    contentZh:
      "重新安排會議",
    slots: [
      { id: "s1", pos: "v", tags: ["communication"] },
      { id: "s2", pos: "adj", tags: ["evaluation"] },
    ],
  }
];
