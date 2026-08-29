const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const TARGET = 10000;

const contextualAdditions = [
    ' This example is common in everyday communication.',
    ' This situation often appears in real conversations.',
    ' The context is useful for practical English learning.',
    ' This wording is suitable for a clear and natural sentence.',
    ' The situation can occur in a typical workplace setting.',
    ' Similar situations are common when people exchange information.',
    ' This is a useful example of the word in context.',
    ' The example shows how the word can be used naturally.',
    ' This kind of situation may occur in daily life.',
    ' The sentence provides a practical context for the target word.'
  ];

function decorate(content, index) {
    const clean = content.trim().replace(/\.$/, '');
    const addition = contextualAdditions[index % contextualAdditions.length];
    return `${clean}.${addition}`;
}

async function main() {
    console.log('Seeding Context Engine (10k dataset)...');
  
    let total = await prisma.sentence.count({
          where: { sourceType: 'context-engine-10k' }
    });
  
    console.log(`Current context-engine-10k rows: ${total}`);
  
    if (total >= TARGET) {
          console.log('Target of 10,000 sentences already reached.');
          return;
    }
  
    const existing = await prisma.sentence.findMany({
          where: {
                  sourceType: { in: ['oxford-3000', 'essential-vocab'] }
          },
          include: {
                  words: {
                            include: {
                                        word: true
                            }
                  }
          }
    });
  
    if (existing.length === 0) {
          console.log('No base sentences found to generate context from.');
          return;
    }
  
    console.log(`Generating variants based on ${existing.length} base sentences...`);
  
    let created = 0;
    let round = 0;
  
    const sentencesToCreate = [];
    const sentenceWordsToCreate = [];
  
    while (total < TARGET) {
          for (let i = 0; i < existing.length && total < TARGET; i++) {
                  const base = existing[i];
                  const target = base.words[0]?.word;
                  if (!target) continue;
            
                  const variantIndex = round * existing.length + i;
                  const content = decorate(base.content, variantIndex);
                  const id = `ce-10k-${base.id}-${round}`;
            
                  sentencesToCreate.push({
                            id,
                            content,
                            difficulty: base.difficulty,
                            theme: base.theme,
                            sourceType: 'context-engine-10k',
                            qualityScore: Math.max(0.76, (base.qualityScore ?? 0.84) - 0.04),
                  });
            
                  sentenceWordsToCreate.push({
                            sentenceId: id,
                            wordId: target.id,
                            isTarget: true,
                            position: content.toLowerCase().indexOf(target.word.toLowerCase()),
                  });
            
                  total++;
                  created++;
          }
          round++;
    }
  
    console.log(`Writing ${sentencesToCreate.length} sentences and sentenceWords to database in batches...`);
  
    const BATCH_SIZE = 1000;
    for (let i = 0; i < sentencesToCreate.length; i += BATCH_SIZE) {
          await prisma.sentence.createMany({
                  data: sentencesToCreate.slice(i, i + BATCH_SIZE),
                  skipDuplicates: true,
          });
    }
  
    for (let i = 0; i < sentenceWordsToCreate.length; i += BATCH_SIZE) {
          await prisma.sentenceWord.createMany({
                  data: sentenceWordsToCreate.slice(i, i + BATCH_SIZE),
                  skipDuplicates: true,
          });
    }
  
    console.log(`Context Engine corpus ready: ${total} sentences (${created} new variants).`);
}

main()
    .catch((error) => { console.error(error); process.exit(1); })
    .finally(() => prisma.$disconnect());
