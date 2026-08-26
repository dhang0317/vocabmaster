import type { ScenarioTemplate } from './scenarioTemplates';

/** bulk F0 group 11 */
export const USER_SCENARIO_TEMPLATES_F0g11: ScenarioTemplate[] = [
  {
    id: 'workplace_intellectual_property_06',
    title: 'Intellectual Property',
    titleZh: '智慧財產糾紛',
    level: ['toefl_ielts', 'advanced'],
    domain: 'workplace',
    content:
      'Patent attorneys were hired to {{s1}} executives about potential patent infringement lawsuits. Legal teams will {{s2}} whether proprietary technologies were unlawfully copied by competitors. The company decided to {{s3}} aggressive patent assertions in federal court. Litigation proceedings often require a {{s4}} discovery period before trial. Securing international patent protections remains an {{s5}} priority for tech firms.',
    contentZh:
      '智慧財產糾紛',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's3', pos: 'v', tags: ['conflict', 'social'] },
      { id: 's4', pos: 'adj', tags: ['duration', 'time'] },
      { id: 's5', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
  {
    id: 'workplace_digital_transformation_07',
    title: 'Digital Transformation',
    titleZh: '企業數位轉型',
    level: ['toefl_ielts', 'advanced'],
    domain: 'workplace',
    content:
      'Chief technology officers plan to {{s1}} staff about migrating legacy data to cloud platforms. System architects will {{s2}} legacy records into modern database architectures. Department leaders must {{s3}} to overcome employee resistance to new automated tools. Transitioning systems causes {{s4}} operational friction during initial rollout phases. Establishing robust digital infrastructure offers {{s5}} long-term commercial agility.',
    contentZh:
      '企業數位轉型',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'v', tags: ['process'] },
      { id: 's3', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['quality', 'evaluation'] },
    ],
  },
  {
    id: 'workplace_shareholder_meeting_08',
    title: 'Shareholder Meeting',
    titleZh: '股東大會決策',
    level: ['toefl_ielts', 'advanced'],
    domain: 'workplace',
    content:
      'At annual general meetings, board directors {{s1}} institutional investors of strategic acquisitions. Activist investors may {{s2}} with executive board members over dividend distribution policies. Management must {{s3}} why capital expenditures exceeded initial annual forecasts. Addressing {{s4}} shareholder concern requires diplomatic executive communication. Adopting transparent accounting standards provides a {{s5}} governance foundation.',
    contentZh:
      '股東大會決策',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'v', tags: ['conflict', 'social'] },
      { id: 's3', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['quality', 'evaluation'] },
    ],
  },
  {
    id: 'workplace_labor_negotiation_09',
    title: 'Labor Negotiation',
    titleZh: '勞資合約協商',
    level: ['toefl_ielts', 'advanced'],
    domain: 'workplace',
    content:
      'Union representatives gathered to {{s1}} higher base wages and safer working conditions. Corporate negotiators must {{s2}} whether requested wage increases fit projected annual operating budgets. Both parties hope to {{s3}} effectively to avoid upcoming union strikes. Facing {{s4}} dispute during labor negotiations is expected in heavy manufacturing sectors. Reaching a mutually beneficial agreement is an {{s5}} goal for management.',
    contentZh:
      '勞資合約協商',
    slots: [
      { id: 's1', pos: 'v', tags: ['request', 'communication'] },
      { id: 's2', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's3', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
  {
    id: 'workplace_market_expansion_10',
    title: 'Market Expansion',
    titleZh: '海外市場拓展',
    level: ['toefl_ielts', 'advanced'],
    domain: 'workplace',
    content:
      'Expanding into emerging markets requires executives to {{s1}} local purchasing habits and cultural nuances. Marketing directors will {{s2}} regional teams regarding localized brand campaigns. Companies must {{s3}} with established local distributors to secure shelf space. Venturing overseas carries a {{s4}} financial risk if market research is flawed. Thorough market analysis is an {{s5}} requirement for international growth.',
    contentZh:
      '海外市場拓展',
    slots: [
      { id: 's1', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
];
