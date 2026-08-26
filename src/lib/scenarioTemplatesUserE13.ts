import type { ScenarioTemplate } from './scenarioTemplates';

/** User scenarios E13 — batch of 20 templates */
export const USER_SCENARIO_TEMPLATES_E13: ScenarioTemplate[] = [
  {
    id: "science_nanotechnology_08",
    title: "奈米科技應用",
    titleZh: "奈米科技應用",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "science",
    content:
      "Nanotechnology enables precise manipulation of matter at molecular scales. Materials scientists try to {{s1}} atomic structures to create stronger composites. Researchers will {{s2}} industry leaders about prospective medical applications. High {{s3}} precision instruments are required for nanoscale fabrication.",
    contentZh:
      "奈米科技應用",
    slots: [
      { id: "s1", pos: "v", tags: ["state_change"] },
      { id: "s2", pos: "v", tags: ["inform", "communication"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "science_vaccine_development_09",
    title: "疫苗研發流程",
    titleZh: "疫苗研發流程",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "science",
    content:
      "Developing new vaccines requires multi-phase clinical trial validation. Immunologists must {{s1}} immune responses in test subjects during initial trials. Health officials will {{s2}} the public once regulatory approvals are granted. Creating {{s3}} vaccines protects global public health.",
    contentZh:
      "疫苗研發流程",
    slots: [
      { id: "s1", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s2", pos: "v", tags: ["inform", "communication"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "science_quantum_computing_10",
    title: "量子計算突破",
    titleZh: "量子計算突破",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "science",
    content:
      "Quantum computers solve complex calculations beyond traditional supercomputer capabilities. Physicists attempt to {{s1}} quantum entanglement principles for secure cryptography. Engineers will {{s2}} the scientific community when quantum supremacy milestones are reached. Achieving stable qubits demands {{s3}} environmental controls.",
    contentZh:
      "量子計算突破",
    slots: [
      { id: "s1", pos: "v", tags: ["reasoning", "cognitive"] },
      { id: "s2", pos: "v", tags: ["inform", "communication"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "workplace_internship_program_21",
    title: "實習計畫簡介",
    titleZh: "實習計畫簡介",
    level: ["elementary", "highschool"],
    domain: "workplace",
    content:
      "Our summer internship program offers real-world industry experience. Mentors will {{s1}} interns about daily tasks and project tools. Interns are encouraged to {{s2}} feedback whenever questions arise. We hope you have an {{s3}} learning experience.",
    contentZh:
      "實習計畫簡介",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["request", "communication"] },
      { id: "s3", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "workplace_flexible_hours_22",
    title: "彈性工時制度",
    titleZh: "彈性工時制度",
    level: ["highschool", "toeic"],
    domain: "workplace",
    content:
      "Flexible working schedules promote work-life balance for employees. Team members must {{s1}} supervisors about core working hours. Colleagues need to {{s2}} effectively to ensure project coverage. Maintaining {{s3}} communication prevents scheduling conflicts.",
    contentZh:
      "彈性工時制度",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["cooperation", "social"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "workplace_annual_gala_23",
    title: "企業尾牙晚會",
    titleZh: "企業尾牙晚會",
    level: ["elementary", "highschool"],
    domain: "workplace",
    content:
      "Our annual company gala celebrates employee achievements from the past year. Organizers will {{s1}} staff about dinner seating and party themes. Colleagues will {{s2}} on fun stage performances. It is an {{s3}} event for the whole team.",
    contentZh:
      "企業尾牙晚會",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["cooperation", "social"] },
      { id: "s3", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "workplace_it_helpdesk_24",
    title: "資訊支援服務",
    titleZh: "資訊支援服務",
    level: ["elementary", "highschool"],
    domain: "workplace",
    content:
      "The IT helpdesk assists staff with technical hardware issues. Employees can {{s1}} password resets or software installation support. Technicians will {{s2}} users once ticket issues are resolved. Providing {{s3}} IT support keeps operations smooth.",
    contentZh:
      "資訊支援服務",
    slots: [
      { id: "s1", pos: "v", tags: ["request", "communication"] },
      { id: "s2", pos: "v", tags: ["inform", "communication"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "workplace_sustainability_goal_25",
    title: "企業永續目標",
    titleZh: "企業永續目標",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "workplace",
    content:
      "Corporate sustainability initiatives aim to reduce environmental footprints. Companies should {{s1}} investors regarding carbon reduction progress. Executives will {{s2}} energy efficiency options for global manufacturing plants. Delivering {{s3}} sustainability reports builds brand reputation.",
    contentZh:
      "企業永續目標",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["reasoning", "cognitive"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "travel_road_trip_16",
    title: "公路旅行隨筆",
    titleZh: "公路旅行隨筆",
    level: ["highschool", "toeic"],
    domain: "travel",
    content:
      "Driving along coastal highways provides stunning views and freedom. Drivers must {{s1}} changing weather conditions along mountain passes. Companions should {{s2}} each other about gas stops and scenic lookouts. Road trips offer an {{s3}} holiday experience.",
    contentZh:
      "公路旅行隨筆",
    slots: [
      { id: "s1", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s2", pos: "v", tags: ["inform", "communication"] },
      { id: "s3", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "travel_camping_trip_17",
    title: "露營活動須知",
    titleZh: "露營活動須知",
    level: ["highschool", "toeic"],
    domain: "travel",
    content:
      "Camping under starlit skies brings travelers closer to nature. Campers must {{s1}} wildlife warning signs around campsite boundaries. Park rangers will {{s2}} visitors regarding campfire regulations. Keeping campsite areas clean is {{s3}} for conservation.",
    contentZh:
      "露營活動須知",
    slots: [
      { id: "s1", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s2", pos: "v", tags: ["inform", "communication"] },
      { id: "s3", pos: "adj", tags: ["importance", "evaluation"] },
    ],
  },
  {
    id: "travel_museum_tour_18",
    title: "博物館導覽行程",
    titleZh: "博物館導覽行程",
    level: ["elementary", "highschool"],
    domain: "travel",
    content:
      "Exploring art museums enriches historical knowledge and cultural appreciation. Audio guides will {{s1}} visitors about famous painting techniques. Guests can {{s2}} intricate details on ancient sculptures. It offers an {{s3}} afternoon out.",
    contentZh:
      "博物館導覽行程",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s3", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "travel_scuba_diving_19",
    title: "潛水活動體驗",
    titleZh: "潛水活動體驗",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "travel",
    content:
      "Scuba diving lets adventurers explore vibrant coral reef ecosystems. Instructors will {{s1}} divers about underwater sign signals and oxygen gear usage. Divers must {{s2}} pressure changes in their ears during descent. Maintaining {{s3}} equipment checks guarantees underwater safety.",
    contentZh:
      "潛水活動體驗",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "travel_ski_resort_20",
    title: "滑雪度假指南",
    titleZh: "滑雪度假指南",
    level: ["highschool", "toeic"],
    domain: "travel",
    content:
      "Visiting mountain ski resorts during winter offers thrilling snow sports. Ski patrol will {{s1}} visitors about avalanche warnings and trail difficulties. Skiers must {{s2}} ice patches on steep slopes. Wearing {{s3}} winter clothing keeps you warm.",
    contentZh:
      "滑雪度假指南",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "daily_pet_adoption_16",
    title: "領養寵物流程",
    titleZh: "領養寵物流程",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "Adopting rescue animals brings warmth and companionship into homes. Shelter staff will {{s1}} adopters about animal care needs and feeding schedules. Families can {{s2}} meetings with pets before finalizing adoption. Welcoming a pet creates an {{s3}} home atmosphere.",
    contentZh:
      "領養寵物流程",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["request", "communication"] },
      { id: "s3", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "daily_home_baking_17",
    title: "居家烘焙樂趣",
    titleZh: "居家烘焙樂趣",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "Baking fresh bread at home fills the kitchen with wonderful aromas. Bakers must {{s1}} when yeast dough rises properly in warm bowls. Recipe books {{s2}} beginners about oven temperatures and baking times. Sharing baked treats brings {{s3}} joy.",
    contentZh:
      "居家烘焙樂趣",
    slots: [
      { id: "s1", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s2", pos: "v", tags: ["inform", "communication"] },
      { id: "s3", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "daily_morning_jog_18",
    title: "晨跑健身習慣",
    titleZh: "晨跑健身習慣",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "Morning jogging improves cardiovascular fitness and boosts daily energy. Runners like to {{s1}} quiet street scenes early before morning traffic starts. Fitness apps {{s2}} users about distance covered and pace. Regular running delivers {{s3}} health benefits.",
    contentZh:
      "晨跑健身習慣",
    slots: [
      { id: "s1", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s2", pos: "v", tags: ["inform", "communication"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "daily_coffee_brewing_19",
    title: "手沖咖啡心得",
    titleZh: "手沖咖啡心得",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "Brewing pour-over coffee requires precision and quality roasted beans. Baristas {{s1}} coffee lovers about water temperature and grind size choices. Enthusiasts will {{s2}} delicate floral or nutty tasting notes. A good cup brings an {{s3}} start to your day.",
    contentZh:
      "手沖咖啡心得",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s3", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "daily_book_club_20",
    title: "社區讀書分享",
    titleZh: "社區讀書分享",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "Monthly book clubs gather friends to discuss inspiring contemporary novels. Members will {{s1}} each other about favorite chapters and character arcs. Readers love to {{s2}} underlying themes hidden in literary works. Meetings offer {{s3}} conversation and friendship.",
    contentZh:
      "社區讀書分享",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["reasoning", "cognitive"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "shopping_outlet_mall_11",
    title: "奧特萊斯採購",
    titleZh: "奧特萊斯採購",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "Outlet malls offer discounted designer clothing and footwear options. Store directory boards {{s1}} shoppers about store locations. Customers like to {{s2}} extra discounts at checkout counters. Finding great bargains creates an {{s3}} shopping trip.",
    contentZh:
      "奧特萊斯採購",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["request", "communication"] },
      { id: "s3", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "shopping_furniture_store_12",
    title: "傢俱賣場挑選",
    titleZh: "傢俱賣場挑選",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "Furnishing a new apartment requires measuring living spaces carefully. Showroom assistants will {{s1}} customers about custom fabric choices. Buyers can {{s2}} home delivery and assembly services. Selecting {{s3}} furniture transforms living environments.",
    contentZh:
      "傢俱賣場挑選",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["request", "communication"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
];
