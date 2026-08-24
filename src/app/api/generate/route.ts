import { NextRequest, NextResponse } from 'next/server';
import { generateLearningMaterials, translateVocabulary } from '@/lib/gemini';
import { RawWordInput, GenerationLevel } from '@/types';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { words, level, apiKey, action } = body as {
      words: RawWordInput[];
      level?: GenerationLevel;
      apiKey?: string;
      action?: string;
    };

    if (!words || !Array.isArray(words) || words.length === 0) {
      return NextResponse.json({ error: '請提供至少一個單字進行生成' }, { status: 400 });
    }

    if (action === 'translate') {
      const translations = await translateVocabulary(words.map(word => word.word), apiKey);
      return NextResponse.json({ success: true, translations });
    }

    const generated = await generateLearningMaterials(words, level || 'highschool', apiKey);
    return NextResponse.json({ success: true, data: generated });
  } catch (error: any) {
    console.error('Error generating materials:', error);
    return NextResponse.json({ error: error.message || '生成失敗，請稍後重試' }, { status: 500 });
  }
}
