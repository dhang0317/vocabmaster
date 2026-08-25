import type { ScenarioTemplate } from './scenarioTemplates';
import { USER_SCENARIO_TEMPLATES_A0 } from './scenarioTemplatesUserA0';
import { USER_SCENARIO_TEMPLATES_A1 } from './scenarioTemplatesUserA1';
import { USER_SCENARIO_TEMPLATES_B0 } from './scenarioTemplatesUserB0';
import { USER_SCENARIO_TEMPLATES_B1 } from './scenarioTemplatesUserB1';
import { USER_SCENARIO_TEMPLATES_C0 } from './scenarioTemplatesUserC0';
import { USER_SCENARIO_TEMPLATES_C1 } from './scenarioTemplatesUserC1';

/** User-expanded set (partial while batch2 uploads) */
export const USER_SCENARIO_TEMPLATES: ScenarioTemplate[] = [
  ...USER_SCENARIO_TEMPLATES_A0,
  ...USER_SCENARIO_TEMPLATES_A1,
  ...USER_SCENARIO_TEMPLATES_B0,
  ...USER_SCENARIO_TEMPLATES_B1,
  ...USER_SCENARIO_TEMPLATES_C0,
  ...USER_SCENARIO_TEMPLATES_C1,
];
