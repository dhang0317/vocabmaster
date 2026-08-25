import type { ScenarioTemplate } from './scenarioTemplates';

/** User scenarios C13 (2 templates) */
export const USER_SCENARIO_TEMPLATES_C13: ScenarioTemplate[] = [
  {
    id: "mixed_advanced_health_study",
    title: "Mixed Advanced Health Study",
    titleZh: "健康研究結果",
    level: ["toefl_ielts", "advanced"],
    domain: "daily",
    content:
      "Researchers conducted a long-term study of daily habits and reported that several behaviors were associated with better overall health. However, they warned readers not to assume that one habit directly caused every positive outcome. The researchers tried to {{s1}} alternative explanations and adjusted their analysis for several factors. They described the evidence as {{s2}} but not conclusive. The report emphasized that health is influenced by many connected factors, including environment, behavior, and access to care. The cautious language helped readers understand what the study could show and what remained uncertain.",
    contentZh:
      "健康研究結果",
    slots: [
      { id: "s1", pos: "v", tags: ["cognitive"] },
      { id: "s2", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "mixed_final_school_project",
    title: "Mixed Final School Project",
    titleZh: "完成學期專題",
    level: ["highschool", "toeic"],
    domain: "academic",
    content:
      "On the final week of a school project, Maya and her classmates reviewed everything they had completed. A few details were still missing, so they created a checklist to {{s1}} the final stage. One student checked the references, another edited the slides, and Maya prepared the conclusion. She was {{s2}} because the project had seemed difficult at the beginning. After several hours, the final version was ready. The teacher said the group had done a {{s3}} job and praised them for staying organized. Maya felt proud when she saw the finished presentation.",
    contentZh:
      "完成學期專題",
    slots: [
      { id: "s1", pos: "v", tags: ["process"] },
      { id: "s2", pos: "adj", tags: ["emotion"] },
      { id: "s3", pos: "adj", tags: ["evaluation"] },
    ],
  }
];
