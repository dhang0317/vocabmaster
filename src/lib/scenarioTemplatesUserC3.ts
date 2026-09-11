import type { ScenarioTemplate } from './scenarioTemplates';

/** User scenarios C3 (10 templates) */
export const USER_SCENARIO_TEMPLATES_C3: ScenarioTemplate[] = [
  {
    id: "health_stress_school",
    title: "Health Stress School",
    titleZh: "學業壓力",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "During a busy month at school, Nina had several tests and projects at the same time. She started feeling {{s1}} whenever she looked at her schedule. Her counselor encouraged her to {{s2}} the workload into smaller tasks instead of thinking about everything at once. Nina also talked with her family about how she was feeling. Sharing the problem helped {{s3}} some of her stress, and she found it easier to concentrate. She learned that asking for support was not a sign of weakness. It was a practical way to manage pressure before it became overwhelming.",
    contentZh:
      "學業壓力",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["process"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "health_food_label",
    title: "Health Food Label",
    titleZh: "閱讀食品標示",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "At the supermarket, Daniel compared two breakfast cereals that looked almost identical. He decided to read the nutrition labels before choosing one. The first package contained a {{s1}} amount of added sugar, while the second had much less. Daniel tried to {{s2}} the serving sizes carefully because the numbers could be misleading if he compared different portions. He eventually chose the second cereal and felt satisfied that he had made an informed decision. The experience taught him that a product's front label does not always provide enough information to judge whether it suits his needs.",
    contentZh:
      "閱讀食品標示",
    slots: [
      { id: "s1", pos: "adj", tags: ["quantity"] },
      { id: "s2", pos: "v", tags: ["cognitive"] },
    ],
  },
  {
    id: "shopping_wrong_size",
    title: "Shopping Wrong Size",
    titleZh: "買錯尺寸",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "Lena ordered a jacket online, but the size was too small when it arrived. She felt {{s1}} because she had checked the size chart before ordering. She contacted customer service and asked them to {{s2}} the return process. The employee explained that Lena could send the jacket back within thirty days. The instructions were simple, so Lena packed the item carefully and kept the receipt. Although the mistake was inconvenient, the company handled the return quickly. Lena later received the correct size and decided to read customer reviews more carefully before ordering clothes online again.",
    contentZh:
      "買錯尺寸",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["communication"] },
    ],
  },
  {
    id: "shopping_delayed_package",
    title: "Shopping Delayed Package",
    titleZh: "包裹延遲",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "Tom ordered a birthday gift online, but the delivery date passed without any update. He became {{s1}} because the gift was needed for the weekend. He checked the tracking page and saw that the package had been delayed at a distribution center. Tom contacted the store and asked whether the company could {{s2}} the delivery request. The support agent said the package should arrive within two days. Fortunately, the delay did not {{s3}} into a serious problem because Tom still had time before the party. The gift arrived on Friday afternoon, just in time.",
    contentZh:
      "包裹延遲",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["process"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "shopping_product_defect",
    title: "Shopping Product Defect",
    titleZh: "商品有瑕疵",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "When Maria opened her new headphones, she noticed that one side had a strange buzzing sound. She tested the headphones on another device, but the problem remained. Feeling {{s1}}, she returned to the store with the receipt. The employee listened to the problem and asked Maria to {{s2}} exactly when the noise appeared. After testing the headphones, the employee confirmed that they were defective and offered a replacement. Maria accepted the new pair and appreciated the store's response. She thought the solution was {{s3}} because it was quick and fair.",
    contentZh:
      "商品有瑕疵",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["communication"] },
      { id: "s3", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "shopping_sale_confusion",
    title: "Shopping Sale Confusion",
    titleZh: "折扣標示誤會",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "At a clothing store, Jason found a shirt marked as thirty percent off. At the register, however, the discount was not applied. Jason politely asked the cashier to {{s1}} whether the sale sign was still valid. The cashier checked with the manager and discovered that the sign had not been removed after the promotion ended. The mistake was {{s2}}, but the manager apologized and honored the advertised price. Jason thanked the staff and suggested checking all displays before the next promotion. The store later replaced the outdated signs to prevent similar confusion.",
    contentZh:
      "折扣標示誤會",
    slots: [
      { id: "s1", pos: "v", tags: ["communication"] },
      { id: "s2", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "shopping_gift_return",
    title: "Shopping Gift Return",
    titleZh: "退換禮物",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "Anna received a sweater as a birthday gift, but the color was not her style. She felt {{s1}} because she appreciated the gift and did not want to seem ungrateful. Her friend told her that the store allowed exchanges. Anna brought the sweater and receipt to the shop and asked whether she could {{s2}} another color. The employee explained the policy and helped her find a different design. Anna was relieved because the process was simple. She left the store happy and later sent her friend a message thanking her for the thoughtful present.",
    contentZh:
      "退換禮物",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["communication"] },
    ],
  },
  {
    id: "daily_bus_delay",
    title: "Daily Bus Delay",
    titleZh: "公車誤點",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "Every morning, Kevin takes the same bus to school. One rainy day, the bus was much later than usual, and several students were waiting at the stop. Kevin began to feel {{s1}} because he had an important class that morning. He checked the transportation app and tried to {{s2}} the updated arrival time. After another ten minutes, the bus finally appeared. The delay was frustrating, but it did not {{s3}} into a major problem because the teacher arrived late too. Kevin reached school just before the lesson started and decided to leave home five minutes earlier the next day.",
    contentZh:
      "公車誤點",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["cognitive"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "daily_grocery_list",
    title: "Daily Grocery List",
    titleZh: "超市採買",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "On Saturday morning, Rachel went to the supermarket with a short shopping list. She wanted vegetables, fruit, bread, and milk. The store was crowded, so she tried to {{s1}} through the aisles without blocking other shoppers. Near the produce section, she noticed an {{s2}} supply of apples on sale. She bought a few and continued toward the checkout. While waiting in line, Rachel checked her list again and realized she had forgotten the bread. She quickly returned to the bakery section, found a loaf, and finished her shopping before the store became even busier.",
    contentZh:
      "超市採買",
    slots: [
      { id: "s1", pos: "v", tags: ["physical"] },
      { id: "s2", pos: "adj", tags: ["quantity"] },
    ],
  },
  {
    id: "daily_cooking_dinner",
    title: "Daily Cooking Dinner",
    titleZh: "第一次做晚餐",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "Sam decided to cook dinner for his family for the first time. He chose a simple pasta recipe and prepared all the ingredients before starting. The instructions looked easy, but he became {{s1}} when the sauce started sticking to the pan. He turned down the heat and tried to {{s2}} the sauce before it burned. His sister watched from the kitchen and suggested adding a little water. The sauce began to {{s3}}, and Sam relaxed. The meal was not perfect, but everyone enjoyed it. Sam felt proud and said he would try a more difficult recipe next weekend.",
    contentZh:
      "第一次做晚餐",
    slots: [
      { id: "s1", pos: "adj", tags: ["emotion"] },
      { id: "s2", pos: "v", tags: ["process"] },
      { id: "s3", pos: "v", tags: ["state_change"] },
    ],
  }
];
