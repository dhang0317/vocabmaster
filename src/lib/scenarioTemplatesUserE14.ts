import type { ScenarioTemplate } from './scenarioTemplates';

/** User scenarios E14 — batch of 18 templates */
export const USER_SCENARIO_TEMPLATES_E14: ScenarioTemplate[] = [
  {
    id: "shopping_online_review_13",
    title: "網購商品評價",
    titleZh: "網購商品評價",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "Reading user reviews before buying online helps buyers avoid poor quality items. Shoppers should {{s1}} customer ratings to gauge product durability. Reviewers will {{s2}} future buyers about sizing issues or shipping delays. Honest feedback ensures a {{s3}} shopping experience.",
    contentZh:
      "網購商品評價",
    slots: [
      { id: "s1", pos: "v", tags: ["reasoning", "cognitive"] },
      { id: "s2", pos: "v", tags: ["inform", "communication"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "shopping_farmers_market_14",
    title: "小農市集採買",
    titleZh: "小農市集採買",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "Weekend farmers markets feature locally grown fruits and artisanal cheeses. Farmers gladly {{s1}} shoppers about organic farming methods. Visitors can {{s2}} fresh aromas across vibrant food stalls. Buying fresh food supports an {{s3}} local community.",
    contentZh:
      "小農市集採買",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s3", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "shopping_gift_wrapping_15",
    title: "禮品包裝服務",
    titleZh: "禮品包裝服務",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "Department stores offer complimentary gift wrapping during holiday seasons. Shoppers can {{s1}} custom ribbons and greeting cards. Clerks will {{s2}} buyers when wrapped gifts are ready. Beautifully wrapped presents bring an {{s3}} holiday feeling.",
    contentZh:
      "禮品包裝服務",
    slots: [
      { id: "s1", pos: "v", tags: ["request", "communication"] },
      { id: "s2", pos: "v", tags: ["inform", "communication"] },
      { id: "s3", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "health_allergy_treatment_11",
    title: "過敏症狀防治",
    titleZh: "過敏症狀防治",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "Spring pollen season often triggers seasonal allergic reactions in sensitive individuals. Doctors will {{s1}} patients about antihistamine options and preventative measures. Patients should {{s2}} early signs like sneezing or itchy eyes. Taking proper medication ensures {{s3}} daily comfort.",
    contentZh:
      "過敏症狀防治",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "health_hydration_importance_12",
    title: "日常水分補充",
    titleZh: "日常水分補充",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "Drinking enough water daily supports metabolic function and brain energy. Health coaches {{s1}} clients to carry reusable water bottles. People must {{s2}} dehydration signs like headaches or dry mouth. Hydration is an {{s3}} daily health priority.",
    contentZh:
      "日常水分補充",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s3", pos: "adj", tags: ["importance", "evaluation"] },
    ],
  },
  {
    id: "health_first_aid_kit_13",
    title: "急救箱常備藥",
    titleZh: "急救箱常備藥",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "Keeping a well-stocked first aid kit at home prepares families for minor emergencies. Pharmacists will {{s1}} customers about antiseptic wipes and bandages. It is {{s2}} to check expiration dates on ointments regularly. Reliable supplies ensure {{s3}} home safety.",
    contentZh:
      "急救箱常備藥",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "adj", tags: ["importance", "evaluation"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "health_eye_care_14",
    title: "視力保健維護",
    titleZh: "視力保健維護",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "Prolonged screen usage causes digital eye strain among office workers. Optometrists will {{s1}} patients about screen distance and resting breaks. Patients should {{s2}} vision blurring symptoms early. Regular eye exams ensure {{s3}} vision health.",
    contentZh:
      "視力保健維護",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "health_blood_donation_15",
    title: "熱血捐血活動",
    titleZh: "熱血捐血活動",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "Donating blood saves lives in community hospitals every day. Nurses will {{s1}} donors about eligibility requirements and screening procedures. Donors receive an {{s2}} feeling knowing their contribution helps patients in need.",
    contentZh:
      "熱血捐血活動",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "academic_online_course_11",
    title: "線上課程學習",
    titleZh: "線上課程學習",
    level: ["highschool", "toeic"],
    domain: "academic",
    content:
      "E-learning platforms allow students to study subjects at their own pace. Instructors will {{s1}} students about weekly assignment deadlines. Learners can {{s2}} help in discussion forums when concepts seem challenging. Self-discipline is {{s3}} for online study success.",
    contentZh:
      "線上課程學習",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["request", "communication"] },
      { id: "s3", pos: "adj", tags: ["importance", "evaluation"] },
    ],
  },
  {
    id: "academic_scholarship_apply_12",
    title: "獎學金申請指南",
    titleZh: "獎學金申請指南",
    level: ["highschool", "toeic"],
    domain: "academic",
    content:
      "Applying for university scholarships requires strong academic achievements and essay writing. Applicants must {{s1}} committee members about financial need and future career goals. Candidates should {{s2}} recommendation letters from professors early. Achieving scholarships brings {{s3}} educational opportunities.",
    contentZh:
      "獎學金申請指南",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["request", "communication"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "academic_fieldwork_study_13",
    title: "田野調查記錄",
    titleZh: "田野調查記錄",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "academic",
    content:
      "Anthropological fieldwork involves immersive observation in local communities. Field researchers try to {{s1}} cultural rituals without imposing external bias. Researchers will {{s2}} study participants about project goals. Collecting {{s3}} observational data requires cultural sensitivity.",
    contentZh:
      "田野調查記錄",
    slots: [
      { id: "s1", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s2", pos: "v", tags: ["inform", "communication"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "academic_study_abroad_14",
    title: "海外交換留學",
    titleZh: "海外交換留學",
    level: ["highschool", "toeic"],
    domain: "academic",
    content:
      "Studying abroad expands cultural perspectives and foreign language skills. International advisors will {{s1}} students about visa applications and course credits. Exchange students must {{s2}} with international classmates on assignments. Living abroad offers an {{s3}} personal experience.",
    contentZh:
      "海外交換留學",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["cooperation", "social"] },
      { id: "s3", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "academic_ethics_committee_15",
    title: "研究倫理審查",
    titleZh: "研究倫理審查",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "academic",
    content:
      "Human subject research must receive approval from ethics review boards. Investigators must {{s1}} participants about potential study risks. Ethical committees will {{s2}} whether consent protocols protect subject rights. Compliance is {{s3}} to conduct responsible science.",
    contentZh:
      "研究倫理審查",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["reasoning", "cognitive"] },
      { id: "s3", pos: "adj", tags: ["importance", "evaluation"] },
    ],
  },
  {
    id: "science_robotics_tech_11",
    title: "機器人學發展",
    titleZh: "機器人學發展",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "science",
    content:
      "Autonomous robotics advances manufacturing automation and warehouse management. Robotics engineers {{s1}} industry clients about efficiency gains. Sensors allow robots to {{s2}} surrounding obstacles accurately. Designing {{s3}} robotic systems requires interdisciplinary engineering.",
    contentZh:
      "機器人學發展",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "science_ocean_currents_12",
    title: "洋流變化研究",
    titleZh: "洋流變化研究",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "science",
    content:
      "Ocean currents regulate global climate dynamics by distributing thermal energy. Oceanographers use satellite sensors to {{s1}} subtle current shifts over decades. Scientists will {{s2}} international environmental bodies about warming trends. High {{s3}} climate modeling is essential for prediction.",
    contentZh:
      "洋流變化研究",
    slots: [
      { id: "s1", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s2", pos: "v", tags: ["inform", "communication"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "science_clean_water_tech_13",
    title: "水質淨化科技",
    titleZh: "水質淨化科技",
    level: ["highschool", "toeic"],
    domain: "science",
    content:
      "Access to clean drinking water remains critical for global health. Engineers work to {{s1}} contaminated water into potable supplies through advanced filtration. Researchers will {{s2}} rural communities about low-cost purification systems. Providing {{s3}} water prevents waterborne disease.",
    contentZh:
      "水質淨化科技",
    slots: [
      { id: "s1", pos: "v", tags: ["state_change"] },
      { id: "s2", pos: "v", tags: ["inform", "communication"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "science_astronomy_comet_14",
    title: "彗星軌道觀測",
    titleZh: "彗星軌道觀測",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "science",
    content:
      "Tracking rare comets gives scientists insights into early solar system formation. Astronomers can {{s1}} faint cometary tails using high-resolution observatories. Researchers will {{s2}} the public about peak viewing nights. Calculating orbital paths requires {{s3}} mathematical models.",
    contentZh:
      "彗星軌道觀測",
    slots: [
      { id: "s1", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s2", pos: "v", tags: ["inform", "communication"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "science_stem_education_15",
    title: "科普教育推廣",
    titleZh: "科普教育推廣",
    level: ["elementary", "highschool"],
    domain: "science",
    content:
      "Promoting STEM learning inspires young students to pursue scientific careers. Science museums {{s1}} visitors through interactive physical exhibits. Children can {{s2}} basic physics principles during hands-on experiments. It is an {{s3}} way to ignite curiosity.",
    contentZh:
      "科普教育推廣",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s3", pos: "adj", tags: ["emotion"] },
    ],
  },
];
