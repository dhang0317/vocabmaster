import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const ieltsDecks = [
      {
        title: 'IELTS Academic Core Band 7-8: Environment & Ecology',
        description: 'High-frequency vocabulary, academic collocations, and cloze stories for IELTS writing and reading related to environmental science and sustainability.',
        words: [
          { word: 'biodiversity', pos: 'n.', phonetic: '/?ba阞.o?.da阞?v??.s?.t怓i/', translation: 'the variety of plant and animal life in a particular habitat', definition: 'the variety of life in the world or in a particular habitat or ecosystem', example: 'Preserving biodiversity is crucial for maintaining a resilient ecosystem.' },
          { word: 'deforestation', pos: 'n.', phonetic: '/di??f??r.??ste阞.??n/', translation: 'the clearing of a wide area of trees', definition: 'the action of clearing a wide area of trees', example: 'Unchecked deforestation contributes significantly to accelerated global warming.' },
          { word: 'sustainable', pos: 'adj.', phonetic: '/s??ste阞.n?.b?l/', translation: 'able to be maintained at a certain rate without environmental damage', definition: 'able to be maintained at a certain rate or level', example: 'Governments should heavily subsidize sustainable energy initiatives.' },
          { word: 'depletion', pos: 'n.', phonetic: '/d阞?pli?.??n/', translation: 'reduction in the number or quantity of something', definition: 'reduction in the number or quantity of something', example: 'The rapid depletion of fossil fuels has driven intense research into renewables.' },
          { word: 'contamination', pos: 'n.', phonetic: '/k?n?t疆m.??ne阞.??n/', translation: 'the action of making something impure by polluting', definition: 'pollution or poison in something', example: 'Industrial run-off led to the severe chemical contamination of local reservoirs.' },
          { word: 'mitigate', pos: 'v.', phonetic: '/?m阞t怓.?.氶e阞t/', translation: 'to make something less harmful, unpleasant, or bad', definition: 'make less severe, serious, or painful', example: 'Comprehensive zoning laws can mitigate the environmental impact of urban sprawl.' },
          { word: 'ecosystem', pos: 'n.', phonetic: '/?i?.ko??s阞s.t?m/', translation: 'a biological community of interacting organisms and their physical environment', definition: 'a biological community of interacting organisms and their physical environment', example: 'Coral reefs constitute one of the most fragile marine ecosystems on Earth.' },
          { word: 'equilibrium', pos: 'n.', phonetic: '/?i?.kw??l阞b.ri.?m/', translation: 'a state of balance', definition: 'a state in which opposing forces or influences are balanced', example: 'Pollution disrupts the delicate ecological equilibrium of river systems.' },
          { word: 'renewable', pos: 'adj.', phonetic: '/r阞?nu?.?.b?l/', translation: 'energy that is not depleted when used', definition: 'not depleted when used', example: 'Solar and wind represent the most prominent sources of renewable power.' },
          { word: 'catastrophic', pos: 'adj.', phonetic: '/?k疆t怓.??str??.f阞k/', translation: 'involving or causing sudden great damage or suffering', definition: 'involving or causing sudden great damage or suffering', example: 'Failure to reduce carbon emissions could trigger catastrophic climate disruption.' }
        ],
        article: {
          title: 'Preserving Ecological Equilibrium in the Anthropocene',
          content: 'In modern environmental science, preserving [blank_1] has emerged as a cornerstone of ecological survival. Rapid industrial expansion has intensified [blank_2], resulting in the severe [blank_3] of ancient rainforests and the irreversible [blank_4] of vital non-renewable resources. When industrial pollutants cause toxic [blank_5] in river basins, the fragile marine [blank_6] collapses, destabilizing the natural [blank_7] that sustains thousands of species. To [blank_8] these alarming consequences, international treaties urge nations to transition swiftly toward [blank_9] energy infrastructures, preventing a [blank_10] collapse of global climate stability.',
          blanksJson: JSON.stringify([
            { id: 1, word: 'biodiversity', hint: 'variety of flora and fauna', options: ['biodiversity', 'equilibrium', 'contamination', 'depletion'] },
            { id: 2, word: 'deforestation', hint: 'destruction of forests', options: ['deforestation', 'sustainable', 'ecosystem', 'mitigate'] },
            { id: 3, word: 'depletion', hint: 'exhaustion of supply', options: ['depletion', 'biodiversity', 'renewable', 'equilibrium'] },
            { id: 4, word: 'contamination', hint: 'pollution', options: ['contamination', 'catastrophic', 'sustainable', 'mitigate'] },
            { id: 5, word: 'contamination', hint: 'toxic impurity', options: ['contamination', 'depletion', 'biodiversity', 'renewable'] },
            { id: 6, word: 'ecosystem', hint: 'biological community', options: ['ecosystem', 'deforestation', 'equilibrium', 'sustainable'] },
            { id: 7, word: 'equilibrium', hint: 'state of balance', options: ['equilibrium', 'depletion', 'biodiversity', 'mitigate'] },
            { id: 8, word: 'mitigate', hint: 'alleviate or lessen severity', options: ['mitigate', 'contaminate', 'deplete', 'destroy'] },
            { id: 9, word: 'renewable', hint: 'naturally replenishing', options: ['renewable', 'catastrophic', 'deforested', 'depleted'] },
            { id: 10, word: 'catastrophic', hint: 'disastrous', options: ['catastrophic', 'sustainable', 'equilibrium', 'mitigated'] }
          ])
        },
        quizzes: [
          {
            question: 'Which word refers to making a harmful situation or climate impact less severe?',
            targetWord: 'mitigate',
            optionsJson: JSON.stringify(['mitigate', 'contaminate', 'deplete', 'destabilize']),
            correctIdx: 0,
            explanation: "'Mitigate' means to make something less harmful or severe."
          },
          {
            question: 'The clearing of massive forested areas for agriculture is termed as:',
            targetWord: 'deforestation',
            optionsJson: JSON.stringify(['biodiversity', 'deforestation', 'equilibrium', 'contamination']),
            correctIdx: 1,
            explanation: "'Deforestation' is the large-scale cutting down or burning of forest lands."
          },
          {
            question: 'What adjective describes resources that are not depleted when harnessed, such as wind or solar energy?',
            targetWord: 'renewable',
            optionsJson: JSON.stringify(['catastrophic', 'sustainable', 'renewable', 'fragile']),
            correctIdx: 2,
            explanation: "'Renewable' denotes sources of energy capable of natural replenishment."
          }
        ]
      },
      {
        title: 'IELTS Academic Core Band 7-8: Technology & Artificial Intelligence',
        description: 'Advanced vocabulary for discussing automation, machine learning ethics, digital transformation, and societal implications in IELTS Task 2 essays.',
        words: [
          { word: 'autonomous', pos: 'adj.', phonetic: '/???t??.n?.m?s/', translation: 'acting independently without human control', definition: 'acting independently or having the freedom to do so', example: 'The deployment of autonomous vehicles could drastically reduce highway fatalities.' },
          { word: 'proliferation', pos: 'n.', phonetic: '/pr??l阞f.??re阞.??n/', translation: 'rapid increase in numbers or volume', definition: 'rapid increase in numbers or volume', example: 'The rapid proliferation of smart algorithms has reshaped consumer behavior.' },
          { word: 'ubiquitous', pos: 'adj.', phonetic: '/ju??b阞k.w?.t怓?s/', translation: 'present, appearing, or found everywhere', definition: 'present, appearing, or found everywhere', example: 'Smartphones have become ubiquitous across all demographics worldwide.' },
          { word: 'algorithm', pos: 'n.', phonetic: '/?疆l.氶?.r阞.簸?m/', translation: 'a process or set of rules to be followed in calculations', definition: 'a process or set of rules to be followed in calculations', example: 'Search algorithms prioritize content that yields the highest user engagement.' },
          { word: 'obsolete', pos: 'adj.', phonetic: '/???b.s??li?t/', translation: 'no longer produced or used; out of date', definition: 'no longer produced or used; out of date', example: 'Automation threatens to render routine administrative roles completely obsolete.' },
          { word: 'unprecedented', pos: 'adj.', phonetic: '/?n?pres.?.den.t怓阞d/', translation: 'never done or known before', definition: 'never done or known before', example: 'Generative AI tools operate at an unprecedented scale and speed.' },
          { word: 'ethical', pos: 'adj.', phonetic: '/?e庛.阞.k?l/', translation: 'relating to moral principles', definition: 'relating to moral principles', example: 'Technologists face complex ethical dilemmas regarding user privacy.' },
          { word: 'disruptive', pos: 'adj.', phonetic: '/d阞s?r?p.t阞v/', translation: 'innovative in a way that replaces traditional systems', definition: 'innovative in a way that replaces traditional systems', example: 'Cloud computing was one of the most disruptive innovations of the past decade.' },
          { word: 'surveillance', pos: 'n.', phonetic: '/s??ve阞.l?ns/', translation: 'close observation, especially of a suspected person or area', definition: 'close observation, especially of a suspected person or area', example: 'Facial recognition systems have sparked intense debates over digital surveillance.' },
          { word: 'automation', pos: 'n.', phonetic: '/???.t怓??me阞.??n/', translation: 'the use of largely automatic equipment in a system of operation', definition: 'the use of largely automatic equipment', example: 'Widespread automation in manufacturing has boosted production efficiency.' }
        ],
        article: {
          title: 'The Ethical Imperatives of the AI Revolution',
          content: 'In the contemporary era, the [blank_1] of digital technologies has created an [blank_2] transformation in global commerce. Computing devices and automated systems have become virtually [blank_3], embedded in every aspect of human life. At the heart of this revolution lies the complex [blank_4], capable of driving [blank_5] robotics and decision engines. However, as widespread [blank_6] accelerates, many traditional occupations risk becoming [blank_7]. This rapid shift presents [blank_8] innovations alongside grave [blank_9] questions surrounding algorithmic bias and pervasive digital [blank_10].',
          blanksJson: JSON.stringify([
            { id: 1, word: 'proliferation', hint: 'rapid spread', options: ['proliferation', 'automation', 'surveillance', 'algorithm'] },
            { id: 2, word: 'unprecedented', hint: 'never seen before', options: ['unprecedented', 'obsolete', 'autonomous', 'ethical'] },
            { id: 3, word: 'ubiquitous', hint: 'omnipresent', options: ['ubiquitous', 'disruptive', 'obsolete', 'unprecedented'] },
            { id: 4, word: 'algorithm', hint: 'computational procedure', options: ['algorithm', 'surveillance', 'proliferation', 'automation'] },
            { id: 5, word: 'autonomous', hint: 'self-governing', options: ['autonomous', 'obsolete', 'ethical', 'ubiquitous'] },
            { id: 6, word: 'automation', hint: 'machine labor', options: ['automation', 'surveillance', 'algorithm', 'proliferation'] },
            { id: 7, word: 'obsolete', hint: 'outdated', options: ['obsolete', 'disruptive', 'autonomous', 'ethical'] },
            { id: 8, word: 'disruptive', hint: 'groundbreaking', options: ['disruptive', 'obsolete', 'ubiquitous', 'unprecedented'] },
            { id: 9, word: 'ethical', hint: 'moral', options: ['ethical', 'autonomous', 'disruptive', 'ubiquitous'] },
            { id: 10, word: 'surveillance', hint: 'systematic monitoring', options: ['surveillance', 'automation', 'algorithm', 'proliferation'] }
          ])
        },
        quizzes: [
          {
            question: 'What term describes a technology that is present and found everywhere in daily life?',
            targetWord: 'ubiquitous',
            optionsJson: JSON.stringify(['ubiquitous', 'obsolete', 'autonomous', 'disruptive']),
            correctIdx: 0,
            explanation: "'Ubiquitous' means omnipresent or found everywhere."
          }
        ]
      },
      {
        title: 'IELTS Academic Core Band 7-8: Education & Pedagogy',
        description: 'Essential academic vocabulary for IELTS essays examining curriculum design, pedagogical methodologies, standardized assessment, and holistic learning.',
        words: [
          { word: 'curriculum', pos: 'n.', phonetic: '/k??r阞k.j?.l?m/', translation: 'the subjects comprising a course of study in a school or college', definition: 'the subjects comprising a course of study', example: 'A well-rounded curriculum balances academic rigor with creative arts.' },
          { word: 'pedagogy', pos: 'n.', phonetic: '/?ped.?.氶??.d?i/', translation: 'the method and practice of teaching', definition: 'the method and practice of teaching', example: 'Innovative pedagogical approaches prioritize inquiry-based student exploration.' },
          { word: 'holistic', pos: 'adj.', phonetic: '/ho??l阞s.t阞k/', translation: 'characterized by the belief that parts are interconnected', definition: 'treating the whole of something rather than just parts', example: 'Educators advocate for a holistic development model encompassing social and emotional growth.' },
          { word: 'cognitive', pos: 'adj.', phonetic: '/?k??氶.n?.t怓阞v/', translation: 'relating to cognition or intellectual activity', definition: 'connected with thinking or conscious mental processes', example: 'Interactive problem-solving enhances early childhood cognitive development.' },
          { word: 'standardized', pos: 'adj.', phonetic: '/?st疆n.d?.da阞zd/', translation: 'evaluated or constructed in accordance with a standard', definition: 'conforming to a standard', example: 'Critics argue that standardized testing fails to assess divergent critical thinking.' },
          { word: 'aptitude', pos: 'n.', phonetic: '/?疆p.t?.tu?d/', translation: 'a natural ability or suitability', definition: 'a natural ability or skill', example: 'The student demonstrated a remarkable aptitude for theoretical mathematics.' },
          { word: 'retention', pos: 'n.', phonetic: '/r阞?ten.??n/', translation: 'the continued use, existence, or memory preservation of something', definition: 'the continued possession of something', example: 'Active spaced repetition substantially improves long-term memory retention.' },
          { word: 'disparity', pos: 'n.', phonetic: '/d阞?sp疆r.?.t怓i/', translation: 'a great difference or inequality', definition: 'a lack of equality or similarity', example: 'Equal access to digital devices helps eliminate educational disparities.' },
          { word: 'empower', pos: 'v.', phonetic: '/阞m?pa?.?/', translation: 'make someone stronger and more confident in controlling their life', definition: 'give power or confidence to someone', example: 'Modern mentorship programs empower students to pursue autonomous careers.' },
          { word: 'literacy', pos: 'n.', phonetic: '/?l阞t怓.?.?.si/', translation: 'the ability to read and write, or competence in a specific area', definition: 'the ability to read and write', example: 'Financial and digital literacy should be integrated into secondary education.' }
        ],
        article: {
          title: 'Modernizing Pedagogy for the 21st Century',
          content: 'Global educational institutions are actively restructuring their academic [blank_1] to meet evolving social demands. Progressive [blank_2] emphasizes [blank_3] education that fosters not only academic metrics but also emotional well-being and [blank_4] agility. While traditional [blank_5] assessments provide quantifiable data, they often overlook individual [blank_6] and creative potential. By implementing adaptive learning systems, educators can dramatically enhance knowledge [blank_7], bridge the socio-economic [blank_8] in resource distribution, and [blank_9] pupils with foundational digital [blank_10].',
          blanksJson: JSON.stringify([
            { id: 1, word: 'curriculum', hint: 'course of study', options: ['curriculum', 'pedagogy', 'literacy', 'retention'] },
            { id: 2, word: 'pedagogy', hint: 'teaching methodology', options: ['pedagogy', 'disparity', 'curriculum', 'aptitude'] },
            { id: 3, word: 'holistic', hint: 'comprehensive', options: ['holistic', 'standardized', 'cognitive', 'disparate'] },
            { id: 4, word: 'cognitive', hint: 'mental agility', options: ['cognitive', 'holistic', 'standardized', 'empowered'] },
            { id: 5, word: 'standardized', hint: 'uniform testing', options: ['standardized', 'holistic', 'cognitive', 'pedagogical'] },
            { id: 6, word: 'aptitude', hint: 'natural talent', options: ['aptitude', 'disparity', 'retention', 'literacy'] },
            { id: 7, word: 'retention', hint: 'memory preservation', options: ['retention', 'disparity', 'pedagogy', 'curriculum'] },
            { id: 8, word: 'disparity', hint: 'inequality', options: ['disparity', 'aptitude', 'literacy', 'retention'] },
            { id: 9, word: 'empower', hint: 'enable', options: ['empower', 'standardize', 'disparage', 'retain'] },
            { id: 10, word: 'literacy', hint: 'competency', options: ['literacy', 'curriculum', 'pedagogy', 'aptitude'] }
          ])
        },
        quizzes: [
          {
            question: 'Which term describes a whole-person educational approach treating all aspects of growth together?',
            targetWord: 'holistic',
            optionsJson: JSON.stringify(['standardized', 'holistic', 'cognitive', 'obsolete']),
            correctIdx: 1,
            explanation: "'Holistic' refers to considering the whole person rather than just separated parts."
          }
        ]
      },
      {
        title: 'IELTS Academic Core Band 7-8: Economy & Urbanization',
        description: 'Advanced vocabulary for analyzing globalization, economic disparity, urban sprawl, infrastructure investment, and consumer capitalism.',
        words: [
          { word: 'infrastructure', pos: 'n.', phonetic: '/?阞n.fr??str?k.t??/', translation: 'the basic physical and organizational structures and facilities', definition: 'the basic physical systems of a country', example: 'Investment in public transit infrastructure alleviates chronic traffic congestion.' },
          { word: 'urbanization', pos: 'n.', phonetic: '/???.b?n.??ze阞.??n/', translation: 'the process of making an area more urban', definition: 'the process by which populations move to cities', example: 'Rapid urbanization has put immense strain on municipal housing systems.' },
          { word: 'socioeconomic', pos: 'adj.', phonetic: '/?so?.si.o??i?.k??n??.m阞k/', translation: 'relating to the interaction of social and economic factors', definition: 'relating to social and financial standing', example: 'The policy aims to uplift families from lower socioeconomic backgrounds.' },
          { word: 'prosperity', pos: 'n.', phonetic: '/pr???sper.?.t怓i/', translation: 'the state of flourishing, thriving, or possessing financial success', definition: 'the state of being successful and flourishing', example: 'Economic prosperity must be balanced with equitable wealth distribution.' },
          { word: 'gentrification', pos: 'n.', phonetic: '/?d?en.tr?.f??ke阞.??n/', translation: 'the process whereby a poor urban area is changed by wealthier residents', definition: 'the urban transition driven by wealthier newcomers', example: 'Neighborhood gentrification often displaces long-standing local residents.' },
          { word: 'congestion', pos: 'n.', phonetic: '/k?n?d?es.t??n/', translation: 'the condition of being overcrowded or filled to excess', definition: 'the state of being blocked with traffic', example: 'Congestion pricing has proven effective in reducing downtown vehicular emissions.' },
          { word: 'expenditure', pos: 'n.', phonetic: '/阞k?spen.d?.t??/', translation: 'the action of spending funds or an amount of money spent', definition: 'the total amount of funds spent', example: 'Government expenditure on healthcare and housing has doubled over the past decade.' },
          { word: 'fiscal', pos: 'adj.', phonetic: '/?f阞s.k?l/', translation: 'relating to government revenue, especially taxes', definition: 'connected with public money and taxation', example: 'Prudent fiscal policies prevent inflation during periods of economic volatility.' },
          { word: 'incentive', pos: 'n.', phonetic: '/阞n?sen.t怓阞v/', translation: 'a thing that motivates or encourages someone to do something', definition: 'something that motivates action', example: 'Tax incentives encourage green real estate developers to install solar panels.' },
          { word: 'flourish', pos: 'v.', phonetic: '/?fl??.阞?/', translation: 'grow or develop in a healthy or vigorous way', definition: 'to grow or develop successfully', example: 'Small businesses flourish when municipal taxes are streamlined and transparent.' }
        ],
        article: {
          title: 'Sustainable Urban Planning in Megacities',
          content: 'Over the past three decades, unprecedented rates of global [blank_1] have transformed the landscape of metropolitan regions. To accommodate millions of new urban residents, substantial government [blank_2] in transport and digital [blank_3] is imperative. While urban expansion drives commercial [blank_4], unchecked development frequently exacerbates [blank_5] divides. In central districts, rapid [blank_6] often displaces vulnerable communities while vehicular [blank_7] worsens air quality. Strategic [blank_8] measures, including targeted tax [blank_9], are critical to ensuring that local businesses and residential communities [blank_10] harmoniously.',
          blanksJson: JSON.stringify([
            { id: 1, word: 'urbanization', hint: 'city growth', options: ['urbanization', 'gentrification', 'infrastructure', 'congestion'] },
            { id: 2, word: 'expenditure', hint: 'spending', options: ['expenditure', 'prosperity', 'congestion', 'incentive'] },
            { id: 3, word: 'infrastructure', hint: 'transport & utilities', options: ['infrastructure', 'urbanization', 'prosperity', 'gentrification'] },
            { id: 4, word: 'prosperity', hint: 'wealth / thriving', options: ['prosperity', 'congestion', 'expenditure', 'disparity'] },
            { id: 5, word: 'socioeconomic', hint: 'social & financial', options: ['socioeconomic', 'fiscal', 'flourishing', 'urban'] },
            { id: 6, word: 'gentrification', hint: 'wealthy urban renewal', options: ['gentrification', 'urbanization', 'infrastructure', 'prosperity'] },
            { id: 7, word: 'congestion', hint: 'traffic gridlock', options: ['congestion', 'expenditure', 'incentive', 'infrastructure'] },
            { id: 8, word: 'fiscal', hint: 'monetary policy', options: ['fiscal', 'socioeconomic', 'congested', 'flourishing'] },
            { id: 9, word: 'incentive', hint: 'subsidy / reward', options: ['incentive', 'expenditure', 'prosperity', 'gentrification'] },
            { id: 10, word: 'flourish', hint: 'thrive', options: ['flourish', 'congest', 'gentrify', 'expend'] }
          ])
        },
        quizzes: [
          {
            question: 'The underlying physical systems and public transit networks of a city are referred to as:',
            targetWord: 'infrastructure',
            optionsJson: JSON.stringify(['infrastructure', 'gentrification', 'urbanization', 'expenditure']),
            correctIdx: 0,
            explanation: "'Infrastructure' denotes fundamental basic physical facilities and transportation."
          }
        ]
      }
    ];

    const results = [];

    for (const d of ieltsDecks) {
      const existing = await prisma.deck.findFirst({ where: { title: d.title } });
      if (existing) {
        results.push({ title: d.title, status: 'already_exists', id: existing.id });
        continue;
      }

      const created = await prisma.deck.create({
        data: {
          title: d.title,
          description: d.description,
          words: {
            create: d.words.map((w) => ({
              word: w.word,
              phonetic: w.phonetic,
              pos: w.pos,
              translation: w.translation,
              definition: w.definition,
              example: w.example,
            })),
          },
          articles: {
            create: [
              {
                title: d.article.title,
                content: d.article.content,
                blanksJson: d.article.blanksJson,
              },
            ],
          },
          quizzes: {
            create: d.quizzes.map((q) => ({
              question: q.question,
              targetWord: q.targetWord,
              optionsJson: q.optionsJson,
              correctIdx: q.correctIdx,
              explanation: q.explanation,
            })),
          },
        },
      });

      results.push({ title: d.title, status: 'created', id: created.id });
    }

    return NextResponse.json({ success: true, count: results.length, results });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}