import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getCurrentUserId } from '@/lib/session';

// POST — copy a public deck (or your own) into the signed-in user's library
export async function POST(_req: NextRequest, { params }: { params: { id: string } }) {
  const userId = await getCurrentUserId();
  if (!userId) {
    return NextResponse.json({ error: 'Please sign in to add this deck' }, { status: 401 });
  }

  try {
    const { id } = params;

    const source = await prisma.deck.findUnique({
      where: { id },
      include: {
        words: true,
        articles: true,
        quizzes: true,
      },
    });

    if (!source) {
      return NextResponse.json({ error: 'Deck not found' }, { status: 404 });
    }

    // Only public decks (or own decks) can be cloned
    if (!source.isPublic && source.userId !== userId) {
      return NextResponse.json({ error: 'This deck is private' }, { status: 403 });
    }

    const copy = await prisma.deck.create({
      data: {
        title: source.title,
        description: source.description
          ? `${source.description}\n\n(Copied from public library)`
          : 'Copied from public library',
        userId,
        isPublic: false,
        publishedAt: null,
        words: {
          create: source.words.map(w => ({
            word: w.word,
            phonetic: w.phonetic,
            pos: w.pos,
            translation: w.translation,
            definition: w.definition,
            example: w.example,
            exampleZh: w.exampleZh,
            isMastered: false,
          })),
        },
        articles:
          source.articles.length > 0
            ? {
                create: source.articles.map(a => ({
                  title: a.title,
                  content: a.content,
                  contentZh: a.contentZh,
                  blanksJson: a.blanksJson,
                })),
              }
            : undefined,
        quizzes:
          source.quizzes.length > 0
            ? {
                create: source.quizzes.map(q => ({
                  question: q.question,
                  questionZh: q.questionZh,
                  targetWord: q.targetWord,
                  optionsJson: q.optionsJson,
                  correctIdx: q.correctIdx,
                  explanation: q.explanation,
                })),
              }
            : undefined,
      },
    });

    return NextResponse.json({ success: true, deck: { id: copy.id, title: copy.title } });
  } catch (error: any) {
    console.error('Error cloning deck:', error);
    return NextResponse.json({ error: error.message || 'Failed to add deck' }, { status: 500 });
  }
}
