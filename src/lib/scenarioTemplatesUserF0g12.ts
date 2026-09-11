import type { ScenarioTemplate } from './scenarioTemplates';

/** bulk F0 group 12 */
export const USER_SCENARIO_TEMPLATES_F0g12: ScenarioTemplate[] = [
  {
    id: 'travel_expedition_planning_01',
    title: 'Expedition Planning',
    titleZh: '極地探險規劃',
    level: ['toefl_ielts', 'advanced'],
    domain: 'travel',
    content:
      'Organizing an expedition across Arctic environments requires leaders to {{s1}} extreme climate risks. Expedition logistics experts must {{s2}} team members regarding winter survival gear standards. Explorers are expected to {{s3}} seamlessly under life-threatening blizzard conditions. Experiencing {{s4}} freezing temperatures severely tests human physical endurance limits. Careful safety planning is an {{s5}} prerequisite for polar exploration.',
    contentZh:
      '極地探險規劃',
    slots: [
      { id: 's1', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
  {
    id: 'travel_diplomatic_visa_02',
    title: 'Diplomatic Visa',
    titleZh: '外交簽證申請',
    level: ['toefl_ielts', 'advanced'],
    domain: 'travel',
    content:
      'Delegates attending international summits must {{s1}} consular officers regarding diplomatic mission objectives. Embassy staff will {{s2}} official credentials through security verification protocols. Applicants are required to {{s3}} precise travel details to foreign affairs ministries. Dealing with {{s4}} administrative bureaucracy often causes travel schedule delays. Possessing valid diplomatic documentation remains an {{s5}} requirement for official state visits.',
    contentZh:
      '外交簽證申請',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'v', tags: ['process'] },
      { id: 's3', pos: 'v', tags: ['communication'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
  {
    id: 'travel_eco_tourism_03',
    title: 'Eco Tourism',
    titleZh: '生態旅遊發展',
    level: ['toefl_ielts', 'advanced'],
    domain: 'travel',
    content:
      'Sustainable tourism operators seek to {{s1}} travelers about protecting fragile coastal ecosystems. Local guides help visitors {{s2}} endangered wildlife species in natural jungle habitats. Environmental agencies try to {{s3}} with indigenous communities to manage eco-resorts. Unregulated mass tourism inflicts {{s4}} damage on vulnerable natural environments. Establishing strict visitor limits offers a {{s5}} solution for environmental preservation.',
    contentZh:
      '生態旅遊發展',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's3', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['quality', 'evaluation'] },
    ],
  },
  {
    id: 'travel_high_altitude_trekking_04',
    title: 'High Altitude Trekking',
    titleZh: '高山健行挑戰',
    level: ['toefl_ielts', 'advanced'],
    domain: 'travel',
    content:
      'Mountaineers attempting high-altitude summits must {{s1}} oxygen deprivation risks before ascending. Guides will {{s2}} trekkers when weather conditions force immediate descent. Climbers need to {{s3}} early symptoms of altitude sickness in companions. Experiencing {{s4}} physical exhaustion is common above four thousand meters elevation. Proper acclimatization represents an {{s5}} safety protocol during alpine expeditions.',
    contentZh:
      '高山健行挑戰',
    slots: [
      { id: 's1', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
  {
    id: 'travel_cultural_heritage_05',
    title: 'Cultural Heritage',
    titleZh: '文化遺產保護',
    level: ['toefl_ielts', 'advanced'],
    domain: 'travel',
    content:
      'Preserving ancient historical monuments requires conservation experts to {{s1}} structural restoration materials carefully. Tourism boards must {{s2}} visitors about rules against touching fragile stone carvings. Local authorities strive to {{s3}} with international preservation funds. Massive crowds can cause {{s4}} wear on ancient architectural ruins over time. Implementing strict site access policies guarantees a {{s5}} cultural experience.',
    contentZh:
      '文化遺產保護',
    slots: [
      { id: 's1', pos: 'v', tags: ['process'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['quality', 'evaluation'] },
    ],
  },
];
