import { NextRequest, NextResponse } from 'next/server';

/**
 * Lightweight proxy to Google Translate (unofficial free endpoint).
 * Used by Cloze Article text selection → Chinese translation.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const text = typeof body?.text === 'string' ? body.text.trim() : '';

    if (!text) {
      return NextResponse.json({ error: '請提供要翻譯的文字' }, { status: 400 });
    }

    // Limit length to avoid abuse
    if (text.length > 500) {
      return NextResponse.json({ error: '文字過長，請選擇較短的片段' }, { status: 400 });
    }

    const target = body?.target === 'zh-CN' ? 'zh-CN' : 'zh-TW';
    const url =
      'https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl='
      + encodeURIComponent(target)
      + '&dt=t&q='
      + encodeURIComponent(text);

    const res = await fetch(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
      // Short timeout-friendly; Next.js fetch has no built-in timeout, keep payload small
      cache: 'no-store',
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: '翻譯服務暫時無法使用，請稍後再試' },
        { status: 502 }
      );
    }

    const data = await res.json();

    // Response shape: [[['translated', 'original', ...], ...], ...]
    let translated = '';
    if (Array.isArray(data) && Array.isArray(data[0])) {
      translated = data[0]
        .filter((seg: unknown) => Array.isArray(seg) && typeof seg[0] === 'string')
        .map((seg: string[]) => seg[0])
        .join('');
    }

    if (!translated) {
      return NextResponse.json({ error: '無法取得翻譯結果' }, { status: 502 });
    }

    return NextResponse.json({
      success: true,
      original: text,
      translated,
      target,
    });
  } catch (error: unknown) {
    console.error('Translate API error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : '翻譯失敗' },
      { status: 500 }
    );
  }
}
