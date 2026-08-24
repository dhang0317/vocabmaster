import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { deckId, score, total, answers } = body as {
      deckId: string;
      score: number;
      total: number;
      answers: any[];
    };

    if (!deckId || typeof score !== 'number' || typeof total !== 'number') {
      return NextResponse.json({ error: '參數不完整' }, { status: 400 });
    }

    const result = await prisma.quizResult.create({
      data: {
        deckId,
        score,
        total,
        answersJson: JSON.stringify(answers || []),
      },
    });

    return NextResponse.json({ success: true, result });
  } catch (error: any) {
    console.error('Error recording quiz result:', error);
    return NextResponse.json({ error: error.message || '記錄測驗成績失敗' }, { status: 500 });
  }
}
