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
  ['reason about + something', 'reason about + topic'],
  ['communicate + something + to + someone', 'communicate + information + to + person'],
  ['process + something', 'process + object'],
  ['lead + to + something', 'lead + to + result'],
  ['maintain + something', 'maintain + object'],
];

const corpus = [
  ['inform', '通知；告知', 'to give someone information about something', 'B1', 'workplace', 'VERB_INFORM'],
  ['notify', '通知', 'to formally tell someone about something', 'B2', 'workplace', 'VERB_INFORM'],
  ['request', '要求；請求', 'to politely or formally ask for something', 'B1', 'workplace', 'VERB_REQUEST'],
  ['notice', '注意到', 'to become aware of something', 'B1', 'daily', 'VERB_PERCEPTION'],
  ['recognize', '認出；辨識', 'to identify someone or something from previous knowledge', 'B1', 'daily', 'VERB_PERCEPTION'],
  ['cooperate', '合作', 'to work together toward a shared result', 'B1', 'workplace', 'VERB_COOPERATION'],
  ['coordinate', '協調', 'to organize people or activities so they work well together', 'B2', 'workplace', 'VERB_COOPERATION'],
  ['analyze', '分析', 'to examine something carefully to understand it', 'B2', 'academic', 'VERB_REASONING'],
  ['evaluate', '評估', 'to judge the quality or value of something', 'B2', 'academic', 'VERB_REASONING'],
  ['communicate', '溝通', 'to share information or ideas with someone', 'B1', 'workplace', 'VERB_COMMUNICATION'],
  ['clarify', '澄清；說明', 'to make something easier to understand', 'B2', 'workplace', 'VERB_COMMUNICATION'],
  ['process', '處理', 'to deal with information or a request', 'B1', 'workplace', 'VERB_PROCESS'],
  ['handle', '處理；應付', 'to deal with a situation or task', 'B1', 'workplace', 'VERB_PROCESS'],
  ['improve', '改善', 'to make something better', 'A2', 'daily', 'VERB_STATE_CHANGE'],
  ['reduce', '減少', 'to make something smaller or less', 'B1', 'science', 'VERB_STATE_CHANGE'],
  ['maintain', '維持', 'to keep something at the same level or condition', 'B2', 'workplace', 'VERB_PROCESS'],
  ['significant', '重要的；顯著的', 'important or large enough to have an effect', 'B2', 'academic', 'ADJ_IMPORTANCE'],
  ['essential', '必要的', 'completely necessary', 'B1', 'academic', 'ADJ_IMPORTANCE'],
  ['reliable', '可靠的', 'able to be trusted to work well', 'B1', 'workplace', 'ADJ_QUALITY'],
  ['efficient', '有效率的', 'working well without wasting time or resources', 'B2', 'workplace', 'ADJ_QUALITY'],
  ['effective', '有效的', 'successful in producing the intended result', 'B1', 'workplace', 'ADJ_QUALITY'],
  ['intense', '強烈的', 'very strong or extreme', 'B2', 'daily', 'ADJ_INTENSITY'],
  ['gradual', '逐漸的', 'happening slowly over time', 'B2', 'science', 'ADJ_SEQUENCE'],
  ['initial', '最初的', 'existing at the beginning', 'B2', 'workplace', 'ADJ_SEQUENCE'],
  ['temporary', '暫時的', 'lasting for only a limited time', 'B1', 'daily', 'ADJ_DURATION'],
  ['permanent', '永久的', 'lasting for a very long time or forever', 'B1', 'daily', 'ADJ_DURATION'],
  ['appropriate', '適當的', 'suitable for a particular situation', 'B2', 'workplace', 'ADJ_EVALUATION'],
  ['practical', '實用的', 'useful and realistic', 'B1', 'daily', 'ADJ_EVALUATION'],
  ['complex', '複雜的', 'having many connected parts or details', 'B1', 'academic', 'ADJ_QUALITY'],
  ['accurate', '準確的', 'correct and free from mistakes', 'B1', 'academic', 'ADJ_QUALITY'],
];

const sentencePatterns = {
  workplace: [
    (w) => [`The manager decided to ${w} the team about the schedule change.`, '經理決定通知團隊時程的變更。'],
    (w) => [`Our team needs to ${w} the client before the meeting begins.`, '我們的團隊需要在會議開始前通知客戶。'],
    (w) => [`The staff used the new system to ${w} customer requests more quickly.`, '員工使用新系統更快速地處理客戶請求。'],
  ],
  academic: [
    (w) => [`Researchers ${w} the results before drawing a conclusion.`, '研究人員在下結論前分析結果。'],
    (w) => [`Students should ${w} reliable sources before using them in a report.`, '學生在報告中使用資料前應評估可靠來源。'],
    (w) => [`The study provides ${w} evidence for the proposed explanation.`, '這項研究為提出的解釋提供了重要證據。'],
  ],
  daily: [
    (w) => [`I did not ${w} the problem until I checked the instructions again.`, '直到再次查看說明，我才注意到這個問題。'],
    (w) => [`A ${w} change in the weather affected our plans.`, '天氣的逐漸變化影響了我們的計畫。'],
    (w) => [`The repair is only ${w}, so we will need another solution later.`, '這項修理只是暫時的，所以之後我們需要另一個方案。'],
  ],
  science: [
    (w) => [`Scientists ${w} the data to identify a possible pattern.`, '科學家分析資料以找出可能的模式。'],
    (w) => [`The experiment showed a ${w} change after several trials.`, '實驗在數次試驗後顯示出顯著的變化。'],
    (w) => [`The effect was ${w} rather than immediate.`, '這個影響是逐漸發生的，而不是立即出現。'],
  ],
};

async function main() {
  for (const [code, name, pos] of slots) {
    await prisma.semanticSlot.upsert({ where: { code }, update: { name, pos }, create: { code, name, pos } });
  }

  const patternIds = {};
  for (const [name, pattern] of patterns) {
    const row = await prisma.grammarPattern.findFirst({ where: { name } });
    const saved = row
      ? await prisma.grammarPattern.update({ where: { id: row.id }, data: { pattern } })
      : await prisma.grammarPattern.create({ data: { name, pattern } });
    patternIds[name] = saved.id;
  }

  const deck = await prisma.deck.upsert({
    where: { id: '00000000-0000-0000-0000-000000000001' },
    update: { title: 'Context Engine Core', description: 'Built-in vocabulary and context corpus', isPublic: true, publishedAt: new Date() },
    create: { id: '00000000-0000-0000-0000-000000000001', title: 'Context Engine Core', description: 'Built-in vocabulary and context corpus', isPublic: true, publishedAt: new Date() },
  });

  const slotByCode = Object.fromEntries(await prisma.semanticSlot.findMany().then(rows => rows.map(r => [r.code, r])));
  const wordByText = {};

  for (const [text, translation, definition, cefr, domain, slotCode] of corpus) {
    const word = await prisma.word.upsert({
      where: { id: `ce-word-${text}` },
      update: { word: text, translation, definition, pos: slotCode.startsWith('ADJ_') ? 'adjective' : 'verb' },
      create: { id: `ce-word-${text}`, deckId: deck.id, word: text, translation, definition, pos: slotCode.startsWith('ADJ_') ? 'adjective' : 'verb' },
    });
    wordByText[text] = word;

    const sense = await prisma.sense.upsert({
      where: { id: `ce-sense-${text}` },
      update: { translation, definition, cefr, domain },
      create: { id: `ce-sense-${text}`, wordId: word.id, translation, definition, cefr, domain },
    });

    const slot = slotByCode[slotCode];
    if (slot) {
      await prisma.slotCandidate.upsert({
        where: { slotId_senseId: { slotId: slot.id, senseId: sense.id } },
        update: { weight: 1, priority: 10 },
        create: { slotId: slot.id, senseId: sense.id, weight: 1, priority: 10 },
      });
    }
  }

  const themes = [...new Set(corpus.map(row => row[4]))];
  for (const theme of themes) {
    await prisma.contextTag.upsert({ where: { name: theme }, update: {}, create: { name: theme } });
  }

  const templates = [
    ['Workplace update', 'workplace', 'intermediate', 'The project manager will {VERB_INFORM} everyone about the latest changes. The team will {VERB_COOPERATION} to keep the project on schedule.'],
    ['Academic analysis', 'academic', 'intermediate', 'Students should {VERB_REASONING} the evidence carefully before reaching a conclusion. The final explanation should be {ADJ_ACCURACY}.'],
    ['Daily communication', 'daily', 'intermediate', 'If you {VERB_PERCEPTION} a problem, you should {VERB_COMMUNICATION} it clearly to the people involved.'],
    ['Science process', 'science', 'intermediate', 'Researchers {VERB_REASONING} the data and look for a {ADJ_SEQUENCE} pattern before repeating the experiment.'],
    ['Customer request', 'workplace', 'intermediate', 'The customer may {VERB_REQUEST} additional information, so the staff should {VERB_INFORM} them about the available options.'],
  ];

  const placeholderToSlot = {
    VERB_INFORM: 'VERB_INFORM', VERB_COOPERATION: 'VERB_COOPERATION', VERB_REASONING: 'VERB_REASONING',
    VERB_COMMUNICATION: 'VERB_COMMUNICATION', VERB_PERCEPTION: 'VERB_PERCEPTION', VERB_REQUEST: 'VERB_REQUEST',
    ADJ_SEQUENCE: 'ADJ_SEQUENCE', ADJ_ACCURACY: 'ADJ_QUALITY',
  };

  for (const [title, theme, difficulty, content] of templates) {
    const template = await prisma.template.upsert({
      where: { id: `ce-template-${title.toLowerCase().replace(/[^a-z]+/g, '-')}` },
      update: { title, theme, difficulty, content },
      create: { id: `ce-template-${title.toLowerCase().replace(/[^a-z]+/g, '-')}`, title, theme, difficulty, content, qualityScore: 0.9 },
    });
    const placeholders = [...content.matchAll(/\{([A-Z_]+)\}/g)].map(m => m[1]);
    for (let i = 0; i < placeholders.length; i++) {
      const code = placeholderToSlot[placeholders[i]];
      const slot = slotByCode[code];
      if (!slot) continue;
      await prisma.templateSlot.upsert({
        where: { templateId_placeholder: { templateId: template.id, placeholder: `{${placeholders[i]}}` } },
        update: { slotId: slot.id, position: i, required: true },
        create: { templateId: template.id, slotId: slot.id, placeholder: `{${placeholders[i]}}`, position: i, required: true },
      });
    }
  }

  // Generate a deterministic starter corpus: 3 natural context sentences per word.
  let sentenceCount = 0;
  for (const [text, , , cefr, domain] of corpus) {
    const word = wordByText[text];
    const patternsForTheme = sentencePatterns[domain] || sentencePatterns.daily;
    for (let i = 0; i < patternsForTheme.length; i++) {
      const [content, translation] = patternsForTheme[i](text);
      const sentenceId = `ce-sentence-${text}-${i}`;
      const sentence = await prisma.sentence.upsert({
        where: { id: sentenceId },
        update: { content, translation, difficulty: cefr, theme: domain, sourceType: 'context-engine', qualityScore: 0.88 },
        create: { id: sentenceId, content, translation, difficulty: cefr, theme: domain, sourceType: 'context-engine', qualityScore: 0.88 },
      });
      await prisma.sentenceWord.upsert({
        where: { sentenceId_wordId: { sentenceId: sentence.id, wordId: word.id } },
        update: { isTarget: true, position: content.toLowerCase().indexOf(text.toLowerCase()) },
        create: { sentenceId: sentence.id, wordId: word.id, isTarget: true, position: content.toLowerCase().indexOf(text.toLowerCase()) },
      });
      sentenceCount++;
    }
  }

  console.log(`Context Engine seeded: ${slots.length} slots, ${patterns.length} grammar patterns, ${corpus.length} words, ${sentenceCount} context sentences.`);
}

main().catch((error) => { console.error(error); process.exit(1); }).finally(() => prisma.$disconnect());
