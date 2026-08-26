import type { ScenarioTemplate } from './scenarioTemplates';

/** User scenarios E9 — batch of 20 templates */
export const USER_SCENARIO_TEMPLATES_E9: ScenarioTemplate[] = [
  {
    id: "workplace_vendor_negotiation_11",
    title: "廠商合約談判",
    titleZh: "廠商合約談判",
    level: ["highschool", "toeic"],
    domain: "workplace",
    content:
      "Negotiating terms with external suppliers demands skill and patience. Buyers should {{s1}} competitive quotes from multiple prospective partners. During discussions, representative agents must {{s2}} clear specifications regarding delivery dates. Establishing a {{s3}} partnership ensures long-term operational stability. Both parties must {{s4}} to resolve contract discrepancies.",
    contentZh:
      "廠商合約談判",
    slots: [
      { id: "s1", pos: "v", tags: ["request", "communication"] },
      { id: "s2", pos: "v", tags: ["communication"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
      { id: "s4", pos: "v", tags: ["cooperation", "social"] },
    ],
  },
  {
    id: "workplace_software_rollout_12",
    title: "系統升級公告",
    titleZh: "系統升級公告",
    level: ["elementary", "highschool"],
    domain: "workplace",
    content:
      "The IT department will upgrade our internal database tonight. Engineers will {{s1}} users if system access becomes temporarily restricted. Please {{s2}} any unexpected error messages after logging in tomorrow. We expect a {{s3}} downtime during midnight hours. Your patience helps us deliver a {{s4}} platform experience.",
    contentZh:
      "系統升級公告",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s3", pos: "adj", tags: ["duration", "time"] },
      { id: "s4", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "workplace_onboarding_process_13",
    title: "新進員工報到",
    titleZh: "新進員工報到",
    level: ["highschool", "toeic"],
    domain: "workplace",
    content:
      "Welcome aboard! HR coordinators will {{s1}} new hires regarding company security policies and benefits. Mentors are assigned to {{s2}} with newcomers during their initial projects. It is {{s3}} to submit tax forms before your first payroll cycle. We hope you experience an {{s4}} start in your new role.",
    contentZh:
      "新進員工報到",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["cooperation", "social"] },
      { id: "s3", pos: "adj", tags: ["importance", "evaluation"] },
      { id: "s4", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "workplace_quarterly_report_14",
    title: "季度財報總結",
    titleZh: "季度財報總結",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "workplace",
    content:
      "The quarterly business summary highlighted robust expansion across key markets. Analysts attempted to {{s1}} the driving factors behind increased client retention. Directors intend to {{s2}} key investors during the earnings call next Tuesday. Achieving {{s3}} revenue growth requires constant adaptation. In the {{s4}} quarter, marketing budgets will double.",
    contentZh:
      "季度財報總結",
    slots: [
      { id: "s1", pos: "v", tags: ["reasoning", "cognitive"] },
      { id: "s2", pos: "v", tags: ["inform", "communication"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
      { id: "s4", pos: "adj", tags: ["sequence", "time"] },
    ],
  },
  {
    id: "workplace_team_building_15",
    title: "團隊凝聚活動",
    titleZh: "團隊凝聚活動",
    level: ["elementary", "highschool"],
    domain: "workplace",
    content:
      "Our department will host an outdoor team outing this Friday. Everyone is encouraged to {{s1}} in group games and physical activities. The goal is to build an {{s2}} workplace spirit and stronger interpersonal bonds. Managers will {{s3}} the team about transportation details tomorrow morning.",
    contentZh:
      "團隊凝聚活動",
    slots: [
      { id: "s1", pos: "v", tags: ["cooperation", "social"] },
      { id: "s2", pos: "adj", tags: ["emotion"] },
      { id: "s3", pos: "v", tags: ["inform", "communication"] },
    ],
  },
  {
    id: "workplace_policy_change_16",
    title: "管理規範異動",
    titleZh: "管理規範異動",
    level: ["highschool", "toeic"],
    domain: "workplace",
    content:
      "Management recently updated the company dress code policy. Leadership chose to {{s1}} staff via an email broadcast yesterday. Some team members might {{s2}} clarification regarding business casual guidelines. It is {{s3}} to maintain professionalism during client interactions despite relaxed guidelines.",
    contentZh:
      "管理規範異動",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["request", "communication"] },
      { id: "s3", pos: "adj", tags: ["importance", "evaluation"] },
    ],
  },
  {
    id: "workplace_recruitment_drive_17",
    title: "招募計畫啟動",
    titleZh: "招募計畫啟動",
    level: ["highschool", "toeic"],
    domain: "workplace",
    content:
      "Our organization is expanding into European markets this spring. Recruiters will {{s1}} candidates about open positions through professional networking sites. HR aims to {{s2}} top talent with relevant international expertise. Candidates who demonstrate {{s3}} communication skills will move to final interviews.",
    contentZh:
      "招募計畫啟動",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "workplace_safety_audit_18",
    title: "工安檢查作業",
    titleZh: "工安檢查作業",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "workplace",
    content:
      "Safety inspectors toured the main manufacturing plant yesterday. They were quick to {{s1}} minor compliance errors near emergency exits. Supervisors must {{s2}} factory staff about revised protocol procedures. Addressing these safety issues is {{s3}} to prevent operational hazards. The factory aims to maintain an {{s4}} safety record.",
    contentZh:
      "工安檢查作業",
    slots: [
      { id: "s1", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s2", pos: "v", tags: ["inform", "communication"] },
      { id: "s3", pos: "adj", tags: ["importance", "evaluation"] },
      { id: "s4", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "workplace_product_launch_19",
    title: "新產品發布會",
    titleZh: "新產品發布會",
    level: ["highschool", "toeic"],
    domain: "workplace",
    content:
      "Our flagship software update launches globally next week. Marketing teams will {{s1}} press outlets through a joint press release. We hope to {{s2}} how users interact with digital workspace tools. Providing a {{s3}} user interface is our primary design objective.",
    contentZh:
      "新產品發布會",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["state_change"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "workplace_office_supplies_20",
    title: "辦公用品採購",
    titleZh: "辦公用品採購",
    level: ["elementary", "highschool"],
    domain: "workplace",
    content:
      "Please inspect your desk supplies before submitting monthly orders. Employees can {{s1}} new stationery through the internal portal. Administrative staff will {{s2}} everyone when orders arrive. Keeping organized workspaces helps build a {{s3}} atmosphere.",
    contentZh:
      "辦公用品採購",
    slots: [
      { id: "s1", pos: "v", tags: ["request", "communication"] },
      { id: "s2", pos: "v", tags: ["inform", "communication"] },
      { id: "s3", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "travel_flight_cancellation_01",
    title: "班機延誤通知",
    titleZh: "班機延誤通知",
    level: ["highschool", "toeic"],
    domain: "travel",
    content:
      "Severe weather conditions forced the airline to cancel several flights. Airport staff attempted to {{s1}} stranded passengers about rebooking options. Travelers expressed {{s2}} frustration as waiting lines grew long. Representatives worked hard to {{s3}} available hotel accommodations. Passengers were advised to {{s4}} departure screens for updated flight information.",
    contentZh:
      "班機延誤通知",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "adj", tags: ["intensity", "evaluation"] },
      { id: "s3", pos: "v", tags: ["communication"] },
      { id: "s4", pos: "v", tags: ["perception", "cognitive"] },
    ],
  },
  {
    id: "travel_guided_tour_02",
    title: "城市導覽行程",
    titleZh: "城市導覽行程",
    level: ["elementary", "highschool"],
    domain: "travel",
    content:
      "Our tour guide will {{s1}} visitors about historical landmarks along the walk. During the {{s2}} excursion, tourists will see ancient architecture. Guides will help you {{s3}} unique details on historic building facades. It is an {{s4}} opportunity to learn about local traditions first-hand.",
    contentZh:
      "城市導覽行程",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "adj", tags: ["duration", "time"] },
      { id: "s3", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s4", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "travel_lost_luggage_03",
    title: "行李遺失處理",
    titleZh: "行李遺失處理",
    level: ["highschool", "toeic"],
    domain: "travel",
    content:
      "Upon arriving at baggage claim, the traveler could not locate his suitcase. He went to the desk to {{s1}} officers about his missing property. Officers asked him to {{s1}} details about baggage tags and distinct luggage features. The clerk promised to {{s2}} with overseas transit hubs to locate the bag.",
    contentZh:
      "行李遺失處理",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["cooperation", "social"] },
    ],
  },
  {
    id: "travel_passport_renewal_05",
    title: "護照換發申請",
    titleZh: "護照換發申請",
    level: ["highschool", "toeic"],
    domain: "travel",
    content:
      "Before booking international travel, check your passport expiration date. You must {{s1}} an official renewal form from the embassy website. Applicants should {{s2}} officials about any recent changes in personal data. It is {{s3}} to submit biometric photos that meet standard requirements.",
    contentZh:
      "護照換發申請",
    slots: [
      { id: "s1", pos: "v", tags: ["request", "communication"] },
      { id: "s2", pos: "v", tags: ["inform", "communication"] },
      { id: "s3", pos: "adj", tags: ["importance", "evaluation"] },
    ],
  },
  {
    id: "travel_car_rental_06",
    title: "租車自駕服務",
    titleZh: "租車自駕服務",
    level: ["highschool", "toeic"],
    domain: "travel",
    content:
      "Renting a car offers freedom when exploring rural coastlines. Before driving off, motorists must {{s1}} any existing scratches on the vehicle body. Rental agents will {{s2}} drivers about regional insurance coverage options. Drivers should {{s3}} emergency contacts if breakdown assistance becomes necessary.",
    contentZh:
      "租車自駕服務",
    slots: [
      { id: "s1", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s2", pos: "v", tags: ["inform", "communication"] },
      { id: "s3", pos: "v", tags: ["communication"] },
    ],
  },
  {
    id: "travel_train_adventure_07",
    title: "橫貫鐵路之旅",
    titleZh: "橫貫鐵路之旅",
    level: ["highschool", "toeic"],
    domain: "travel",
    content:
      "Taking a scenic train ride through mountain ranges provides breathtaking views. Attendants will {{s1}} passengers before reaching iconic viewpoints. Passengers often {{s2}} rare wildlife near alpine forests during the trip. The journey offers a {{s3}} break from busy urban routines.",
    contentZh:
      "橫貫鐵路之旅",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s3", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "travel_backpacking_tips_08",
    title: "背包客生存指南",
    titleZh: "背包客生存指南",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "travel",
    content:
      "Solo travel demands alertness and flexible decision-making. Backpackers should {{s1}} route options carefully when arriving in unfamiliar cities late at night. It is wise to {{s2}} trusted friends about your detailed daily itinerary. Carrying {{s3}} gear ensures safety under unpredictable outdoor weather conditions.",
    contentZh:
      "背包客生存指南",
    slots: [
      { id: "s1", pos: "v", tags: ["reasoning", "cognitive"] },
      { id: "s2", pos: "v", tags: ["inform", "communication"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "travel_currency_exchange_09",
    title: "外幣兌換諮詢",
    titleZh: "外幣兌換諮詢",
    level: ["elementary", "highschool"],
    domain: "travel",
    content:
      "Exchanging money at airport booths can incur higher service fees. Travelers can {{s1}} updated exchange rates at city banks instead. Tellers will {{s2}} customers about dynamic currency options. It is {{s3}} to count cash received before leaving the counter.",
    contentZh:
      "外幣兌換諮詢",
    slots: [
      { id: "s1", pos: "v", tags: ["request", "communication"] },
      { id: "s2", pos: "v", tags: ["inform", "communication"] },
      { id: "s3", pos: "adj", tags: ["importance", "evaluation"] },
    ],
  },
  {
    id: "travel_cruise_expedition_10",
    title: "豪華郵輪航行",
    titleZh: "豪華郵輪航行",
    level: ["highschool", "toeic"],
    domain: "travel",
    content:
      "Cruising down tropical archipelagos combines leisure with adventure. The ship captain will {{s1}} guests regarding weather updates and port arrivals. Crew members {{s2}} seamlessly to provide exceptional hospitality onboard. Passengers enjoy {{s3}} dining choices and entertainment daily.",
    contentZh:
      "豪華郵輪航行",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["cooperation", "social"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "travel_island_hopping_11",
    title: "跳島渡輪指南",
    titleZh: "跳島渡輪指南",
    level: ["elementary", "highschool"],
    domain: "travel",
    content:
      "Ferry services connect coastal villages across the island chain. Ticket agents will {{s1}} passengers of departure gates and safety guidelines. Tourists can {{s2}} dolphin pods swimming alongside boats. Pack light gear for a {{s3}} journey across sunny waters.",
    contentZh:
      "跳島渡輪指南",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s3", pos: "adj", tags: ["emotion"] },
    ],
  },
];
