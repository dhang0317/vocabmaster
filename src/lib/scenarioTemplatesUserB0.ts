import type { ScenarioTemplate } from './scenarioTemplates';

/** User scenarios B0 */
export const USER_SCENARIO_TEMPLATES_B0: ScenarioTemplate[] = [
  {
    id: "science_climate_biodiversity_impact",
    title: "Science Climate Biodiversity Impact",
    titleZh: "氣候變遷與生物棲地危機",
    level: ["toefl_ielts", "advanced"],
    domain: "science",
    content:
      "Ecological reports indicate that rising ocean temperatures continue to {{s1}} widespread reef bleaching in coastal habitats. Researchers must {{s2}} complex satellite data to pinpoint marine zones under immediate threat. Establishing protected marine sanctuaries is {{s3}} to prevent a {{s4}} loss of aquatic life, ensuring coastal ecosystems retain resilience against ongoing climate shifts.",
    contentZh:
      "氣候變遷與生物棲地危機",
    slots: [
      { id: "s1", pos: "v", tags: ["cause_effect"] },
      { id: "s2", pos: "v", tags: ["cognitive"] },
      { id: "s3", pos: "adj", tags: ["evaluation"] },
      { id: "s4", pos: "adj", tags: ["quantity"] },
    ],
  },
  {
    id: "science_climate_biodiversity_study",
    title: "Science Climate Biodiversity Study",
    titleZh: "氣候衝擊與物種棲地變遷",
    level: ["toefl_ielts", "advanced"],
    domain: "science",
    content:
      "Environmental researchers monitoring coastal wetlands have noted that rising sea temperatures continue to {{s1}} rapid habitat shift in migratory bird species. Scientists must {{s2}} vast sets of ecological data to identify critical protection zones. Establishing marine reserves is {{s3}} to prevent a {{s4}} decline in local biodiversity over the next decade.",
    contentZh:
      "氣候衝擊與物種棲地變遷",
    slots: [
      { id: "s1", pos: "v", tags: ["cause_effect"] },
      { id: "s2", pos: "v", tags: ["cognitive"] },
      { id: "s3", pos: "adj", tags: ["evaluation"] },
      { id: "s4", pos: "adj", tags: ["quantity"] },
    ],
  },
  {
    id: "science_climate_impact",
    title: "Science Climate Impact",
    titleZh: "氣候變遷與環境衝擊",
    level: ["toefl_ielts", "advanced"],
    domain: "science",
    content:
      "Rising global temperatures have caused polar ice caps to {{s1}} at an unprecedented rate. Environmentalists warn that this trend will lead to a {{s2}} rise in sea levels, threatening coastal ecosystems. It is {{s3}} that international organizations work together to create effective sustainability policies before these climate shifts become completely irreversible.",
    contentZh:
      "氣候變遷與環境衝擊",
    slots: [
      { id: "s1", pos: "v", tags: ["state_change"] },
      { id: "s2", pos: "adj", tags: ["quantity"] },
      { id: "s3", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "science_glacier_retreat_policy",
    title: "Science Glacier Retreat Policy",
    titleZh: "氣候變遷與極地融冰警告",
    level: ["toefl_ielts", "advanced"],
    domain: "science",
    content:
      "Rising global surface temperatures are causing polar ice sheets to {{s1}} at an accelerating pace. Environmental experts warn that this trend could result in a {{s2}} rise in sea levels across coastal regions. It remains {{s3}} for international agencies to coordinate actionable environmental policies before regional ecosystems suffer permanent damage.",
    contentZh:
      "氣候變遷與極地融冰警告",
    slots: [
      { id: "s1", pos: "v", tags: ["state_change"] },
      { id: "s2", pos: "adj", tags: ["quantity"] },
      { id: "s3", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "science_marine_ecosystem",
    title: "Science Marine Ecosystem",
    titleZh: "海洋生態危機與酸化研究",
    level: ["toefl_ielts", "advanced"],
    domain: "science",
    content:
      "Rising atmospheric carbon levels continue to accelerate ocean acidification, causing sensitive coral reefs to {{s1}} worldwide. Marine biologists report that loss of habitat threatens a {{s2}} proportion of marine biodiversity. It is {{s3}} for coastal governments to {{s4}} strict marine conservation policies to safeguard vulnerable aquatic species before ecosystems collapse.",
    contentZh:
      "海洋生態危機與酸化研究",
    slots: [
      { id: "s1", pos: "v", tags: ["state_change"] },
      { id: "s2", pos: "adj", tags: ["quantity"] },
      { id: "s3", pos: "adj", tags: ["evaluation"] },
      { id: "s4", pos: "v", tags: ["process"] },
    ],
  },
  {
    id: "science_space_exploration_discovery",
    title: "Science Space Exploration Discovery",
    titleZh: "深空天體探測與數據解讀",
    level: ["toefl_ielts", "advanced"],
    domain: "science",
    content:
      "Observational data gathered by the deep-space telescope revealed a {{s1}} amount of organic molecules near a distant star cluster. Astrophysics teams hope to {{s2}} these chemical signals to better understand planetary formation. Researchers hypothesize that localized radiation spikes could {{s3}} chemical reactions essential for organic synthesis in deep space environments.",
    contentZh:
      "深空天體探測與數據解讀",
    slots: [
      { id: "s1", pos: "adj", tags: ["quantity"] },
      { id: "s2", pos: "v", tags: ["cognitive"] },
      { id: "s3", pos: "v", tags: ["cause_effect"] },
    ],
  },
  {
    id: "shopping_e_commerce_return_dispute",
    title: "Shopping E Commerce Return Dispute",
    titleZh: "網購商品瑕疵退款協調",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "I ordered a smartphone holder online, but upon unboxing, the build quality felt completely {{s1}}. I promptly decided to {{s2}} with customer service to request a full refund. The support agent instructed me to {{s3}} the item back via a local drop-off point. I felt {{s4}} when my refund confirmation arrived within twenty-four hours.",
    contentZh:
      "網購商品瑕疵退款協調",
    slots: [
      { id: "s1", pos: "adj", tags: ["evaluation"] },
      { id: "s2", pos: "v", tags: ["communication"] },
      { id: "s3", pos: "v", tags: ["physical"] },
      { id: "s4", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "shopping_electronics_warranty_claim",
    title: "Shopping Electronics Warranty Claim",
    titleZh: "消費電子產品保固維修爭議",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "I recently purchased a wireless headset, but its battery life turned out to be terribly {{s1}}. I decided to {{s2}} with customer service to request a replacement under warranty. The representative asked me to {{s3}} the defective item to their service center. I was {{s4}} when they approved a free replacement within twenty-four hours.",
    contentZh:
      "消費電子產品保固維修爭議",
    slots: [
      { id: "s1", pos: "adj", tags: ["evaluation"] },
      { id: "s2", pos: "v", tags: ["communication"] },
      { id: "s3", pos: "v", tags: ["physical"] },
      { id: "s4", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "shopping_online_return_experience",
    title: "Shopping Online Return Experience",
    titleZh: "網購商品瑕疵退貨經驗",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "I recently ordered a sweater online, but upon delivery, the stitching turned out to be quite {{s1}}. I promptly reached out to {{s2}} with customer support to arrange a return. They requested that I {{s3}} the package back via a local drop-off station. Despite the minor delay, I was pleasantly surprised by their efficient service.",
    contentZh:
      "網購商品瑕疵退貨經驗",
    slots: [
      { id: "s1", pos: "adj", tags: ["evaluation"] },
      { id: "s2", pos: "v", tags: ["communication"] },
      { id: "s3", pos: "v", tags: ["physical"] },
    ],
  },
  {
    id: "shopping_product_return",
    title: "Shopping Product Return",
    titleZh: "網購商品瑕疵退貨流程",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "I recently ordered a jacket online, but when it arrived, the quality turned out to be {{s1}}. I tried to {{s2}} with customer service to request a full refund. The representative asked me to {{s3}} the item back using their prepaid shipping label. Although the process took a few days, I was {{s4}} with the fast response.",
    contentZh:
      "網購商品瑕疵退貨流程",
    slots: [
      { id: "s1", pos: "adj", tags: ["evaluation"] },
      { id: "s2", pos: "v", tags: ["communication"] },
      { id: "s3", pos: "v", tags: ["physical"] },
      { id: "s4", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "shopping_e_commerce_dispute",
    title: "Shopping E Commerce Dispute",
    titleZh: "跨境網購爭議退款申請",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "I ordered high-end audio equipment online, but the sound quality proved entirely {{s1}} compared to the advertised specs. I immediately initiated a formal ticket to {{s2}} with the seller regarding a refund. The vendor insisted that I {{s3}} the defective unit back to their overseas warehouse. While waiting for processing, I remained notably {{s4}} about whether my shipping costs would be fully reimbursed.",
    contentZh:
      "跨境網購爭議退款申請",
    slots: [
      { id: "s1", pos: "adj", tags: ["evaluation"] },
      { id: "s2", pos: "v", tags: ["communication"] },
      { id: "s3", pos: "v", tags: ["physical"] },
      { id: "s4", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "shopping_warranty_claim_dispute",
    title: "Shopping Warranty Claim Dispute",
    titleZh: "電子產品保固維修爭議",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "My laptop screen flickered constantly after a software update, rendering the device nearly unusable. I contacted technical support to {{s1}} the exact nature of the defect, but their initial response felt disappointing and {{s2}}. After I threatened to escalate the claim online, the manager agreed to {{s3}} a full hardware replacement free of charge.",
    contentZh:
      "電子產品保固維修爭議",
    slots: [
      { id: "s1", pos: "v", tags: ["communication"] },
      { id: "s2", pos: "adj", tags: ["evaluation"] },
      { id: "s3", pos: "v", tags: ["process"] },
    ],
  },
  {
    id: "travel_hiking_trail_adventure",
    title: "Travel Hiking Trail Adventure",
    titleZh: "高山健行與營地搭建",
    level: ["elementary", "highschool"],
    domain: "travel",
    content:
      "During our trek through the national park, we had to {{s1}} through dense forests before reaching the campsite. The summit offered a {{s2}} view of the valley below as the sun began to set. After setting up our tents, sitting around the campfire filled the exhausted group with a deep sense of {{s3}}.",
    contentZh:
      "高山健行與營地搭建",
    slots: [
      { id: "s1", pos: "v", tags: ["physical"] },
      { id: "s2", pos: "adj", tags: ["evaluation"] },
      { id: "s3", pos: "n", tags: ["emotion"] },
    ],
  },
  {
    id: "travel_lost_in_city",
    title: "Travel Lost In City",
    titleZh: "城市探險中的迷路經歷",
    level: ["elementary", "highschool"],
    domain: "travel",
    content:
      "During my trip to Tokyo, I decided to {{s1}} through the narrow alleyways near the market. The surrounding architecture was filled with {{s2}} details that caught my attention. However, after walking for an hour, I realized I was lost. Fortunately, a friendly local helped me {{s3}} with the train station master, who gave me a map.",
    contentZh:
      "城市探險中的迷路經歷",
    slots: [
      { id: "s1", pos: "v", tags: ["physical"] },
      { id: "s2", pos: "adj", tags: ["evaluation"] },
      { id: "s3", pos: "v", tags: ["social"] },
    ],
  },
  {
    id: "travel_mountain_expedition",
    title: "Travel Mountain Expedition",
    titleZh: "高山健行探險回憶",
    level: ["elementary", "highschool"],
    domain: "travel",
    content:
      "Last autumn, I joined a guided hiking group to {{s1}} through the dense mountain trails. The surrounding landscape featured {{s2}} autumn foliage that left everyone in awe. When unexpected fog blanketed the peak, the guide stepped in to {{s3}} our nervous group members, helping us reach the summit safety hut with ease.",
    contentZh:
      "高山健行探險回憶",
    slots: [
      { id: "s1", pos: "v", tags: ["physical"] },
      { id: "s2", pos: "adj", tags: ["evaluation"] },
      { id: "s3", pos: "v", tags: ["social"] },
    ],
  }
];
