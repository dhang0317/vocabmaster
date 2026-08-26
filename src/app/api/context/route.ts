import { NextResponse } from 'next/server';
import { getContextForWord } from '@/lib/context-engine';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const word = searchParams.get('word') ?? '';
  const theme = searchParams.get('theme') ?? undefined;
  const difficulty = searchParams.get('difficulty') ?? undefined;
  const limit = Number(searchParams.get('limit') ?? '10');

  if (!word.trim()) {
    return NextResponse.json({ error: 'word is required' }, { status: 400 });
  }

  try {
    const results = await getContextForWord({ word, theme, difficulty, limit });
    return NextResponse.json({ word: word.trim(), theme, difficulty, results });
  } catch (error) {
    console.error('Context Engine error:', error);
    return NextResponse.json({ error: 'Unable to retrieve context' }, { status: 500 });
  }
}
