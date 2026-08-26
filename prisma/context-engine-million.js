const crypto = require('crypto');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const TARGET = Number(process.env.CONTEXT_TARGET || 1000000);
const BATCH_SIZE = Math.min(Number(process.env.CONTEXT_BATCH_SIZE || 25), 50);
const MODEL = process.env.GEMINI_MODEL || 'gemini-2.5-flash';
const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) throw new Error('GEMINI_API_KEY is required for the offline corpus-generation job. This key is never exposed to end users.');

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: MODEL });

function hash(text) {
  return crypto.createHash('sha256').update(text.trim().toLowerCase()).digest('hex').slice(0, 32);
}

function validSentence(text, target) {
  if (typeof text !== 'string') return false;
  const s = text.trim();
  if (s.length < 20 || s.length > 220) return false;
  if (s.split(/\s+/).length < 5 || s.split(/\s+/).length > 35) return false;
  if (!new RegExp(`\\b${target.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&')}\\b`, 'i').test(s)) return false;
  if (/\{[A-Z_]+\}|\[TARGET\]|example sentence|as an ai|this sentence/i.test(s)) return false;
  if (/\s{2,}/.test(s)) return false;
  if (!/[.!?]$/.test(s)) return false;
  return true;
}

async function generateForWord(word, sense, count) {
  const prompt = `Generate ${count} genuinely different English example sentences for an educational vocabulary database.\n\nTarget word: ${word.word}\nMeaning: ${sense.translation}\nDefinition: ${sense.definition || ''}\nCEFR: ${sense.cefr || 'unknown'}\nDomain: ${sense.domain || 'general'}\nRegister: ${sense.register || 'neutral'}\n\nRequirements:\n- Use the target word naturally with its specified meaning.\n- Every sentence must be grammatical and idiomatic.\n- Use varied subjects, situations, collocations, and sentence structures.\n- Match the CEFR level and domain.\n- Do not explain the word. Do not mention that these are examples.\n- Do not invent facts that require specialist knowledge.\n- Return ONLY valid JSON: {"sentences":["...", "..."]}.`;

  const result = await model.generateContent(prompt);
  const text = result.response.text().trim();
  const json = text.replace(/^```json\s*/i, '').replace(/```$/i, '').trim();
  const parsed = JSON.parse(json);
  return Array.isArray(parsed.sentences) ? parsed.sentences.filter(s => validSentence(s, word.word)) : [];
}

async function insertBatch(rows) {
  if (!rows.length) return 0;
  const sentenceRows = rows.map(r => ({
    id: r.id,
    content: r.content,
    difficulty: r.difficulty,
    theme: r.theme,
    sourceType: 'context-engine-ai',
    qualityScore: r.qualityScore,
  }));

  await prisma.sentence.createMany({ data: sentenceRows, skipDuplicates: true });

  const wordRows = rows.map(r => ({
    sentenceId: r.id,
    wordId: r.wordId,
    isTarget: true,
    position: r.position,
  }));
  await prisma.sentenceWord.createMany({ data: wordRows, skipDuplicates: true });
  return rows.length;
}

async function main() {
  const existingCount = await prisma.sentence.count({ where: { sourceType: { in: ['context-engine', 'context-engine-v2', 'context-engine-ai'] } } });
  let total = existingCount;
  if (total >= TARGET) {
    console.log(`Context Engine already has ${total} sentences; target is ${TARGET}.`);
    return;
  }

  const senses = await prisma.sense.findMany({ include: { word: true } });
  if (!senses.length) throw new Error('No vocabulary senses found. Run the core Context Engine seed first.');

  let cursor = 0;
  let accepted = 0;
  while (total < TARGET) {
    const sense = senses[cursor % senses.length];
    cursor++;
    const requested = Math.min(BATCH_SIZE, TARGET - total);
    let generated = [];

    try {
      generated = await generateForWord(sense.word, sense, requested);
    } catch (error) {
      console.error(`Generation failed for ${sense.word.word}:`, error.message);
      continue;
    }

    const rows = [];
    for (const content of generated) {
      const id = `ce-ai-${hash(content)}`;
      rows.push({
        id,
        content: content.trim(),
        wordId: sense.wordId,
        difficulty: sense.cefr,
        theme: sense.domain,
        qualityScore: 0.9,
        position: content.toLowerCase().indexOf(sense.word.word.toLowerCase()),
      });
    }

    const inserted = await insertBatch(rows);
    total += inserted;
    accepted += inserted;

    if (cursor % 10 === 0 || total >= TARGET) {
      console.log(`Context Engine progress: ${total}/${TARGET} (${accepted} newly accepted).`);
    }
  }

  console.log(`Context Engine million corpus generation complete: ${total} sentences.`);
}

main().catch(error => { console.error(error); process.exit(1); }).finally(() => prisma.$disconnect());
