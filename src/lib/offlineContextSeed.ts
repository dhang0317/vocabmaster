/** Offline seed dataset supplied by the user. 107 context templates.
 * Source is preserved as data; the adapter maps its legacy slot syntax
 * into the application's semantic TemplateSlot model.
 */
export interface OfflineSeedTemplate {
  id: string; title: string; theme: string; difficulty: string; content: string; requiredSlots: string[];
}

export const OFFLINE_CONTEXT_SEED: OfflineSeedTemplate[] = PLACEHOLDER