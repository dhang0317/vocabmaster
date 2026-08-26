import type { ScenarioTemplate } from './scenarioTemplates';
import { USER_SCENARIO_TEMPLATES_F0a } from './scenarioTemplatesUserF0a';
import { USER_SCENARIO_TEMPLATES_F0b } from './scenarioTemplatesUserF0b';

/** User batch F0 — 100 templates (F0a + F0b) */
export const USER_SCENARIO_TEMPLATES_F0: ScenarioTemplate[] = [
  ...USER_SCENARIO_TEMPLATES_F0a,
  ...USER_SCENARIO_TEMPLATES_F0b,
];
