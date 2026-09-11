import type { ScenarioTemplate } from './scenarioTemplates';

/** bulk F0 group 14 */
export const USER_SCENARIO_TEMPLATES_F0g14: ScenarioTemplate[] = [
  {
    id: 'hotel_crisis_management_04',
    title: 'Crisis Management',
    titleZh: '飯店危機管理',
    level: ['toefl_ielts', 'advanced'],
    domain: 'travel',
    content:
      'When severe power blackouts strike coastal resorts, managers must {{s1}} guests regarding emergency generator capabilities. Safety officers will {{s2}} backup safety procedures to maintain essential building lighting. Staff members must {{s3}} efficiently during emergency evacuation protocols. Sudden operational disruptions cause {{s4}} anxiety among foreign tourists. Maintaining calm executive leadership represents an {{s5}} priority during crises.',
    contentZh:
      '飯店危機管理',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'v', tags: ['process'] },
      { id: 's3', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
  {
    id: 'daily_smart_home_tech_01',
    title: 'Smart Home Tech',
    titleZh: '智慧家居系統',
    level: ['toefl_ielts', 'advanced'],
    domain: 'daily',
    content:
      'Smart home automation allows residents to {{s1}} household appliance functions through voice recognition applications. System sensors can {{s2}} sudden temperature changes and adjust air conditioning automatically. Users must {{s3}} device vendors if cyber security vulnerabilities are detected. Dealing with {{s4}} software bugs disrupts connected home features. Ensuring data privacy remains an {{s5}} consideration for smart technology users.',
    contentZh:
      '智慧家居系統',
    slots: [
      { id: 's1', pos: 'v', tags: ['process'] },
      { id: 's2', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's3', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
  {
    id: 'daily_urban_recycling_02',
    title: 'Urban Recycling',
    titleZh: '城市資源回收',
    level: ['toefl_ielts', 'advanced'],
    domain: 'daily',
    content:
      'Municipal environmental departments encourage citizens to {{s1}} household waste into distinct recycling streams. Urban planners will {{s2}} neighborhood councils about upcoming waste collection regulations. Community volunteers try to {{s3}} with city authorities to improve local recycling centers. Improper waste disposal places {{s4}} pressure on regional landfill capacities. Establishing effective recycling systems delivers a {{s5}} improvement in urban living.',
    contentZh:
      '城市資源回收',
    slots: [
      { id: 's1', pos: 'v', tags: ['process'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['quality', 'evaluation'] },
    ],
  },
  {
    id: 'daily_financial_planning_03',
    title: 'Financial Planning',
    titleZh: '家庭理財規劃',
    level: ['toefl_ielts', 'advanced'],
    domain: 'daily',
    content:
      'Personal financial advisors urge families to {{s1}} long-term investment strategies and emergency savings reserves. Advisors will {{s2}} clients regarding market inflation risks affecting retirement portfolios. Households should {{s3}} monthly expenses to identify unnecessary discretionary spending. Experiencing {{s4}} market volatility requires disciplined asset allocation strategies. Creating a balanced budget is an {{s5}} step toward long-term financial security.',
    contentZh:
      '家庭理財規劃',
    slots: [
      { id: 's1', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['process'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
  {
    id: 'daily_elderly_care_04',
    title: 'Elderly Care',
    titleZh: '高齡長者照護',
    level: ['toefl_ielts', 'advanced'],
    domain: 'daily',
    content:
      'Providing care for aging family members requires relatives to {{s1}} with healthcare professionals. Caregivers learn to {{s2}} subtle cognitive changes indicative of early neurological conditions. Physicians will {{s3}} families about suitable physical therapy options. Managing {{s4}} emotional stress is a common challenge for long-term family caregivers. Accessing professional support networks offers a {{s5}} solution for family well-being.',
    contentZh:
      '高齡長者照護',
    slots: [
      { id: 's1', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's2', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's3', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['quality', 'evaluation'] },
    ],
  },
];
