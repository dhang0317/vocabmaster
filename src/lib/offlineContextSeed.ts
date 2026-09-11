/** Offline seed dataset supplied by the user.
 * Real context corpus is seeded via prisma/context-engine-seed-1000.js + JSON.
 * This file is kept as a typed empty fallback for offline/demo paths.
 */
export interface OfflineSeedTemplate {
  id: string;
  title: string;
  theme: string;
  difficulty: string;
  content: string;
  requiredSlots: string[];
}

export const OFFLINE_CONTEXT_SEED: OfflineSeedTemplate[] = [];
