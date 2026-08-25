import type { ScenarioTemplate } from './scenarioTemplates';
import { USER_SCENARIO_TEMPLATES_A0 } from './scenarioTemplatesUserA0';
import { USER_SCENARIO_TEMPLATES_A1 } from './scenarioTemplatesUserA1';
import { USER_SCENARIO_TEMPLATES_B0 } from './scenarioTemplatesUserB0';
import { USER_SCENARIO_TEMPLATES_B1 } from './scenarioTemplatesUserB1';

/** Full user-expanded set (60 templates) */
export const USER_SCENARIO_TEMPLATES: ScenarioTemplate[] = [
  ...USER_SCENARIO_TEMPLATES_A0,
  ...USER_SCENARIO_TEMPLATES_A1,
  ...USER_SCENARIO_TEMPLATES_B0,
  ...USER_SCENARIO_TEMPLATES_B1,
];
