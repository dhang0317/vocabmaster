import type { ScenarioTemplate } from './scenarioTemplates';
import { USER_SCENARIO_TEMPLATES_A } from './scenarioTemplatesUserA';
import { USER_SCENARIO_TEMPLATES_B } from './scenarioTemplatesUserB';

/** Full user-expanded set (60 templates) */
export const USER_SCENARIO_TEMPLATES: ScenarioTemplate[] = [
  ...USER_SCENARIO_TEMPLATES_A,
  ...USER_SCENARIO_TEMPLATES_B,
];
