import type { ScenarioTemplate } from './scenarioTemplates';

/** bulk F0 group 17 */
export const USER_SCENARIO_TEMPLATES_F0g17: ScenarioTemplate[] = [
  {
    id: 'health_mental_health_03',
    title: 'Mental Health',
    titleZh: '心理健康支持',
    level: ['toefl_ielts', 'advanced'],
    domain: 'daily',
    content:
      'Mental health professionals encourage patients to {{s1}} emotional struggles without feeling personal shame. Therapists will {{s2}} underlying psychological factors contributing to persistent anxiety disorders. Healthcare systems work to {{s3}} with community centers to expand counseling accessibility. Severe emotional isolation can cause {{s4}} psychological distress if unaddressed. Early therapeutic intervention provides a {{s5}} foundation for emotional healing.',
    contentZh:
      '心理健康支持',
    slots: [
      { id: 's1', pos: 'v', tags: ['communication'] },
      { id: 's2', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's3', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['quality', 'evaluation'] },
    ],
  },
  {
    id: 'health_surgical_robotics_04',
    title: 'Surgical Robotics',
    titleZh: '微創手術科技',
    level: ['toefl_ielts', 'advanced'],
    domain: 'daily',
    content:
      'Surgeons using robotic surgical equipment can {{s1}} delicate operations with high mechanical precision. Medical specialists will {{s2}} minute anatomical structures using high-definition 3D camera systems. Surgical teams must {{s3}} patients regarding procedures and recovery projections. Minimizing surgical incisions reduces {{s4}} post-operative pain for recovering patients. Advanced medical robotics represents an {{s5}} breakthrough in modern surgery.',
    contentZh:
      '微創手術科技',
    slots: [
      { id: 's1', pos: 'v', tags: ['process'] },
      { id: 's2', pos: 'v', tags: ['perception', 'cognitive'] },
      { id: 's3', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
  {
    id: 'health_genomic_medicine_05',
    title: 'Genomic Medicine',
    titleZh: '基因醫學研究',
    level: ['toefl_ielts', 'advanced'],
    domain: 'daily',
    content:
      'Genomic researchers analyze DNA sequencing data to {{s1}} genetic predispositions to chronic hereditary illnesses. Genetic counselors will {{s2}} families regarding inherited disease risks and preventive options. Scientists aim to {{s3}} massive genomic datasets to develop targeted gene therapies. Facing {{s4}} ethical dilemmas surrounding gene editing requires international consensus. High scientific rigor yields a {{s5}} standard for precision medicine.',
    contentZh:
      '基因醫學研究',
    slots: [
      { id: 's1', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['process'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['quality', 'evaluation'] },
    ],
  },
  {
    id: 'academic_grant_application_01',
    title: 'Grant Application',
    titleZh: '學術補助申請',
    level: ['toefl_ielts', 'advanced'],
    domain: 'academic',
    content:
      'Principal investigators seeking research funding must {{s1}} grant committees about research objectives. Application review boards will {{s2}} whether proposed budgets align with expected research outcomes. Project leaders need to {{s3}} with interdisciplinary scientists to strengthen grant applications. Intense competition for limited research funds creates {{s4}} stress for academic faculty. Securing research grants is an {{s5}} step for university laboratories.',
    contentZh:
      '學術補助申請',
    slots: [
      { id: 's1', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's2', pos: 'v', tags: ['reasoning', 'cognitive'] },
      { id: 's3', pos: 'v', tags: ['cooperation', 'social'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['importance', 'evaluation'] },
    ],
  },
  {
    id: 'academic_interdisciplinary_02',
    title: 'Interdisciplinary',
    titleZh: '跨領域學術合作',
    level: ['toefl_ielts', 'advanced'],
    domain: 'academic',
    content:
      'Interdisciplinary research centers bring scholars together to {{s1}} complex global environmental challenges. Collaborating researchers will {{s2}} peer journals regarding multi-faceted experimental conclusions. Scholars from distinct disciplines may {{s3}} over methodological assumptions during initial planning. Navigating {{s4}} theoretical debate enriches academic discourse over time. Fostering cross-departmental collaboration offers a {{s5}} approach to modern problem-solving.',
    contentZh:
      '跨領域學術合作',
    slots: [
      { id: 's1', pos: 'v', tags: ['process'] },
      { id: 's2', pos: 'v', tags: ['inform', 'communication'] },
      { id: 's3', pos: 'v', tags: ['conflict', 'social'] },
      { id: 's4', pos: 'adj', tags: ['intensity', 'evaluation'] },
      { id: 's5', pos: 'adj', tags: ['quality', 'evaluation'] },
    ],
  },
];
