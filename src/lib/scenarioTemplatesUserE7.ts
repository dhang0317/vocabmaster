import type { ScenarioTemplate } from './scenarioTemplates';

/** User scenarios E7 — batch of 20 templates */
export const USER_SCENARIO_TEMPLATES_E7: ScenarioTemplate[] = [
  {
    id: "science_weather_forecasting_11",
    title: "氣象預報觀測",
    titleZh: "氣象預報觀測",
    level: ["highschool", "toeic"],
    domain: "science",
    content:
      "Predicting daily weather conditions relies on satellite data collection and atmospheric pressure sensors. Meteorologists use supercomputers to {{s1}} atmospheric data collected from weather stations. Forecasters aim to {{s2}} the public about approaching severe storm systems promptly. Accurate forecasts help {{s3}} better storm preparation in vulnerable coastal towns. Reliable weather reporting is {{s4}} for public safety.",
    contentZh:
      "氣象預報觀測",
    slots: [
      { id: "s1", pos: "v", tags: ["process"] },
      { id: "s2", pos: "v", tags: ["inform", "communication"] },
      { id: "s3", pos: "v", tags: ["cause_effect"] },
      { id: "s4", pos: "adj", tags: ["importance", "evaluation"] },
    ],
  },
  {
    id: "workplace_office_safety_25",
    title: "職場安全演練",
    titleZh: "職場安全演練",
    level: ["highschool", "toeic"],
    domain: "workplace",
    content:
      "Conducting regular workplace safety drills ensures employees know emergency evacuation procedures. Safety marshals will {{s1}} staff members about designated assembly points outside office buildings. Workers are trained to {{s2}} potential fire hazards and report them immediately. Participating in safety exercises helps {{s3}} workplace panic into calm organized responses. Emergency readiness remains {{s4}} for commercial building safety.",
    contentZh:
      "職場安全演練",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
      { id: "s4", pos: "adj", tags: ["importance", "evaluation"] },
    ],
  },
  {
    id: "travel_transit_navigation_21",
    title: "大眾運輸轉乘",
    titleZh: "大眾運輸轉乘",
    level: ["highschool", "toeic"],
    domain: "travel",
    content:
      "Navigating complex subway systems in foreign cities requires studying route maps and station signs carefully. Digital apps will {{s1}} commuters about optimal transfer stations and train schedules. Passengers need to {{s2}} directional signs when making tight platform transfers. Planning routes in advance helps {{s3}} travel anxiety into confident urban exploration. Clear transit navigation provides an {{s4}} city travel experience.",
    contentZh:
      "大眾運輸轉乘",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
      { id: "s4", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "daily_car_maintenance_18",
    title: "汽車定期保養",
    titleZh: "汽車定期保養",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "Performing regular vehicle maintenance ensures road safety and prolongs car engine lifespan. Mechanics will {{s1}} vehicle owners about brake pad wear and engine oil replacement intervals. Drivers should {{s2}} unusual engine noises during daily commutes. Routine service checks help to {{s3}} vehicle performance back to optimal conditions. Keeping cars well-maintained is {{s4}} for highway safety.",
    contentZh:
      "汽車定期保養",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
      { id: "s4", pos: "adj", tags: ["importance", "evaluation"] },
    ],
  },
  {
    id: "shopping_warranty_claim_15",
    title: "商品保固申請",
    titleZh: "商品保固申請",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "Filing warranty claims for defective electronics requires submitting purchase receipts and serial numbers. Customer support representatives will {{s1}} buyers regarding repair options or product replacements. Service technicians will {{s2}} returned items to confirm technical defects. Providing complete purchase proof helps {{s3}} faster claim processing times. Reliable warranty support builds a {{s4}} brand reputation among buyers.",
    contentZh:
      "商品保固申請",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["process"] },
      { id: "s3", pos: "v", tags: ["cause_effect"] },
      { id: "s4", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "health_eye_care_15",
    title: "視力保健護理",
    titleZh: "視力保健護理",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "Protecting eyesight from prolonged digital screen exposure requires adopting healthy visual habits. Optometrists will {{s1}} patients about screen distance and regular eye break techniques. Individuals should {{s2}} early signs of eye strain such as dryness or blurred vision. Taking periodic screen breaks helps {{s3}} visual comfort during work hours. Proper eye care remains {{s4}} for office workers.",
    contentZh:
      "視力保健護理",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
      { id: "s4", pos: "adj", tags: ["importance", "evaluation"] },
    ],
  },
  {
    id: "academic_study_group_13",
    title: "同儕讀書會",
    titleZh: "同儕讀書會",
    level: ["highschool", "toeic"],
    domain: "academic",
    content:
      "Participating in student study groups fosters collaborative learning and deeper topic comprehension. Group members meet to {{s1}} each other about assigned reading summaries and insights. Students practice how to {{s2}} complex academic concepts through open peer discussions. Active study sessions help {{s3}} exam stress into confident academic preparation. Group learning yields a {{s4}} study experience for undergraduates.",
    contentZh:
      "同儕讀書會",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["reasoning", "cognitive"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
      { id: "s4", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "science_botany_photosynthesis_12",
    title: "植物光合作用",
    titleZh: "植物光合作用",
    level: ["highschool", "toeic"],
    domain: "science",
    content:
      "Studying plant biology reveals how vegetation converts sunlight into chemical energy for growth. Botanists move to {{s1}} leaf tissue samples under laboratory microscopes. Scientists can {{s2}} oxygen production rates during controlled light exposure experiments. Understanding photosynthesis helps {{s3}} better agricultural crop yield management. Botanical research is {{s4}} for global food security solutions.",
    contentZh:
      "植物光合作用",
    slots: [
      { id: "s1", pos: "v", tags: ["process"] },
      { id: "s2", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s3", pos: "v", tags: ["cause_effect"] },
      { id: "s4", pos: "adj", tags: ["importance", "evaluation"] },
    ],
  },
  {
    id: "workplace_vendor_contract_26",
    title: "廠商合約簽訂",
    titleZh: "廠商合約簽訂",
    level: ["highschool", "toeic"],
    domain: "workplace",
    content:
      "Finalizing vendor contracts requires thorough procurement reviews and price terms negotiation. Contract specialists will {{s1}} vendors regarding service expectations and delivery timelines. Legal advisors work to {{s2}} contract clauses to avoid potential future disputes. Successful negotiation helps {{s3}} mutually beneficial business relationships between companies. Maintaining clear contractual terms is {{s4}} for commercial operations.",
    contentZh:
      "廠商合約簽訂",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["reasoning", "cognitive"] },
      { id: "s3", pos: "v", tags: ["cause_effect"] },
      { id: "s4", pos: "adj", tags: ["importance", "evaluation"] },
    ],
  },
  {
    id: "travel_hotel_rebooking_22",
    title: "飯店改期確認",
    titleZh: "飯店改期確認",
    level: ["highschool", "toeic"],
    domain: "travel",
    content:
      "Modifying hotel booking dates due to altered travel schedules requires communicating with reservations desks. Desk agents will {{s1}} guests regarding room availability and modification fees. Customer service teams work to {{s2}} booking updates swiftly in reservation databases. Smooth modification processes help {{s3}} guest stress into satisfaction. Helpful customer service ensures an {{s4}} overall hotel travel experience.",
    contentZh:
      "飯店改期確認",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["process"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
      { id: "s4", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "daily_home_cooking_19",
    title: "居家料理烹飪",
    titleZh: "居家料理烹飪",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "Preparing nutritious meals at home allows families to control ingredient quality and portion sizes. Cooks should {{s1}} fresh vegetables and lean meats carefully before cooking. Adding natural herbs helps {{s2}} rich flavors without adding excessive salt. Home cooks like to {{s3}} appetizing aromas coming from sizzling cooking pans. Preparing home food provides a {{s4}} dining experience for family members.",
    contentZh:
      "居家料理烹飪",
    slots: [
      { id: "s1", pos: "v", tags: ["process"] },
      { id: "s2", pos: "v", tags: ["cause_effect"] },
      { id: "s3", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s4", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "shopping_payment_security_16",
    title: "支付安全防護",
    titleZh: "支付安全防護",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "Securing digital transactions protects online shoppers against credit card fraud and identity theft. E-commerce platforms will {{s1}} buyers about two-factor authentication security features. Payment gateways carefully {{s2}} encrypted financial transactions during online checkouts. Implementing strong encryption helps {{s3}} safe online shopping environments. Digital transaction security remains {{s4}} for online commerce growth.",
    contentZh:
      "支付安全防護",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["process"] },
      { id: "s3", pos: "v", tags: ["cause_effect"] },
      { id: "s4", pos: "adj", tags: ["importance", "evaluation"] },
    ],
  },
  {
    id: "health_vaccination_clinic_16",
    title: "疫苗接種服務",
    titleZh: "疫苗接種服務",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "Receiving annual vaccinations protects individuals and communities against preventable infectious diseases. Clinic nurses will {{s1}} patients about common post-vaccination side effects. Medical staff work to {{s2}} patient records and administer doses safely. Widespread immunization helps {{s3}} community immunity levels for vulnerable populations. Preventive vaccination remains {{s4}} for public health protection.",
    contentZh:
      "疫苗接種服務",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["process"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
      { id: "s4", pos: "adj", tags: ["importance", "evaluation"] },
    ],
  },
  {
    id: "academic_thesis_defense_14",
    title: "學位論文口試",
    titleZh: "學位論文口試",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "academic",
    content:
      "Defending a master's thesis requires graduate students to present original empirical research findings. Thesis candidates must {{s1}} faculty committees regarding methodology choices and theoretical framework models. Students need to {{s2}} experimental results when responding to critical faculty questions. Faculty members gather to {{s3}} final score forms following oral examinations. Delivering compelling arguments ensures an {{s4}} thesis evaluation result.",
    contentZh:
      "學位論文口試",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["reasoning", "cognitive"] },
      { id: "s3", pos: "v", tags: ["process"] },
      { id: "s4", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "science_microbiology_bacteria_13",
    title: "微生物學研究",
    titleZh: "微生物學研究",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "science",
    content:
      "Investigating bacterial resistance mechanism provides critical insights for developing novel antibiotic drugs. Microbiologists work to {{s1}} bacterial culture samples under sterile laboratory conditions. Scientists attempt to {{s2}} gene mutation patterns linked to drug resistance. Understanding bacterial behavior helps {{s3}} better infection treatment strategies. Advanced microbiology remains {{s4}} for modern medical science.",
    contentZh:
      "微生物學研究",
    slots: [
      { id: "s1", pos: "v", tags: ["process"] },
      { id: "s2", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s3", pos: "v", tags: ["cause_effect"] },
      { id: "s4", pos: "adj", tags: ["importance", "evaluation"] },
    ],
  },
  {
    id: "workplace_executive_leadership_27",
    title: "高階領導管理",
    titleZh: "高階領導管理",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "workplace",
    content:
      "Effective executive leadership inspires organizational alignment and drives sustainable corporate strategy forward. Chief executives work to {{s1}} senior staff regarding corporate vision and annual strategic objectives. Leaders attempt to {{s2}} corporate culture into open collaborative work environments. Transparent communication helps {{s3}} high trust between management and employees. Strong leadership remains {{s4}} for overcoming economic market challenges. Strategic guidance yields an {{s5}} performance across business units.",
    contentZh:
      "高階領導管理",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["state_change"] },
      { id: "s3", pos: "v", tags: ["cause_effect"] },
      { id: "s4", pos: "adj", tags: ["importance", "evaluation"] },
      { id: "s5", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "travel_international_diplomacy_23",
    title: "國際外交考察",
    titleZh: "國際外交考察",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "travel",
    content:
      "Diplomatic trade missions promote international economic cooperation and bilateral commercial agreements. Foreign delegates gather to {{s1}} host governments regarding trade policy objectives and market access terms. Representatives try to {{s2}} mutual trade opportunities between participating nations. Diplomatic dialogue helps {{s3}} international trade relations into productive partnerships. Economic diplomacy is {{s4}} for global trade growth. Summit talks achieved an {{s5}} consensus on bilateral trade terms.",
    contentZh:
      "國際外交考察",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
      { id: "s4", pos: "adj", tags: ["importance", "evaluation"] },
      { id: "s5", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "daily_smart_mobility_20",
    title: "智慧交通出行",
    titleZh: "智慧交通出行",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "daily",
    content:
      "Adopting integrated smart transit systems reduces urban traffic congestion and vehicle emissions. Transit authorities use AI to {{s1}} real-time traffic flow data from city intersection sensors. Traffic operators aim to {{s2}} drivers regarding optimal detour routes during peak congestion hours. Optimizing signal timing helps {{s3}} urban commuting efficiency across major avenues. Smart transit technology is {{s4}} for sustainable urban planning. Integrated mobility solutions offer an {{s5}} commuting alternative for residents.",
    contentZh:
      "智慧交通出行",
    slots: [
      { id: "s1", pos: "v", tags: ["process"] },
      { id: "s2", pos: "v", tags: ["inform", "communication"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
      { id: "s4", pos: "adj", tags: ["importance", "evaluation"] },
      { id: "s5", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "shopping_sustainable_packaging_17",
    title: "環保包裝趨勢",
    titleZh: "環保包裝趨勢",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "daily",
    content:
      "Replacing single-use plastic packaging with biodegradable alternatives reduces environmental pollution in retail supply chains. Retail brands move to {{s1}} consumers about eco-friendly packaging materials and recycling guidelines. Manufacturers attempt to {{s2}} plant-based packaging compounds for commercial shipping containers. Adopting sustainable packaging helps {{s3}} brand reputation among environmentally conscious shoppers. Eliminating plastic waste is {{s4}} for ocean conservation. Green packaging initiatives deliver an {{s5}} step toward circular economy goals.",
    contentZh:
      "環保包裝趨勢",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["process"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
      { id: "s4", pos: "adj", tags: ["importance", "evaluation"] },
      { id: "s5", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "health_rehabilitation_care_17",
    title: "術後復健照護",
    titleZh: "術後復健照護",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "daily",
    content:
      "Providing comprehensive post-operative rehabilitation therapy accelerates physical recovery for surgical patients. Physical therapists will {{s1}} patients about structured daily movement exercises and pain management protocols. Clinicians closely monitor patients to {{s2}} subtle signs of inflammation or joint stiffness. Dedicated rehabilitation helps to {{s3}} patient mobility back to normal levels over time. Consistent therapy is {{s4}} for achieving optimal surgical recovery. Patient treatment plans deliver an {{s5}} health recovery outcome.",
    contentZh:
      "術後復健照護",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
      { id: "s4", pos: "adj", tags: ["importance", "evaluation"] },
      { id: "s5", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
];
