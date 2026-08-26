import type { ScenarioTemplate } from './scenarioTemplates';

/** User scenarios E8 — batch of 20 templates */
export const USER_SCENARIO_TEMPLATES_E8: ScenarioTemplate[] = [
  {
    id: "academic_research_ethics_15",
    title: "研究倫理審查",
    titleZh: "研究倫理審查",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "academic",
    content:
      "Conducting human subject research requires obtaining approval from institutional ethics review boards. Principal investigators must {{s1}} review committees regarding research protocols and participant safety measures. Ethics boards gather to {{s2}} potential ethical concerns before granting experimental approval. Strict oversight helps {{s3}} high ethical standards in university laboratories. Protecting participant rights is {{s4}} for scientific research integrity. Thorough ethics reviews produce an {{s5}} framework for academic study.",
    contentZh:
      "研究倫理審查",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["reasoning", "cognitive"] },
      { id: "s3", pos: "v", tags: ["cause_effect"] },
      { id: "s4", pos: "adj", tags: ["importance", "evaluation"] },
      { id: "s5", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "science_astrophysics_blackhole_14",
    title: "黑洞天體物理",
    titleZh: "黑洞天體物理",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "science",
    content:
      "Observing supermassive black holes at galaxy centers reveals extreme gravitational interactions and radiation phenomena. Astrophysicists use radio telescope networks to {{s1}} astronomical data collected across continents. Researchers attempt to {{s2}} event horizon shadows produced by immense gravitational fields. Theoretical models help scientists {{s3}} cosmic expansion principles near extreme space environments. Deep space observation remains {{s4}} for testing general relativity. Space research generated an {{s5}} contribution to modern astrophysics.",
    contentZh:
      "黑洞天體物理",
    slots: [
      { id: "s1", pos: "v", tags: ["process"] },
      { id: "s2", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s3", pos: "v", tags: ["reasoning", "cognitive"] },
      { id: "s4", pos: "adj", tags: ["importance", "evaluation"] },
      { id: "s5", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "workplace_project_update_01",
    title: "專案進度更新",
    titleZh: "專案進度更新",
    level: ["highschool", "toeic"],
    domain: "workplace",
    content:
      "Our team needs to {{s1}} the management about our recent progress on the new client portal. During the {{s2}} phase, we encountered a few technical glitches, but our engineers worked together to {{s3}} the issues quickly. We expect a {{s4}} response from stakeholders once the live demonstration begins tomorrow morning. To ensure everything runs smoothly, please {{s5}} additional support from the design department if necessary. We are confident that this {{s6}} milestone will showcase our dedicated team's technical capabilities and strengthen client trust.",
    contentZh:
      "專案進度更新",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "adj", tags: ["sequence", "time"] },
      { id: "s3", pos: "v", tags: ["process"] },
      { id: "s4", pos: "adj", tags: ["evaluation"] },
      { id: "s5", pos: "v", tags: ["request", "communication"] },
      { id: "s6", pos: "adj", tags: ["importance", "evaluation"] },
    ],
  },
  {
    id: "workplace_budget_meeting_02",
    title: "年度預算會議",
    titleZh: "年度預算會議",
    level: ["highschool", "toeic"],
    domain: "workplace",
    content:
      "In our upcoming department review, the financial manager will {{s1}} the details of next year's budget allocation. We must {{s2}} current expenditure trends to justify our request for extra marketing resources. Having a {{s3}} plan is essential before presenting our proposals to the executive board. If any team member wants to {{s4}} us about potential risks, they should do so immediately. A {{s5}} delay could jeopardize our opportunity to secure funding for important software upgrades and new staff training programs.",
    contentZh:
      "年度預算會議",
    slots: [
      { id: "s1", pos: "v", tags: ["communication"] },
      { id: "s2", pos: "v", tags: ["reasoning", "cognitive"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
      { id: "s4", pos: "v", tags: ["inform", "communication"] },
      { id: "s5", pos: "adj", tags: ["duration", "time"] },
    ],
  },
  {
    id: "workplace_client_feedback_03",
    title: "客戶回饋處理",
    titleZh: "客戶回饋處理",
    level: ["highschool", "toeic"],
    domain: "workplace",
    content:
      "After releasing the software update, we received {{s1}} inquiries regarding the new user interface options. Customer support agents were instructed to {{s2}} patiently with frustrated users and resolve complaints quickly. To handle this efficiently, managers decided to {{s3}} with the technical team to patch recurring software bugs. Maintaining a {{s4}} service standard remains our company's top operational priority this quarterly cycle. We aim to {{s5}} overall customer satisfaction scores by offering comprehensive video guides and live chat support.",
    contentZh:
      "客戶回饋處理",
    slots: [
      { id: "s1", pos: "adj", tags: ["quantity"] },
      { id: "s2", pos: "v", tags: ["communication"] },
      { id: "s3", pos: "v", tags: ["cooperation", "social"] },
      { id: "s4", pos: "adj", tags: ["quality", "evaluation"] },
      { id: "s5", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "workplace_team_briefing_04",
    title: "團隊晨會晨報",
    titleZh: "團隊晨會晨報",
    level: ["highschool", "toeic"],
    domain: "workplace",
    content:
      "Every Monday morning, our team leader holds a brief session to {{s1}} staff about upcoming project tasks. It is {{s2}} for everyone to stay focused on deadlines during peak business periods. During the meeting, team members are encouraged to {{s3}} any obstacles they face during daily operations. We then discuss how to {{s4}} these challenges using effective cross-departmental collaboration strategies. Through {{s5}} communication, we can prevent small miscommunications from turning into major project delays and unnecessary operational costs.",
    contentZh:
      "團隊晨會晨報",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "adj", tags: ["importance", "evaluation"] },
      { id: "s3", pos: "v", tags: ["communication"] },
      { id: "s4", pos: "v", tags: ["process"] },
      { id: "s5", pos: "adj", tags: ["frequency", "time"] },
    ],
  },
  {
    id: "workplace_performance_review_05",
    title: "績效考核評估",
    titleZh: "績效考核評估",
    level: ["highschool", "toeic"],
    domain: "workplace",
    content:
      "During the annual performance review, supervisors carefully {{s1}} employee achievements over the past twelve months. Employees are invited to {{s2}} their career aspirations and express interest in professional training opportunities. Receiving {{s3}} feedback helps team members identify specific areas where skill improvement is required. The human resources department works hard to {{s4}} employee evaluations in a fair and transparent manner. This structured approach helps {{s5}} workplace motivation while boosting overall organizational productivity across all core teams.",
    contentZh:
      "績效考核評估",
    slots: [
      { id: "s1", pos: "v", tags: ["reasoning", "cognitive"] },
      { id: "s2", pos: "v", tags: ["communication"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
      { id: "s4", pos: "v", tags: ["process"] },
      { id: "s5", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "workplace_office_relocation_06",
    title: "辦公室搬遷規畫",
    titleZh: "辦公室搬遷規畫",
    level: ["highschool", "toeic"],
    domain: "workplace",
    content:
      "Our administrative team will {{s1}} staff regarding the schedule for our upcoming office relocation project next month. A {{s2}} memo will outline specific instructions on packing equipment and personal workspace items properly. Employees must {{s3}} all confidential documents in accordance with standard company security guidelines. Management hopes to {{s4}} the transition into an opportunity for improved team collaboration and energy efficiency. We anticipate a {{s5}} disruption to regular working routines during the final moving weekend.",
    contentZh:
      "辦公室搬遷規畫",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "adj", tags: ["sequence", "time"] },
      { id: "s3", pos: "v", tags: ["process"] },
      { id: "s4", pos: "v", tags: ["state_change"] },
      { id: "s5", pos: "adj", tags: ["duration", "time"] },
    ],
  },
  {
    id: "workplace_product_launch_07",
    title: "新產品發布會",
    titleZh: "新產品發布會",
    level: ["highschool", "toeic"],
    domain: "workplace",
    content:
      "Marketing representatives met yesterday to {{s1}} strategic plans for the upcoming flagship product release event. Launching this item requires an {{s2}} promotional campaign targeting tech-savvy young professionals across multiple digital platforms. We hope to {{s3}} emerging market opportunities before our major industry competitors introduce similar solutions. Senior directors plan to {{s4}} media outlets during a high-profile press conference scheduled for Friday. Achieving {{s5}} coverage across national news channels is essential for building immediate brand awareness and sales momentum.",
    contentZh:
      "新產品發布會",
    slots: [
      { id: "s1", pos: "v", tags: ["communication"] },
      { id: "s2", pos: "adj", tags: ["evaluation"] },
      { id: "s3", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s4", pos: "v", tags: ["inform", "communication"] },
      { id: "s5", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "workplace_vendor_negotiation_08",
    title: "供應商商務談判",
    titleZh: "供應商商務談判",
    level: ["highschool", "toeic"],
    domain: "workplace",
    content:
      "Procurement managers are scheduled to {{s1}} contract terms with potential equipment suppliers next Tuesday morning. Our goal is to {{s2}} flexible delivery schedules and improved payment options for bulk orders. Building a {{s3}} partnership with reliable vendors ensures stable supply chain operations throughout peak seasons. If suppliers present {{s4}} price increases, our team will evaluate alternative market options immediately. Clear communication is {{s5}} for maintaining profitable business relationships while protecting long-term budget commitments.",
    contentZh:
      "供應商商務談判",
    slots: [
      { id: "s1", pos: "v", tags: ["communication"] },
      { id: "s2", pos: "v", tags: ["request", "communication"] },
      { id: "s3", pos: "adj", tags: ["evaluation"] },
      { id: "s4", pos: "adj", tags: ["intensity", "evaluation"] },
      { id: "s5", pos: "adj", tags: ["importance", "evaluation"] },
    ],
  },
  {
    id: "workplace_safety_training_09",
    title: "職場安全講習",
    titleZh: "職場安全講習",
    level: ["highschool", "toeic"],
    domain: "workplace",
    content:
      "Safety inspectors will visit next week to {{s1}} staff about updated emergency protocols and equipment handling procedures. Participation in safety drills is {{s2}} for preventing workplace injuries and maintaining compliance standards. Employees must learn to {{s3}} potential hazards in workshop areas before starting heavy machinery operations daily. Supervisors will {{s4}} incident reports promptly whenever equipment malfunctions or workplace risks are reported. Consistent compliance helps build a {{s5}} environment where all employees feel secure performing daily work.",
    contentZh:
      "職場安全講習",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "adj", tags: ["importance", "evaluation"] },
      { id: "s3", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s4", pos: "v", tags: ["process"] },
      { id: "s5", pos: "adj", tags: ["evaluation"] },
    ],
  },
  {
    id: "workplace_policy_change_10",
    title: "公司政策調整",
    titleZh: "公司政策調整",
    level: ["highschool", "toeic"],
    domain: "workplace",
    content:
      "Management decided to {{s1}} all employees about key revisions to the company remote work policy today. These adjustments aim to {{s2}} work-life balance while maintaining high productivity levels across remote teams. Department heads will {{s3}} with staff to establish clear daily goals and progress tracking routines. Having a {{s4}} communication framework ensures seamless cooperation between office-based staff and remote workers. Employees should {{s5}} assistance from IT support if they encounter remote access difficulty or software installation issues.",
    contentZh:
      "公司政策調整",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["state_change"] },
      { id: "s3", pos: "v", tags: ["communication"] },
      { id: "s4", pos: "adj", tags: ["quality", "evaluation"] },
      { id: "s5", pos: "v", tags: ["request", "communication"] },
    ],
  },
  {
    id: "workplace_performance_review_02",
    title: "年度績效考核",
    titleZh: "年度績效考核",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "workplace",
    content:
      "The annual evaluation requires supervisors to {{s1}} subtle improvements in employee output. During the meeting, managers will {{s2}} construct feedback regarding recent goals. Staff members are encouraged to {{s3}} additional support when facing workload challenges. Maintaining a {{s4}} standard of work remains essential across all departments. The management hopes to {{s5}} better employee satisfaction through these annual conversations.",
    contentZh:
      "年度績效考核",
    slots: [
      { id: "s1", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s2", pos: "v", tags: ["communication"] },
      { id: "s3", pos: "v", tags: ["request", "communication"] },
      { id: "s4", pos: "adj", tags: ["quality", "evaluation"] },
      { id: "s5", pos: "v", tags: ["cause_effect"] },
    ],
  },
  {
    id: "workplace_conflict_resolution_03",
    title: "職場衝突化解",
    titleZh: "職場衝突化解",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "workplace",
    content:
      "When disagreement arises between departments, leaders should avoid an {{s1}} argument. Instead of engaging in a heated debate, colleagues need to {{s2}} each other about their core constraints. It helps to {{s3}} the root causes behind conflicting schedules. By maintaining an {{s4}} atmosphere, the team can find a mutually beneficial solution. Clear communication ultimately helps to {{s5}} workplace tension into collaborative momentum.",
    contentZh:
      "職場衝突化解",
    slots: [
      { id: "s1", pos: "adj", tags: ["intensity", "evaluation"] },
      { id: "s2", pos: "v", tags: ["inform", "communication"] },
      { id: "s3", pos: "v", tags: ["reasoning", "cognitive"] },
      { id: "s4", pos: "adj", tags: ["emotion"] },
      { id: "s5", pos: "v", tags: ["state_change"] },
    ],
  },
  {
    id: "workplace_office_relocation_04",
    title: "辦公室搬遷通知",
    titleZh: "辦公室搬遷通知",
    level: ["elementary", "highschool"],
    domain: "workplace",
    content:
      "Our company will move to a new building next month. The administrative team will {{s1}} all employees about the exact moving dates. We expect a {{s2}} interruption in daily email responses during the transition. Please {{s3}} any missing items before packing your desk. We appreciate your {{s4}} cooperation during this transition phase.",
    contentZh:
      "辦公室搬遷通知",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "adj", tags: ["duration", "time"] },
      { id: "s3", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s4", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "workplace_client_presentation_05",
    title: "客戶簡報說明",
    titleZh: "客戶簡報說明",
    level: ["highschool", "toeic"],
    domain: "workplace",
    content:
      "Preparing for a major client pitch requires meticulous planning. First, we must {{s1}} the client's past preferences and recent demands. The presenter should {{s2}} the audience about key financial projections using simple visuals. It is {{s3}} to deliver a concise narrative rather than overwhelming them with data. If clients express concern, we should {{s4}} our willingness to adjust the proposal.",
    contentZh:
      "客戶簡報說明",
    slots: [
      { id: "s1", pos: "v", tags: ["reasoning", "cognitive"] },
      { id: "s2", pos: "v", tags: ["inform", "communication"] },
      { id: "s3", pos: "adj", tags: ["importance", "evaluation"] },
      { id: "s4", pos: "v", tags: ["communication"] },
    ],
  },
  {
    id: "workplace_training_program_07",
    title: "員工培訓計畫",
    titleZh: "員工培訓計畫",
    level: ["highschool", "toeic"],
    domain: "workplace",
    content:
      "To foster continuous learning, the HR department launched a new training program. Employees are encouraged to {{s1}} on interactive group assignments. Facilitators will {{s2}} participants about essential soft skills and technical tools. We hope this initiative brings {{s3}} improvement to daily task management. Attendance is {{s4}} for newly hired staff members.",
    contentZh:
      "員工培訓計畫",
    slots: [
      { id: "s1", pos: "v", tags: ["cooperation", "social"] },
      { id: "s2", pos: "v", tags: ["inform", "communication"] },
      { id: "s3", pos: "adj", tags: ["quality", "evaluation"] },
      { id: "s4", pos: "adj", tags: ["importance", "evaluation"] },
    ],
  },
  {
    id: "workplace_remote_work_08",
    title: "遠端工作政策",
    titleZh: "遠端工作政策",
    level: ["highschool", "toeic"],
    domain: "workplace",
    content:
      "Adopting flexible work policies has reshaped corporate culture. Managers must {{s1}} productivity indicators without micromanaging their remote staff. Team members should {{s2}} their availability clearly throughout core operating hours. This approach avoids {{s3}} delays in project execution. A well-balanced policy promotes a {{s4}} working environment across all remote units.",
    contentZh:
      "遠端工作政策",
    slots: [
      { id: "s1", pos: "v", tags: ["perception", "cognitive"] },
      { id: "s2", pos: "v", tags: ["communication"] },
      { id: "s3", pos: "adj", tags: ["duration", "time"] },
      { id: "s4", pos: "adj", tags: ["emotion"] },
    ],
  },
  {
    id: "workplace_executive_decision_09",
    title: "高層決策擬定",
    titleZh: "高層決策擬定",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "workplace",
    content:
      "Strategic choices by executive boards determine market trajectory. Senior managers must {{s1}} industry trends prior to approving major expansion plans. They must also {{s2}} shareholders about expected operational milestones. Failure to address risk can cause {{s3}} financial loss. Therefore, conducting {{s4}} market research is vital before finalizing any agreement.",
    contentZh:
      "高層決策擬定",
    slots: [
      { id: "s1", pos: "v", tags: ["reasoning", "cognitive"] },
      { id: "s2", pos: "v", tags: ["inform", "communication"] },
      { id: "s3", pos: "adj", tags: ["intensity", "evaluation"] },
      { id: "s4", pos: "adj", tags: ["quality", "evaluation"] },
    ],
  },
  {
    id: "workplace_crisis_management_10",
    title: "企業危機處理",
    titleZh: "企業危機處理",
    level: ["toeic", "toefl_ielts", "advanced"],
    domain: "workplace",
    content:
      "When a PR crisis occurs, swift leadership is mandatory. Executives need to {{s1}} the public with transparent statements to reduce speculation. Specialists should {{s2}} the core factors that triggered the issue. Maintaining {{s3}} composure under high pressure prevents panic. The company must then {{s4}} its public policy to prevent similar incidents.",
    contentZh:
      "企業危機處理",
    slots: [
      { id: "s1", pos: "v", tags: ["inform", "communication"] },
      { id: "s2", pos: "v", tags: ["reasoning", "cognitive"] },
      { id: "s3", pos: "adj", tags: ["emotion"] },
      { id: "s4", pos: "v", tags: ["state_change"] },
    ],
  },
];
