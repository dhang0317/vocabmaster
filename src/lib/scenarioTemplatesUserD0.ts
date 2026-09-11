import type { ScenarioTemplate } from './scenarioTemplates';

/** User scenarios D0 — batch of 20 templates */
export const USER_SCENARIO_TEMPLATES_D0: ScenarioTemplate[] = [
  {
    id: "workplace_marketing_meeting_01",
    title: "行銷策略會議",
    titleZh: "行銷策略會議",
    level: ["highschool", "toeic"],
    domain: "workplace",
    content:
      "We held an urgent departmental meeting yesterday morning to {{s1}} the details of the new marketing strategy. Initially, the team felt quite {{s2}} about the upcoming changes and the tight deadlines. To {{s3}} the transition smoothly over the next quarter, we must {{s4}} the required resources from the main storage immediately. If we fail to do this, it could {{s5}} a significant drop in revenue and negatively {{s6}} our market position against competitors. The executive board considers this execution phase highly {{s7}} for our overall annual growth.",
    contentZh:
      "行銷策略會議",
    slots: [
      { id: "s1", pos: "v", tags: ["communication"] },
      { id: "s2", pos: "adj", tags: ["emotion"] },
      { id: "s3", pos: "v", tags: ["process"] },
      { id: "s4", pos: "v", tags: ["physical", "action"] },
      { id: "s5", pos: "v", tags: ["cause_effect"] },
      { id: "s6", pos: "v", tags: ["state_change"] },
      { id: "s7", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "travel_airport_delay_02",
    title: "機場班機延誤",
    titleZh: "機場班機延誤",
    level: ["elementary", "highschool"],
    domain: "travel",
    content:
      "Arriving at the international airport early made me feel quite {{s1}} for my vacation. I had a {{s2}} amount of time to relax before boarding the plane. First, I needed to {{s3}} my passport and ticket from my heavy backpack. Suddenly, the ground staff tried to {{s4}} a sudden flight delay, but many passengers were extremely confused by the announcement. The waiting time in the terminal felt very {{s5}}. Eventually, the tense situation began to {{s6}} when the departure gate finally opened.",
    contentZh:
      "機場班機延誤",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "adj", tags: ["quantity"] },
      { id: "s3", pos: "v", tags: ["physical", "action"] },
      { id: "s4", pos: "v", tags: ["communication"] },
      { id: "s5", pos: "adj", tags: ["time", "duration"] },
      { id: "s6", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "health_insomnia_recovery_03",
    title: "失眠與作息調整",
    titleZh: "失眠與作息調整",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "daily",
    content:
      "Clinical studies show that chronic insomnia can {{s1}} severe neurological deficits and drastically {{s2}} a patient's overall daytime vitality. Unfortunately, many individuals tend to {{s3}} the critical importance of maintaining natural circadian rhythms. Medical professionals constantly emphasize that establishing a {{s4}} bedtime routine is highly {{s5}} for cognitive recovery. To properly {{s6}} better sleep hygiene, patients must {{s7}} closely with behavioral therapists and strictly adhere to the newly prescribed lifestyle guidelines.",
    contentZh:
      "失眠與作息調整",
    slots: [
      { id: "s1", pos: "v", tags: ["cause_effect"] },
      { id: "s2", pos: "v", tags: ["state_change"] },
      { id: "s3", pos: "v", tags: ["cognitive", "reasoning"] },
      { id: "s4", pos: "adj", tags: ["description"] },
      { id: "s5", pos: "adj", tags: ["evaluation"] },
      { id: "s6", pos: "v", tags: ["process"] },
      { id: "s7", pos: "v", tags: ["social", "cooperation"] },
    ],
  },
  {
    id: "shopping_defective_laptop_04",
    title: "筆電退貨交涉",
    titleZh: "筆電退貨交涉",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "I visited the downtown electronics store this afternoon to {{s1}} a serious problem with a recently purchased defective laptop. The store manager was quite {{s2}} about the situation and quickly offered a full replacement. Since it was a {{s3}} investment for my freelance work, I didn't want to blindly {{s4}} that all their tech products were manufactured poorly. The entire refund and exchange process took a {{s5}} amount of time, which ultimately helped to {{s6}} my initial frustration.",
    contentZh:
      "筆電退貨交涉",
    slots: [
      { id: "s1", pos: "v", tags: ["communication"] },
      { id: "s2", pos: "adj", tags: ["emotion"] },
      { id: "s3", pos: "adj", tags: ["evaluation"] },
      { id: "s4", pos: "v", tags: ["cognitive", "reasoning"] },
      { id: "s5", pos: "adj", tags: ["quantity"] },
      { id: "s6", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "academic_quantum_lecture_05",
    title: "艱澀的物理講座",
    titleZh: "艱澀的物理講座",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "academic",
    content:
      "During the three-hour seminar, the visiting professor attempted to {{s1}} the complex theoretical frameworks of quantum mechanics. However, a {{s2}} portion of the graduate students completely failed to {{s3}} the core mathematical concepts presented on the board. The mathematical equations were highly {{s4}} and required deep logical analysis to decode. This widespread lack of understanding could easily {{s5}} disastrous final exam performance. Therefore, the physics faculty decided to {{s6}} mandatory additional tutorial sessions to {{s7}} the students' learning outcomes.",
    contentZh:
      "艱澀的物理講座",
    slots: [
      { id: "s1", pos: "v", tags: ["communication"] },
      { id: "s2", pos: "adj", tags: ["quantity"] },
      { id: "s3", pos: "v", tags: ["cognitive", "reasoning"] },
      { id: "s4", pos: "adj", tags: ["description"] },
      { id: "s5", pos: "v", tags: ["cause_effect"] },
      { id: "s6", pos: "v", tags: ["process"] },
      { id: "s7", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "hotel_booking_error_06",
    title: "飯店訂房系統錯誤",
    titleZh: "飯店訂房系統錯誤",
    level: ["elementary", "highschool"],
    domain: "travel",
    content:
      "When our family finally arrived at the seaside hotel, the grand lobby looked absolutely {{s1}}. I walked up to the counter and tried to {{s2}} my online reservation details to the front desk clerk. Unfortunately, there was a {{s3}} error causing the computer system to freeze. I felt really {{s4}} because we were so exhausted from the long drive. Thankfully, the kind manager decided to manually {{s5}} a new set of room keys for us, which quickly helped {{s6}} our negative mood.",
    contentZh:
      "飯店訂房系統錯誤",
    slots: [
      { id: "s1", pos: "adj", tags: ["description"] },
      { id: "s2", pos: "v", tags: ["communication"] },
      { id: "s3", pos: "adj", tags: ["time", "duration"] },
      { id: "s4", pos: "adj", tags: ["emotion"] },
      { id: "s5", pos: "v", tags: ["physical", "action"] },
      { id: "s6", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "science_marine_ecology_07",
    title: "海洋生態危機",
    titleZh: "海洋生態危機",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "science",
    content:
      "The most recent satellite data indicates a {{s1}} and alarming shift in global marine biodiversity. Rapid ocean acidification continues to {{s2}} widespread coral bleaching, which will severely {{s3}} the delicate balance of the aquatic food web. Lead researchers {{s4}} that if these industrial pollution trends persist, the environmental damage will soon become irreversible. It is absolutely necessary for governments to {{s5}} strict global conservation protocols and actively {{s6}} with international non-profit agencies to mitigate this growing ecological crisis.",
    contentZh:
      "海洋生態危機",
    slots: [
      { id: "s1", pos: "adj", tags: ["evaluation"] },
      { id: "s2", pos: "v", tags: ["cause_effect"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
      { id: "s4", pos: "v", tags: ["cognitive", "reasoning"] },
      { id: "s5", pos: "v", tags: ["process"] },
      { id: "s6", pos: "v", tags: ["social", "cooperation"] },
    ],
  },
  {
    id: "daily_dinner_cooking_08",
    title: "混亂的晚餐烹飪",
    titleZh: "混亂的晚餐烹飪",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "Cooking dinner for my friends tonight was a very {{s1}} experience. First, I had to deeply reach in and {{s2}} all the fresh ingredients from the back of the fridge. The dessert recipe required a {{s3}} amount of white sugar, which seemed slightly {{s4}} for a healthy meal. I tried to {{s5}} with my older sister for some culinary help, but she was too busy working. Eventually, the smell of the roasted chicken was {{s6}}, and it quickly {{s7}} my intense hunger into pure excitement.",
    contentZh:
      "混亂的晚餐烹飪",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["physical", "action"] },
      { id: "s3", pos: "adj", tags: ["quantity"] },
      { id: "s4", pos: "adj", tags: ["evaluation"] },
      { id: "s5", pos: "v", tags: ["communication"] },
      { id: "s6", pos: "adj", tags: ["description"] },
      { id: "s7", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "workplace_promotion_news_09",
    title: "升職名單公布前夕",
    titleZh: "升職名單公布前夕",
    level: ["highschool", "toeic"],
    domain: "workplace",
    content:
      "Hearing the persistent rumors about the upcoming annual promotions made everyone in the office feel incredibly {{s1}}. Senior management is scheduled to officially {{s2}} the final personnel decisions by next Wednesday. All eligible candidates must first {{s3}} a rigorous and exhausting evaluation phase. Some junior staff members fear that toxic office politics might {{s4}} highly unfair career outcomes. To maintain team trust, the HR department desperately needs to {{s5}} institutional transparency and ensure the judging criteria remain absolutely {{s6}} and objective.",
    contentZh:
      "升職名單公布前夕",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["communication"] },
      { id: "s3", pos: "v", tags: ["process"] },
      { id: "s4", pos: "v", tags: ["cause_effect"] },
      { id: "s5", pos: "v", tags: ["state_change"] },
      { id: "s6", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "travel_museum_tour_10",
    title: "博物館歷史導覽",
    titleZh: "博物館歷史導覽",
    level: ["elementary", "highschool"],
    domain: "travel",
    content:
      "The famous local history museum featured a {{s1}} collection of golden ancient artifacts. Our tour group spent a {{s2}} amount of time carefully exploring the various interactive exhibits. It was truly fascinating to {{s3}} how ordinary people lived and worked thousands of years in the past. Our passionate tour guide tried her best to {{s4}} the complex royal history clearly to everyone. Overall, the educational visit was highly {{s5}}, and my personal interest in ancient civilizations began to {{s6}} positively.",
    contentZh:
      "博物館歷史導覽",
    slots: [
      { id: "s1", pos: "adj", tags: ["description"] },
      { id: "s2", pos: "adj", tags: ["quantity"] },
      { id: "s3", pos: "v", tags: ["cognitive", "reasoning"] },
      { id: "s4", pos: "v", tags: ["communication"] },
      { id: "s5", pos: "adj", tags: ["evaluation"] },
      { id: "s6", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "health_gym_injury_11",
    title: "健身房運動傷害防範",
    titleZh: "健身房運動傷害防範",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "Starting a completely new weightlifting fitness regime can be somewhat {{s1}} for absolute beginners. It's completely common to feel {{s2}} and sore during the first few intense workouts. Professional trainers always advise their new clients to {{s3}} lightweight equipment initially to master the proper form. Pushing too hard and overtraining can easily {{s4}} severe muscle strain and joint damage. If you carefully {{s5}} a steady routine, your physical stamina will gradually {{s6}}. You should never foolishly {{s7}} that visible results will magically happen overnight.",
    contentZh:
      "健身房運動傷害防範",
    slots: [
      { id: "s1", pos: "adj", tags: ["evaluation"] },
      { id: "s2", pos: "adj", tags: ["emotion"] },
      { id: "s3", pos: "v", tags: ["physical", "action"] },
      { id: "s4", pos: "v", tags: ["cause_effect"] },
      { id: "s5", pos: "v", tags: ["process"] },
      { id: "s6", pos: "v", tags: ["state_change"] },
      { id: "s7", pos: "v", tags: ["cognitive", "reasoning"] },
    ],
  },
  {
    id: "shopping_busy_supermarket_12",
    title: "假日擁擠的超市",
    titleZh: "假日擁擠的超市",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "The neighborhood supermarket was completely packed this Sunday, which was a quite {{s1}} experience. I literally had to force and {{s2}} my shopping cart through the incredibly narrow and crowded aisles. There was a {{s3}} shortage of fresh green vegetables today due to the recent storm. I finally had to {{s4}} with a busy staff member just to find the organic milk. Although the checkout lines were extremely {{s5}}, the efficient cashiers managed to {{s6}} the credit card payments very quickly.",
    contentZh:
      "假日擁擠的超市",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["physical", "action"] },
      { id: "s3", pos: "adj", tags: ["quantity"] },
      { id: "s4", pos: "v", tags: ["communication"] },
      { id: "s5", pos: "adj", tags: ["time", "duration"] },
      { id: "s6", pos: "v", tags: ["process"] },
    ],
  },
  {
    id: "academic_thesis_defense_13",
    title: "博士論文口試",
    titleZh: "博士論文口試",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "academic",
    content:
      "Successfully defending a doctoral thesis is a universally {{s1}} milestone in any researcher's academic career. The nervous candidate must {{s2}} their original research findings with absolute theoretical precision. Even a slightly flawed statistical methodology can instantly {{s3}} deep skepticism among the senior committee members. It is strictly vital not to {{s4}} any minor contradictory details found in the existing literature review. If the graduate student can successfully {{s5}} the intense Q&A session, their professional academic standing will significantly {{s6}} for the better.",
    contentZh:
      "博士論文口試",
    slots: [
      { id: "s1", pos: "adj", tags: ["evaluation"] },
      { id: "s2", pos: "v", tags: ["communication"] },
      { id: "s3", pos: "v", tags: ["cause_effect"] },
      { id: "s4", pos: "v", tags: ["cognitive", "reasoning"] },
      { id: "s5", pos: "v", tags: ["process"] },
      { id: "s6", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "hotel_ac_complaint_14",
    title: "客房冷氣故障客訴",
    titleZh: "客房冷氣故障客訴",
    level: ["highschool", "toeic"],
    domain: "travel",
    content:
      "The VIP guest felt incredibly {{s1}} because the air conditioning in his luxury suite was completely broken. He marched down to the lobby to {{s2}} his deep frustration directly to the front desk supervisor. The apologetic staff acknowledged it was a {{s3}} maintenance issue and politely promised a {{s4}} fix. They urgently had to {{s5}} with the night-shift maintenance crew to dispatch an engineer immediately. This highly prompt professional response helped to {{s6}} the rising tension and {{s7}} a peaceful final resolution.",
    contentZh:
      "客房冷氣故障客訴",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["communication"] },
      { id: "s3", pos: "adj", tags: ["evaluation"] },
      { id: "s4", pos: "adj", tags: ["time", "duration"] },
      { id: "s5", pos: "v", tags: ["social", "cooperation"] },
      { id: "s6", pos: "v", tags: ["state_change"] },
      { id: "s7", pos: "v", tags: ["cause_effect"] },
    ],
  },
  {
    id: "science_satellite_launch_15",
    title: "新型衛星發射任務",
    titleZh: "新型衛星發射任務",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "science",
    content:
      "The flawless launch of the revolutionary new communications satellite represents a {{s1}} achievement for the aerospace industry. Ground engineers had to {{s2}} thousands of complex aerodynamics simulations to perfectly avoid any mathematical miscalculations that could tragically {{s3}} a catastrophic mid-air failure. Many veteran scientists confidently {{s4}} that this exploratory mission will ultimately yield a {{s5}} amount of invaluable atmospheric data. As the multimillion-dollar spacecraft successfully enters Earth's orbit, global telecommunications capability is widely expected to {{s6}} exponentially.",
    contentZh:
      "新型衛星發射任務",
    slots: [
      { id: "s1", pos: "adj", tags: ["evaluation"] },
      { id: "s2", pos: "v", tags: ["process"] },
      { id: "s3", pos: "v", tags: ["cause_effect"] },
      { id: "s4", pos: "v", tags: ["cognitive", "reasoning"] },
      { id: "s5", pos: "adj", tags: ["quantity"] },
      { id: "s6", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "daily_subway_commute_16",
    title: "早晨擁擠的地鐵通勤",
    titleZh: "早晨擁擠的地鐵通勤",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "Taking the downtown subway during the morning rush hour is always deeply {{s1}}. Tired people aggressively {{s2}} the metal handrails just to keep their balance in the shaking train car. Today, there was a particularly {{s3}} delay due to unexpected track maintenance issues. The train conductor tried his best to {{s4}} the real reason over the speaker, but it was too hard to hear. Such annoying transit incidents often {{s5}} me to be late for work and totally {{s6}} my good morning mood.",
    contentZh:
      "早晨擁擠的地鐵通勤",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["physical", "action"] },
      { id: "s3", pos: "adj", tags: ["time", "duration"] },
      { id: "s4", pos: "v", tags: ["communication"] },
      { id: "s5", pos: "v", tags: ["cause_effect"] },
      { id: "s6", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "workplace_key_resignation_17",
    title: "核心骨幹離職危機",
    titleZh: "核心骨幹離職危機",
    level: ["highschool", "toeic"],
    domain: "workplace",
    content:
      "When Sarah officially announced her unexpected resignation, her close colleagues were visibly {{s1}}. She used a very heartfelt company-wide email to {{s2}} her permanent departure to the entire engineering department. Her sudden absence will undoubtedly leave a {{s3}} skill gap in the core software development team. Executive management must quickly {{s4}} a robust new hiring strategy so the ongoing project workflow doesn't severely {{s5}}. We all collectively {{s6}} that she was a deeply {{s7}} and irreplaceable asset to the growing company.",
    contentZh:
      "核心骨幹離職危機",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["communication"] },
      { id: "s3", pos: "adj", tags: ["quantity"] },
      { id: "s4", pos: "v", tags: ["process"] },
      { id: "s5", pos: "v", tags: ["state_change"] },
      { id: "s6", pos: "v", tags: ["cognitive", "reasoning"] },
      { id: "s7", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "travel_stormy_roadtrip_18",
    title: "暴雨中的公路旅行",
    titleZh: "暴雨中的公路旅行",
    level: ["highschool", "toeic"],
    domain: "travel",
    content:
      "Planning an ambitious cross-country road trip requires {{s1}} and meticulous preparation. We made sure to pack a {{s2}} amount of emergency snacks and bottled water in the trunk. During the afternoon drive, the clear weather began to {{s3}} rapidly, bringing unexpectedly heavy rain and strong winds. I nervously had to {{s4}} the steering wheel firmly to stay on the slick highway. It was extremely hard to {{s5}} over the loud thunder, but we thankfully managed to {{s6}} the detour route safely.",
    contentZh:
      "暴雨中的公路旅行",
    slots: [
      { id: "s1", pos: "adj", tags: ["evaluation"] },
      { id: "s2", pos: "adj", tags: ["quantity"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
      { id: "s4", pos: "v", tags: ["physical", "action"] },
      { id: "s5", pos: "v", tags: ["communication"] },
      { id: "s6", pos: "v", tags: ["process"] },
    ],
  },
  {
    id: "health_processed_foods_19",
    title: "加工食品與發炎反應",
    titleZh: "加工食品與發炎反應",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "daily",
    content:
      "Consuming a modern diet unnaturally high in ultra-processed foods can easily {{s1}} chronic systemic inflammation. Many average consumers wrongly {{s2}} that these packaged products are perfectly safe due to highly deceptive corporate marketing campaigns. Certified clinical nutritionists strongly {{s3}} the biological need for transitioning back to organic whole foods. To positively {{s4}} declining public health metrics, regulatory governments must decisively {{s5}} much stricter ingredient labeling laws. This legislative action is a {{s6}} step toward ensuring a {{s7}} reduction in metabolic diseases globally.",
    contentZh:
      "加工食品與發炎反應",
    slots: [
      { id: "s1", pos: "v", tags: ["cause_effect"] },
      { id: "s2", pos: "v", tags: ["cognitive", "reasoning"] },
      { id: "s3", pos: "v", tags: ["communication"] },
      { id: "s4", pos: "v", tags: ["state_change"] },
      { id: "s5", pos: "v", tags: ["process"] },
      { id: "s6", pos: "adj", tags: ["evaluation"] },
      { id: "s7", pos: "adj", tags: ["quantity"] },
    ],
  },
  {
    id: "shopping_online_color_mismatch_20",
    title: "網購色差退貨",
    titleZh: "網購色差退貨",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "I excitedly ordered a winter jacket online, but the frustrating delivery time was unfortunately quite {{s1}}. When the package finally arrived yesterday, the actual fabric color was very {{s2}} and looked absolutely nothing like what I expected. I naturally felt a bit {{s3}} about this annoying retail mistake. I immediately had to log in and {{s4}} an automated return request on their official website. I really hope the customer service team will {{s5}} with me soon to successfully {{s6}} my pending order status.",
    contentZh:
      "網購色差退貨",
    slots: [
      { id: "s1", pos: "adj", tags: ["time", "duration"] },
      { id: "s2", pos: "adj", tags: ["description"] },
      { id: "s3", pos: "adj", tags: ["emotion"] },
      { id: "s4", pos: "v", tags: ["process"] },
      { id: "s5", pos: "v", tags: ["communication"] },
      { id: "s6", pos: "v", tags: ["state_change"] },
    ],
  },
];
