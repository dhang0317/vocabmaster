'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sparkles, Check, RefreshCw, AlertCircle } from 'lucide-react';
import { FileUpload } from '@/components/upload/FileUpload';
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
          apiKey: storedKey,
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

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      <div className="space-y-1">
        <h1 className="text-3xl font-black text-[#0a192f] tracking-tight">Create a new deck</h1>
        <p className="text-sm text-slate-600">
          Upload words, generate study material, and save a new deck.
        </p>
      </div>

      {error && (
        <div className="p-4 rounded-2xl bg-red-50 border-2 border-red-300 text-red-700 text-sm flex items-center gap-2">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#0a192f] space-y-6 shadow-sm">
        <h2 className="text-lg font-black text-[#0a192f] flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#0a192f] text-white flex items-center justify-center text-xs font-mono font-bold">
            1
          </span>
          Upload words
        </h2>
        <FileUpload onWordsLoaded={setWords} initialWords={words} />
      </div>

      <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#0a192f] space-y-6 shadow-sm">
        <h2 className="text-lg font-black text-[#0a192f] flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#0a192f] text-white flex items-center justify-center text-xs font-mono font-bold">
            2
          </span>
          Settings
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-[#0a192f] mb-1.5">Deck title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Unit 1"
              className="w-full px-4 py-2.5 rounded-xl bg-white border-2 border-[#0a192f] text-[#0a192f] placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a192f]/20 font-medium"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#0a192f] mb-1.5">Level</label>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value as GenerationLevel)}
              className="w-full px-4 py-2.5 rounded-xl bg-white border-2 border-[#0a192f] text-[#0a192f] text-sm focus:outline-none focus:ring-2 focus:ring-[#0a192f]/20 font-bold"
            >
              <option value="elementary">Elementary</option>
              <option value="highschool">High School</option>
              <option value="toeic">TOEIC Business</option>
              <option value="toefl_ielts">TOEFL / IELTS</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-bold text-[#0a192f] mb-1.5">Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Optional notes"
              className="w-full px-4 py-2.5 rounded-xl bg-white border-2 border-[#0a192f] text-[#0a192f] placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a192f]/20 font-medium"
            />
          </div>
        </div>

        <div className="pt-2">
          <button
            onClick={handleGenerate}
            disabled={words.length === 0 || isGenerating}
            className="w-full py-4 rounded-2xl bg-[#0a192f] hover:bg-[#132c5b] disabled:opacity-50 text-white font-black text-base flex items-center justify-center gap-2 shadow-md transition transform hover:-translate-y-0.5 border-2 border-[#0a192f]"
            style={{ color: '#ffffff' }}
          >
            {isGenerating ? (
              <>
                <RefreshCw className="w-5 h-5 animate-spin" />
                <span>Generating...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                <span>Generate materials</span>
              </>
            )}
          </button>
        </div>
      </div>

      {hasGenerated && (
        <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#0a192f] space-y-6 shadow-sm animate-in fade-in duration-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-mono font-bold">
                ✓
              </span>
              <h2 className="text-lg font-black text-[#0a192f]">Preview</h2>
            </div>
            <span className="text-xs text-[#0a192f] font-bold bg-slate-100 px-3 py-1 rounded-full border border-[#0a192f]/30">
              {generatedWords.length} words · {generatedQuizzes.length} quizzes
            </span>
          </div>

          <div className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-bold ${
            generationSource === 'ai'
              ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
              : 'bg-amber-50 border-amber-300 text-amber-800'
          }`}>
            <span className={`w-2.5 h-2.5 rounded-full ${generationSource === 'ai' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
            {generationSource === 'ai'
              ? 'AI online generation — questions were generated by Gemini.'
              : `Offline fallback — ${fallbackReason || 'check your API Key or network connection.'}`}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-[#0a192f]/30 space-y-1">
              <span className="text-xs font-bold text-slate-500">Words</span>
              <p className="text-sm font-black text-[#0a192f]">{generatedWords.length}</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-[#0a192f]/30 space-y-1">
              <span className="text-xs font-bold text-slate-500">Article</span>
              <p className="text-sm font-black text-[#0a192f]">{generatedArticle?.title || 'None'}</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-[#0a192f]/30 space-y-1">
              <span className="text-xs font-bold text-slate-500">Quizzes</span>
              <p className="text-sm font-black text-[#0a192f]">{generatedQuizzes.length}</p>
            </div>
          </div>

          <div className="pt-4 flex justify-end gap-3">
            <button
              onClick={handleSaveDeck}
              disabled={isSaving}
              className="flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-[#0a192f] hover:bg-[#132c5b] disabled:opacity-50 text-white font-black text-sm shadow-md transition transform hover:-translate-y-0.5 border border-[#0a192f]"
              style={{ color: '#ffffff' }}
            >
              {isSaving ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Saving...</span>
                </>
              ) : (
                <>
                  <Check className="w-4 h-4" />
                  <span>Save deck</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
