import type { ScenarioTemplate } from './scenarioTemplates';

/** User scenarios A0 */
export const USER_SCENARIO_TEMPLATES_A0: ScenarioTemplate[] = [
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
  {
    id: "daily_community_renovation",
    title: "Daily Community Renovation",
    titleZh: "社區公設整修溝通協調",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "Construction work on our building's elevator caused a {{s1}} inconvenience for elderly residents living on upper floors. Rather than venting frustration online, neighbors chose to {{s2}} with the building committee during an open meeting. The contractors agreed to adjust their working hours, leading to an immediate {{s3}} among all homeowners.",
    contentZh:
      "社區公設整修溝通協調",
    slots: [
      { id: "s1", pos: "adj", tags: ["evaluation"] },
      { id: "s2", pos: "v", tags: ["social"] },
      { id: "s3", pos: "n", tags: ["emotion"] },
    ],
  },
  {
    id: "daily_neighborhood_noise_resolution",
    title: "Daily Neighborhood Noise Resolution",
    titleZh: "鄰居生活噪音溝通",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "My neighbor occasionally plays loud music late at night, creating a {{s1}} disturbance for the whole floor. Rather than filing a formal complaint, I decided to {{s2}} with him directly about the issue. He understood the concern right away and agreed to lower the volume, helping us maintain a peaceful environment.",
    contentZh:
      "鄰居生活噪音溝通",
    slots: [
      { id: "s1", pos: "adj", tags: ["evaluation"] },
      { id: "s2", pos: "v", tags: ["social"] },
    ],
  },
  {
    id: "daily_neighbors_dispute",
    title: "Daily Neighbors Dispute",
    titleZh: "鄰居之間的溝通問題",
    level: ["elementary", "highschool"],
    domain: "daily",
    content:
      "My neighbor tends to play loud music late at night, which causes a {{s1}} disturbance for everyone on our floor. Instead of getting angry, I chose to {{s2}} with him personally to discuss the matter. He apologized immediately and agreed to reduce the volume. I was glad we could handle the issue without any harsh conflict.",
    contentZh:
      "鄰居之間的溝通問題",
    slots: [
      { id: "s1", pos: "adj", tags: ["evaluation"] },
      { id: "s2", pos: "v", tags: ["social"] },
    ],
  },
];
