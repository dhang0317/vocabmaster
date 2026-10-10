import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

function safeErrorDetail(error: unknown): string {
  if (!(error instanceof Error)) return '未知伺服器錯誤';
  return error.message
    .replace(/postgres(?:ql)?:\/\/[^\s"'\x60]+/gi, '[資料庫連線資訊已隱藏]')
    .replace(/\b(?:[a-z0-9-]+\.)+[a-z]{2,}:\d{2,5}\b/gi, '[資料庫主機已隱藏]')
    .replace(/(password|passwd|pwd|secret|token)\s*[=:]\s*[^\s,;]+/gi, '$1=[已隱藏]')
    .slice(0, 500);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const title = typeof body.title === 'string' ? body.title.trim() : '';
    const description = typeof body.description === 'string' ? body.description.trim() : '';
    const inputWords = Array.isArray(body.words) ? body.words : [];

    if (!title) {
      return NextResponse.json({ success: false, error: '請輸入單字本名稱。' }, { status: 400 });
    }

    const words = inputWords
      .filter((item: any) => item && typeof item.word === 'string' && item.word.trim())
      .map((item: any) => ({
        word: item.word.trim(),
        translation: typeof item.translation === 'string' && item.translation.trim() ? item.translation.trim() : '尚未填寫',
        pos: typeof item.pos === 'string' && item.pos.trim() ? item.pos.trim() : null,
        example: typeof item.example === 'string' && item.example.trim() ? item.example.trim() : null,
      }));

    if (words.length === 0) {
      return NextResponse.json({ success: false, error: '至少輸入一個有效單字。' }, { status: 400 });
    }

    const deck = await prisma.deck.create({
      data: {
        title,
        description: description || '自訂單字本',
        words: { create: words },
      },
      include: { words: true },
    });

    return NextResponse.json({ success: true, deck }, { status: 201 });
  } catch (error) {
    console.error('Guest vocabulary creation failed:', error);
    let errorCode = 'UNKNOWN';
    if (error instanceof Error) errorCode = error.name || 'Error';
    if (error && typeof error === 'object' && 'code' in error && typeof error.code === 'string') {
      errorCode = error.code;
    }
    return NextResponse.json(
      {
        success: false,
        error: '伺服器無法完成儲存。請查看錯誤詳情，勿貼上任何連線網址或密碼。',
        errorCode,
        errorDetail: safeErrorDetail(error),
      },
      { status: 500 },
    );
  }
}
