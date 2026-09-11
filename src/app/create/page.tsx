'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sparkles, Check, RefreshCw, AlertCircle, WifiOff, Settings2, FileUp } from 'lucide-react';
import { FileUpload } from '@/components/upload/FileUpload';
import { SemanticTagEditor } from '@/components/upload/SemanticTagEditor';
import {
  RawWordInput,
  GeneratedWord,
  GeneratedCloze,
  GeneratedQuiz,
  GenerationLevel,
} from '@/types';

export default function CreateDeckPage() {
  const router = useRouter();

  const [words, setWords] = useState<RawWordInput[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [level, setLevel] = useState<GenerationLevel>('highschool');
  const [useOffline, setUseOffline] = useState(false);

  const [isGenerating, setIsGenerating] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [generatedWords, setGeneratedWords] = useState<GeneratedWord[]>([]);
  const [generatedArticle, setGeneratedArticle] = useState<GeneratedCloze | null>(null);
  const [generatedQuizzes, setGeneratedQuizzes] = useState<GeneratedQuiz[]>([]);
  const [generationSource, setGenerationSource] = useState<'ai' | 'offline' | null>(null);
  const [fallbackReason, setFallbackReason] = useState<string | null>(null);

  const parseJsonResponse = async (res: Response) => {
    const text = await res.text();
    try {
      return text ? JSON.parse(text) : {};
    } catch {
      throw new Error(text || 'Server returned non-JSON content');
    }
  };

  const handleGenerate = async () => {
    if (words.length === 0) {
      setError('Please upload or enter words first');
      return;
    }

    if (!title.trim()) {
      setTitle(`Untitled Deck (${new Date().toLocaleDateString()})`);
    }

    setIsGenerating(true);
    setError(null);

    try {
      const storedKey =
        typeof window !== 'undefined' ? localStorage.getItem('gemini_api_key') || '' : '';

      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          words,
          level,
          apiKey: useOffline ? '' : storedKey,
          forceOffline: useOffline,
        }),
      });

      const json = await parseJsonResponse(res);
      if (!res.ok || !json.success) {
        throw new Error(json.error || 'Generation failed');
      }

      const { data } = json;
      setGeneratedWords(data.words || []);
      setGeneratedArticle(data.article || null);
      setGeneratedQuizzes(data.quizzes || []);
      setGenerationSource(data.source || 'offline');
      setFallbackReason(data.fallbackReason || null);
    } catch (err: any) {
      setError(err.message || 'Generation failed');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSaveDeck = async () => {
    if (generatedWords.length === 0) return;

    setIsSaving(true);
    setError(null);

    try {
      const res = await fetch('/api/decks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: title.trim() || 'Untitled Deck',
          description: description.trim(),
          words: generatedWords,
          article: generatedArticle,
          quizzes: generatedQuizzes,
        }),
      });

      const json = await parseJsonResponse(res);
      if (!res.ok || !json.success) {
        throw new Error(json.error || 'Save failed');
      }

      router.push(`/decks/${json.deck.id}`);
    } catch (err: any) {
      setError(err.message || 'Save failed');
      setIsSaving(false);
    }
  };

  const hasGenerated = generatedWords.length > 0;

  const fieldClass =
    'w-full px-4 py-2.5 rounded-2xl bg-white/80 border border-black/10 text-[#0a192f] placeholder-slate-400 text-sm focus:outline-none focus:border-[#0a192f]/40 focus:ring-2 focus:ring-[#0a192f]/10 font-medium transition shadow-sm';

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      {/* Header Banner */}
      <div className="space-y-1.5">
        <h1 className="text-3xl sm:text-4xl font-black text-[#0a192f] tracking-tight">
          建立新題庫 (Create Deck)
        </h1>
        <p className="text-sm text-slate-600 font-medium">
          匯入英文單字清單，自動生成情境短文、克漏字空格與高品質單選測驗題。
        </p>
      </div>

      {error && (
        <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2 shadow-sm">
          <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-500" />
          <span>{error}</span>
        </div>
      )}

      {/* Step 1: Upload Words */}
      <div className="liquid-glass liquid-glass-hover p-6 sm:p-8 rounded-3xl space-y-6">
        <h2 className="text-lg font-black text-[#0a192f] flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-xl bg-[#0a192f] text-white flex items-center justify-center text-xs font-mono font-bold shadow-sm" style={{ color: '#ffffff' }}>
            1
          </span>
          <span>上傳或輸入單字 (Upload Words)</span>
        </h2>
        <FileUpload onWordsLoaded={setWords} initialWords={words} />
        <SemanticTagEditor words={words} onChange={setWords} />
      </div>

      {/* Step 2: Deck Settings */}
      <div className="liquid-glass liquid-glass-hover p-6 sm:p-8 rounded-3xl space-y-6">
        <h2 className="text-lg font-black text-[#0a192f] flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-xl bg-[#0a192f] text-white flex items-center justify-center text-xs font-mono font-bold shadow-sm" style={{ color: '#ffffff' }}>
            2
          </span>
          <span>題庫設定 (Deck Settings)</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-[#0a192f] mb-1.5">題庫名稱 (Title)</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="例如：Unit 1 核心單字"
              className={fieldClass}
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#0a192f] mb-1.5">難度等級 (Level)</label>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value as GenerationLevel)}
              className={`${fieldClass} font-bold cursor-pointer`}
            >
              <option value="elementary">初級 (Elementary)</option>
              <option value="highschool">高中 (High School)</option>
              <option value="toeic">多益商務 (TOEIC Business)</option>
              <option value="toefl_ielts">托福 / 雅思 (TOEFL / IELTS)</option>
              <option value="advanced">高級 (Advanced)</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-bold text-[#0a192f] mb-1.5">題庫備註或描述 (Description)</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="選填備註說明..."
              className={fieldClass}
            />
          </div>

          <div className="sm:col-span-2 pt-1">
            <label className="block text-xs font-bold text-[#0a192f] mb-2">生成模式 (Generation Mode)</label>
            <div className="flex flex-wrap gap-2.5">
              <button
                type="button"
                onClick={() => setUseOffline(false)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition shadow-sm border ${
                  !useOffline
                    ? 'bg-[#0a192f] text-white border-[#0a192f]'
                    : 'bg-white/70 hover:bg-white text-[#0a192f] border-black/10'
                }`}
                style={!useOffline ? { color: '#ffffff' } : {}}
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>AI 智能生成（Gemini 深度語意）</span>
              </button>
              <button
                type="button"
                onClick={() => setUseOffline(true)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition shadow-sm border ${
                  useOffline
                    ? 'bg-[#0a192f] text-white border-[#0a192f]'
                    : 'bg-white/70 hover:bg-white text-[#0a192f] border-black/10'
                }`}
                style={useOffline ? { color: '#ffffff' } : {}}
              >
                <WifiOff className="w-4 h-4" />
                <span>離線極速生成（不消耗 API）</span>
              </button>
            </div>
            <p className="mt-2 text-xs text-slate-500 font-medium">
              {!useOffline
                ? '使用 Google Gemini AI 根據單字與難度生成道地的自然故事短文與全套測驗題目。'
                : '使用內建情境庫快速生成文章與測驗，零延遲且無需聯網。'}
            </p>
          </div>
        </div>

        <div className="pt-3">
          <button
            onClick={handleGenerate}
            disabled={words.length === 0 || isGenerating}
            className="w-full py-4 rounded-2xl bg-[#0a192f] hover:bg-[#132c5b] disabled:opacity-50 text-white font-black text-base flex items-center justify-center gap-2 shadow-md transition transform hover:-translate-y-0.5 border border-[#0a192f]"
            style={{ color: '#ffffff' }}
          >
            {isGenerating ? (
              <>
                <RefreshCw className="w-5 h-5 animate-spin" />
                <span>AI 正在生成學習教材...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5 text-amber-300" />
                <span>開始生成學習教材 (Generate Materials)</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Generated Preview Card */}
      {hasGenerated && (
        <div className="liquid-glass liquid-glass-hover p-6 sm:p-8 rounded-3xl space-y-6 animate-in fade-in duration-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-xs font-mono font-bold shadow-sm" style={{ color: '#ffffff' }}>
                ✓
              </span>
              <h2 className="text-lg font-black text-[#0a192f]">生成預覽 (Preview)</h2>
            </div>
            <span className="text-xs text-[#0a192f] font-bold bg-white/70 px-3 py-1 rounded-full border border-black/10 shadow-sm">
              {generatedWords.length} 個單字 · {generatedQuizzes.length} 道測驗
            </span>
          </div>

          <div
            className={`flex items-center gap-2.5 px-4 py-3 rounded-2xl border text-xs sm:text-sm font-bold shadow-sm ${
              generationSource === 'ai'
                ? 'bg-emerald-50/90 border-emerald-200 text-emerald-800'
                : 'bg-sky-50/90 border-sky-200 text-sky-900'
            }`}
          >
            <span
              className={`w-2.5 h-2.5 rounded-full ${generationSource === 'ai' ? 'bg-emerald-500' : 'bg-sky-500'}`}
            />
            <span>
              {generationSource === 'ai'
                ? 'AI 線上生成 — 已透過 Gemini 成功完成故事與題目創作。'
                : '離線匹配生成 — 使用情境範本與語意推斷完成。'}
            </span>
            {fallbackReason && generationSource === 'offline' && useOffline === false && (
              <span className="font-normal opacity-75">（{fallbackReason}）</span>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-white/60 border border-black/5 space-y-1 shadow-sm">
              <span className="text-xs font-bold text-slate-500">單字卡 (Words)</span>
              <p className="text-lg font-black text-[#0a192f]">{generatedWords.length} 個</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/60 border border-black/5 space-y-1 shadow-sm">
              <span className="text-xs font-bold text-slate-500">短文故事 (Article)</span>
              <p className="text-lg font-black text-[#0a192f] line-clamp-1">{generatedArticle?.title || 'None'}</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/60 border border-black/5 space-y-1 shadow-sm">
              <span className="text-xs font-bold text-slate-500">單選測驗 (Quizzes)</span>
              <p className="text-lg font-black text-[#0a192f]">{generatedQuizzes.length} 題</p>
            </div>
          </div>

          <div className="pt-2 flex justify-end gap-3">
            <button
              onClick={handleSaveDeck}
              disabled={isSaving}
              className="flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-[#0a192f] hover:bg-[#132c5b] disabled:opacity-50 text-white font-black text-sm shadow-md transition transform hover:-translate-y-0.5 border border-[#0a192f]"
              style={{ color: '#ffffff' }}
            >
              {isSaving ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>正在儲存題庫...</span>
                </>
              ) : (
                <>
                  <Check className="w-4 h-4" />
                  <span>儲存並開始學習 (Save Deck)</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}