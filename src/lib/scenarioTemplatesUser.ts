import type { ScenarioTemplate } from './scenarioTemplates';

/** User-expanded scenario templates (batch 3) — 60 templates from 情境庫 */
export const USER_SCENARIO_TEMPLATES: ScenarioTemplate[] = [
  {
    id: "academic_ai_ethics_and_policy",
    title: "Academic Ai Ethics And Policy",
    titleZh: "人工智慧倫理與審查機制",
    level: ["toefl_ielts", "advanced"],
    domain: "academic",
    content:
      "As automated algorithmic systems expand across healthcare, academic panels must {{s1}} potential biases embedded in machine learning datasets. Overlooking these errors can {{s2}} serious ethical dilemmas in diagnostic accuracy. University scholars are encouraging computer engineers to {{s3}} with legal ethicists to establish robust evaluation standards before deploying algorithms publicly.",
    contentZh:
      "人工智慧倫理與審查機制",
    slots: [
      { id: "s1", pos: "v", tags: ["cognitive"] },
      { id: "s2", pos: "v", tags: ["cause_effect"] },
      { id: "s3", pos: "v", tags: ["social"] },
    ],
  },
];
