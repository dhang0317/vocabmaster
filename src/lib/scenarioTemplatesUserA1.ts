import type { ScenarioTemplate } from './scenarioTemplates';

/** User scenarios A1 */
export const USER_SCENARIO_TEMPLATES_A1: ScenarioTemplate[] = [
  {
    id: "daily_neighborhood_renovation_talk",
    title: "Daily Neighborhood Renovation Talk",
    titleZh: "社區公設整修座談",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "Renovation work on our apartment building's main elevator created a {{s1}} inconvenience for elderly residents living on higher floors. Rather than complaining on social media, homeowners gathered to {{s2}} with the building committee during an open meeting. The contractor agreed to adjust noisy working hours, generating an immediate sense of {{s3}} among all residents.",
    contentZh:
      "社區公設整修座談",
    slots: [
      { id: "s1", pos: "adj", tags: ["time"] },
      { id: "s2", pos: "v", tags: ["social"] },
      { id: "s3", pos: "n", tags: ["emotion"] },
    ],
  },
  {
    id: "daily_unexpected_coincidence",
    title: "Daily Unexpected Coincidence",
    titleZh: "街頭巧遇舊友的驚喜",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "While sitting at a local coffee shop yesterday, I happened to glance up and {{s1}} an old high school classmate passing by. Running into her after so many years was a completely {{s2}} coincidence. We sat together for hours, talking about our past memories and enjoying a moment of sincere warmth and {{s3}}.",
    contentZh:
      "街頭巧遇舊友的驚喜",
    slots: [
      { id: "s1", pos: "v", tags: ["cognitive"] },
      { id: "s2", pos: "adj", tags: ["evaluation"] },
      { id: "s3", pos: "n", tags: ["emotion"] },
    ],
  },
  {
    id: "daily_unexpected_reunion",
    title: "Daily Unexpected Reunion",
    titleZh: "咖啡館巧遇多年老友",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "While sitting at a quiet corner café yesterday, I happened to look up and {{s1}} a high school classmate walking by. Reconnecting after so many years was a completely {{s2}} coincidence. We spent the afternoon catching up on life, filling the space with warm stories and genuine {{s3}}.",
    contentZh:
      "咖啡館巧遇多年老友",
    slots: [
      { id: "s1", pos: "v", tags: ["cognitive"] },
      { id: "s2", pos: "adj", tags: ["evaluation"] },
      { id: "s3", pos: "n", tags: ["emotion"] },
    ],
  },
  {
    id: "health_habit_change",
    title: "Health Habit Change",
    titleZh: "改善健康的微小習慣",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "If you suffer from {{s1}} stress, making minor adjustments to your routine can lead to great results. Regular light exercise can help {{s2}} better sleeping habits over time. When you feel overwhelmed, taking deep breaths will often {{s3}} a calm feeling. It is a simple step that anyone can try every day.",
    contentZh:
      "改善健康的微小習慣",
    slots: [
      { id: "s1", pos: "adj", tags: ["time"] },
      { id: "s2", pos: "v", tags: ["process"] },
      { id: "s3", pos: "v", tags: ["cause_effect"] },
    ],
  },
  {
    id: "health_mindfulness_stress_reduction",
    title: "Health Mindfulness Stress Reduction",
    titleZh: "正念冥想與長期壓力調節",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "Experiencing {{s1}} stress at work can negative impact both physical health and focus. Health experts suggest adopting mindfulness practices to {{s2}} daily anxiety effectively. Taking a quiet ten-minute break each afternoon can {{s3}} a calm mental state, allowing your body to recover from cognitive fatigue.",
    contentZh:
      "正念冥想與長期壓力調節",
    slots: [
      { id: "s1", pos: "adj", tags: ["time"] },
      { id: "s2", pos: "v", tags: ["process"] },
      { id: "s3", pos: "v", tags: ["cause_effect"] },
    ],
  },
  {
    id: "health_nutrition_lifestyle_balance",
    title: "Health Nutrition Lifestyle Balance",
    titleZh: "營養飲食與生活型態轉變",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "Replacing heavily processed snacks with fresh vegetables can {{s1}} noticeable health improvements in just a few weeks. Nutritionists stress that drinking an {{s2}} amount of water daily helps maintain high energy levels. When you make time to {{s3}} through local fresh markets weekly, adopting healthier eating routines becomes much easier and far more enjoyable.",
    contentZh:
      "營養飲食與生活型態轉變",
    slots: [
      { id: "s1", pos: "v", tags: ["cause_effect"] },
      { id: "s2", pos: "adj", tags: ["quantity"] },
      { id: "s3", pos: "v", tags: ["physical"] },
    ],
  },
  {
    id: "health_screen_time_sleep_hygiene",
    title: "Health Screen Time Sleep Hygiene",
    titleZh: "夜間螢幕使用與睡眠品質",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "Extended screen exposure right before bedtime can exert a {{s1}} negative impact on sleep hygiene. Over time, inadequate rest will {{s2}} persistent daytime exhaustion and lack of focus. Health advisers encourage individuals to {{s3}} a relaxing nighttime routine without electronic devices, as a warm shower often induces deep physical relaxation.",
    contentZh:
      "夜間螢幕使用與睡眠品質",
    slots: [
      { id: "s1", pos: "adj", tags: ["time"] },
      { id: "s2", pos: "v", tags: ["cause_effect"] },
      { id: "s3", pos: "v", tags: ["process"] },
    ],
  },
  {
    id: "health_sleep_hygiene",
    title: "Health Sleep Hygiene",
    titleZh: "睡眠品質與身心修復",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "Sustained exposure to screen light at night creates a {{s1}} impact on your natural sleep cycle. Over time, poor resting habits can {{s2}} chronic daytime fatigue and mood instability. Health experts recommend that individuals {{s3}} a screen-free winding-down routine before bed. Taking a warm bath will often {{s2}} deep relaxation, making it much easier to fall asleep naturally.",
    contentZh:
      "睡眠品質與身心修復",
    slots: [
      { id: "s1", pos: "adj", tags: ["time"] },
      { id: "s2", pos: "v", tags: ["cause_effect"] },
      { id: "s3", pos: "v", tags: ["process"] },
    ],
  },
  {
    id: "health_stress_management_habits",
    title: "Health Stress Management Habits",
    titleZh: "養成健康習慣減輕壓力",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "When dealing with {{s1}} stress from work, small daily routines can make a big difference. Engaging in moderate physical exercise helps {{s2}} healthier sleeping patterns over time. Whenever fatigue strikes, taking slow, deep breaths will usually {{s3}} a sense of calmness. Building these habits step by step brings lasting benefits to your body.",
    contentZh:
      "養成健康習慣減輕壓力",
    slots: [
      { id: "s1", pos: "adj", tags: ["time"] },
      { id: "s2", pos: "v", tags: ["process"] },
      { id: "s3", pos: "v", tags: ["cause_effect"] },
    ],
  },
  {
    id: "hotel_special_request_service",
    title: "Hotel Special Request Service",
    titleZh: "飯店週年慶祝客製化服務",
    level: ["elementary", "highschool"],
    domain: "travel",
    content:
      "A couple staying at our hotel requested a romantic setup to celebrate their wedding anniversary. The concierge worked to {{s1}} a custom flower arrangement in their suite before their arrival. Their positive feedback made it clear that small gestures can play a {{s2}} role in guest satisfaction. The warm experience created a {{s3}} memory they promised to treasure.",
    contentZh:
      "飯店週年慶祝客製化服務",
    slots: [
      { id: "s1", pos: "v", tags: ["physical"] },
      { id: "s2", pos: "adj", tags: ["evaluation"] },
      { id: "s3", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "hotel_cancellation_policy_dispute",
    title: "Hotel Cancellation Policy Dispute",
    titleZh: "飯店退房條款爭議與溝通",
    level: ["highschool", "toeic"],
    domain: "travel",
    content:
      "A traveler contacted the front desk after receiving an unexpected cancellation fee on his bill. He felt the charge was completely {{s1}} since he had given prior notice. The front desk supervisor attempted to {{s2}} the terms of the booking contract calmly. Recognizing the guest's growing frustration, the manager offered a voucher to {{s3}} the tension and ensure a positive customer relationship.",
    contentZh:
      "飯店退房條款爭議與溝通",
    slots: [
      { id: "s1", pos: "adj", tags: ["evaluation"] },
      { id: "s2", pos: "v", tags: ["communication"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "hotel_complaint_resolution",
    title: "Hotel Complaint Resolution",
    titleZh: "飯店顧客噪音投訴處理",
    level: ["highschool", "toeic"],
    domain: "travel",
    content:
      "A guest contacted the front desk yesterday, expressing that the noise level outside was completely {{s1}}. The receptionist attempted to {{s2}} the issue politely and offered an upgraded room immediately. After moving to a quieter suite, the guest's anger began to {{s3}}, and the staff was relieved to receive a friendly smile before checkout.",
    contentZh:
      "飯店顧客噪音投訴處理",
    slots: [
      { id: "s1", pos: "adj", tags: ["evaluation"] },
      { id: "s2", pos: "v", tags: ["communication"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "hotel_overbooking_crisis",
    title: "Hotel Overbooking Crisis",
    titleZh: "飯店超訂危機應變處置",
    level: ["highschool", "toeic"],
    domain: "travel",
    content:
      "Due to a system error, the hotel accidentally overbooked several executive suites during peak season. Front desk staff had to deal with guests who expressed deep {{s1}} upon arrival. The front manager took swift action to {{s2}} alternative accommodations with a partner luxury resort nearby. By offering complimentary spa passes and personal assistance, the team successfully managed to {{s3}} a potentially disastrous review into positive feedback.",
    contentZh:
      "飯店超訂危機應變處置",
    slots: [
      { id: "s1", pos: "n", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["communication"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "hotel_overbooking_resolution",
    title: "Hotel Overbooking Resolution",
    titleZh: "飯店過度預訂危機處理",
    level: ["highschool", "toeic"],
    domain: "travel",
    content:
      "A front desk supervisor had to deal with an upset guest after a system glitch caused an overbooking. The traveler was noticeably {{s1}} because his reserved suite was unavailable. The manager immediately moved to {{s2}} the options clearly, offering a free transfer to a nearby partner hotel with complimentary dinner. After a few minutes of discussion, the guest's anger began to {{s3}}, and he appreciated the swift customer service.",
    contentZh:
      "飯店過度預訂危機處理",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["communication"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "hotel_service_complaint_handling",
    title: "Hotel Service Complaint Handling",
    titleZh: "飯店夜間噪音投訴處理",
    level: ["highschool", "toeic"],
    domain: "travel",
    content:
      "A guest contacted the front desk late at night, expressing that the noise level near his room was utterly {{s1}}. The duty manager immediately sought to {{s2}} the situation with sincere care and offered a complimentary room upgrade. Shortly after relocating, the guest's frustration began to {{s3}}, allowing him to enjoy a quiet rest for the remainder of his stay.",
    contentZh:
      "飯店夜間噪音投訴處理",
    slots: [
      { id: "s1", pos: "adj", tags: ["evaluation"] },
      { id: "s2", pos: "v", tags: ["communication"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
    ],
  }
];
