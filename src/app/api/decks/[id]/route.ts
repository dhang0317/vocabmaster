import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { BUILTIN_IELTS_DECKS } from '../route';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    const builtin = BUILTIN_IELTS_DECKS?.find(d => d.id === id);
    if (builtin) {
      return NextResponse.json({ success: true, deck: builtin });
    }

    let deck = null;
    try {
      deck = await prisma.deck.findUnique({
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
    } catch {
      deck = null;
    }

    if (!deck) {
      return NextResponse.json({ error: 'Deck not found' }, { status: 404 });
    }

    const formattedDeck = {
      ...deck,
      articles: deck.articles.map(a => ({
        ...a,
        blanks: JSON.parse(a.blanksJson || '[]'),
      })),
      quizzes: deck.quizzes.map(q => ({
        ...q,
        options: JSON.parse(q.optionsJson || '[]'),
      })),
    };

    return NextResponse.json({ success: true, deck: formattedDeck });
  } catch (error: any) {
    console.error('Error fetching deck:', error);
    return NextResponse.json({ error: error.message || 'Failed to fetch deck' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    try {
      await prisma.deck.delete({
        where: { id },
      });
    } catch {}
    return NextResponse.json({ success: true, message: 'Deck deleted successfully' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to delete deck' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { wordId, isMastered } = await req.json();
    try {
      await prisma.word.update({
        where: { id: wordId },
        data: { isMastered },
      });
    } catch {}
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ success: true });
  }
}