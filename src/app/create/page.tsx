'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type WordInput = { word: string; translation: string; pos: string; example: string };

function parseWords(raw: string): WordInput[] {
  return raw.split(/\r?\n/)
    .map(line => line.trim())
    .filter(Boolean)
    .map(line => {
      const parts = line.split(/\t+|\s*[,，;；|｜]\s*/).map(part => part.trim());
      return {
        word: parts[0] || '',
        translation: parts[1] || '',
        pos: parts[2] || '',
        example: parts.slice(3).join(' ') || '',
      };
    })
    .filter(item => item.word.length > 0);
}

export default function CreatePage() {
  const router = useRouter();
  const [title, setTitle] = useState('我的單字本');
  const [rawWords, setRawWords] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [errorCode, setErrorCode] = useState('');
  const [errorDetail, setErrorDetail] = useState('');

  const words = parseWords(rawWords);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setErrorCode('');
    setErrorDetail('');
    if (!title.trim()) {
      setError('請先輸入單字本名稱。');
      return;
    }
    if (words.length === 0) {
      setError('請至少輸入一個單字。每行一個，例如：apple, 蘋果, n., I ate an apple.');
      return;
    }

    setBusy(true);
    try {
      const response = await fetch('/api/guest-decks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: title.trim(), words }),
      });
      const data = await response.json();
      if (!response.ok || !data.success || !data.deck?.id) {
        if (typeof data.errorCode === 'string') setErrorCode(data.errorCode);
        if (typeof data.errorDetail === 'string') setErrorDetail(data.errorDetail);
        throw new Error(data.error || '儲存失敗，請稍後再試。');
      }
      router.push('/decks/' + data.deck.id);
    } catch (e) {
      setError(e instanceof Error ? e.message : '儲存失敗，請稍後再試。');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div className="space-y-2">
        <Link href="/" className="text-sm font-semibold text-slate-600 hover:text-slate-900">← 返回首頁</Link>
        <h1 className="text-3xl font-black tracking-tight text-[#0a192f]">新增自己的單字</h1>
        <p className="text-sm text-slate-600">不用登入。每一行輸入一個單字，儲存後就能開始學習。</p>
      </div>

      <form onSubmit={handleSubmit} className="liquid-glass space-y-5 rounded-3xl p-6 sm:p-8">
        <div className="space-y-2">
          <label htmlFor="deck-title" className="block text-sm font-bold text-slate-800">單字本名稱</label>
          <input id="deck-title" value={title} onChange={e => setTitle(e.target.value)} maxLength={100}
            className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="例如：我的英文單字" />
        </div>

        <div className="space-y-2">
          <label htmlFor="words" className="block text-sm font-bold text-slate-800">單字清單</label>
          <p className="text-xs leading-5 text-slate-600">格式：英文單字, 中文意思, 詞性, 例句（後三項可省略）。也可以只輸入英文單字，一行一個。</p>
          <textarea id="words" value={rawWords} onChange={e => setRawWords(e.target.value)} rows={12}
            className="w-full resize-y rounded-xl border border-slate-200 bg-white/80 px-4 py-3 font-mono text-sm leading-6 outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={'apple, 蘋果, n., I ate an apple.\nresilient, 有韌性的, adj.\ncurious'} />
          <p className="text-xs text-slate-500">目前辨識到 {words.length} 個單字</p>
        </div>

        {error && <div role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700"><p>{error}</p>{errorCode ? <p className="mt-1 font-mono text-xs">錯誤代碼：{errorCode}</p> : null}{errorDetail ? <p className="mt-2 whitespace-pre-wrap break-words text-xs font-normal">診斷詳情：{errorDetail}</p> : null}</div>}

        <div className="flex flex-wrap gap-3">
          <button type="submit" disabled={busy}
            className="rounded-xl bg-[#0a192f] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#132c5b] disabled:cursor-not-allowed disabled:opacity-60">
            {busy ? '儲存中…' : '儲存並開始學習'}
          </button>
          <Link href="/" className="rounded-xl border border-slate-200 bg-white/70 px-5 py-3 text-sm font-bold text-slate-700 hover:bg-white">取消</Link>
        </div>
      </form>
    </div>
  );
}
