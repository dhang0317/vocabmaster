/**
 * Context Engine Full Seed (Phase 1 + Phase 2)
 * - Expanded SemanticSlots (34) + GrammarPatterns (280+)
 * - ~630 words with Sense / SlotCandidate / SenseExample
 * - Context sentences per word
 * - Supports split part files when main JSON has "parts" array
 *
 * Usage (from project root, with DATABASE_URL set):
 *   node prisma/context-engine-seed-1000.js
 *
 * Requires: context_engine_1000.json (+ optional part1/2/3) next to this file,
 * or set CONTEXT_ENGINE_JSON path.
 */
const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

const BASE_SLOTS = [
  ['VERB_INFORM', '提供資訊', 'VERB'],
  ['VERB_REQUEST', '提出請求', 'VERB'],
  ['VERB_PERCEPTION', '察覺或注意', 'VERB'],
  ['VERB_COOPERATION', '合作', 'VERB'],
  ['VERB_REASONING', '分析或推理', 'VERB'],
  ['VERB_COMMUNICATION', '溝通或表達', 'VERB'],
  ['VERB_PROCESS', '處理或執行流程', 'VERB'],
  ['VERB_STATE_CHANGE', '造成狀態改變', 'VERB'],
  ['VERB_CAUSE_EFFECT', '導致結果', 'VERB'],
  ['VERB_ACHIEVEMENT', '達成或完成', 'VERB'],
  ['VERB_NEGOTIATION', '協商或談判', 'VERB'],
  ['VERB_EVALUATION', '評估或判斷', 'VERB'],
  ['VERB_CREATION', '創造或產生', 'VERB'],
  ['VERB_MOVEMENT', '移動或轉移', 'VERB'],
  ['ADJ_DURATION', '持續時間相關特徵', 'ADJ'],
  ['ADJ_IMPORTANCE', '重要性', 'ADJ'],
  ['ADJ_QUALITY', '品質', 'ADJ'],
  ['ADJ_INTENSITY', '強度', 'ADJ'],
  ['ADJ_EVALUATION', '評價或整體感受', 'ADJ'],
  ['ADJ_SEQUENCE', '順序或階段', 'ADJ'],
  ['ADJ_FREQUENCY', '頻率', 'ADJ'],
  ['ADJ_EMOTION', '情緒或態度', 'ADJ'],
  ['ADJ_DIFFICULTY', '難度或複雜度', 'ADJ'],
  ['ADJ_PROBABILITY', '可能性或確定性', 'ADJ'],
  ['ADJ_SIZE_SCALE', '規模或大小', 'ADJ'],
  ['NOUN_PROCESS', '過程或程序', 'NOUN'],
  ['NOUN_RESOURCE', '資源或材料', 'NOUN'],
  ['NOUN_OUTCOME', '結果或成果', 'NOUN'],
  ['NOUN_SYSTEM', '系統或架構', 'NOUN'],
  ['NOUN_ROLE', '角色或職位', 'NOUN'],
  ['NOUN_CONCEPT', '抽象概念', 'NOUN'],
  ['NOUN_EVENT', '事件或活動', 'NOUN'],
  ['NOUN_LOCATION', '地點或場所', 'NOUN'],
  ['NOUN_DOCUMENT', '文件或資料', 'NOUN'],
];

// Core patterns (seed will also load extras from JSON if present)
const BASE_PATTERNS = [
  ['inform + someone + about + something', 'inform + person + about + thing'],
  ['notify + someone + of + something', 'notify + person + of + thing'],
  ['request + something', 'request + noun'],
  ['request + that + clause', 'request + that + clause'],
  ['notice + noun', 'notice + object'],
  ['cooperate + with + someone', 'cooperate + with + person'],
  ['coordinate + with + someone', 'coordinate + with + person'],
  ['analyze + something', 'analyze + object'],
  ['evaluate + something', 'evaluate + object'],
  ['communicate + something + to + someone', 'communicate + information + to + person'],
  ['clarify + something', 'clarify + object'],
  ['process + something', 'process + object'],
  ['handle + something', 'handle + object'],
  ['lead + to + something', 'lead + to + result'],
  ['result + in + something', 'result + in + result'],
  ['maintain + something', 'maintain + object'],
  ['improve + something', 'improve + object'],
  ['reduce + something', 'reduce + object'],
  ['achieve + something', 'achieve + object'],
  ['allocate + something + to + someone', 'allocate + resource + to + person/unit'],
  ['implement + something', 'implement + plan/system'],
  ['assess + something', 'assess + situation'],
  ['ensure + that + clause', 'ensure + that + clause'],
  ['enable + someone + to + verb', 'enable + person + to + action'],
  ['require + someone + to + verb', 'require + person + to + action'],
  ['be + essential + for + something', 'be + essential + for + noun'],
  ['be + responsible + for + something', 'be + responsible + for + noun'],
  ['contribute + to + something', 'contribute + to + result'],
  ['focus + on + something', 'focus + on + topic'],
  ['prefer + A + to + B', 'prefer + A + to + B'],
  ['negotiate + with + someone', 'negotiate + with + person'],
  ['delegate + something + to + someone', 'delegate + task + to + person'],
  ['supervise + someone/something', 'supervise + person/project'],
  ['motivate + someone + to + verb', 'motivate + person + to + action'],
  ['streamline + something', 'streamline + process'],
  ['prioritize + something', 'prioritize + task'],
  ['mitigate + something', 'mitigate + risk'],
  ['optimize + something', 'optimize + system'],
  ['comply + with + something', 'comply + with + rule'],
  ['facilitate + something', 'facilitate + process'],
  ['initiate + something', 'initiate + project'],
  ['revise + something', 'revise + document'],
  ['draft + something', 'draft + document'],
  ['approve + something', 'approve + request'],
  ['hypothesize + that + clause', 'hypothesize + that + clause'],
  ['substantiate + a claim', 'substantiate + claim'],
  ['refute + an argument', 'refute + argument'],
  ['synthesize + information', 'synthesize + information'],
  ['formulate + a hypothesis', 'formulate + hypothesis'],
  ['validate + a model', 'validate + model'],
  ['paraphrase + a passage', 'paraphrase + passage'],
  ['summarize + the findings', 'summarize + findings'],
  ['commute + to + work', 'commute + to + place'],
  ['do + chores', 'do + chores'],
  ['form + a habit', 'form + habit'],
  ['persuade + someone + to + verb', 'persuade + person + to + action'],
  ['convince + someone + that + clause', 'convince + person + that + clause'],
  ['remind + someone + to + verb', 'remind + person + to + action'],
  ['realize + that + clause', 'realize + that + clause'],
  ['distinguish + between + A + and + B', 'distinguish + between + A + and + B'],
  ['anticipate + something', 'anticipate + event'],
  ['invest + in + something', 'invest + in + asset'],
  ['detect + something', 'detect + signal/problem'],
  ['measure + something', 'measure + quantity'],
  ['observe + something', 'observe + phenomenon'],
  ['predict + something', 'predict + outcome'],
  ['simulate + a process', 'simulate + process'],
  ['generate + energy', 'generate + energy'],
  ['transmit + a signal', 'transmit + signal'],
  ['absorb + energy', 'absorb + energy'],
  ['emit + radiation', 'emit + radiation'],
  ['board + a plane', 'board + vehicle'],
  ['depart + from + a place', 'depart + from + place'],
  ['arrive + at + a place', 'arrive + at + place'],
  ['explore + a city', 'explore + place'],
  ['book + a hotel', 'book + accommodation'],
  ['check in + at + a hotel', 'check in + at + place'],
  ['check out + of + a hotel', 'check out + of + place'],
];

function loadCorpus() {
  const candidates = [
    process.env.CONTEXT_ENGINE_JSON,
    path.join(__dirname, 'context_engine_1000.json'),
    path.join(__dirname, '..', 'context_engine_1000.json'),
    path.join(process.cwd(), 'context_engine_1000.json'),
    path.join(process.cwd(), 'prisma', 'context_engine_1000.json'),
    path.join(__dirname, 'context_engine_phase1_300.json'),
  ].filter(Boolean);

  for (const p of candidates) {
    if (fs.existsSync(p)) {
      const data = JSON.parse(fs.readFileSync(p, 'utf8'));
      let words = data.words || [];

      // Support split parts (for large packages that exceed single-file push limits)
      if ((!words.length || data.parts) && data.parts) {
        const dir = path.dirname(p);
        for (const partName of data.parts) {
          const partPath = path.join(dir, partName);
          if (fs.existsSync(partPath)) {
            const partData = JSON.parse(fs.readFileSync(partPath, 'utf8'));
            const partWords = partData.words || [];
            words = words.concat(partWords);
            console.log(`  + loaded ${partWords.length} words from ${partName}`);
          } else {
            console.warn(`  ! missing part: ${partPath}`);
          }
        }
        data.words = words;
      }

      // Fallback: auto-discover part files if words still empty
      if (!words.length) {
        const dir = path.dirname(p);
        for (let i = 1; i <= 10; i++) {
          const partPath = path.join(dir, `context_engine_1000_part${i}.json`);
          if (!fs.existsSync(partPath)) break;
          const partData = JSON.parse(fs.readFileSync(partPath, 'utf8'));
          const partWords = partData.words || [];
          words = words.concat(partWords);
          console.log(`  + auto-loaded ${partWords.length} words from part${i}`);
        }
        data.words = words;
      }

      console.log(`Loaded ${data.words?.length ?? 0} words from ${p}`);
      return data;
    }
  }
  throw new Error('context_engine_1000.json (or phase1) not found. Place it under prisma/ or set CONTEXT_ENGINE_JSON.');
}

function slug(text) {
  return String(text).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

async function main() {
  const data = loadCorpus();
  const corpus = data.words || [];

  // Merge extra slots from JSON if present
  const allSlots = [...BASE_SLOTS];
  const seenSlotCodes = new Set(BASE_SLOTS.map((s) => s[0]));
  for (const s of data.slots_extra || []) {
    if (Array.isArray(s) && s[0] && !seenSlotCodes.has(s[0])) {
      allSlots.push(s);
      seenSlotCodes.add(s[0]);
    }
  }

  // 1) Slots
  for (const [code, name, pos] of allSlots) {
    await prisma.semanticSlot.upsert({
      where: { code },
      update: { name, pos },
      create: { code, name, pos },
    });
  }

  // Merge extra patterns from JSON
  const allPatterns = [...BASE_PATTERNS];
  const seenPatternNames = new Set(BASE_PATTERNS.map((p) => p[0]));
  for (const p of data.grammar_patterns_extra || data.patterns_extra || []) {
    if (Array.isArray(p) && p[0] && !seenPatternNames.has(p[0])) {
      allPatterns.push(p);
      seenPatternNames.add(p[0]);
    }
  }

  // 2) Grammar patterns
  const patternIds = {};
  for (const [name, pattern] of allPatterns) {
    const row = await prisma.grammarPattern.findFirst({ where: { name } });
    const saved = row
      ? await prisma.grammarPattern.update({ where: { id: row.id }, data: { pattern } })
      : await prisma.grammarPattern.create({ data: { name, pattern } });
    patternIds[name] = saved.id;
  }

  // 3) Core deck
  const deck = await prisma.deck.upsert({
    where: { id: '00000000-0000-0000-0000-000000000001' },
    update: {
      title: 'Context Engine Core',
      description: 'Built-in vocabulary and context corpus (Phase 1+2 ~630)',
      isPublic: true,
      publishedAt: new Date(),
    },
    create: {
      id: '00000000-0000-0000-0000-000000000001',
      title: 'Context Engine Core',
      description: 'Built-in vocabulary and context corpus (Phase 1+2 ~630)',
      isPublic: true,
      publishedAt: new Date(),
    },
  });

  const slotByCode = Object.fromEntries(
    (await prisma.semanticSlot.findMany()).map((r) => [r.code, r])
  );

  // 4) Context tags from domains
  const domains = [...new Set(corpus.map((w) => w.domain))];
  for (const theme of domains) {
    await prisma.contextTag.upsert({
      where: { name: theme },
      update: {},
      create: { name: theme },
    });
  }

  let wordCount = 0;
  let senseCount = 0;
  let exampleCount = 0;
  let candidateCount = 0;
  let sentenceCount = 0;

  for (const item of corpus) {
    const text = item.word;
    const wordId = `ce-word-${slug(text)}`;
    const senseId = `ce-sense-${slug(text)}`;

    const word = await prisma.word.upsert({
      where: { id: wordId },
      update: {
        word: text,
        translation: item.translation,
        definition: item.definition,
        pos: item.pos,
      },
      create: {
        id: wordId,
        deckId: deck.id,
        word: text,
        translation: item.translation,
        definition: item.definition,
        pos: item.pos,
      },
    });
    wordCount++;

    const sense = await prisma.sense.upsert({
      where: { id: senseId },
      update: {
        translation: item.translation,
        definition: item.definition,
        cefr: item.cefr,
        domain: item.domain,
      },
      create: {
        id: senseId,
        wordId: word.id,
        translation: item.translation,
        definition: item.definition,
        cefr: item.cefr,
        domain: item.domain,
      },
    });
    senseCount++;

    // Sense examples
    for (let i = 0; i < (item.examples || []).length; i++) {
      const ex = item.examples[i];
      const exId = `ce-ex-${slug(text)}-${i}`;
      await prisma.senseExample.upsert({
        where: { id: exId },
        update: { content: ex.en, translation: ex.zh },
        create: {
          id: exId,
          senseId: sense.id,
          content: ex.en,
          translation: ex.zh,
        },
      });
      exampleCount++;

      // Also create Sentence + SentenceWord for context lookup
      const sentenceId = `ce-sent-${slug(text)}-${i}`;
      const sentence = await prisma.sentence.upsert({
        where: { id: sentenceId },
        update: {
          content: ex.en,
          translation: ex.zh,
          difficulty: item.cefr,
          theme: item.domain,
          sourceType: 'context-engine',
          qualityScore: 0.9,
        },
        create: {
          id: sentenceId,
          content: ex.en,
          translation: ex.zh,
          difficulty: item.cefr,
          theme: item.domain,
          sourceType: 'context-engine',
          qualityScore: 0.9,
        },
      });
      await prisma.sentenceWord.upsert({
        where: {
          sentenceId_wordId: { sentenceId: sentence.id, wordId: word.id },
        },
        update: {
          isTarget: true,
          position: Math.max(0, ex.en.toLowerCase().indexOf(text.toLowerCase())),
        },
        create: {
          sentenceId: sentence.id,
          wordId: word.id,
          isTarget: true,
          position: Math.max(0, ex.en.toLowerCase().indexOf(text.toLowerCase())),
        },
      });
      sentenceCount++;
    }

    // Slot candidates
    for (const code of item.slots || []) {
      const slot = slotByCode[code];
      if (!slot) {
        console.warn(`Unknown slot code: ${code} for word ${text}`);
        continue;
      }
      let grammarPatternId = null;
      if (item.grammar && item.grammar[0]) {
        const gName = item.grammar[0];
        const matchKey = Object.keys(patternIds).find(
          (k) => k === gName || gName.includes(k.split(' + ')[0]) || k.includes(gName.split(' + ')[0])
        );
        if (matchKey) grammarPatternId = patternIds[matchKey];
      }

      await prisma.slotCandidate.upsert({
        where: {
          slotId_senseId: { slotId: slot.id, senseId: sense.id },
        },
        update: {
          weight: 1,
          priority: 10,
          minCEFR: item.cefr,
          grammarPatternId,
        },
        create: {
          slotId: slot.id,
          senseId: sense.id,
          weight: 1,
          priority: 10,
          minCEFR: item.cefr,
          grammarPatternId,
        },
      });
      candidateCount++;
    }
  }

  console.log(
    `Context Engine seeded: ${allSlots.length} slots, ${allPatterns.length} patterns, ` +
      `${wordCount} words, ${senseCount} senses, ${exampleCount} examples, ` +
      `${candidateCount} slot candidates, ${sentenceCount} context sentences.`
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
