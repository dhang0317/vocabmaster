import type { ScenarioTemplate } from './scenarioTemplates';

/** User scenarios D1 — batch of 20 templates */
export const USER_SCENARIO_TEMPLATES_D1: ScenarioTemplate[] = [
  {
    id: "academic_final_exam_prep_21",
    title: "期末考圖書館苦讀",
    titleZh: "期末考圖書館苦讀",
    level: ["elementary", "highschool"],
    domain: "academic",
    content:
      "Intensely preparing for the upcoming biology final exam always makes me feel deeply {{s1}}. I desperately need to read and {{s2}} all twelve chapters we thoroughly covered this semester. There is a {{s3}} amount of complex scientific vocabulary left to memorize. My classmates and I decided to {{s4}} and form a study group in the silent university library. I really hope my final grades will {{s5}} upwards this time because safely passing this prerequisite class is {{s6}} for my future degree.",
    contentZh:
      "期末考圖書館苦讀",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["cognitive", "reasoning"] },
      { id: "s3", pos: "adj", tags: ["quantity"] },
      { id: "s4", pos: "v", tags: ["social", "cooperation"] },
      { id: "s5", pos: "v", tags: ["state_change"] },
      { id: "s6", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "hotel_pool_maintenance_22",
    title: "渡假村設施維護",
    titleZh: "渡假村設施維護",
    level: ["highschool", "toeic"],
    domain: "travel",
    content:
      "The famous tropical resort proudly offers a {{s1}} range of luxurious five-star amenities. Visiting guests often {{s2}} exceptionally high praise for the relaxing evening spa services. However, the main swimming pool area was unfortunately closed for a {{s3}} period due to unexpected filter maintenance. This sudden closure naturally caused some vacationing families to feel quite {{s4}}. Resort management confidently expects the expensive upgrades to greatly {{s5}} the overall aquatic experience and ultimately {{s6}} much higher online guest satisfaction rating scores.",
    contentZh:
      "渡假村設施維護",
    slots: [
      { id: "s1", pos: "adj", tags: ["quantity"] },
      { id: "s2", pos: "v", tags: ["communication"] },
      { id: "s3", pos: "adj", tags: ["time", "duration"] },
      { id: "s4", pos: "adj", tags: ["emotion"] },
      { id: "s5", pos: "v", tags: ["state_change"] },
      { id: "s6", pos: "v", tags: ["cause_effect"] },
    ],
  },
  {
    id: "science_crispr_ethics_23",
    title: "基因編輯的倫理爭議",
    titleZh: "基因編輯的倫理爭議",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "science",
    content:
      "The pioneering CRISPR technology provides an unprecedentedly {{s1}} and precise method for editing human DNA. Laboratory researchers can now chemically {{s2}} specific targeted genetic sequences with near-perfect molecular accuracy. This profound medical innovation could soon {{s3}} permanent cures for hereditary diseases and drastically {{s4}} average patient lifespans worldwide. However, leading bioethicists deeply {{s5}} that without implementing strict legal regulations, it might easily lead to highly controversial societal outcomes. We must urgently {{s6}} on a massive global scale to establish binding international ethical guidelines.",
    contentZh:
      "基因編輯的倫理爭議",
    slots: [
      { id: "s1", pos: "adj", tags: ["evaluation"] },
      { id: "s2", pos: "v", tags: ["physical", "action"] },
      { id: "s3", pos: "v", tags: ["cause_effect"] },
      { id: "s4", pos: "v", tags: ["state_change"] },
      { id: "s5", pos: "v", tags: ["cognitive", "reasoning"] },
      { id: "s6", pos: "v", tags: ["social", "cooperation"] },
    ],
  },
  {
    id: "daily_puppy_vet_visit_24",
    title: "幼犬誤食看獸醫",
    titleZh: "幼犬誤食看獸醫",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "Taking full-time care of a newly adopted puppy is highly {{s1}} but wonderfully rewarding. You must always remember to {{s2}} the walking leash tightly during outdoor park visits. Yesterday afternoon, my silly dog quickly ate a {{s3}} amount of weird wild grass. I immediately had to {{s4}} with the local neighborhood vet to make absolutely sure he was okay. The friendly vet calmly assured me it was merely a {{s5}} stomach issue, and his canine health would very soon {{s6}} back to normal.",
    contentZh:
      "幼犬誤食看獸醫",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["physical", "action"] },
      { id: "s3", pos: "adj", tags: ["quantity"] },
      { id: "s4", pos: "v", tags: ["communication"] },
      { id: "s5", pos: "adj", tags: ["time", "duration"] },
      { id: "s6", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "workplace_manager_feedback_25",
    title: "主管的建設性回饋",
    titleZh: "主管的建設性回饋",
    level: ["highschool", "toeic"],
    domain: "workplace",
    content:
      "Receiving blunt but constructive criticism can be highly {{s1}} for sensitive newly hired employees. Experienced department managers should always strive to {{s2}} performance feedback completely privately and respectfully. Adopting a harsh or condescending tone might easily {{s3}} dangerously low office morale and irreparably {{s4}} fragile team dynamics. Junior employees naturally need a {{s5}} grace period to mentally {{s6}} the corrective suggestions and genuinely improve their workflow. Ultimately, cultivating a psychologically supportive corporate environment is absolutely {{s7}} for sustainable long-term professional growth.",
    contentZh:
      "主管的建設性回饋",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["communication"] },
      { id: "s3", pos: "v", tags: ["cause_effect"] },
      { id: "s4", pos: "v", tags: ["state_change"] },
      { id: "s5", pos: "adj", tags: ["time", "duration"] },
      { id: "s6", pos: "v", tags: ["process"] },
      { id: "s7", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "travel_beach_sunset_26",
    title: "海灘排球與日落",
    titleZh: "海灘排球與日落",
    level: ["elementary", "highschool"],
    domain: "travel",
    content:
      "The hidden tropical beach was absolutely {{s1}} with its crystal clear blue water and soft white sand. We wisely brought a {{s2}} amount of strong sunscreen to completely avoid painful sunburns. My younger brother enthusiastically tried to {{s3}} wet sand to build a large defensive sandcastle near the ocean shore. Later in the afternoon, we went over to {{s4}} with some other friendly international tourists playing a game of beach volleyball. The bright orange sunset was amazing, and it made my urban stress completely {{s5}}.",
    contentZh:
      "海灘排球與日落",
    slots: [
      { id: "s1", pos: "adj", tags: ["description"] },
      { id: "s2", pos: "adj", tags: ["quantity"] },
      { id: "s3", pos: "v", tags: ["physical", "action"] },
      { id: "s4", pos: "v", tags: ["social", "cooperation"] },
      { id: "s5", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "health_isolation_resilience_27",
    title: "孤獨感與心理韌性",
    titleZh: "孤獨感與心理韌性",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "daily",
    content:
      "Enduring prolonged and involuntary social isolation can reliably {{s1}} severe and debilitating psychological distress in adults. Modern productivity-focused society often tends to wrongly {{s2}} emotional and mental health as a trivial secondary issue. Leading clinical psychologists consistently {{s3}} that building internal emotional resilience is fundamentally {{s4}} for basic human survival and flourishing. To meaningfully {{s5}} the currently escalating loneliness crisis, urban communities must deliberately {{s6}} comprehensive public support systems and actively {{s7}} with vulnerable marginalized populations to effectively prevent further psychological harm.",
    contentZh:
      "孤獨感與心理韌性",
    slots: [
      { id: "s1", pos: "v", tags: ["cause_effect"] },
      { id: "s2", pos: "v", tags: ["cognitive", "reasoning"] },
      { id: "s3", pos: "v", tags: ["communication"] },
      { id: "s4", pos: "adj", tags: ["evaluation"] },
      { id: "s5", pos: "v", tags: ["state_change"] },
      { id: "s6", pos: "v", tags: ["process"] },
      { id: "s7", pos: "v", tags: ["social", "cooperation"] },
    ],
  },
  {
    id: "shopping_boutique_sizing_issue_28",
    title: "服飾品牌尺寸客訴",
    titleZh: "服飾品牌尺寸客訴",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "The trendy downtown boutique recently launched a daring new clothing line that looks very {{s1}} on the mannequins. The lead fashion designer had to {{s2}} several rigorous fabric stress tests before approving the final mass production. However, a {{s3}} number of angry early customers quickly complained about the wildly inaccurate sizing charts. The embarrassed store management decided to formally {{s4}} a sincere public apology on all their social media channels. They publicly promised to drastically {{s5}} their internal quality control, which is undeniably a {{s6}} strategic business move.",
    contentZh:
      "服飾品牌尺寸客訴",
    slots: [
      { id: "s1", pos: "adj", tags: ["description"] },
      { id: "s2", pos: "v", tags: ["process"] },
      { id: "s3", pos: "adj", tags: ["quantity"] },
      { id: "s4", pos: "v", tags: ["communication"] },
      { id: "s5", pos: "v", tags: ["state_change"] },
      { id: "s6", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "academic_graduation_speech_29",
    title: "感人的畢業致詞",
    titleZh: "感人的畢業致詞",
    level: ["highschool", "toeic"],
    domain: "academic",
    content:
      "The grand university graduation ceremony held in the stadium was a highly {{s1}} and memorable milestone event. The respected faculty dean proudly stood up to {{s2}} an incredibly powerful and inspiring farewell speech to the gathered senior students. Successfully completing a rigorous four-year degree absolutely takes a {{s3}} amount of unwavering midnight dedication and hard work. Many anxious new graduates realistically {{s4}} that navigating the modern competitive job market will be quite challenging. However, their shared challenging university experience will certainly {{s5}} lifelong professional friendships and positively {{s6}} their upcoming futures.",
    contentZh:
      "感人的畢業致詞",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["communication"] },
      { id: "s3", pos: "adj", tags: ["quantity"] },
      { id: "s4", pos: "v", tags: ["cognitive", "reasoning"] },
      { id: "s5", pos: "v", tags: ["cause_effect"] },
      { id: "s6", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "hotel_buffet_breakfast_30",
    title: "美味的飯店自助早餐",
    titleZh: "美味的飯店自助早餐",
    level: ["elementary", "highschool"],
    domain: "travel",
    content:
      "The complimentary morning buffet breakfast provided at the luxury hotel was absolutely {{s1}} and delicious. There was a {{s2}} variety of freshly cut tropical fruits and warm baked pastries to choose from. I carefully used the silver metal tongs to safely {{s3}} a large buttery croissant onto my clean white plate. The spacious dining room was quite {{s4}} with elegant crystal chandeliers and bright floral decorations. I pleasantly managed to {{s5}} with the smiling head omelet chef, who was very friendly. Because of this, my sleepy morning mood rapidly began to {{s6}} for the better.",
    contentZh:
      "美味的飯店自助早餐",
    slots: [
      { id: "s1", pos: "adj", tags: ["evaluation"] },
      { id: "s2", pos: "adj", tags: ["quantity"] },
      { id: "s3", pos: "v", tags: ["physical", "action"] },
      { id: "s4", pos: "adj", tags: ["description"] },
      { id: "s5", pos: "v", tags: ["communication"] },
      { id: "s6", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "science_ai_automation_31",
    title: "AI 自動化與就業衝擊",
    titleZh: "AI 自動化與就業衝擊",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "science",
    content:
      "The rapid exponential advancement of artificial intelligence will inevitably {{s1}} massive structural disruptions across the global labor market. Leading economic experts objectively {{s2}} that most standard routine cognitive tasks will soon be completely automated by software. To successfully {{s3}} the severe socioeconomic negative impacts, large multinational corporations must immediately {{s4}} large-scale and mandatory employee retraining programs. Furthermore, the deep learning algorithm's opaque decision-making process is incredibly {{s5}}, making it exceptionally hard for developers to interpret. Strict ethical oversight remains universally {{s6}} as everyday humans increasingly {{s7}} with autonomous intelligent machines.",
    contentZh:
      "AI 自動化與就業衝擊",
    slots: [
      { id: "s1", pos: "v", tags: ["cause_effect"] },
      { id: "s2", pos: "v", tags: ["cognitive", "reasoning"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
      { id: "s4", pos: "v", tags: ["process"] },
      { id: "s5", pos: "adj", tags: ["description"] },
      { id: "s6", pos: "adj", tags: ["evaluation"] },
      { id: "s7", pos: "v", tags: ["social", "cooperation"] },
    ],
  },
  {
    id: "daily_weekend_cleaning_32",
    title: "週末大掃除",
    titleZh: "週末大掃除",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "Thoroughly cleaning the entire messy house on sunny weekends often makes me feel quite {{s1}} and exhausted. First, I have to heavily lift and {{s2}} the clunky old vacuum cleaner all the way up the steep wooden stairs. Carefully dusting the high bookshelves always takes a {{s3}} amount of physical effort and time. Sometimes I loudly put on my favorite pop music to happily {{s4}} the otherwise extremely boring and quiet atmosphere. Once I finally finish all the chores, I proudly {{s5}} my cleaning success to my lazy roommates. Having a totally spotless room is a very {{s6}} and satisfying feeling.",
    contentZh:
      "週末大掃除",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["physical", "action"] },
      { id: "s3", pos: "adj", tags: ["quantity"] },
      { id: "s4", pos: "v", tags: ["state_change"] },
      { id: "s5", pos: "v", tags: ["communication"] },
      { id: "s6", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "workplace_budget_cuts_33",
    title: "嚴峻的財務赤字報告",
    titleZh: "嚴峻的財務赤字報告",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "workplace",
    content:
      "The deeply anticipated quarterly financial report tragically revealed a {{s1}} and alarming cash deficit in the core operating budget. The stressed CFO reluctantly had to formally {{s2}} the undeniably grim fiscal reality to the angry corporate shareholders during the emergency call. This unexpected massive revenue shortfall could easily {{s3}} immediate departmental layoffs and permanently {{s4}} institutional investor confidence. The internal finance committee must swiftly and ruthlessly {{s5}} aggressive systemic cost-cutting measures across all branches. It is absolutely {{s6}} that the remaining executive leadership team does not foolishly {{s7}} these early economic warnings lightly.",
    contentZh:
      "嚴峻的財務赤字報告",
    slots: [
      { id: "s1", pos: "adj", tags: ["quantity"] },
      { id: "s2", pos: "v", tags: ["communication"] },
      { id: "s3", pos: "v", tags: ["cause_effect"] },
      { id: "s4", pos: "v", tags: ["state_change"] },
      { id: "s5", pos: "v", tags: ["process"] },
      { id: "s6", pos: "adj", tags: ["evaluation"] },
      { id: "s7", pos: "v", tags: ["cognitive", "reasoning"] },
    ],
  },
  {
    id: "travel_canceled_flight_voucher_34",
    title: "航班取消與補償金",
    titleZh: "航班取消與補償金",
    level: ["highschool", "toeic"],
    domain: "travel",
    content:
      "The sudden and completely unannounced evening flight cancellation left hundreds of stranded passengers feeling incredibly {{s1}} and helpless. The overwhelmed airline gate staff struggled mightily to clearly {{s2}} the complex technical reasons behind the sudden engine mechanical failure. We frustratingly had to sit and wait for a horribly {{s3}} period on the cold floor in the crowded terminal. This massive logistical disruption will inevitably {{s4}} many angry travelers to completely miss their important connecting international flights. To desperately attempt to {{s5}} the escalating chaotic situation, the airline company finally offered a {{s6}} cash voucher for future travel.",
    contentZh:
      "航班取消與補償金",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["communication"] },
      { id: "s3", pos: "adj", tags: ["time", "duration"] },
      { id: "s4", pos: "v", tags: ["cause_effect"] },
      { id: "s5", pos: "v", tags: ["state_change"] },
      { id: "s6", pos: "adj", tags: ["quantity"] },
    ],
  },
  {
    id: "health_dentist_cavity_35",
    title: "牙醫診所補蛀牙",
    titleZh: "牙醫診所補蛀牙",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "Visiting the local dentist clinic for a checkup always makes me feel a little bit {{s1}} and scared. The gentle dental assistant politely asked me to carefully {{s2}} the small paper cup and thoroughly rinse my dry mouth. The observant dentist unfortunately found a {{s3}} small cavity in my back molar that immediately needed drilling and filling. She patiently tried to visually {{s4}} how to brush my back teeth properly using a plastic model. If I don't significantly improve my daily flossing habits soon, my overall dental health might painfully {{s5}} for the worse. Maintaining good oral hygiene is highly {{s6}}.",
    contentZh:
      "牙醫診所補蛀牙",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["physical", "action"] },
      { id: "s3", pos: "adj", tags: ["time", "duration"] },
      { id: "s4", pos: "v", tags: ["communication"] },
      { id: "s5", pos: "v", tags: ["state_change"] },
      { id: "s6", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "shopping_flea_market_haggling_36",
    title: "跳蚤市場殺價",
    titleZh: "跳蚤市場殺價",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "Successfully shopping for rare bargains at the crowded weekend local flea market requires {{s1}} and sharp street negotiation skills. I luckily found a wonderfully {{s2}} brass antique reading lamp that I desperately wanted to buy for my living room. I nervously had to step up and {{s3}} with the stubborn older vendor to significantly lower the asking price. After a surprisingly {{s4}} and intense back-and-forth verbal discussion, we finally reached a fair mutual agreement. This clever haggling saved me a {{s5}} amount of hard-earned money, which instantly and joyfully {{s6}} my entire afternoon mood.",
    contentZh:
      "跳蚤市場殺價",
    slots: [
      { id: "s1", pos: "adj", tags: ["evaluation"] },
      { id: "s2", pos: "adj", tags: ["description"] },
      { id: "s3", pos: "v", tags: ["communication"] },
      { id: "s4", pos: "adj", tags: ["time", "duration"] },
      { id: "s5", pos: "adj", tags: ["quantity"] },
      { id: "s6", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "academic_peer_review_critique_37",
    title: "嚴苛的學術同行評審",
    titleZh: "嚴苛的學術同行評審",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "academic",
    content:
      "The double-blind academic peer-review process is fundamentally {{s1}} for stringently maintaining objective global scientific integrity. Assigned anonymous expert reviewers must meticulously and rigorously {{s2}} the newly submitted research manuscripts for any subtle hidden methodological errors. A single undetected logical flaw can swiftly and mercilessly {{s3}} the outright rejection of the entire drafted paper. Hardworking primary authors often feel deeply {{s4}} when initially reading the sometimes harsh and blunt editorial critiques. However, they must maturely {{s5}} that providing constructive critical feedback is purely meant to heavily {{s6}} and elevate the final published quality of their ongoing experimental research.",
    contentZh:
      "嚴苛的學術同行評審",
    slots: [
      { id: "s1", pos: "adj", tags: ["evaluation"] },
      { id: "s2", pos: "v", tags: ["process"] },
      { id: "s3", pos: "v", tags: ["cause_effect"] },
      { id: "s4", pos: "adj", tags: ["emotion"] },
      { id: "s5", pos: "v", tags: ["cognitive", "reasoning"] },
      { id: "s6", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "hotel_lost_phone_recovered_38",
    title: "飯店尋回遺失手機",
    titleZh: "飯店尋回遺失手機",
    level: ["elementary", "highschool"],
    domain: "travel",
    content:
      "I suddenly felt extremely {{s1}} and panicked when I realized I accidentally left my expensive smartphone in the locked hotel room. I quickly ran all the way back downstairs to urgently {{s2}} with the helpful front desk receptionist. She immediately radioed and sent a trusted security staff member to safely {{s3}} the forgotten phone from the messy bedside wooden table. Fortunately, the whole stressful retrieval process only took a very {{s4}} brief moment of waiting. Safely returning the precious personal item rapidly helped {{s5}} my racing heart and intense anxiety, and I was very deeply grateful.",
    contentZh:
      "飯店尋回遺失手機",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["communication"] },
      { id: "s3", pos: "v", tags: ["physical", "action"] },
      { id: "s4", pos: "adj", tags: ["time", "duration"] },
      { id: "s5", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "science_climate_warning_39",
    title: "氣候變遷與極端天氣",
    titleZh: "氣候變遷與極端天氣",
    level: ["highschool", "toeic"],
    domain: "science",
    content:
      "Unchecked global warming unfortunately continues to violently {{s1}} highly unpredictable and destructive regional weather patterns across the continents. Top environmental scientists frequently {{s2}} dire and urgent public warnings about the rapidly rising coastal sea levels. We must aggressively heavily {{s3}} large-scale renewable solar and wind energy solutions before the fragile global environment relentlessly continues to {{s4}} beyond any possible repair. Alarmingly, a {{s5}} and growing number of vulnerable animal species are already officially classified as critically endangered. It is practically {{s6}} that stubborn national politicians do not blindly {{s7}} documented climate change as merely a temporary cyclical hoax.",
    contentZh:
      "氣候變遷與極端天氣",
    slots: [
      { id: "s1", pos: "v", tags: ["cause_effect"] },
      { id: "s2", pos: "v", tags: ["communication"] },
      { id: "s3", pos: "v", tags: ["process"] },
      { id: "s4", pos: "v", tags: ["state_change"] },
      { id: "s5", pos: "adj", tags: ["quantity"] },
      { id: "s6", pos: "adj", tags: ["evaluation"] },
      { id: "s7", pos: "v", tags: ["cognitive", "reasoning"] },
    ],
  },
  {
    id: "daily_painting_hobby_40",
    title: "初學水彩畫",
    titleZh: "初學水彩畫",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "Bravely starting a completely new creative hobby like watercolor painting can be quite {{s1}} at first. You definitely need a {{s2}} amount of inner patience to slowly learn the basic foundational brush techniques. First, you must gently {{s3}} the thin wooden brush and carefully mix the bright wet colors on the plastic palette. The supportive community art teacher tries her best to slowly {{s4}} the visual perspective basics clearly to the adult beginners. Over time and practice, your artistic drawing skills will naturally {{s5}} and improve. It is a highly {{s6}} and therapeutic way to mentally relax after a long hard day at work.",
    contentZh:
      "初學水彩畫",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "adj", tags: ["quantity"] },
      { id: "s3", pos: "v", tags: ["physical", "action"] },
      { id: "s4", pos: "v", tags: ["communication"] },
      { id: "s5", pos: "v", tags: ["state_change"] },
      { id: "s6", pos: "adj", tags: ["evaluation"] },
    ],
  },
];
