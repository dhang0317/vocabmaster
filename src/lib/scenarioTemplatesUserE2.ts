import type { ScenarioTemplate } from './scenarioTemplates';

/** User scenarios E2 — batch of 20 templates */
export const USER_SCENARIO_TEMPLATES_E2: ScenarioTemplate[] = [
  {
    id: "travel_rental_car_05",
    title: "國外租車服務",
    titleZh: "國外租車服務",
    level: ["highschool", "toeic"],
    domain: "travel",
    content:
      "Renting a vehicle abroad provides flexibility for tourists exploring rural scenic regions. Desk agents will {{s1}} drivers about speed limits and insurance coverage options. Renters are encouraged to {{s2}} existing car scratches before leaving the rental lot. Drivers must {{s3}} with traffic regulations to prevent unnecessary fines. Reliable vehicles contribute to an {{s4}} road trip journey across mountains.",
    contentZh:
      "國外租車服務",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s3", pos: "v", tags: ["cooperation", "social"] },
      { id: "s4", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "travel_train_delay_06",
    title: "火車延誤應對",
    titleZh: "火車延誤應對",
    level: ["highschool", "toeic"],
    domain: "travel",
    content:
      "Severe weather conditions occasionally cause unexpected train delays at major stations. Station announcements {{s1}} commuters about updated departure schedules and platform adjustments. Station staff try to {{s2}} passenger frustration by offering free hot beverages. Travelers must {{s3}} alternative routes to reach scheduled destinations on time. Patience remains {{s4}} when navigating crowded transit hubs during severe storms.",
    contentZh:
      "火車延誤應對",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["state_change"] },
      { id: "s3", pos: "v", tags: ["cognitive", "reasoning"] },
      { id: "s4", pos: "adj", tags: ["importance", "evaluation"] },
    ],
  },
  {
    id: "travel_guided_tour_07",
    title: "導覽導覽解說",
    titleZh: "導覽導覽解說",
    level: ["highschool", "toeic"],
    domain: "travel",
    content:
      "Joining a guided historical tour helps tourists understand local culture and heritage. Tour guides will {{s1}} visitors about ancient monuments and historical events. Visitors love to {{s2}} intricate architectural details on historic building walls. Guides often {{s3}} group members to stay together in crowded urban zones. Informative tours leave a {{s4}} impression on passionate cultural travelers.",
    contentZh:
      "導覽導覽解說",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s3", pos: "v", tags: ["request", "communication"] },
      { id: "s4", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "travel_lost_luggage_08",
    title: "行李遺失處理",
    titleZh: "行李遺失處理",
    level: ["highschool", "toeic"],
    domain: "travel",
    content:
      "Losing baggage upon arrival can cause considerable stress for weary airline travelers. Passengers should {{s1}} baggage claim agents immediately to register missing items. Clerks will {{s2}} loss reports and trace suitcase tracking numbers online. Travelers must {{s3}} compensation forms for temporary personal supplies needed. Prompt service helps deliver a {{s4}} resolution to anxious international visitors.",
    contentZh:
      "行李遺失處理",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["process"] },
      { id: "s3", pos: "v", tags: ["request", "communication"] },
      { id: "s4", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "hotel_complaint_handling_02",
    title: "飯店客訴處理",
    titleZh: "飯店客訴處理",
    level: ["highschool", "toeic"],
    domain: "travel",
    content:
      "Addressing customer complaints promptly helps hotels maintain high satisfaction standards. Guests may {{s1}} desk clerks about noisy air conditioning units in rooms. Management will {{s2}} maintenance teams to fix technical issues immediately. Front desk staff work hard to {{s3}} guest dissatisfaction into positive impressions. Providing prompt service ensures an {{s4}} reputation among frequent business travel guests.",
    contentZh:
      "飯店客訴處理",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["request", "communication"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
      { id: "s4", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "hotel_facility_booking_03",
    title: "飯店設施預約",
    titleZh: "飯店設施預約",
    level: ["highschool", "toeic"],
    domain: "travel",
    content:
      "Reserving spa treatments or private dining rooms requires advanced scheduling at luxury hotels. Concierge staff will {{s1}} guests regarding available time slots and extra charges. Visitors must {{s2}} special arrangements in advance for dietary restrictions. Hotel workers aim to {{s3}} requests efficiently to enhance guest enjoyment. High operational standards guarantee a {{s4}} resort stay for visiting families.",
    contentZh:
      "飯店設施預約",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["request", "communication"] },
      { id: "s3", pos: "v", tags: ["process"] },
      { id: "s4", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "hotel_checkout_process_04",
    title: "飯店退房結帳",
    titleZh: "飯店退房結帳",
    level: ["highschool", "toeic"],
    domain: "travel",
    content:
      "Completing check-out procedures efficiently helps guests depart smoothly for their flights. Receptionists will {{s1}} room charges and present itemized bills clearly. Guests should {{s2}} listed expenses to ensure no erroneous charges were added. Staff members will {{s3}} visitors about luggage storage services if needed. Professional hospitality fosters a {{s4}} memory for departing tourists.",
    contentZh:
      "飯店退房結帳",
    slots: [
      { id: "s1", pos: "v", tags: ["process"] },
      { id: "s2", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s3", pos: "v", tags: ["inform", "communication"] },
      { id: "s4", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "hotel_buffet_breakfast_05",
    title: "飯店早餐自助餐",
    titleZh: "飯店早餐自助餐",
    level: ["highschool", "toeic"],
    domain: "travel",
    content:
      "Enjoying a lavish breakfast buffet is often a highlight of hotel stays. Dining staff continually {{s1}} fresh dishes to replenish empty food stations promptly. Waiters will {{s2}} guests about allergen details present in regional dishes. Patrons can {{s3}} a wide selection of international dishes made fresh. Maintaining clean dining areas is {{s4}} for overall guest dining comfort.",
    contentZh:
      "飯店早餐自助餐",
    slots: [
      { id: "s1", pos: "v", tags: ["process"] },
      { id: "s2", pos: "v", tags: ["inform", "communication"] },
      { id: "s3", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s4", pos: "adj", tags: ["importance", "evaluation"] },
    ],
  },
  {
    id: "hotel_vip_service_06",
    title: "貴賓專屬服務",
    titleZh: "貴賓專屬服務",
    level: ["highschool", "toeic"],
    domain: "travel",
    content:
      "Luxury hotels offer personalized executive lounge access to premium membership holders. Lounge attendants will {{s1}} guests about complimentary evening beverages and snacks. Managers aim to {{s2}} executive stays into unforgettable high-class experiences. Staff members quickly {{s3}} returning guests and address them by name. Delivering personal attention remains {{s4}} for VIP loyalty programs.",
    contentZh:
      "貴賓專屬服務",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["state_change"] },
      { id: "s3", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s4", pos: "adj", tags: ["importance", "evaluation"] },
    ],
  },
  {
    id: "daily_fitness_routine_04",
    title: "健身運動習慣",
    titleZh: "健身運動習慣",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "Maintaining a regular exercise routine promotes long-term physical health and wellness. Trainers usually {{s1}} gym members on safe weightlifting techniques and posture. Individuals who {{s2}} exercise habits daily often report lower stress levels. Regular workouts help to {{s3}} energy levels and boost overall stamina. Exercising consistently yields a {{s4}} transformation in overall physical fitness.",
    contentZh:
      "健身運動習慣",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["process"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
      { id: "s4", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "daily_community_cleaning_05",
    title: "社區環境清潔",
    titleZh: "社區環境清潔",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "Participating in neighborhood cleanup drives enhances civic pride among local residents. Organizers will {{s1}} volunteers about assigned tasks along public parkways. Residents agree to {{s2}} on clearing trash and planting community garden beds. Neighbors can {{s3}} visible improvements in street appearance within hours. Community efforts foster a {{s4}} environment that benefits all citizens.",
    contentZh:
      "社區環境清潔",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["cooperation", "social"] },
      { id: "s3", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s4", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "daily_apartment_repair_06",
    title: "公寓修繕處理",
    titleZh: "公寓修繕處理",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "Dealing with plumbing issues in apartment buildings requires prompt communication with landlords. Tenants should {{s1}} building managers as soon as pipe leaks occur. Technicians will {{s2}} repairs quickly to avoid water damage to floors. Residents need to {{s3}} by granting plumbers access to utility rooms. Prompt maintenance prevents {{s4}} structural damage to residential rental units.",
    contentZh:
      "公寓修繕處理",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["process"] },
      { id: "s3", pos: "v", tags: ["cooperation", "social"] },
      { id: "s4", pos: "adj", tags: ["intensity", "evaluation"] },
    ],
  },
  {
    id: "daily_public_library_07",
    title: "圖書館資源利用",
    titleZh: "圖書館資源利用",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "Visiting public libraries offers students access to extensive educational literature and study spaces. Librarians will {{s1}} patrons regarding digital database search techniques and borrowing rules. Students learn to {{s2}} rare reference materials stored in archived collections. Visitors are asked to {{s3}} phone settings to silent mode inside reading rooms. Maintaining quietness is {{s4}} for concentration.",
    contentZh:
      "圖書館資源利用",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
      { id: "s4", pos: "adj", tags: ["importance", "evaluation"] },
    ],
  },
  {
    id: "daily_gardening_hobby_08",
    title: "居家園藝樂趣",
    titleZh: "居家園藝樂趣",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "Growing houseplants brings natural greenery into urban apartments and outdoor balconies. Gardeners must {{s1}} soil moisture levels before watering delicate potted plants. Sunlight helps {{s2}} small seedlings into thriving flowering plants over weeks. Gardening enthusiasts often {{s3}} plant care advice on online forums. Nurturing greenery brings an {{s4}} feeling of calm after work.",
    contentZh:
      "居家園藝樂趣",
    slots: [
      { id: "s1", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s2", pos: "v", tags: ["state_change"] },
      { id: "s3", pos: "v", tags: ["communication"] },
      { id: "s4", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "shopping_online_refund_03",
    title: "網路退貨申請",
    titleZh: "網路退貨申請",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "Returning damaged items bought online requires following e-commerce return guidelines carefully. Customers must {{s1}} seller support teams about defective merchandise immediately. Support representatives will {{s2}} refund claims once returned packages arrive safely. Buyers are asked to {{s3}} return shipping labels via customer accounts online. Smooth refund processing creates a {{s4}} shopping experience for digital consumers.",
    contentZh:
      "網路退貨申請",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["process"] },
      { id: "s3", pos: "v", tags: ["request", "communication"] },
      { id: "s4", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "shopping_electronics_sale_04",
    title: "電子產品促銷",
    titleZh: "電子產品促銷",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "Annual electronics sales attract crowds searching for discounts on laptops and appliances. Store representatives {{s1}} shoppers about product warranties and trade-in bonus programs. Consumers usually {{s2}} technical specifications before buying high-priced devices. Smart buyers like to {{s3}} limited-time promotional deals displayed on store shelves. Finding discounted items yields a {{s4}} feeling of savings.",
    contentZh:
      "電子產品促銷",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["reasoning", "cognitive"] },
      { id: "s3", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s4", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "shopping_grocery_budget_05",
    title: "家庭採買理財",
    titleZh: "家庭採買理財",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "Managing family grocery expenses involves planning weekly meals around supermarket sales schedules. Budget planners try to {{s1}} total costs before reaching payment counters. Shoppers can {{s2}} price differences between name brands and store labels. Families strive to {{s3}} unnecessary spending on snack foods each month. Smart shopping practices maintain a {{s4}} diet while saving money.",
    contentZh:
      "家庭採買理財",
    slots: [
      { id: "s1", pos: "v", tags: ["reasoning", "cognitive"] },
      { id: "s2", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
      { id: "s4", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "shopping_furniture_assembly_06",
    title: "家具組裝服務",
    titleZh: "家具組裝服務",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "Purchasing flat-pack furniture allows homeowners to furnish living spaces affordably. Manuals usually {{s1}} buyers on required tools and step-by-step assembly instructions. Customers should {{s2}} all hardware screws before starting the building process. DIY builders may {{s3}} professional assembly assistance if steps prove confusing. Assembling items successfully provides a {{s4}} sense of achievement.",
    contentZh:
      "家具組裝服務",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s3", pos: "v", tags: ["request", "communication"] },
      { id: "s4", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "shopping_loyalty_points_07",
    title: "會員積點兌換",
    titleZh: "會員積點兌換",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "Joining store loyalty programs offers customers rewards on frequent store purchases. Cashiers will {{s1}} buyers about accumulated reward points during checkout procedures. Shoppers can {{s2}} point redemptions to discount overall purchase balances. Retailers try to {{s3}} customer retention rates through targeted promotional offers. Valuable loyalty perks build a {{s4}} relationship between shoppers and stores.",
    contentZh:
      "會員積點兌換",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["process"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
      { id: "s4", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "health_medical_checkup_02",
    title: "定期健康檢查",
    titleZh: "定期健康檢查",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "Undergoing annual medical checkups helps individuals detect potential health issues early on. Doctors will {{s1}} patients about diagnostic test procedures and fasting requirements. Nurses carefully {{s2}} blood samples to record accurate physiological metrics. Physicians then {{s3}} laboratory results to evaluate overall health status. Early detection is considered {{s4}} for preventing chronic diseases.",
    contentZh:
      "定期健康檢查",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["process"] },
      { id: "s3", pos: "v", tags: ["reasoning", "cognitive"] },
      { id: "s4", pos: "adj", tags: ["importance", "evaluation"] },
    ],
  },
];
