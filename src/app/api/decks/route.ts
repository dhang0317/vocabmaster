import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getCurrentUserId } from '@/lib/session';
import { GeneratedWord, GeneratedCloze, GeneratedQuiz } from '@/types';

// GET all decks (scoped to the signed-in user) with summary counts
export async function GET() {
  const userId = await getCurrentUserId();
  if (!userId) {
    return NextResponse.json({ error: 'Not signed in' }, { status: 401 });
  }
  try {
    const decks = await prisma.deck.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      include: {
        _count: {
          select: {
            words: true,
            articles: true,
            quizzes: true,
            results: true,
          },
        },
        words: {
          select: {
            isMastered: true,
          },
        },
      },
    });

    const formattedDecks = decks.map(d => ({
      id: d.id,
      title: d.title,
      description: d.description,
      isPublic: d.isPublic,
      publishedAt: d.publishedAt,
      createdAt: d.createdAt,
      updatedAt: d.updatedAt,
      wordCount: d._count.words,
      masteredCount: d.words.filter(w => w.isMastered).length,
      articleCount: d._count.articles,
      quizCount: d._count.quizzes,
      resultCount: d._count.results,
    }));

    return NextResponse.json({ success: true, decks: formattedDecks });
  } catch (error: any) {
    console.error('Error fetching decks:', error);
    return NextResponse.json({ error: error.message || 'Failed to load decks' }, { status: 500 });
  }
}

// POST create new deck with words, article, and quizzes (scoped to the signed-in user)
export async function POST(req: NextRequest) {
  const userId = await getCurrentUserId();
  if (!userId) {
    return NextResponse.json({ error: 'Not signed in' }, { status: 401 });
  }
  try {
    const body = await req.json();
    const { title, description, words, article, quizzes, isPublic } = body as {
      title: string;
      description?: string;
      words: GeneratedWord[];
      article?: GeneratedCloze;
      quizzes?: GeneratedQuiz[];
      isPublic?: boolean;
    };

    if (!title || !words || words.length === 0) {
      return NextResponse.json({ error: 'Please provide a title and word list' }, { status: 400 });
    }

    const makePublic = Boolean(isPublic);

    const newDeck = await prisma.deck.create({
      data: {
        title,
        description: description || '',
        userId,
        isPublic: makePublic,
        publishedAt: makePublic ? new Date() : null,
        words: {
          create: words.map(w => ({
            word: w.word,
            phonetic: w.phonetic,
            pos: w.pos,
            translation: w.translation,
            definition: w.definition,
            example: w.example,
            exampleZh: w.exampleZh,
          })),
        },
        articles: article
          ? {
              create: [
                {
                  title: article.title,
                  content: article.content,
                  contentZh: article.contentZh,
                  blanksJson: JSON.stringify(article.blanks || []),
                  glossaryJson: JSON.stringify(article.glossary || []),
                },
              ],
            }
          : undefined,
        quizzes:
          quizzes && quizzes.length > 0
            ? {
                create: quizzes.map(q => ({
                  question: q.question,
                  questionZh: q.questionZh,
                  targetWord: q.targetWord,
                  optionsJson: JSON.stringify(q.options || []),
                  correctIdx: q.correctIdx,
                  explanation: q.explanation,
                })),
              }
            : undefined,
      },
      include: {
        words: true,
        articles: true,
        quizzes: true,
      },
    });

    return NextResponse.json({ success: true, deck: newDeck });
  } catch (error: any) {
    console.error('Error creating deck:', error);
    return NextResponse.json({ error: error.message || 'Failed to create deck' }, { status: 500 });
  }
}
