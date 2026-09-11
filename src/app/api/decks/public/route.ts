import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { BUILTIN_IELTS_DECKS } from '../route';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    let publicDecks: any[] = [];
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

      publicDecks = decks.map(d => ({
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
    } catch {
      publicDecks = [];
    }

    const builtinPublic = BUILTIN_IELTS_DECKS.map(d => ({
      id: d.id,
      title: d.title,
      description: d.description,
      publishedAt: d.publishedAt,
      wordCount: d.wordCount,
      articleCount: d.articleCount,
      quizCount: d.quizCount,
      author: d.author,
    }));

    return NextResponse.json({ success: true, decks: [...builtinPublic, ...publicDecks] });
  } catch (error: any) {
    return NextResponse.json({ success: true, decks: BUILTIN_IELTS_DECKS });
  }
}