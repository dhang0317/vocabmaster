const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const slots = [
  ['VERB_INFORM', '提供資訊', 'VERB'],
  ['VERB_REQUEST', '提出請求', 'VERB'],
  ['VERB_PERCEPTION', '察覺或注意', 'VERB'],
  ['VERB_COOPERATION', '合作', 'VERB'],
  ['VERB_REASONING', '分析或推理', 'VERB'],
  ['VERB_COMMUNICATION', '溝通或表達', 'VERB'],
  ['VERB_PROCESS', '處理或執行流程', 'VERB'],
  ['VERB_STATE_CHANGE', '造成狀態改變', 'VERB'],
  ['ADJ_DURATION', '持續時間相關特徵', 'ADJ'],
  ['ADJ_IMPORTANCE', '重要性', 'ADJ'],
  ['ADJ_QUALITY', '品質', 'ADJ'],
  ['ADJ_INTENSITY', '強度', 'ADJ'],
  ['ADJ_EVALUATION', '評價或整體感受', 'ADJ'],
  ['ADJ_SEQUENCE', '順序或階段', 'ADJ'],
];

const patterns = [
  ['inform + someone + about + something', 'inform + person + about + thing'],
  ['notify + someone + of + something', 'notify + person + of + thing'],
  ['request + something', 'request + noun'],
  ['notice + noun', 'notice + object'],
  ['cooperate + with + someone', 'cooperate + with + person'],
  ['reason + about + something', 'reason about + topic'],
  ['communicate + something + to + someone', 'communicate + information + to + person'],
  ['process + something', 'process + object'],
];

async function main() {
  for (const [code, name, pos] of slots) {
    await prisma.semanticSlot.upsert({
      where: { code },
      update: { name, pos },
      create: { code, name, pos },
    });
  }

  for (const [name, pattern] of patterns) {
    const existing = await prisma.grammarPattern.findFirst({ where: { name } });
    if (existing) {
      await prisma.grammarPattern.update({ where: { id: existing.id }, data: { pattern } });
    } else {
      await prisma.grammarPattern.create({ data: { name, pattern } });
    }
  }

  console.log(`Context Engine seeded: ${slots.length} semantic slots, ${patterns.length} grammar patterns.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
}).finally(() => prisma.$disconnect());
