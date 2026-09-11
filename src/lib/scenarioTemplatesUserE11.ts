import type { ScenarioTemplate } from './scenarioTemplates';

/** User scenarios E11 — batch of 20 templates */
export const USER_SCENARIO_TEMPLATES_E11: ScenarioTemplate[] = [
  {
    id: "daily_public_transport_09",
    title: "城市搭車通勤",
    titleZh: "城市搭車通勤",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "Commuting by subway during peak hours can be quite busy. Digital signs {{s1}} passengers regarding train arrival times and delay notices. Riders should {{s2}} empty seats when boarding crowded cars. Maintaining courtesy ensures a {{s3}} ride for everyone.",
    contentZh:
      "城市搭車通勤",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "daily_home_repair_10",
    title: "居家修繕維護",
    titleZh: "居家修繕維護",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "Fixing leaking faucets around the house prevents water waste. Homeowners should {{s1}} water marks near bathroom sinks early. You can {{s2}} help from plumbers if repairs exceed basic DIY skills. Maintaining home fixtures guarantees long-term {{s3}} living.",
    contentZh:
      "居家修繕維護",
    slots: [
      { id: "s1", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s2", pos: "v", tags: ["request", "communication"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "daily_digital_detox_11",
    title: "數位減毒生活",
    titleZh: "數位減毒生活",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "daily",
    content:
      "Reducing screen time improves mental focus and sleep quality. Experts recommend taking a {{s1}} break from smartphones every evening. Individuals should {{s2}} how social media usage impacts their daily emotional health. Disconnecting helps {{s3}} stress into mental tranquility.",
    contentZh:
      "數位減毒生活",
    slots: [
      { id: "s1", pos: "adj", tags: ["duration", "time"] },
      { id: "s2", pos: "v", tags: ["reasoning", "cognitive"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "daily_budgeting_habits_12",
    title: "家庭記帳理財",
    titleZh: "家庭記帳理財",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "Tracking personal expenditures helps families save money effectively. Budgeting apps {{s1}} users when monthly spending limits are reached. Financial advisors suggest you {{s2}} unnecessary expenses carefully. Achieving financial stability brings an {{s3}} sense of security.",
    contentZh:
      "家庭記帳理財",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["reasoning", "cognitive"] },
      { id: "s3", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "daily_volunteer_work_13",
    title: "志工服務體驗",
    titleZh: "志工服務體驗",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "Volunteering at local food banks helps support vulnerable families. Coordinators will {{s1}} volunteers regarding safety guidelines and packaging rules. Volunteers must {{s2}} efficiently to package meals before noon. Assisting neighbors creates an {{s3}} atmosphere across the district.",
    contentZh:
      "志工服務體驗",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["cooperation", "social"] },
      { id: "s3", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "daily_weekend_getaway_14",
    title: "週末郊外踏青",
    titleZh: "週末郊外踏青",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "Planning a weekend day trip offers a nice break from urban routines. Friends will {{s1}} each other about meetup locations and schedule times. Everyone hopes to {{s2}} clear mountain vistas during the drive. Spending time outdoors brings {{s3}} joy.",
    contentZh:
      "週末郊外踏青",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s3", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "daily_study_group_15",
    title: "自主讀書會",
    titleZh: "自主讀書會",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "Joining a study group motivates students to prepare for final exams. Members {{s1}} by sharing comprehensive notes and practice questions. Together they {{s2}} difficult textbook problems. Group learning leads to {{s3}} outcomes in academic test scores.",
    contentZh:
      "自主讀書會",
    slots: [
      { id: "s1", pos: "v", tags: ["cooperation", "social"] },
      { id: "s2", pos: "v", tags: ["reasoning", "cognitive"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "shopping_return_policy_01",
    title: "商品退換貨處理",
    titleZh: "商品退換貨處理",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "Customer service counters assist shoppers with returns and exchanges. Buyers must {{s1}} cashiers about defective merchandise within fourteen days. Customers can {{s2}} full refunds if original purchase receipts are provided. Maintaining a {{s3}} refund policy builds customer trust.",
    contentZh:
      "商品退換貨處理",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["request", "communication"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "shopping_black_friday_02",
    title: "購物節折扣戰",
    titleZh: "購物節折扣戰",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "Major holiday sales attract millions of eager shoppers worldwide. Stores will {{s1}} customers about limited-time discount vouchers via mobile apps. Shoppers often experience {{s2}} excitement when doorbuster deals open. It is {{s3}} to compare prices before making impulsive purchases.",
    contentZh:
      "購物節折扣戰",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "adj", tags: ["intensity", "evaluation"] },
      { id: "s3", pos: "adj", tags: ["importance", "evaluation"] },
    ],
  },
  {
    id: "shopping_grocery_list_03",
    title: "超市採買日常",
    titleZh: "超市採買日常",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "Supermarket visits require organized grocery shopping lists. Shoppers try to {{s1}} fresh produce discounts near the store entrance. Clerks will {{s2}} buyers about organic vegetable origins. Finding quality groceries brings an {{s3}} feeling.",
    contentZh:
      "超市採買日常",
    slots: [
      { id: "s1", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s2", pos: "v", tags: ["inform", "communication"] },
      { id: "s3", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "shopping_online_delivery_04",
    title: "網購包裹配送",
    titleZh: "網購包裹配送",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "E-commerce platforms offer convenient home delivery options. Delivery drivers will {{s1}} customers via text message prior to package arrival. Recipients should {{s2}} external box damage before signing receipt documents. Reliable delivery ensures {{s3}} customer satisfaction.",
    contentZh:
      "網購包裹配送",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "shopping_clothing_fit_05",
    title: "服飾試穿挑選",
    titleZh: "服飾試穿挑選",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "Trying on clothes helps ensure proper sizing before purchasing. Customers can {{s1}} alternative sizes from attentive fitting room staff. Sales associates will {{s2}} shoppers about seasonal clothing discounts. Wearing comfortable attire brings an {{s3}} mood.",
    contentZh:
      "服飾試穿挑選",
    slots: [
      { id: "s1", pos: "v", tags: ["request", "communication"] },
      { id: "s2", pos: "v", tags: ["inform", "communication"] },
      { id: "s3", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "shopping_electronics_warranty_06",
    title: "家電保固說明",
    titleZh: "家電保固說明",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "Buying electronic appliances often involves extended warranty options. Sales representatives will {{s1}} buyers regarding technical repair coverage. Customers can {{s2}} replacement units if appliances malfunction within guarantee periods. It is {{s3}} to store warranty receipts safely.",
    contentZh:
      "家電保固說明",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["request", "communication"] },
      { id: "s3", pos: "adj", tags: ["importance", "evaluation"] },
    ],
  },
  {
    id: "shopping_luxury_boutique_07",
    title: "精品專櫃服務",
    titleZh: "精品專櫃服務",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "daily",
    content:
      "Luxury boutiques emphasize personalized customer service and exclusive products. Sales specialists {{s1}} VIP clients about limited collection arrivals. Staff aim to {{s2}} unique style preferences for tailored recommendations. Providing {{s3}} craftsmanship justifies high luxury prices.",
    contentZh:
      "精品專櫃服務",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "shopping_secondhand_market_08",
    title: "二手市集尋寶",
    titleZh: "二手市集尋寶",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "Flea markets offer vintage collectibles and pre-owned clothing. Bargain hunters like to {{s1}} hidden gems hidden in display stalls. Buyers often {{s2}} lower prices during afternoon trading hours. Finding unique items creates an {{s3}} shopping trip.",
    contentZh:
      "二手市集尋寶",
    slots: [
      { id: "s1", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s2", pos: "v", tags: ["request", "communication"] },
      { id: "s3", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "shopping_counterfeit_awareness_09",
    title: "辨識真偽假貨",
    titleZh: "辨識真偽假貨",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "daily",
    content:
      "Counterfeit goods pose risks to consumers and brand reputations. Experts warn buyers to {{s1}} subtle flaws in stitching and fake logos. Official dealers will {{s2}} buyers on verifying authentic security serial numbers. Consumer watchdogs attempt to {{s3}} market regulations to stop illegal sales.",
    contentZh:
      "辨識真偽假貨",
    slots: [
      { id: "s1", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s2", pos: "v", tags: ["inform", "communication"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "shopping_loyalty_points_10",
    title: "會員積點兌換",
    titleZh: "會員積點兌換",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "Earning store reward points saves money on future purchases. Cashiers will {{s1}} shoppers about point balances during checkout. Members can {{s2}} gift vouchers using accumulated reward points. It is a {{s3}} way to maximize savings.",
    contentZh:
      "會員積點兌換",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["request", "communication"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "health_doctor_appointment_01",
    title: "門診就醫預約",
    titleZh: "門診就醫預約",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "Visiting a medical clinic begins with accurate health assessment. Patients must {{s1}} doctors about ongoing symptoms and past medical history. Physicians will {{s2}} potential causes behind localized discomfort. It is {{s3}} to follow prescribed medication dosage schedules carefully.",
    contentZh:
      "門診就醫預約",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["reasoning", "cognitive"] },
      { id: "s3", pos: "adj", tags: ["importance", "evaluation"] },
    ],
  },
  {
    id: "health_physical_checkup_02",
    title: "年度健康檢查",
    titleZh: "年度健康檢查",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "Annual health examinations help detect medical conditions early. Lab technicians will {{s1}} subtle blood test anomalies during analysis. Physicians will then {{s2}} patients about lifestyle modification choices. Maintaining {{s3}} sleep and balanced nutrition prevents chronic disease.",
    contentZh:
      "年度健康檢查",
    slots: [
      { id: "s1", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s2", pos: "v", tags: ["inform", "communication"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "health_emergency_room_03",
    title: "急診室救治",
    titleZh: "急診室救治",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "daily",
    content:
      "Emergency departments treat patients with acute medical conditions. Triage nurses must {{s1}} critical signs immediately upon patient arrival. Doctors face {{s2}} pressure while evaluating life-threatening symptoms. Medical teams {{s3}} under stress to stabilize critical conditions swiftly.",
    contentZh:
      "急診室救治",
    slots: [
      { id: "s1", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s2", pos: "adj", tags: ["intensity", "evaluation"] },
      { id: "s3", pos: "v", tags: ["cooperation", "social"] },
    ],
  },
];
