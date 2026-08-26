const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Expand the deterministic built-in corpus without requiring an AI API.
// Each seeded vocabulary item receives 36 context-specific sentence variants.
const verbFrames = {
  VERB_INFORM: [
    'The manager decided to {w} the team about the schedule change.',
    'The office will {w} all employees about the new procedure.',
    'Please {w} the client about the updated meeting time.',
    'The supervisor asked the assistant to {w} the staff about the decision.',
    'We need to {w} our partners about the latest requirements.',
    'The school will {w} parents about the change before Friday.',
    'The website was updated to {w} visitors about the service interruption.',
    'The report should {w} readers about the limits of the study.',
    'The coordinator will {w} participants about the safety rules.',
    'The team agreed to {w} customers about the delivery schedule.',
    'The notice was sent to {w} residents about the construction work.',
    'The department must {w} everyone about the final deadline.'
  ],
  VERB_REQUEST: [
    'The customer decided to {w} a refund after the problem occurred.',
    'Students can {w} additional information from the library.',
    'The manager asked the team to {w} more time for the project.',
    'The visitor politely {w} a copy of the document.',
    'The company may {w} approval before starting the work.',
    'The patient was told to {w} assistance if necessary.',
    'The researcher decided to {w} access to the original data.',
    'The employee can {w} a meeting with the supervisor.',
    'The customer service team received a {w} for further support.',
    'The teacher asked students to {w} permission before leaving.',
    'The department will {w} feedback from participants.',
    'The applicant can {w} an extension when there is a valid reason.'
  ],
  VERB_PERCEPTION: [
    'I did not {w} the problem until I checked the instructions again.',
    'The researcher began to {w} a small difference in the results.',
    'She immediately {w} that the room was unusually quiet.',
    'The driver failed to {w} the warning sign.',
    'Students should {w} how the two examples are different.',
    'The team quickly {w} a change in customer behavior.',
    'The scientist could {w} a pattern after several trials.',
    'The visitor did not {w} the sign near the entrance.',
    'The manager began to {w} a problem with the schedule.',
    'The child was able to {w} familiar sounds from a distance.',
    'The analyst helped us {w} an important trend in the data.',
    'You may {w} that the second method is more practical.'
  ],
  VERB_COOPERATION: [
    'The two departments agreed to {w} on the project.',
    'The researchers need to {w} with local organizations.',
    'Our teams will {w} to solve the problem efficiently.',
    'The companies decided to {w} on a shared training program.',
    'Students were encouraged to {w} with their classmates.',
    'The engineers must {w} closely during the testing phase.',
    'The hospital and university agreed to {w} on future research.',
    'The staff members learned to {w} despite their different roles.',
    'Several groups will {w} to improve the service.',
    'The project requires everyone to {w} toward the same goal.',
    'The manager asked the teams to {w} more effectively.',
    'The organizations hope to {w} on environmental projects.'
  ],
  VERB_REASONING: [
    'Researchers {w} the results before drawing a conclusion.',
    'Students should {w} the evidence carefully before writing a report.',
    'The analyst will {w} the data to identify a possible pattern.',
    'The team needs to {w} the causes of the problem.',
    'Scientists often {w} information from several different sources.',
    'The class was asked to {w} the argument from another perspective.',
    'The researchers {w} the results again after finding an error.',
    'The report explains how experts {w} the available evidence.',
    'The engineer will {w} the failure before changing the design.',
    'Students can {w} the examples to find a common feature.',
    'The committee needs to {w} the possible effects of the policy.',
    'The study uses several methods to {w} the collected data.'
  ],
  VERB_COMMUNICATION: [
    'The manager asked the team to {w} the problem clearly.',
    'Employees should {w} important information to their colleagues.',
    'The teacher encouraged students to {w} their ideas clearly.',
    'The doctor tried to {w} the results in simple language.',
    'The company uses email to {w} important updates to customers.',
    'The speaker was able to {w} the main point effectively.',
    'Good leaders know how to {w} expectations to their teams.',
    'The researcher needs to {w} the findings to the public.',
    'The guide used a diagram to {w} the process to visitors.',
    'The staff should {w} with customers in a professional way.',
    'The report helps {w} complex ideas to a wider audience.',
    'The students practiced how to {w} their opinions respectfully.'
  ],
  VERB_PROCESS: [
    'The staff will {w} customer requests this afternoon.',
    'The system can {w} the information within a few seconds.',
    'The manager asked the team to {w} the application carefully.',
    'Employees must {w} each request according to the policy.',
    'The company uses software to {w} large amounts of data.',
    'The department can {w} payments more efficiently now.',
    'The support team knows how to {w} difficult cases.',
    'The machine was designed to {w} the material safely.',
    'The office needs a better way to {w} incoming documents.',
    'The researchers will {w} the samples before testing them.',
    'The team created a checklist to {w} every request consistently.',
    'The new system helps employees {w} routine tasks faster.'
  ],
  VERB_STATE_CHANGE: [
    'The new policy should {w} the quality of the service.',
    'Regular practice can {w} your performance over time.',
    'The company hopes to {w} energy use this year.',
    'The treatment may {w} the symptoms within a few days.',
    'The team is working to {w} the current process.',
    'Small changes can {w} the efficiency of the system.',
    'The project aims to {w} unnecessary costs.',
    'The update was designed to {w} the user experience.',
    'Researchers are studying ways to {w} the environmental impact.',
    'The repair helped {w} the condition of the equipment.',
    'The program could {w} access to educational resources.',
    'The company plans to {w} waste during production.'
  ]
};

const adjectiveFrames = {
  ADJ_DURATION: [
    'The arrangement is {w} rather than permanent.',
    'The change was described as {w} by the manager.',
    'The position is {w} and will end after the busy season.',
    'The effect is {w} and should disappear over time.',
    'The road closure is {w}, according to the latest notice.',
    'The agreement remains {w} while both sides negotiate.',
    'The equipment is available on a {w} basis.',
    'The team made a {w} adjustment to the schedule.',
    'The solution was designed to meet a {w} need.',
    'The policy was introduced as a {w} measure.',
    'The building will remain closed for a {w} period.',
    'The manager warned that the arrangement might not be {w}.'
  ],
  ADJ_IMPORTANCE: [
    'The study provides {w} evidence for the proposed explanation.',
    'The manager emphasized the {w} role of communication.',
    'Researchers found a {w} difference between the two groups.',
    'The report identifies several {w} factors.',
    'The issue is {w} to the success of the project.',
    'The training has a {w} effect on workplace safety.',
    'The results show a {w} change in performance.',
    'The team discussed the most {w} part of the project.',
    'This is a {w} issue for the organization.',
    'The evidence is {w} for understanding the problem.',
    'The manager made a {w} point during the meeting.',
    'The decision could have a {w} impact on future plans.'
  ],
  ADJ_QUALITY: [
    'The new system is {w} and easy for employees to use.',
    'The report needs to be {w} before it is published.',
    'The company wants a more {w} process for handling requests.',
    'The team developed a {w} method for collecting information.',
    'The equipment must be {w} enough for daily use.',
    'The results were considered {w} by the researchers.',
    'A {w} design can save both time and resources.',
    'The instructions should be {w} and easy to follow.',
    'The manager chose a {w} solution to the problem.',
    'The service needs to remain {w} during busy periods.',
    'The experiment requires {w} measurements.',
    'The students produced a {w} report after checking their work.'
  ],
  ADJ_INTENSITY: [
    'The experiment produced an {w} reaction under high pressure.',
    'The training involved {w} physical activity.',
    'The debate became {w} after the new evidence was presented.',
    'The region experienced {w} rainfall during the storm.',
    'The competition created {w} pressure on the participants.',
    'The researchers observed an {w} change in temperature.',
    'The treatment may cause an {w} response in some cases.',
    'The discussion became more {w} as the deadline approached.',
    'The machine operates under {w} conditions.',
    'The workers faced {w} demand during the holiday season.',
    'The light was too {w} for the camera to record the scene.',
    'The storm caused {w} changes in the environment.'
  ],
  ADJ_EVALUATION: [
    'The proposed solution seems {w} for the current situation.',
    'The team chose a {w} approach to solve the problem.',
    'The instructions are {w} for first-time users.',
    'The manager considered the plan {w} for the available budget.',
    'The researchers selected a {w} method for the experiment.',
    'The advice was {w} and easy to apply.',
    'The design is {w} for a small office.',
    'The training provides a {w} way to practice the skill.',
    'The committee agreed that the proposal was {w}.',
    'The new system offers a {w} solution to a common problem.',
    'The teacher gave {w} feedback after the presentation.',
    'The plan should be both {w} and realistic.'
  ],
  ADJ_SEQUENCE: [
    'The team made an {w} decision before reviewing all the details.',
    'The experiment showed a {w} change rather than an immediate one.',
    'The report describes the {w} stage of the process.',
    'Researchers recorded the {w} results before continuing.',
    'The company completed an {w} review of the project.',
    'The students discussed the {w} step in the procedure.',
    'The first test produced an {w} result that required further study.',
    'The manager explained the {w} plan during the meeting.',
    'The project is still in its {w} phase.',
    'The researchers focused on the {w} stage of development.',
    'The {w} version of the design was tested last week.',
    'The team compared the {w} and final results.'
  ]
};

const variantPhrases = [
  '',
  ' The example comes from a typical learning context.',
  ' This situation is common in real-world communication.'
];

async function main() {
  const candidates = await prisma.slotCandidate.findMany({
    include: { sense: { include: { word: true } }, slot: true },
  });

  let created = 0;
  const seen = new Set();

  for (const candidate of candidates) {
    const word = candidate.sense.word;
    const slotCode = candidate.slot.code;
    const frames = verbFrames[slotCode] || adjectiveFrames[slotCode];
    if (!frames) continue;

    for (let variant = 0; variant < 3; variant++) {
      for (let i = 0; i < frames.length; i++) {
        const content = frames[i].replace(/\{w\}/g, word.word) + variantPhrases[variant];
        const id = `ce-expand-${word.id}-${i}-${variant}`;
        if (seen.has(id)) continue;
        seen.add(id);

        await prisma.sentence.upsert({
          where: { id },
          update: {
            content,
            translation: null,
            difficulty: candidate.sense.cefr,
            theme: candidate.sense.domain,
            sourceType: 'context-engine-v2',
            qualityScore: 0.84,
          },
          create: {
            id,
            content,
            difficulty: candidate.sense.cefr,
            theme: candidate.sense.domain,
            sourceType: 'context-engine-v2',
            qualityScore: 0.84,
          },
        });

        await prisma.sentenceWord.upsert({
          where: { sentenceId_wordId: { sentenceId: id, wordId: word.id } },
          update: { isTarget: true, position: content.toLowerCase().indexOf(word.word.toLowerCase()) },
          create: { sentenceId: id, wordId: word.id, isTarget: true, position: content.toLowerCase().indexOf(word.word.toLowerCase()) },
        });
        created++;
      }
    }
  }

  const total = await prisma.sentence.count({ where: { sourceType: { in: ['context-engine', 'context-engine-v2'] } } });
  console.log(`Context Engine expanded: ${created} generated/upserted sentences; ${total} total built-in context sentences.`);
}

main().catch((error) => { console.error(error); process.exit(1); }).finally(() => prisma.$disconnect());
