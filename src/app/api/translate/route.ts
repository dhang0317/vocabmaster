import { NextRequest, NextResponse } from 'next/server';

const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

async function translateViaGoogleClients5(text: string, target: string): Promise<string | null> {
  const url =
    'https://clients5.google.com/translate_a/t?client=dict-chrome-ex&sl=auto&tl='
    + encodeURIComponent(target)
    + '&q='
    + encodeURIComponent(text);

  const res = await fetch(url, {
    headers: { 'User-Agent': UA },
    cache: 'no-store',
  });
  if (!res.ok) return null;

  const data = await res.json();
  // Shape: [["translated","sourceLang"]] or ["translated"]
  if (Array.isArray(data)) {
    if (Array.isArray(data[0]) && typeof data[0][0] === 'string') {
      return data[0][0];
    }
    if (typeof data[0] === 'string') {
      return data[0];
    }
  }
  return null;
}

async function translateViaGoogleGtx(text: string, target: string): Promise<string | null> {
  const url =
    'https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl='
    + encodeURIComponent(target)
    + '&dt=t&q='
    + encodeURIComponent(text);

  const res = await fetch(url, {
    headers: { 'User-Agent': UA },
    cache: 'no-store',
  });
  if (!res.ok) return null;

  const data = await res.json();
  if (Array.isArray(data) && Array.isArray(data[0])) {
    const joined = data[0]
      .filter((seg: unknown) => Array.isArray(seg) && typeof (seg as string[])[0] === 'string')
      .map((seg: string[]) => seg[0])
      .join('');
    return joined || null;
  }
  return null;
}

async function translateViaMyMemory(text: string, target: string): Promise<string | null> {
  const langpair = `en|${target}`;
  const url =
    'https://api.mymemory.translated.net/get?q='
    + encodeURIComponent(text)
    + '&langpair='
    + encodeURIComponent(langpair);

  const res = await fetch(url, {
    headers: { 'User-Agent': UA },
    cache: 'no-store',
  });
  if (!res.ok) return null;

  const data = await res.json();
  const translated = data?.responseData?.translatedText;
  if (typeof translated === 'string' && translated.trim()) {
    // MyMemory sometimes returns the same text when quality is low
    if (translated.trim().toLowerCase() === text.trim().toLowerCase()) {
      return null;
    }
    return translated.trim();
  }
  return null;
}

/**
 * Proxy translation for Cloze Article text selection.
 * Tries Google (clients5 → gtx), then MyMemory as fallback.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const text = typeof body?.text === 'string' ? body.text.trim() : '';

    if (!text) {
      return NextResponse.json({ error: '請提供要翻譯的文字' }, { status: 400 });
    }

    if (text.length > 500) {
      return NextResponse.json({ error: '文字過長，請選擇較短的片段' }, { status: 400 });
    }

    const target = body?.target === 'zh-CN' ? 'zh-CN' : 'zh-TW';

    let translated: string | null = null;

    try {
      translated = await translateViaGoogleClients5(text, target);
    } catch {
      // continue
    }

    if (!translated) {
      try {
        translated = await translateViaGoogleGtx(text, target);
      } catch {
        // continue
      }
    }

    if (!translated) {
      try {
        translated = await translateViaMyMemory(text, target);
      } catch {
        // continue
      }
    }

    if (!translated) {
      return NextResponse.json(
        { error: '翻譯服務暫時無法使用，請稍後再試' },
        { status: 502 }
      );
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
