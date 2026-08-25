import type { ScenarioTemplate } from './scenarioTemplates';

/** User scenarios C1 (10 templates) */
export const USER_SCENARIO_TEMPLATES_C1: ScenarioTemplate[] = [
  {
    id: "workplace_customer_complaint",
    title: "Workplace Customer Complaint",
    titleZh: "處理客訴",
    level: ["toefl_ielts", "advanced"],
    domain: "workplace",
    content:
      "A customer wrote to the company after receiving a product that did not match the online description. The support agent first apologized and asked the customer to {{s1}} the main issue in detail. After reviewing the order history, the agent discovered that an incorrect product image had been uploaded several weeks earlier. The error could {{s2}} confusion for many customers if it remained online. The company immediately corrected the page and offered a replacement. Although the original complaint was serious, the transparent response helped {{s3}} the customer's confidence in the business.",
    contentZh:
      "處理客訴",
    slots: [
      { id: "s1", pos: "v", tags: ["communication"] },
      { id: "s2", pos: "v", tags: ["cause_effect"] },
      { id: "s3", pos: "v", tags: ["social"] },
    ],
  },
  {
    id: "travel_train_missed",
    title: "Travel Train Missed",
    titleZh: "錯過火車",
    level: ["elementary", "highschool"],
    domain: "travel",
    content:
      "Leo arrived at the station ten minutes before his train, but he stopped to buy a snack and did not notice the platform announcement. When he looked at the departure screen, he realized he had missed the train. He felt {{s1}}, but he tried not to panic. A station employee helped him {{s2}} the large map and find another route. The next train was only thirty minutes later, so Leo had to wait instead of changing his entire plan. The inconvenience was {{s3}}, but he arrived at his destination the same afternoon and decided to check announcements more carefully next time.",
    contentZh:
      "錯過火車",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["physical"] },
      { id: "s3", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "travel_airport_security",
    title: "Travel Airport Security",
    titleZh: "機場安檢",
    level: ["elementary", "highschool"],
    domain: "travel",
    content:
      "At the airport, Maya reached the security line and noticed that it was much longer than expected. She began to feel {{s1}} because her boarding time was getting closer. The staff reminded passengers to remove laptops and liquids before reaching the checkpoint. Maya followed the instructions and managed to {{s2}} through the line quickly. Fortunately, the security process did not {{s3}} into a major delay. After reaching the gate, she checked her ticket again and realized she still had plenty of time before boarding. She bought a bottle of water and waited calmly near the window.",
    contentZh:
      "機場安檢",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["process"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "travel_mountain_hike",
    title: "Travel Mountain Hike",
    titleZh: "山區健行",
    level: ["highschool", "toeic"],
    domain: "travel",
    content:
      "During a weekend trip, Aaron joined his friends for a mountain hike. The trail was wet after heavy rain, and some sections were difficult to walk across. Aaron used a map app to {{s1}} the route and stayed close to the group. After two hours, the hikers reached a viewpoint with a {{s2}} landscape of green hills and distant villages. The climb had been tiring, but their fatigue began to {{s3}} after they rested and drank water. They continued slowly and reached the trailhead before sunset, proud that they had completed the hike safely.",
    contentZh:
      "山區健行",
    slots: [
      { id: "s1", pos: "v", tags: ["physical"] },
      { id: "s2", pos: "adj", tags: ["description"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "travel_family_trip",
    title: "Travel Family Trip",
    titleZh: "家庭旅行",
    level: ["elementary", "highschool"],
    domain: "travel",
    content:
      "Last summer, Grace traveled to another city with her family. They planned to visit several museums, but heavy rain changed their schedule. At first, Grace felt {{s1}} because she had been excited about walking around the old town. Her parents suggested visiting a science center instead. Inside, they found an {{s2}} exhibition about space and robotics. The family spent several hours there and learned things they had never discussed before. When the rain finally began to {{s3}}, they went outside for dinner. Grace later realized that the unexpected change had made the trip more interesting.",
    contentZh:
      "家庭旅行",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "adj", tags: ["evaluation"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "travel_language_barrier",
    title: "Travel Language Barrier",
    titleZh: "語言障礙",
    level: ["highschool", "toeic"],
    domain: "travel",
    content:
      "When Olivia visited a small town abroad, she discovered that few people spoke English. At a bakery, she tried to {{s1}} what she wanted, but the cashier did not understand. Olivia used a photo on her phone and pointed to the bread she liked. The cashier smiled and nodded. This simple method helped {{s2}} a friendly connection even without shared language. Later, Olivia learned a few useful local phrases from a shop owner. She realized that travelers do not always need perfect language skills; patience, gestures, and a willingness to communicate can often solve everyday problems.",
    contentZh:
      "語言障礙",
    slots: [
      { id: "s1", pos: "v", tags: ["communication"] },
      { id: "s2", pos: "v", tags: ["social"] },
    ],
  },
  {
    id: "travel_luggage_missing",
    title: "Travel Luggage Missing",
    titleZh: "行李遺失",
    level: ["highschool", "toeic"],
    domain: "travel",
    content:
      "After landing, Ben waited beside the luggage carousel, but his suitcase never appeared. He felt increasingly {{s1}} as the airport became less crowded. He reported the missing bag and showed the staff his baggage receipt. The agent asked him to {{s2}} the suitcase's appearance and listed the items inside. The information was {{s3}} because several bags looked almost identical. The airline promised to contact Ben as soon as the luggage was located. Two days later, the suitcase finally arrived at his hotel, and Ben's stress immediately began to {{s4}}.",
    contentZh:
      "行李遺失",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["communication"] },
      { id: "s3", pos: "adj", tags: ["evaluation"] },
      { id: "s4", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "science_weather_study",
    title: "Science Weather Study",
    titleZh: "天氣研究",
    level: ["toefl_ielts", "advanced"],
    domain: "science",
    content:
      "A team of climate scientists recently completed a study of rainfall patterns in several coastal regions. They collected data for more than ten years and compared rainfall with temperature and wind conditions. The researchers found that changes in ocean temperature could {{s1}} shifts in seasonal rainfall. To improve the reliability of their conclusions, they used several independent data sources. The final report presented a {{s2}} pattern of how weather conditions interacted over time. Although the results were complex, the researchers said the findings could help cities {{s3}} better flood-prevention plans in the future.",
    contentZh:
      "天氣研究",
    slots: [
      { id: "s1", pos: "v", tags: ["cause_effect"] },
      { id: "s2", pos: "adj", tags: ["description"] },
      { id: "s3", pos: "v", tags: ["process"] },
    ],
  },
  {
    id: "science_robot_lab",
    title: "Science Robot Lab",
    titleZh: "機器人實驗",
    level: ["highschool", "toeic"],
    domain: "science",
    content:
      "In a university laboratory, students were testing a small robot designed to move across uneven floors. During the first trial, the machine suddenly stopped because one of its sensors failed. The team felt {{s1}}, but they reviewed the test carefully instead of starting over immediately. They discovered that dust had blocked the sensor and cleaned it before trying again. After the repair, the robot's performance began to {{s2}}. The students recorded each result in a shared notebook and discussed how the experiment could be improved. Their teacher said that learning from failures was an {{s3}} part of scientific research.",
    contentZh:
      "機器人實驗",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["state_change"] },
      { id: "s3", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "science_water_filter",
    title: "Science Water Filter",
    titleZh: "淨水實驗",
    level: ["highschool", "toeic"],
    domain: "science",
    content:
      "A group of students built a simple water filter using sand, gravel, and charcoal. Before testing it, they predicted that the filter would remove most visible particles from dirty water. The first result was disappointing because the water was still cloudy. Instead of giving up, they decided to {{s1}} the design by changing the order of the materials. After several trials, the water became much clearer. The students were {{s2}} when they compared the final result with the first one. Their teacher explained that the experiment showed how small changes in a process can produce a {{s3}} difference.",
    contentZh:
      "淨水實驗",
    slots: [
      { id: "s1", pos: "v", tags: ["process"] },
      { id: "s2", pos: "adj", tags: ["emotion"] },
      { id: "s3", pos: "adj", tags: ["evaluation"] },
    ],
  }
];
