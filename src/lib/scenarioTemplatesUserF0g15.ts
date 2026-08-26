import type { ScenarioTemplate } from './scenarioTemplates';

/** bulk F0 group 15 */
export const USER_SCENARIO_TEMPLATES_F0g15: ScenarioTemplate[] = [
  {
    id: 'daily_digital_detox_05',
    title: 'Digital Detox',
    titleZh: '數位排毒生活',
    level: ['toefl_ielts', 'advanced'],
    domain: 'daily',
    content:
      'Excessive screen usage prompts individuals to {{s1}} healthy boundaries regarding personal digital device habits. Wellness experts will {{s2}} participants about cognitive benefits linked to device-free periods. People often {{s3}} improved sleep quality after disconnecting from social media platforms. Overcoming {{s4}} digital dependence requires strong personal willpower. Establishing evening offline hours serves an {{s5}} role in mental rest.',
    contentZh:
      '數位排毒生活',
    slots: [
      { id: 's1', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
  {
    id: 'daily_urban_gardening_06',
    title: 'Urban Gardening',
    titleZh: '都市園藝體驗',
    level: ['toefl_ielts', 'advanced'],
    domain: 'daily',
    content:
      'Urban gardening enables city residents to {{s1}} organic produce on residential rooftop spaces. Gardening enthusiasts learn to {{s2}} early pest infestations on vegetable leaves. Local horticulture experts will {{s3}} beginners about seasonal soil fertilization techniques. Severe summer heat causes {{s4}} stress for potted plants without daily watering. Proper irrigation guarantees a {{s5}} harvest of home-grown organic vegetables.',
    contentZh:
      '都市園藝體驗',
    slots: [
      { id: 's1', pos: 'v', tags: ['process'] },
      { id: 's2', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's3', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['quality', 'evaluation'] },
    ],
  },
  {
    id: 'daily_public_transport_07',
    title: 'Public Transport',
    titleZh: '公共運輸營運',
    level: ['toefl_ielts', 'advanced'],
    domain: 'daily',
    content:
      'City transit authorities continually {{s1}} passenger traffic data to optimize train departure intervals. Operators must {{s2}} commuters during unexpected equipment delays on transit lines. Engineers try to {{s3}} structural wear on railway tracks before accidents occur. Severe weather events cause {{s4}} disruptions to daily metropolitan transit schedules. Modernizing transit infrastructure is an {{s5}} investment for growing urban areas.',
    contentZh:
      '公共運輸營運',
    slots: [
      { id: 's1', pos: 'v', tags: ['process'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
  {
    id: 'shopping_consumer_rights_01',
    title: 'Consumer Rights',
    titleZh: '消費者權益保護',
    level: ['toefl_ielts', 'advanced'],
    domain: 'daily',
    content:
      'Consumer protection agencies work to {{s1}} the public about deceptive retail pricing tactics. Legal experts will {{s2}} whether misleading product advertisements violate consumer trade laws. Frustrated buyers may {{s3}} with corporate retailers over warranty coverage terms. Experiencing {{s4}} financial loss leads consumers to file official regulatory complaints. Enforcing strict market rules ensures a {{s5}} shopping ecosystem for the public.',
    contentZh:
      '消費者權益保護',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's3', pos: 'v', tags: ['conflict', 'social'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['quality', 'evaluation'] },
    ],
  },
  {
    id: 'shopping_e_commerce_security_02',
    title: 'E Commerce Security',
    titleZh: '電商平台安全',
    level: ['toefl_ielts', 'advanced'],
    domain: 'daily',
    content:
      'Online marketplace operators must {{s1}} user payment data through encrypted transaction channels. Security teams try to {{s2}} fraudulent purchase attempts before orders are processed. Cyber security experts will {{s3}} consumers about password protection best practices. Unencrypted transaction portals pose a {{s4}} security risk for credit card users. Investing in security software remains an {{s5}} priority for e-commerce platforms.',
    contentZh:
      '電商平台安全',
    slots: [
      { id: 's1', pos: 'v', tags: ['process'] },
      { id: 's2', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's3', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
];
