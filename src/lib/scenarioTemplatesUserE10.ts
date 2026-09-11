import type { ScenarioTemplate } from './scenarioTemplates';

/** User scenarios E10 — batch of 20 templates */
export const USER_SCENARIO_TEMPLATES_E10: ScenarioTemplate[] = [
  {
    id: "travel_cultural_festival_12",
    title: "當地節慶體驗",
    titleZh: "當地節慶體驗",
    level: ["highschool", "toeic"],
    domain: "travel",
    content:
      "Attending regional festivals offers memorable cultural immersion. Locals will {{s1}} visitors about ancient ceremonial customs and music history. Participants are invited to {{s2}} during traditional street dance parades. These events generate {{s3}} excitement throughout the entire town.",
    contentZh:
      "當地節慶體驗",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["cooperation", "social"] },
      { id: "s3", pos: "adj", tags: ["intensity", "evaluation"] },
    ],
  },
  {
    id: "travel_hiking_excursion_13",
    title: "高山步道健行",
    titleZh: "高山步道健行",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "travel",
    content:
      "Hiking steep alpine trails requires physical conditioning and proper gear. Trail guides must {{s1}} signs of changing mountain weather early. Climbers are urged to {{s2}} health difficulties before ascent becomes perilous. Pack {{s3}} thermal wear to combat cold summit winds.",
    contentZh:
      "高山步道健行",
    slots: [
      { id: "s1", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s2", pos: "v", tags: ["communication"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "travel_souvenir_shopping_14",
    title: "紀念品集市巡禮",
    titleZh: "紀念品集市巡禮",
    level: ["elementary", "highschool"],
    domain: "travel",
    content:
      "Local markets offer handcrafted jewelry and traditional textiles. Shoppers like to {{s1}} discounts from friendly market vendors. Stall owners will gladly {{s2}} buyers about how products are crafted locally. It is an {{s3}} place to pick up unique gifts.",
    contentZh:
      "紀念品集市巡禮",
    slots: [
      { id: "s1", pos: "v", tags: ["request", "communication"] },
      { id: "s2", pos: "v", tags: ["inform", "communication"] },
      { id: "s3", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "travel_border_crossing_15",
    title: "邊境陸路通關",
    titleZh: "邊境陸路通關",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "travel",
    content:
      "Crossing land borders can involve complex administrative procedures. Officials will {{s1}} passport stamps and visa validity carefully. Drivers must {{s2}} border police regarding imported cargo or vehicle registration documents. Remaining patient ensures a {{s3}} transit experience across international boundaries.",
    contentZh:
      "邊境陸路通關",
    slots: [
      { id: "s1", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s2", pos: "v", tags: ["inform", "communication"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "hotel_check_in_01",
    title: "飯店登記入住",
    titleZh: "飯店登記入住",
    level: ["elementary", "highschool"],
    domain: "travel",
    content:
      "Welcome to our boutique hotel! The receptionist will {{s1}} guests about breakfast hours and gym access. If you need extra towels, you may {{s2}} them from housekeeping. Front desk clerks strive to provide a {{s3}} experience for every guest.",
    contentZh:
      "飯店登記入住",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["request", "communication"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "hotel_room_upgrade_02",
    title: "客房升等服務",
    titleZh: "客房升等服務",
    level: ["highschool", "toeic"],
    domain: "travel",
    content:
      "Loyalty program members often receive complimentary room upgrades. The front desk staff will {{s1}} eligible guests upon arrival. If an ocean-view suite is available, the agent will {{s2}} your reservation details immediately. We aim to ensure an {{s3}} stay during your visit.",
    contentZh:
      "客房升等服務",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["state_change"] },
      { id: "s3", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "hotel_noise_complaint_03",
    title: "房客噪音抱怨",
    titleZh: "房客噪音抱怨",
    level: ["highschool", "toeic"],
    domain: "travel",
    content:
      "Late-night disturbance can disrupt a peaceful stay. Guests who experience {{s1}} noise should contact security. Duty managers will {{s2}} disruptive guests about quiet hour guidelines. Staff work tirelessly to {{s3}} chaotic situations into restful environments.",
    contentZh:
      "房客噪音抱怨",
    slots: [
      { id: "s1", pos: "adj", tags: ["intensity", "evaluation"] },
      { id: "s2", pos: "v", tags: ["inform", "communication"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "hotel_concierge_service_04",
    title: "禮賓台景點推薦",
    titleZh: "禮賓台景點推薦",
    level: ["elementary", "highschool"],
    domain: "travel",
    content:
      "The concierge desk is open to help plan your daily sightseeing. Guests can {{s1}} restaurant recommendations or taxi reservations. Concierge staff will {{s2}} you about ticket pricing and opening hours. We hope you have an {{s3}} vacation in our city.",
    contentZh:
      "禮賓台景點推薦",
    slots: [
      { id: "s1", pos: "v", tags: ["request", "communication"] },
      { id: "s2", pos: "v", tags: ["inform", "communication"] },
      { id: "s3", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "hotel_facilities_maintenance_05",
    title: "飯店設施維修",
    titleZh: "飯店設施維修",
    level: ["highschool", "toeic"],
    domain: "travel",
    content:
      "Maintenance staff regularly inspect hotel amenities. Technicians must {{s1}} plumbing issues before rooms are assigned to guests. The manager will {{s2}} visitors if the swimming pool is undergoing maintenance. Providing {{s3}} service remains our top priority.",
    contentZh:
      "飯店設施維修",
    slots: [
      { id: "s1", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s2", pos: "v", tags: ["inform", "communication"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "hotel_extended_stay_06",
    title: "延後退房申請",
    titleZh: "延後退房申請",
    level: ["elementary", "highschool"],
    domain: "travel",
    content:
      "Guests who need extra time before departure can ask for late check-out. Please {{s1}} approval from the reception desk in advance. Staff will {{s2}} you if additional charges apply. We wish you a {{s3}} safe flight home.",
    contentZh:
      "延後退房申請",
    slots: [
      { id: "s1", pos: "v", tags: ["request", "communication"] },
      { id: "s2", pos: "v", tags: ["inform", "communication"] },
      { id: "s3", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "hotel_catering_event_07",
    title: "飯店宴會預約",
    titleZh: "飯店宴會預約",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "travel",
    content:
      "Organizing large conferences requires coordination with hotel event planners. Organizers should {{s1}} banquet managers regarding dietary preferences and seating layouts. Event staff will {{s2}} with technical teams to set up audiovisual equipment. Executing a {{s3}} banquet requires relentless attention to detail.",
    contentZh:
      "飯店宴會預約",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["cooperation", "social"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "hotel_room_service_08",
    title: "客房餐飲服務",
    titleZh: "客房餐飲服務",
    level: ["elementary", "highschool"],
    domain: "travel",
    content:
      "In-room dining offers convenience after a long travel day. Guests can {{s1}} late-night meals using the bedside phone terminal. Servers will {{s2}} you about estimated delivery timing. Enjoying a hot meal in bed provides an {{s3}} feeling.",
    contentZh:
      "客房餐飲服務",
    slots: [
      { id: "s1", pos: "v", tags: ["request", "communication"] },
      { id: "s2", pos: "v", tags: ["inform", "communication"] },
      { id: "s3", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "hotel_shuttle_booking_09",
    title: "接駁巴士預約",
    titleZh: "接駁巴士預約",
    level: ["elementary", "highschool"],
    domain: "travel",
    content:
      "Our hotel offers free shuttle service to nearby train stations. Passengers should {{s1}} drivers about their luggage count when boarding. It is {{s2}} to reserve your shuttle seat at least one hour in advance. Drivers operate on a {{s3}} daily schedule.",
    contentZh:
      "接駁巴士預約",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "adj", tags: ["importance", "evaluation"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "hotel_lost_and_found_10",
    title: "失物招領查詢",
    titleZh: "失物招領查詢",
    level: ["highschool", "toeic"],
    domain: "travel",
    content:
      "Leaving personal items behind during check-out happens occasionally. Housekeepers who {{s1}} forgotten belongings report them to security officers immediately. Security staff will {{s2}} guests via email or telephone. Recovering items brings great relief to {{s3}} owners.",
    contentZh:
      "失物招領查詢",
    slots: [
      { id: "s1", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s2", pos: "v", tags: ["inform", "communication"] },
      { id: "s3", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "daily_neighborhood_walk_02",
    title: "社區散步隨筆",
    titleZh: "社區散步隨筆",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "Taking short strolls through the neighborhood park provides refreshing breaks. Residents often {{s1}} blooming flowers along paved walking paths. Neighbors pause to {{s2}} each other about local news and events. These casual chats build an {{s3}} community atmosphere.",
    contentZh:
      "社區散步隨筆",
    slots: [
      { id: "s1", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s2", pos: "v", tags: ["inform", "communication"] },
      { id: "s3", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "daily_cooking_experiment_03",
    title: "居家下廚心得",
    titleZh: "居家下廚心得",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "Trying new recipes at home can turn into a fun weekend project. Home cooks must {{s1}} subtle changes in flavor while adding fresh spices. Following proper cooking techniques ensures {{s2}} outcomes every time. Cooking with family members helps {{s3}} mealtime into a joyful experience.",
    contentZh:
      "居家下廚心得",
    slots: [
      { id: "s1", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s2", pos: "adj", tags: ["quality", "evaluation"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "daily_library_visit_04",
    title: "圖書館借書日",
    titleZh: "圖書館借書日",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "Visiting the public library offers quiet study space and endless books. Visitors can {{s1}} assistance from librarians when locating rare titles. Librarians will {{s2}} readers about monthly book club meetings. Maintaining quiet study areas is {{s3}} for all patrons.",
    contentZh:
      "圖書館借書日",
    slots: [
      { id: "s1", pos: "v", tags: ["request", "communication"] },
      { id: "s2", pos: "v", tags: ["inform", "communication"] },
      { id: "s3", pos: "adj", tags: ["importance", "evaluation"] },
    ],
  },
  {
    id: "daily_recycling_routine_05",
    title: "垃圾分類做環保",
    titleZh: "垃圾分類做環保",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "Sorting household waste plays an essential role in environmental protection. Residents should {{s1}} recycling symbols printed on plastic containers. City guidelines {{s2}} citizens about proper collection schedules. This simple habit helps {{s3}} significant reduction in overall city waste.",
    contentZh:
      "垃圾分類做環保",
    slots: [
      { id: "s1", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s2", pos: "v", tags: ["inform", "communication"] },
      { id: "s3", pos: "v", tags: ["cause_effect"] },
    ],
  },
  {
    id: "daily_fitness_goal_06",
    title: "個人運動計畫",
    titleZh: "個人運動計畫",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "Setting realistic exercise routines supports long-term physical wellness. Fitness trainers usually {{s1}} clients about proper workout postures to prevent injury. Members should {{s2}} physical tiredness and rest when necessary. Consistent effort leads to {{s3}} improvements in physical strength.",
    contentZh:
      "個人運動計畫",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "daily_pet_care_07",
    title: "寵物照顧日常",
    titleZh: "寵物照顧日常",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "Caring for a dog requires daily walks and regular affection. Owners must {{s1}} behavioral changes that might signal health problems. Veterinarians will {{s2}} pet parents about vaccination schedules. Owning a happy pet brings {{s3}} joy to the whole family.",
    contentZh:
      "寵物照顧日常",
    slots: [
      { id: "s1", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s2", pos: "v", tags: ["inform", "communication"] },
      { id: "s3", pos: "adj", tags: ["emotion"] },
    ],
  },
];
