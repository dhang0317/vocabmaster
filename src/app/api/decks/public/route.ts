import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET public decks — no login required
export async function GET() {
  try {
    const decks = await prisma.deck.findMany({
      where: { isPublic: true },
      orderBy: [{ publishedAt: 'desc' }, { createdAt: 'desc' }],
      include: {
        user: {
          select: {
            name: true,
            image: true,
          },
        },
        _count: {
          select: {
            words: true,
            articles: true,
            quizzes: true,
          },
        },
      },
    });

    const formatted = decks.map(d => ({
      id: d.id,
      title: d.title,
      description: d.description,
      publishedAt: d.publishedAt || d.createdAt,
      wordCount: d._count.words,
      articleCount: d._count.articles,
      quizCount: d._count.quizzes,
      author: d.user
        ? {
            name: d.user.name || 'Anonymous',
            image: d.user.image,
          }
        : { name: 'Anonymous', image: null },
    }));

    return NextResponse.json({ success: true, decks: formatted });
  } catch (error: any) {
    console.error('Error fetching public decks:', error);
    return NextResponse.json({ error: error.message || 'Failed to load public decks' }, { status: 500 });
  }
}
