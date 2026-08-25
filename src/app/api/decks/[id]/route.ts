import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getCurrentUserId } from '@/lib/session';

// GET single deck with full relation data (owner only)
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const userId = await getCurrentUserId();
  if (!userId) {
    return NextResponse.json({ error: 'Not signed in' }, { status: 401 });
  }
  try {
    const { id } = params;
    const deck = await prisma.deck.findUnique({
      where: { id },
      include: {
        words: true,
        articles: true,
        quizzes: true,
        results: {
          orderBy: { createdAt: 'desc' },
          take: 5,
        },
      },
    });

    if (!deck || deck.userId !== userId) {
      return NextResponse.json({ error: 'Deck not found' }, { status: 404 });
    }

    const formattedDeck = {
      ...deck,
      articles: deck.articles.map(a => ({
        ...a,
        blanks: JSON.parse(a.blanksJson || '[]'),
        glossary: JSON.parse(
          // glossaryJson may be missing on older rows before migration
          (a as { glossaryJson?: string | null }).glossaryJson || '[]'
        ),
      })),
      quizzes: deck.quizzes.map(q => ({
        ...q,
        options: JSON.parse(q.optionsJson || '[]'),
      })),
    };

    return NextResponse.json({ success: true, deck: formattedDeck });
  } catch (error: any) {
    console.error('Error fetching deck:', error);
    return NextResponse.json({ error: error.message || 'Failed to load deck' }, { status: 500 });
  }
}

// DELETE a deck (owner only)
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const userId = await getCurrentUserId();
  if (!userId) {
    return NextResponse.json({ error: 'Not signed in' }, { status: 401 });
  }
  try {
    const { id } = params;
    const deck = await prisma.deck.findUnique({
      where: { id },
      select: { userId: true },
    });
    if (!deck || deck.userId !== userId) {
      return NextResponse.json({ error: 'Deck not found' }, { status: 404 });
    }
    await prisma.deck.delete({
      where: { id },
    });
    return NextResponse.json({ success: true, message: 'Deck deleted' });
  } catch (error: any) {
    console.error('Error deleting deck:', error);
    return NextResponse.json({ error: error.message || 'Failed to delete deck' }, { status: 500 });
  }
}

// PATCH — toggle word mastered OR publish/unpublish deck (owner only)
export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const userId = await getCurrentUserId();
  if (!userId) {
    return NextResponse.json({ error: 'Not signed in' }, { status: 401 });
  }
  try {
    const body = await req.json();
    const { id } = params;

    // Publish / unpublish deck
    if (typeof body.isPublic === 'boolean') {
      const deck = await prisma.deck.findUnique({
        where: { id },
        select: { userId: true },
      });
      if (!deck || deck.userId !== userId) {
        return NextResponse.json({ error: 'Deck not found' }, { status: 404 });
      }

      const updated = await prisma.deck.update({
        where: { id },
        data: {
          isPublic: body.isPublic,
          publishedAt: body.isPublic ? new Date() : null,
        },
      });

      return NextResponse.json({
        success: true,
        deck: {
          id: updated.id,
          isPublic: updated.isPublic,
          publishedAt: updated.publishedAt,
        },
      });
    }

    // Toggle word mastered
    const { wordId, isMastered } = body;

    if (!wordId || typeof isMastered !== 'boolean') {
      return NextResponse.json({ error: 'Invalid update parameters' }, { status: 400 });
    }

    const word = await prisma.word.findUnique({
      where: { id: wordId },
      include: { deck: { select: { userId: true } } },
    });
    if (!word || word.deck.userId !== userId) {
      return NextResponse.json({ error: 'Word not found' }, { status: 404 });
    }

    const updatedWord = await prisma.word.update({
      where: { id: wordId },
      data: { isMastered },
    });

    return NextResponse.json({ success: true, word: updatedWord });
  } catch (error: any) {
    console.error('Error updating:', error);
    return NextResponse.json({ error: error.message || 'Update failed' }, { status: 500 });
  }
}
