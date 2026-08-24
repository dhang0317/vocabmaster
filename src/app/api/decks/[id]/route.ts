import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getCurrentUserId } from '@/lib/session';

// GET single deck with full relation data (owner only)
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const userId = await getCurrentUserId();
  if (!userId) {
    return NextResponse.json({ error: '尚未登入' }, { status: 401 });
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
      return NextResponse.json({ error: '找不到該題庫' }, { status: 404 });
    }

    // Format JSON fields
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
    return NextResponse.json({ error: error.message || '獲取題庫失敗' }, { status: 500 });
  }
}

// DELETE a deck (owner only)
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const userId = await getCurrentUserId();
  if (!userId) {
    return NextResponse.json({ error: '尚未登入' }, { status: 401 });
  }
  try {
    const { id } = params;
    const deck = await prisma.deck.findUnique({
      where: { id },
      select: { userId: true },
    });
    if (!deck || deck.userId !== userId) {
      return NextResponse.json({ error: '找不到該題庫' }, { status: 404 });
    }
    await prisma.deck.delete({
      where: { id },
    });
    return NextResponse.json({ success: true, message: '題庫已成功刪除' });
  } catch (error: any) {
    console.error('Error deleting deck:', error);
    return NextResponse.json({ error: error.message || '刪除題庫失敗' }, { status: 500 });
  }
}

// PATCH update word status (e.g. toggle isMastered) (owner only)
export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const userId = await getCurrentUserId();
  if (!userId) {
    return NextResponse.json({ error: '尚未登入' }, { status: 401 });
  }
  try {
    const body = await req.json();
    const { wordId, isMastered } = body;

    if (!wordId || typeof isMastered !== 'boolean') {
      return NextResponse.json({ error: '無效的更新參數' }, { status: 400 });
    }

    // Verify the word's deck belongs to the signed-in user.
    const word = await prisma.word.findUnique({
      where: { id: wordId },
      include: { deck: { select: { userId: true } } },
    });
    if (!word || word.deck.userId !== userId) {
      return NextResponse.json({ error: '找不到該單字' }, { status: 404 });
    }

    const updatedWord = await prisma.word.update({
      where: { id: wordId },
      data: { isMastered },
    });

    return NextResponse.json({ success: true, word: updatedWord });
  } catch (error: any) {
    console.error('Error updating word:', error);
    return NextResponse.json({ error: error.message || '更新單字失敗' }, { status: 500 });
  }
}
