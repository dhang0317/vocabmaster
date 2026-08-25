import type { ScenarioTemplate } from './scenarioTemplates';

/** User scenarios C7 (10 templates) */
export const USER_SCENARIO_TEMPLATES_C7: ScenarioTemplate[] = [
  {
    id: "description_rainy_market",
    title: "Description Rainy Market",
    titleZh: "雨中的市場",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "On a rainy evening, Daniel walked through a crowded street market. Colorful umbrellas covered the narrow paths, and steam rose from food stalls. The scene looked {{s1}}, with lights reflected across the wet pavement. Some stalls were packed with customers, while others were nearly empty. Despite the rain, there was an {{s2}} supply of snacks and drinks to choose from. Daniel stopped at a noodle stand and watched the cook prepare each bowl. The market felt busy but welcoming, and he stayed longer than planned because there was so much to see.",
    contentZh:
      "雨中的市場",
    slots: [
      { id: "s1", pos: "adj", tags: ["description"] },
      { id: "s2", pos: "adj", tags: ["quantity"] },
    ],
  },
  {
    id: "description_science_model",
    title: "Description Science Model",
    titleZh: "精密科學模型",
    level: ["toefl_ielts", "advanced"],
    domain: "science",
    content:
      "At a museum exhibition, visitors could examine a detailed model of a human cell. Under bright lights, the structures inside the model appeared surprisingly {{s1}}. Small labels explained how different parts worked together to maintain the cell. The guide pointed out several {{s2}} features that were difficult to see from a distance. Visitors could rotate the model and inspect each section from different angles. The exhibition was designed to make complex biology easier to understand, and many students said the physical model helped them remember information more clearly than a textbook diagram.",
    contentZh:
      "精密科學模型",
    slots: [
      { id: "s1", pos: "adj", tags: ["description"] },
      { id: "s2", pos: "adj", tags: ["description"] },
    ],
  },
  {
    id: "quantity_grocery_scarcity",
    title: "Quantity Grocery Scarcity",
    titleZh: "超市缺貨",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "After a severe storm, a supermarket in town had trouble receiving fresh food. By the afternoon, the supply of vegetables had become {{s1}}, and several shelves were almost empty. Store workers explained that delivery trucks had been delayed by road conditions. Customers were asked to buy only what they needed so that more families could find basic items. The store expected the situation to improve once transport returned to normal. Although the shortage was temporary, it reminded local residents how quickly bad weather can affect the availability of everyday products.",
    contentZh:
      "超市缺貨",
    slots: [
      { id: "s1", pos: "adj", tags: ["quantity"] },
    ],
  },
  {
    id: "quantity_large_event",
    title: "Quantity Large Event",
    titleZh: "大型活動人潮",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "A popular singer held a free outdoor concert in the city park. By early afternoon, a {{s1}} crowd had gathered near the stage. Organizers opened additional entrances and added more staff to manage the flow of visitors. They also asked people to leave enough space around emergency routes. Despite the large number of attendees, the event remained organized because the crowd followed instructions. When the concert ended, people left gradually rather than all at once. The organizers later said that careful planning was essential when an event attracts such a large audience.",
    contentZh:
      "大型活動人潮",
    slots: [
      { id: "s1", pos: "adj", tags: ["quantity"] },
    ],
  },
  {
    id: "quantity_water_resources",
    title: "Quantity Water Resources",
    titleZh: "水資源管理",
    level: ["toefl_ielts", "advanced"],
    domain: "daily",
    content:
      "A rural region experienced a long dry season that reduced the amount of available water. Farmers were told to monitor wells carefully because the remaining supply had become {{s1}}. Local officials introduced limits on certain uses and encouraged residents to repair leaking pipes. The restrictions were temporary, but scientists warned that future dry periods could last longer. They recommended improving storage systems and using water more efficiently. The community agreed that even when resources seem {{s2}}, careful planning can help reduce waste and protect essential supplies.",
    contentZh:
      "水資源管理",
    slots: [
      { id: "s1", pos: "adj", tags: ["quantity"] },
      { id: "s2", pos: "adj", tags: ["quantity"] },
    ],
  },
  {
    id: "time_long_training",
    title: "Time Long Training",
    titleZh: "長時間訓練",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "The school choir prepared for an important performance with several weeks of practice. The director knew that a {{s1}} period of rehearsal could be tiring, so she divided practices into shorter sections. Students worked on difficult songs first and rested between sessions. At the beginning, progress was slow, but the quality of their singing gradually improved. On performance day, the group felt {{s2}} when they heard the audience applaud. The director reminded them that improvement usually requires patience and regular practice rather than one intense effort.",
    contentZh:
      "長時間訓練",
    slots: [
      { id: "s1", pos: "adj", tags: ["time"] },
      { id: "s2", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "time_construction_project",
    title: "Time Construction Project",
    titleZh: "道路施工",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "A major road near the city center was closed for repairs. Officials warned drivers that the closure would cause a {{s1}} change to normal traffic patterns. They posted signs several weeks before construction began and suggested alternative routes. During the project, traffic was slow during the morning rush, but conditions began to {{s2}} after workers adjusted the road plan. The construction took longer than expected, yet officials said the work was necessary to improve safety. Once the road reopened, commuters quickly returned to their normal routes.",
    contentZh:
      "道路施工",
    slots: [
      { id: "s1", pos: "adj", tags: ["time"] },
      { id: "s2", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "time_short_break",
    title: "Time Short Break",
    titleZh: "短暫休息",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "After studying for nearly two hours, Jenny decided to take a {{s1}} break. She stood up, opened the window, and drank some water. The short rest helped her clear her mind and return to her desk with more energy. Before continuing, she checked the next section of her notes and decided which task to finish first. Although the break lasted only a few minutes, it made the rest of the study session feel easier. Jenny realized that a brief pause could be more useful than forcing herself to work when she was already tired.",
    contentZh:
      "短暫休息",
    slots: [
      { id: "s1", pos: "adj", tags: ["time"] },
    ],
  },
  {
    id: "time_delayed_repair",
    title: "Time Delayed Repair",
    titleZh: "電梯維修",
    level: ["highschool", "toeic"],
    domain: "daily",
    content:
      "The elevator in an apartment building stopped working unexpectedly. The repair company said a replacement part would take several days to arrive, creating a {{s1}} inconvenience for residents. People on higher floors had to use the stairs, and older residents received help from neighbors. The building manager kept everyone informed and arranged temporary assistance when needed. After the repair was completed, the elevator returned to normal, and the inconvenience quickly began to {{s2}}. Residents agreed that regular maintenance might help prevent similar problems in the future.",
    contentZh:
      "電梯維修",
    slots: [
      { id: "s1", pos: "adj", tags: ["time"] },
      { id: "s2", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "cognition_mistaken_assumption",
    title: "Cognition Mistaken Assumption",
    titleZh: "錯誤假設",
    level: ["highschool", "toeic"],
    domain: "academic",
    content:
      "When Mark saw an empty classroom, he assumed the teacher had canceled the lesson. He went to the cafeteria instead, only to discover a message saying the class had moved to another room. Mark realized he had failed to {{s1}} the announcement carefully. He felt {{s2}} because he had wasted time based on an incorrect assumption. After that day, he made a habit of checking school messages twice before changing his plans. The experience was simple, but it taught him that acting on incomplete information can create avoidable problems.",
    contentZh:
      "錯誤假設",
    slots: [
      { id: "s1", pos: "v", tags: ["cognitive"] },
      { id: "s2", pos: "adj", tags: ["emotion"] },
    ],
  }
];
