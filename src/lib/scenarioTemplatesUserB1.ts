import type { ScenarioTemplate } from './scenarioTemplates';

/** User scenarios B1 */
export const USER_SCENARIO_TEMPLATES_B1: ScenarioTemplate[] = [
  {
    id: "travel_mountain_hiking_expedition",
    title: "Travel Mountain Hiking Expedition",
    titleZh: "高山健行與迷霧包圍",
    level: ["elementary", "highschool"],
    domain: "travel",
    content:
      "During our weekend trip to the national park, we had to {{s1}} through dense mountain trails under light rain. The surroundings displayed {{s2}} autumn colors that kept everyone smiling despite the cold wind. When dense fog rolled in near the ridge, our tour leader stepped in to {{s3}} our anxious group, helping us safely reach the warmth of the mountain shelter.",
    contentZh:
      "高山健行與迷霧包圍",
    slots: [
      { id: "s1", pos: "v", tags: ["physical"] },
      { id: "s2", pos: "adj", tags: ["evaluation"] },
      { id: "s3", pos: "v", tags: ["social"] },
    ],
  },
  {
    id: "travel_old_town_exploration",
    title: "Travel Old Town Exploration",
    titleZh: "古城漫步與在地交流",
    level: ["elementary", "highschool"],
    domain: "travel",
    content:
      "During my visit to Kyoto, I decided to {{s1}} through the quiet side alleys near the historic market. The wooden storefronts featured {{s2}} craft patterns that captured my attention instantly. When I got confused by the winding streets, a friendly shopkeeper stepped forward to {{s3}} with me, offering clear directions toward the main avenue.",
    contentZh:
      "古城漫步與在地交流",
    slots: [
      { id: "s1", pos: "v", tags: ["physical"] },
      { id: "s2", pos: "adj", tags: ["evaluation"] },
      { id: "s3", pos: "v", tags: ["social"] },
    ],
  },
  {
    id: "travel_flight_cancellation_delay",
    title: "Travel Flight Cancellation Delay",
    titleZh: "機場航班延誤應變體驗",
    level: ["highschool", "toeic"],
    domain: "travel",
    content:
      "When heavy thunderstorm warnings caused a {{s1}} delay at the airport, thousands of passengers grew visibly impatient. Airlines worked tirelessly to {{s2}} stranded travelers by offering meal vouchers and overnight lodging options. Ground crews strove to {{s3}} updated departure estimates as soon as weather conditions began to {{s4}} late in the evening.",
    contentZh:
      "機場航班延誤應變體驗",
    slots: [
      { id: "s1", pos: "adj", tags: ["time"] },
      { id: "s2", pos: "v", tags: ["social"] },
      { id: "s3", pos: "v", tags: ["communication"] },
      { id: "s4", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "workplace_cross_border_merger",
    title: "Workplace Cross Border Merger",
    titleZh: "跨國併購與組織變革",
    level: ["toefl_ielts", "advanced"],
    domain: "workplace",
    content:
      "Following the multinational merger, differences in regional workplace culture caused internal tensions to {{s1}} rapidly. Executive leaders stepped in to {{s2}} company priorities clearly and clarify operational roles. By adopting structured training programs to {{s3}} smooth cross-cultural integration, management secured a {{s4}} transition that boosted employee morale across all international branches.",
    contentZh:
      "跨國併購與組織變革",
    slots: [
      { id: "s1", pos: "v", tags: ["state_change"] },
      { id: "s2", pos: "v", tags: ["communication"] },
      { id: "s3", pos: "v", tags: ["process"] },
      { id: "s4", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "workplace_cross_cultural_negotiation",
    title: "Workplace Cross Cultural Negotiation",
    titleZh: "跨國商業談判與條款化解",
    level: ["toefl_ielts", "advanced"],
    domain: "workplace",
    content:
      "During international business negotiations, representatives must {{s1}} core objectives without causing misunderstandings. Unclear contract phrasing can cause initial agreement to {{s2}} into dispute quickly. Experienced executives know how to {{s3}} compromise strategies that balance interests and produce a {{s4}} outcome for both corporate parties.",
    contentZh:
      "跨國商業談判與條款化解",
    slots: [
      { id: "s1", pos: "v", tags: ["communication"] },
      { id: "s2", pos: "v", tags: ["state_change"] },
      { id: "s3", pos: "v", tags: ["process"] },
      { id: "s4", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "workplace_cross_cultural_teamwork",
    title: "Workplace Cross Cultural Teamwork",
    titleZh: "跨國團隊文化融入與協作",
    level: ["toefl_ielts", "advanced"],
    domain: "workplace",
    content:
      "Managing multicultural project teams requires leaders who can {{s1}} complex ideas across differing linguistic backgrounds. Unchecked cultural misunderstandings may cause workplace trust to {{s2}} over time. Effective managers work actively to {{s3}} with local team leads, ensuring that employee morale remains high and daily tasks run smoothly.",
    contentZh:
      "跨國團隊文化融入與協作",
    slots: [
      { id: "s1", pos: "v", tags: ["communication"] },
      { id: "s2", pos: "v", tags: ["state_change"] },
      { id: "s3", pos: "v", tags: ["social"] },
    ],
  },
  {
    id: "workplace_merger_reorganization",
    title: "Workplace Merger Reorganization",
    titleZh: "企業併購與組織重組調適",
    level: ["toefl_ielts", "advanced"],
    domain: "workplace",
    content:
      "Following the sudden corporate merger, tension among department heads began to {{s1}} due to overlapping responsibilities. The executive board organized workshops to {{s2}} the strategic vision and prevent internal friction. By empowering cross-functional teams to {{s3}} effectively, leadership transformed anxiety into momentum, securing a {{s4}} victory for the newly unified company.",
    contentZh:
      "企業併購與組織重組調適",
    slots: [
      { id: "s1", pos: "v", tags: ["state_change"] },
      { id: "s2", pos: "v", tags: ["communication"] },
      { id: "s3", pos: "v", tags: ["social"] },
      { id: "s4", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "workplace_agile_transition",
    title: "Workplace Agile Transition",
    titleZh: "職場推動敏捷工作流程",
    level: ["highschool", "toeic"],
    domain: "workplace",
    content:
      "To increase product development speed, our company decided to {{s1}} a new agile workflow. At first, sudden changes in communication caused team friction, which began to {{s2}} unexpected project delays. Management organized weekly coaching sessions to {{s3}} team leads and clear up misunderstandings. Adapting to this new operational model proved to be a {{s4}} step toward long-term productivity.",
    contentZh:
      "職場推動敏捷工作流程",
    slots: [
      { id: "s1", pos: "v", tags: ["process"] },
      { id: "s2", pos: "v", tags: ["cause_effect"] },
      { id: "s3", pos: "v", tags: ["social"] },
      { id: "s4", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "workplace_conflict_management",
    title: "Workplace Conflict Management",
    titleZh: "職場團隊衝突與溝通",
    level: ["highschool", "toeic"],
    domain: "workplace",
    content:
      "During the strategy meeting, conflicting opinions began to {{s1}} into a heated debate among team leads. The manager stepped in to {{s2}} the project's primary objectives and clear up misunderstandings. By encouraging everyone to {{s3}} constructively, the team eventually reached a consensus that satisfied all parties involved.",
    contentZh:
      "職場團隊衝突與溝通",
    slots: [
      { id: "s1", pos: "v", tags: ["state_change"] },
      { id: "s2", pos: "v", tags: ["communication"] },
      { id: "s3", pos: "v", tags: ["social"] },
    ],
  },
  {
    id: "workplace_conflict_negotiation",
    title: "Workplace Conflict Negotiation",
    titleZh: "跨部門會議衝突調解",
    level: ["highschool", "toeic"],
    domain: "workplace",
    content:
      "During our quarterly strategy meeting, differing opinions threatened to {{s1}} into a heated debate among team leads. The department head intervened to {{s2}} the project's core objectives and dispel misunderstandings. By guiding the team to {{s3}} constructively, everyone eventually agreed on a balanced compromise.",
    contentZh:
      "跨部門會議衝突調解",
    slots: [
      { id: "s1", pos: "v", tags: ["state_change"] },
      { id: "s2", pos: "v", tags: ["communication"] },
      { id: "s3", pos: "v", tags: ["social"] },
    ],
  },
  {
    id: "workplace_crisis_communication",
    title: "Workplace Crisis Communication",
    titleZh: "職場產品召回緊急溝通",
    level: ["highschool", "toeic"],
    domain: "workplace",
    content:
      "Our management team had to {{s1}} a safety recall after discovering a manufacturing flaw in our new product line. This defect threatened to {{s2}} serious reputational damage across our key markets. To contain the situation, the PR head moved to {{s3}} clear explanations to affected consumers. Fortunately, transparent action helped reduce customer {{s4}} and stabilized our brand standing.",
    contentZh:
      "職場產品召回緊急溝通",
    slots: [
      { id: "s1", pos: "v", tags: ["process"] },
      { id: "s2", pos: "v", tags: ["cause_effect"] },
      { id: "s3", pos: "v", tags: ["communication"] },
      { id: "s4", pos: "n", tags: ["emotion"] },
    ],
  },
  {
    id: "workplace_project_deadline_status",
    title: "Workplace Project Deadline Status",
    titleZh: "職場專案進度與團隊壓力",
    level: ["highschool", "toeic"],
    domain: "workplace",
    content:
      "Our team needs to {{s1}} a new workflow to meet our client's expectations. Unfortunately, unforeseen technical glitches began to {{s2}} unexpected delays in the core milestone. This ongoing issue created a {{s3}} amount of pressure across departments, leaving several engineers feeling distinctly {{s4}} about reaching the deadline. We must meet tomorrow to address these concerns before they worsen.",
    contentZh:
      "職場專案進度與團隊壓力",
    slots: [
      { id: "s1", pos: "v", tags: ["process"] },
      { id: "s2", pos: "v", tags: ["cause_effect"] },
      { id: "s3", pos: "adj", tags: ["quantity"] },
      { id: "s4", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "workplace_project_status",
    title: "Workplace Project Status",
    titleZh: "職場專案狀態更新報告",
    level: ["highschool", "toeic"],
    domain: "workplace",
    content:
      "Our team needs to {{s1}} a new workflow to speed up delivery times. Recently, the unexpected technical issues began to {{s2}} delays in our main schedule. This situation led to a {{s3}} amount of stress among the team members, and many felt quite {{s4}} about meeting the final deadline. We hope to discuss how to solve these problems in our upcoming meeting.",
    contentZh:
      "職場專案狀態更新報告",
    slots: [
      { id: "s1", pos: "v", tags: ["process"] },
      { id: "s2", pos: "v", tags: ["cause_effect"] },
      { id: "s3", pos: "adj", tags: ["quantity"] },
      { id: "s4", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "workplace_software_rollout",
    title: "Workplace Software Rollout",
    titleZh: "職場新系統導入與培訓",
    level: ["highschool", "toeic"],
    domain: "workplace",
    content:
      "To increase overall productivity, our IT department will {{s1}} a new project management platform next month. Switching systems might {{s2}} temporary confusion among team members who are accustomed to the old tools. Senior staff will hold interactive workshops to {{s3}} colleagues during this transition, helping everyone feel confident with the new interface.",
    contentZh:
      "職場新系統導入與培訓",
    slots: [
      { id: "s1", pos: "v", tags: ["process"] },
      { id: "s2", pos: "v", tags: ["cause_effect"] },
      { id: "s3", pos: "v", tags: ["social"] },
    ],
  },
  {
    id: "workplace_tech_migration",
    title: "Workplace Tech Migration",
    titleZh: "職場系統轉型與流程優化",
    level: ["highschool", "toeic"],
    domain: "workplace",
    content:
      "To maintain competitiveness, our company decided to {{s1}} an upgraded database management system across all branches. Initial technical glitches began to {{s2}} widespread confusion among staff members, leading to a {{s3}} drop in daily output. Management acted quickly to {{s4}} the new standard procedures, ensuring that operational efficiency would soon {{s5}} after initial adjustments.",
    contentZh:
      "職場系統轉型與流程優化",
    slots: [
      { id: "s1", pos: "v", tags: ["process"] },
      { id: "s2", pos: "v", tags: ["cause_effect"] },
      { id: "s3", pos: "adj", tags: ["quantity"] },
      { id: "s4", pos: "v", tags: ["communication"] },
      { id: "s5", pos: "v", tags: ["state_change"] },
    ],
  }
];
