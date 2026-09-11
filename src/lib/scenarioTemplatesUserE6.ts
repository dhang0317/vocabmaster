import type { ScenarioTemplate } from './scenarioTemplates';

/** User scenarios E6 — batch of 20 templates */
export const USER_SCENARIO_TEMPLATES_E6: ScenarioTemplate[] = [
  {
    id: "travel_eco_tourism_17",
    title: "永續生態旅遊",
    titleZh: "永續生態旅遊",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "travel",
    content:
      "Promoting responsible eco-tourism preserves fragile wildlife habitats while supporting local indigenous communities. Tour guides work to {{s1}} visitors regarding ethical wildlife watching guidelines in national reserves. Conservationists try to {{s2}} environmental impacts caused by heavy tourism foot traffic. Sustainable tourism efforts help {{s3}} local economies through green job creation. Protecting natural habitats remains {{s4}} for future generations. The eco-tourism program earned an {{s5}} reputation internationally.",
    contentZh:
      "永續生態旅遊",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
      { id: "s4", pos: "adj", tags: ["importance", "evaluation"] },
      { id: "s5", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "travel_remote_workation_18",
    title: "遠距工作旅遊",
    titleZh: "遠距工作旅遊",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "travel",
    content:
      "Combining remote work with overseas travel allows digital nomads to explore cultural destinations while working. Professionals use online portals to {{s1}} employers about international working locations and time zones. Remote workers must {{s2}} daily tasks efficiently while managing travel schedules independently. Maintaining strong communication helps {{s3}} remote team dynamics across continents. Reliable internet connectivity is {{s4}} for workation success. Digital nomad lifestyles offer an {{s5}} work-life balance for modern employees.",
    contentZh:
      "遠距工作旅遊",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["process"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
      { id: "s4", pos: "adj", tags: ["importance", "evaluation"] },
      { id: "s5", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "daily_smart_home_15",
    title: "智慧家庭生活",
    titleZh: "智慧家庭生活",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "daily",
    content:
      "Automating household operations through smart home technology provides energy efficiency and daily convenience. Homeowners use mobile apps to {{s1}} connected appliances about daily schedule preferences. Smart sensors work to {{s2}} ambient light changes and adjust room lighting automatically. Technology adoption helps to {{s3}} household energy management into an automated process. Choosing secure home devices is {{s4}} for digital privacy. Upgrading household technology offers an {{s5}} enhancement to modern living.",
    contentZh:
      "智慧家庭生活",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
      { id: "s4", pos: "adj", tags: ["importance", "evaluation"] },
      { id: "s5", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "shopping_subscription_economy_12",
    title: "訂閱經濟趨勢",
    titleZh: "訂閱經濟趨勢",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "daily",
    content:
      "Subscribing to digital services offers consumers convenient access to media and recurring product deliveries. Service providers work to {{s1}} subscribers regarding monthly billing plans and new features. Customer support teams try to {{s2}} churn risk signals among long-term service users. Flexible cancellation policies help {{s3}} higher customer satisfaction and trust. Retaining active subscribers remains {{s4}} for recurring business revenue models. Subscription platforms provide an {{s5}} model for modern digital commerce.",
    contentZh:
      "訂閱經濟趨勢",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s3", pos: "v", tags: ["cause_effect"] },
      { id: "s4", pos: "adj", tags: ["importance", "evaluation"] },
      { id: "s5", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "health_telemedicine_services_12",
    title: "遠距醫療照護",
    titleZh: "遠距醫療照護",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "daily",
    content:
      "Expanding telemedicine platforms connects rural patients with specialized medical care remotely and efficiently. Doctors use video calls to {{s1}} patients about diagnostic results and prescription instructions. Virtual consultations allow physicians to {{s2}} visual health symptoms without physical office visits. Telehealth technology helps {{s3}} healthcare accessibility across remote geographical regions. Patient data protection remains {{s4}} in digital health systems. Telemedicine services deliver an {{s5}} improvement to medical accessibility.",
    contentZh:
      "遠距醫療照護",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
      { id: "s4", pos: "adj", tags: ["importance", "evaluation"] },
      { id: "s5", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "science_genetics_crispr_07",
    title: "基因編輯技術",
    titleZh: "基因編輯技術",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "science",
    content:
      "Utilizing gene editing tools enables researchers to modify specific DNA sequences with high precision. Molecular biologists gather to {{s1}} genomic modification protocols in research laboratories. Scientists try to {{s2}} unintended off-target genetic changes during experimental trials. Gene therapy advances could {{s3}} cures for inherited genetic diseases in the future. Stringent ethical oversight remains {{s4}} for gene editing research. Scientific findings provided an {{s5}} milestone in biomedical science.",
    contentZh:
      "基因編輯技術",
    slots: [
      { id: "s1", pos: "v", tags: ["process"] },
      { id: "s2", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s3", pos: "v", tags: ["cause_effect"] },
      { id: "s4", pos: "adj", tags: ["importance", "evaluation"] },
      { id: "s5", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "science_robotics_automation_08",
    title: "機器人自動化",
    titleZh: "機器人自動化",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "science",
    content:
      "Deploying autonomous robots in manufacturing facilities speeds up production lines and reduces workplace accidents. Engineers program sensors to {{s1}} operational obstacles in factory environments automatically. Robotic systems act to {{s2}} high-volume assembly tasks with consistent speed and accuracy. Automation technology helps to {{s3}} traditional manufacturing workflows into smart industrial systems. System safety compliance is {{s4}} in robotic design. Automated systems delivered an {{s5}} boost in factory productivity.",
    contentZh:
      "機器人自動化",
    slots: [
      { id: "s1", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s2", pos: "v", tags: ["process"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
      { id: "s4", pos: "adj", tags: ["importance", "evaluation"] },
      { id: "s5", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "science_nanotechnology_materials_09",
    title: "奈米科技應用",
    titleZh: "奈米科技應用",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "science",
    content:
      "Engineering materials at atomic scales unlocks extraordinary physical strength and electrical conductivity properties. Nanotechnologists work to {{s1}} novel carbon nanotube structures for industrial applications. Lab researchers attempt to {{s2}} atomic interactions using high-resolution electron microscopes. Nanomaterial applications can {{s3}} major enhancements in battery storage capacity. Rigorous safety testing is {{s4}} when handling nanomaterials. Advanced nanotechnology yields an {{s5}} expansion in material science options.",
    contentZh:
      "奈米科技應用",
    slots: [
      { id: "s1", pos: "v", tags: ["process"] },
      { id: "s2", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s3", pos: "v", tags: ["cause_effect"] },
      { id: "s4", pos: "adj", tags: ["importance", "evaluation"] },
      { id: "s5", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "science_artificial_photosynthesis_10",
    title: "人工光合作用",
    titleZh: "人工光合作用",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "science",
    content:
      "Developing artificial photosynthesis systems converts solar energy directly into clean hydrogen fuel reserves. Chemists design catalysts to {{s1}} water molecules into hydrogen and oxygen gas. Researchers strive to {{s2}} chemical reaction efficiencies under varying sunlight conditions. Solar fuel technologies help {{s3}} energy storage away from traditional fossil fuels. Clean fuel research is {{s4}} for achieving global carbon neutrality targets. Synthetic photosynthesis achieved an {{s5}} breakthrough in renewable fuel generation.",
    contentZh:
      "人工光合作用",
    slots: [
      { id: "s1", pos: "v", tags: ["process"] },
      { id: "s2", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
      { id: "s4", pos: "adj", tags: ["importance", "evaluation"] },
      { id: "s5", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "workplace_cross_cultural_23",
    title: "跨文化溝通溝通",
    titleZh: "跨文化溝通溝通",
    level: ["highschool", "toeic"],
    domain: "workplace",
    content:
      "Managing multinational workplace teams requires cultural sensitivity and adaptable communication strategies. Team leaders aim to {{s1}} staff members about regional customs and business etiquette. Employees learn to {{s2}} subtle non-verbal cues during international video conferences. Cultural awareness helps {{s3}} mutual respect among colleagues from diverse backgrounds. Establishing clear team values is {{s4}} for global organization success.",
    contentZh:
      "跨文化溝通溝通",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s3", pos: "v", tags: ["cause_effect"] },
      { id: "s4", pos: "adj", tags: ["importance", "evaluation"] },
    ],
  },
  {
    id: "travel_solo_hiking_19",
    title: "高山健行指引",
    titleZh: "高山健行指引",
    level: ["highschool", "toeic"],
    domain: "travel",
    content:
      "Hiking remote mountain trails requires thorough trail research and essential safety equipment preparation. Trail guides will {{s1}} hikers regarding steep elevation changes and sudden weather shifts. Hikers must {{s2}} landmark markers carefully to remain on designated trails. Proper gear choices help to {{s3}} safety levels during long wilderness treks. Carrying adequate water remains {{s4}} for high altitude endurance.",
    contentZh:
      "高山健行指引",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
      { id: "s4", pos: "adj", tags: ["importance", "evaluation"] },
    ],
  },
  {
    id: "daily_recycling_habit_16",
    title: "資源回收分類",
    titleZh: "資源回收分類",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "Sorting domestic waste properly facilitates municipal recycling programs and protects regional ecosystems. Local councils try to {{s1}} households regarding proper waste separation guidelines. Residents need to {{s2}} plastic bottles and cardboard boxes before disposal. Household participation helps {{s3}} municipal waste volume into reusable materials. Environmental awareness is {{s4}} for community sustainability.",
    contentZh:
      "資源回收分類",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["process"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
      { id: "s4", pos: "adj", tags: ["importance", "evaluation"] },
    ],
  },
  {
    id: "shopping_secondhand_market_13",
    title: "二手市集尋寶",
    titleZh: "二手市集尋寶",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "Visiting flea markets gives vintage collectors opportunities to discover rare collectibles at reasonable prices. Sellers like to {{s1}} buyers about the historical background of antique items. Shoppers enjoy trying to {{s2}} unique vintage clothing items among display racks. Buyers often attempt to {{s3}} price discounts when purchasing multiple items. Sustainable shopping habits offer a {{s4}} alternative to fast fashion consumption.",
    contentZh:
      "二手市集尋寶",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s3", pos: "v", tags: ["request", "communication"] },
      { id: "s4", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "health_sleep_hygiene_13",
    title: "睡眠衛生習慣",
    titleZh: "睡眠衛生習慣",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "Improving sleep quality involves maintaining regular bedtime schedules and reducing screen exposure at night. Sleep specialists will {{s1}} patients about dark bedroom environments and noise control. Developing relaxing routines helps {{s2}} stress levels before going to sleep. Individuals should {{s3}} daytime tiredness symptoms as signs of sleep deprivation. Quality sleep remains {{s4}} for physical recovery.",
    contentZh:
      "睡眠衛生習慣",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["state_change"] },
      { id: "s3", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s4", pos: "adj", tags: ["importance", "evaluation"] },
    ],
  },
  {
    id: "workplace_remote_onboarding_24",
    title: "遠距線上報到",
    titleZh: "遠距線上報到",
    level: ["highschool", "toeic"],
    domain: "workplace",
    content:
      "Onboarding remote workers effectively requires clear digital communication tools and organized documentation. HR teams will {{s1}} new hires about digital workspace access and company policies. Managers encourage new employees to {{s2}} with team mentors during initial orientation weeks. Virtual team meetings help {{s3}} remote isolation into active collaborative engagement. Structured onboarding leads to a {{s4}} integration experience for new workers.",
    contentZh:
      "遠距線上報到",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["cooperation", "social"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
      { id: "s4", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "travel_cruise_excursion_20",
    title: "郵輪岸上觀光",
    titleZh: "郵輪岸上觀光",
    level: ["highschool", "toeic"],
    domain: "travel",
    content:
      "Booking shore excursions gives cruise passengers chances to explore coastal cultural landmarks. Tour operators will {{s1}} travelers about departure return times and excursion itineraries. Excursion guides encourage tourists to {{s2}} local wildlife along coastal trails. Passengers must {{s3}} with guide instructions during group bus travel. Timely returns are {{s4}} for cruise departure schedules.",
    contentZh:
      "郵輪岸上觀光",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s3", pos: "v", tags: ["cooperation", "social"] },
      { id: "s4", pos: "adj", tags: ["importance", "evaluation"] },
    ],
  },
  {
    id: "daily_pet_care_17",
    title: "居家寵物照護",
    titleZh: "居家寵物照護",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "Caring for domestic pets requires daily feeding routines, exercise, and health checks. Veterinarians will {{s1}} pet owners about proper nutritional diets and vaccination schedules. Owners must {{s2}} behavioral changes that might indicate illness or pain. Daily exercise helps {{s3}} pet energy levels into calm household behavior. Responsible pet ownership guarantees a {{s4}} life for domestic animals.",
    contentZh:
      "居家寵物照護",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
      { id: "s4", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "shopping_holiday_discounts_14",
    title: "節慶折扣搶購",
    titleZh: "節慶折扣搶購",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "Holiday promotional sales offer shoppers opportunities to purchase gifts at significant discount prices. Retailers will {{s1}} loyal customers about upcoming promotional discount codes online. Shoppers use comparison sites to {{s2}} deal value before placing online orders. Smart shoppers try to {{s3}} genuine bargains among limited-time promotional offers. Organized shopping lists make the buying experience efficient and {{s4}} for consumers.",
    contentZh:
      "節慶折扣搶購",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["reasoning", "cognitive"] },
      { id: "s3", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s4", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "health_allergy_management_14",
    title: "過敏原防治",
    titleZh: "過敏原防治",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "Managing seasonal allergies involves identifying allergen triggers and taking prescribed preventive medication. Doctors will {{s1}} patients about pollen forecasts and outdoor exposure precautions. Patients should {{s2}} early allergy symptoms like sneezing or eye irritation. Air purifiers help {{s3}} indoor air quality by removing dust particles. Avoiding known allergens is {{s4}} for maintaining daily health.",
    contentZh:
      "過敏原防治",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
      { id: "s4", pos: "adj", tags: ["importance", "evaluation"] },
    ],
  },
  {
    id: "academic_online_course_12",
    title: "線上課程研習",
    titleZh: "線上課程研習",
    level: ["highschool", "toeic"],
    domain: "academic",
    content:
      "Enrolling in online university courses allows working adults to acquire new academic credentials. Instructors will {{s1}} students about assignment deadlines and discussion forum rules. Learners practice how to {{s2}} reading materials independently each week. Active forum participation helps {{s3}} self-directed learning into collaborative knowledge sharing. Consistent effort delivers a {{s4}} academic learning outcome for students.",
    contentZh:
      "線上課程研習",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["process"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
      { id: "s4", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
];
