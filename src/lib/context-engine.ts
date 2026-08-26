import { prisma } from './prisma';

export type ContextQuery = {
  word: string;
  theme?: string;
  difficulty?: string;
  limit?: number;
};

export async function getContextForWord({ word, theme, difficulty, limit = 10 }: ContextQuery) {
  const normalized = word.trim().toLowerCase();
  if (!normalized) return [];

  const rows = await prisma.sentence.findMany({
    where: {
      words: {
        some: {
          word: {
            word: normalized,
          },
          isTarget: true,
        },
      },
      ...(theme ? { theme } : {}),
      ...(difficulty ? { difficulty } : {}),
    },
    include: {
      words: {
        where: { isTarget: true },
        include: { word: true },
      },
    },
    orderBy: [
      { qualityScore: 'desc' },
      { createdAt: 'desc' },
    ],
    take: Math.min(Math.max(limit, 1), 50),
  });

  return rows.map((row) => ({
    id: row.id,
    content: row.content,
    translation: row.translation,
    theme: row.theme,
    difficulty: row.difficulty,
    qualityScore: row.qualityScore,
    targetWord: row.words[0]?.word.word ?? normalized,
  }));
}

export async function getTemplatesForSlot(slotCode: string, theme?: string, difficulty?: string) {
  return prisma.template.findMany({
    where: {
      ...(theme ? { theme } : {}),
      ...(difficulty ? { difficulty } : {}),
      slots: {
        some: {
          slot: { code: slotCode },
        },
      },
    },
    include: {
      slots: {
        include: {
          slot: true,
          grammarPattern: true,
        },
        orderBy: { position: 'asc' },
      },
      tags: { include: { tag: true } },
    },
    orderBy: { qualityScore: 'desc' },
    take: 50,
  });
}
