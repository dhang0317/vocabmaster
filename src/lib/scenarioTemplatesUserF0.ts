import type { ScenarioTemplate } from './scenarioTemplates';
import { USER_SCENARIO_TEMPLATES_F0g00 } from './scenarioTemplatesUserF0g00';
import { USER_SCENARIO_TEMPLATES_F0g01 } from './scenarioTemplatesUserF0g01';
import { USER_SCENARIO_TEMPLATES_F0g02 } from './scenarioTemplatesUserF0g02';
import { USER_SCENARIO_TEMPLATES_F0g03 } from './scenarioTemplatesUserF0g03';
import { USER_SCENARIO_TEMPLATES_F0g04 } from './scenarioTemplatesUserF0g04';
import { USER_SCENARIO_TEMPLATES_F0a1 } from './scenarioTemplatesUserF0a1';
import { USER_SCENARIO_TEMPLATES_F0a2x } from './scenarioTemplatesUserF0a2x';

/** User batch F0 — 51/100 while bulk upload continues */
export const USER_SCENARIO_TEMPLATES_F0: ScenarioTemplate[] = [
  ...USER_SCENARIO_TEMPLATES_F0g00,
  ...USER_SCENARIO_TEMPLATES_F0g01,
  ...USER_SCENARIO_TEMPLATES_F0g02,
  ...USER_SCENARIO_TEMPLATES_F0g03,
  ...USER_SCENARIO_TEMPLATES_F0g04,
  ...USER_SCENARIO_TEMPLATES_F0a1,
  ...USER_SCENARIO_TEMPLATES_F0a2x,
];
