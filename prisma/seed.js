const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const existing = await prisma.deck.findFirst();
  if (existing) return;

  const sampleDeck = await prisma.deck.create({
    data: {
      title: '高頻學術與實用單字精選 (Sample Deck)',
      description: '示範題庫：涵蓋 ephemeral、resilient、meticulous、pragmatic 與 eloquent 五個重要單字',
      words: {
        create: [
          {
            word: 'ephemeral',
            phonetic: '/ɪˈfem.ər.əl/',
            pos: 'adj.',
            translation: '短暫的、轉瞬即逝的',
            definition: 'Lasting for only a short time; transitory.',
            example: 'Fame in the digital age can be remarkably ephemeral.',
            exampleZh: '在數位時代中，名聲可能非常短暫。',
            isMastered: false,
          },
          {
            word: 'resilient',
            phonetic: '/rɪˈzɪl.jənt/',
            pos: 'adj.',
            translation: '有韌性的、適應力強的',
            definition: 'Able to withstand or recover quickly from difficult conditions.',
            example: 'The local economy proved surprisingly resilient despite the downturn.',
            exampleZh: '儘管經濟衰退，當地經濟依然展現出令人驚訝的韌性。',
            isMastered: true,
          },
          {
            word: 'meticulous',
            phonetic: '/məˈtɪk.jə.ləs/',
            pos: 'adj.',
            translation: '嚴謹的、一絲不苟的',
            definition: 'Showing great attention to detail; very careful and precise.',
            example: 'The scientist kept meticulous records of every experiment.',
            exampleZh: '這位科學家對每一次實驗都保持著一絲不苟的紀錄。',
            isMastered: false,
          },
          {
            word: 'pragmatic',
            phonetic: '/præɡˈmæt.ɪk/',
            pos: 'adj.',
            translation: '務實的、注重實效的',
            definition: 'Dealing with things sensibly and realistically in a practical way.',
            example: 'We need to take a pragmatic approach to resolve this disagreement.',
            exampleZh: '我們需要採取務實的方法來化解這次的分歧。',
            isMastered: false,
          },
          {
            word: 'eloquent',
            phonetic: '/ˈel.ə.kwənt/',
            pos: 'adj.',
            translation: '雄辯的、有說服力的',
            definition: 'Fluent or persuasive in speaking or writing.',
            example: 'She gave an eloquent speech advocating for environmental protection.',
            exampleZh: '她發表了一場雄辯流暢的演說，倡導環境保護。',
            isMastered: false,
          },
        ],
      },
      articles: {
        create: [
          {
            title: 'The Art of Innovation and Endurance',
            content: 'Success in modern leadership requires a balanced mindset. While trends on social media are often [blank_1] and fade quickly, building a truly sustainable business requires being [blank_2] in the face of setbacks. Leaders must balance [blank_3] planning and attention to detail with a [blank_4] strategy that focuses on achievable results. Finally, an [blank_5] speaker can inspire teams to achieve greatness and turn ambitious visions into reality.',
            contentZh: '現代領導力中的成功需要平衡的心態。雖然社交媒體上的潮流通常轉瞬即逝且迅速退燒，但建立真正可持續的事業需要面對挫折時具備強大的韌性。領導者必須兼具一絲不苟的規劃細節與專注於可行成果的務實策略。最後，一位雄辯流暢的演說家能夠激勵團隊邁向卓越，並將宏大的願景轉化為現實。',
            blanksJson: JSON.stringify([
              {
                id: 1,
                word: 'ephemeral',
                hint: '短暫的、轉瞬即逝的 (adj.)',
                options: ['ephemeral', 'permanent', 'sustainable', 'durable'],
              },
              {
                id: 2,
                word: 'resilient',
                hint: '有韌性的、能迅速復原的 (adj.)',
                options: ['resilient', 'fragile', 'vulnerable', 'passive'],
              },
              {
                id: 3,
                word: 'meticulous',
                hint: '一絲不苟的、極為細緻的 (adj.)',
                options: ['meticulous', 'careless', 'hasty', 'shallow'],
              },
              {
                id: 4,
                word: 'pragmatic',
                hint: '務實的、講求實效的 (adj.)',
                options: ['pragmatic', 'idealistic', 'impractical', 'abstract'],
              },
              {
                id: 5,
                word: 'eloquent',
                hint: '口才流利的、有說服力的 (adj.)',
                options: ['eloquent', 'inarticulate', 'hesitant', 'monotone'],
              },
            ]),
          },
        ],
      },
      quizzes: {
        create: [
          {
            question: 'The beauty of cherry blossoms in spring is famously _____, lasting only for a week or two.',
            questionZh: '春天櫻花的美麗以其 _____ 聞名，僅能維持一到兩週。',
            targetWord: 'ephemeral',
            optionsJson: JSON.stringify(['ephemeral', 'meticulous', 'pragmatic', 'rigid']),
            correctIdx: 0,
            explanation: '正確答案為【ephemeral】（短暫的、轉瞬即逝的）。櫻花的花期短暫，正好對應 ephemeral 的語意。',
          },
          {
            question: 'After suffering heavy losses during the storm, the community remained _____ and rebuilt within months.',
            questionZh: '在風暴中遭受慘重損失後，該社區依然展現出 _____，並在幾個月內完成重建。',
            targetWord: 'resilient',
            optionsJson: JSON.stringify(['fragile', 'resilient', 'eloquent', 'hesitant']),
            correctIdx: 1,
            explanation: '正確答案為【resilient】（有韌性的、能迅速恢復的）。句子描述在災難後迅速重建，展現高度韌性。',
          },
          {
            question: 'The auditor conducted a _____ examination of every single financial receipt in the company.',
            questionZh: '查帳員對公司每一張財務收據進行了 _____ 的審查。',
            targetWord: 'meticulous',
            optionsJson: JSON.stringify(['casual', 'careless', 'meticulous', 'temporary']),
            correctIdx: 2,
            explanation: '正確答案為【meticulous】（一絲不苟的、極為細緻的）。查帳員逐一檢查每一張收據，顯示其做事嚴謹細心。',
          },
          {
            question: 'Instead of debating endlessly about theoretical solutions, we must choose a _____ action plan.',
            questionZh: '我們與其沒完沒了地爭論理論上的解方，不如選擇一個 _____ 的行動方案。',
            targetWord: 'pragmatic',
            optionsJson: JSON.stringify(['pragmatic', 'ephemeral', 'inconsistent', 'fictional']),
            correctIdx: 0,
            explanation: '正確答案為【pragmatic】（務實的、講求實效的）。與空泛的理論爭論相對應的是實際可行的務實行動。',
          },
          {
            question: 'Her _____ defense of freedom and equality moved the entire audience to tears.',
            questionZh: '她對自由與平等的 _____ 辯護感動了全場觀眾落淚。',
            targetWord: 'eloquent',
            optionsJson: JSON.stringify(['clumsy', 'eloquent', 'silent', 'monotone']),
            correctIdx: 1,
            explanation: '正確答案為【eloquent】（雄辯的、口才動人的）。能感動觀眾落淚的演說與辯護符合 eloquent 的特質。',
          },
        ],
      },
    },
  });

  console.log('Seed completed successfully, Deck ID:', sampleDeck.id);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
