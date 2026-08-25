import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

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
  if (Array.isArray(data)) {
    if (Array.isArray(data[0]) && typeof data[0][0] === 'string') return data[0][0];
    if (typeof data[0] === 'string') return data[0];
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
  const url =
    'https://api.mymemory.translated.net/get?q='
    + encodeURIComponent(text)
    + '&langpair='
    + encodeURIComponent(`en|${target}`);

  const res = await fetch(url, {
    headers: { 'User-Agent': UA },
    cache: 'no-store',
  });
  if (!res.ok) return null;

  const data = await res.json();
  const translated = data?.responseData?.translatedText;
  if (typeof translated === 'string' && translated.trim()) {
    if (translated.trim().toLowerCase() === text.trim().toLowerCase()) return null;
    return translated.trim();
  }
  return null;
}

async function freeTranslate(text: string, target: string): Promise<string | null> {
  for (const fn of [translateViaGoogleClients5, translateViaGoogleGtx, translateViaMyMemory]) {
    try {
      const result = await fn(text, target);
      if (result) return result;
    } catch {
      // try next
    }
  }
  return null;
}

interface ContextualResult {
  translated: string;
  sense?: string;
  contextZh?: string;
  source: 'gemini' | 'google';
}

async function translateWithGemini(
  text: string,
  context: string | undefined,
  apiKey: string
): Promise<ContextualResult | null> {
  try {
    const model = new GoogleGenerativeAI(apiKey.trim()).getGenerativeModel({
      model: 'gemini-3.6-flash',
      generationConfig: {
        responseMimeType: 'application/json',
        temperature: 0.2,
      },
    });

    const prompt = context
      ? `你是英文學習助手。請依「句子語境」翻譯選取的英文詞語，輸出繁體中文（台灣用法）。

選取文字：${JSON.stringify(text)}
所在句子／上下文：${JSON.stringify(context)}

請只回傳 JSON：
{
  "translated": "此語境下最貼切的繁體中文譯義（可含詞性提示，如：浪費的、adj.）",
  "sense": "一句話說明此處意思（可提同義、語氣或用法，勿超過40字）",
  "contextZh": "整句上下文的自然繁體中文翻譯"
}`
      : `你是英文學習助手。請把下列英文翻譯成繁體中文（台灣用法），適合單字學習。

文字：${JSON.stringify(text)}

請只回傳 JSON：
{
  "translated": "精確繁體中文譯義",
  "sense": "一句話補充常見用法或意思（可空字串，勿超過40字）"
}`;

    const result = await model.generateContent(prompt);
    const parsed = JSON.parse(result.response.text()) as {
      translated?: string;
      sense?: string;
      contextZh?: string;
    };

    if (!parsed.translated?.trim()) return null;

    return {
      translated: parsed.translated.trim(),
      sense: parsed.sense?.trim() || undefined,
      contextZh: parsed.contextZh?.trim() || undefined,
      source: 'gemini',
    };
  } catch (err) {
    console.warn('Gemini contextual translate failed:', err);
    return null;
  }
}

async function translateWithFreeApis(
  text: string,
  context: string | undefined,
  target: string
): Promise<ContextualResult | null> {
  const translated = await freeTranslate(text, target);
  if (!translated) return null;

  let contextZh: string | undefined;
  if (context && context.trim() && context.trim().toLowerCase() !== text.trim().toLowerCase()) {
    contextZh = (await freeTranslate(context, target)) || undefined;
  }

  return {
    translated,
    contextZh,
    source: 'google',
  };
}

/**
 * Contextual translation for Cloze Article text selection.
 * Prefers Gemini (with sentence context) when apiKey is provided;
 * otherwise falls back to Google / MyMemory.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const text = typeof body?.text === 'string' ? body.text.trim() : '';
    const context =
      typeof body?.context === 'string' && body.context.trim()
        ? body.context.trim().slice(0, 400)
        : undefined;
    const apiKey =
      typeof body?.apiKey === 'string' && body.apiKey.trim()
        ? body.apiKey.trim()
        : process.env.GEMINI_API_KEY?.trim() || '';

    if (!text) {
      return NextResponse.json({ error: '請提供要翻譯的文字' }, { status: 400 });
    }

    if (text.length > 500) {
      return NextResponse.json({ error: '文字過長，請選擇較短的片段' }, { status: 400 });
    }

    const target = body?.target === 'zh-CN' ? 'zh-CN' : 'zh-TW';

    let result: ContextualResult | null = null;

    if (apiKey) {
      result = await translateWithGemini(text, context, apiKey);
    }

    if (!result) {
      result = await translateWithFreeApis(text, context, target);
    }

    if (!result) {
      return NextResponse.json(
        { error: '翻譯服務暫時無法使用，請稍後再試' },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      original: text,
      translated: result.translated,
      sense: result.sense || null,
      contextZh: result.contextZh || null,
      source: result.source,
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
