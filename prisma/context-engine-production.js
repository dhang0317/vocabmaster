const crypto = require('crypto');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const TARGET = Number(process.env.CONTEXT_TARGET || 1000000);
const MIN_QUALITY = Number(process.env.CONTEXT_MIN_QUALITY || 0.85);

function normalize(text) {
  return text.trim().toLowerCase().replace(/[“”‘’]/g, "'").replace(/[^a-z0-9']+/g, ' ').replace(/\s+/g, ' ').trim();
}

function key(text) {
  return crypto.createHash('sha256').update(normalize(text)).digest('hex');
}

function score(row) {
  const values = [row.grammarScore, row.naturalnessScore, row.meaningScore, row.contextScore, row.cefrScore, row.diversityScore].filter(v => typeof v === 'number');
  if (!values.length) return row.qualityScore ?? 0;
  return values.reduce((a, b) => a + b, 0) / values.length;
}

async function main() {
  const total = await prisma.sentence.count({ where: { sourceType: { in: ['context-engine-ai', 'context-engine-production'] } } });
  console.log(`Production corpus currently contains ${total} rows; target ${TARGET}.`);

  const candidates = await prisma.sentence.findMany({
    where: { sourceType: { in: ['context-engine-ai', 'context-engine-production'] } },
    select: { id: true, content: true, qualityScore: true, grammarScore: true, naturalnessScore: true, meaningScore: true, contextScore: true, cefrScore: true, diversityScore: true },
    orderBy: { createdAt: 'asc' },
  });

  const seen = new Map();
  let removed = 0;
  for (const row of candidates) {
    const normalizedKey = key(row.content);
    const q = score(row);
    if (q < MIN_QUALITY) {
      await prisma.sentence.delete({ where: { id: row.id } });
      removed++;
      continue;
    }
    const previous = seen.get(normalizedKey);
    if (previous) {
      if ((row.qualityScore ?? 0) > (previous.qualityScore ?? 0)) {
        await prisma.sentence.delete({ where: { id: previous.id } });
        seen.set(normalizedKey, row);
      } else {
        await prisma.sentence.delete({ where: { id: row.id } });
      }
      removed++;
      continue;
    }
    seen.set(normalizedKey, row);
    await prisma.sentence.update({ where: { id: row.id }, data: { normalizedKey, qualityScore: q, sourceType: 'context-engine-production' } });
  }

  const finalCount = await prisma.sentence.count({ where: { sourceType: 'context-engine-production' } });
  console.log(`Quality pipeline complete: ${finalCount} production sentences; ${removed} rejected/duplicate rows.`);
  if (finalCount < TARGET) console.log(`Corpus needs ${TARGET - finalCount} additional approved sentences.`);
}

main().catch(err => { console.error(err); process.exit(1); }).finally(() => prisma.$disconnect());
