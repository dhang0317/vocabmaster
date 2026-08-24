'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Layers, BookOpen, HelpCircle, ArrowLeft, CheckCircle2, Volume2, RefreshCw, Trash2, List } from 'lucide-react';
import { FlashcardPlayer } from '@/components/flashcard/FlashcardPlayer';
import { ClozeExercise } from '@/components/cloze/ClozeExercise';
import { QuizRunner } from '@/components/quiz/QuizRunner';
import { DeckData } from '@/types';

type StudyTab = 'flashcards' | 'cloze' | 'quiz' | 'wordlist';

export default function DeckStudyPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;

  const [deck, setDeck] = useState<DeckData | null>(null);
  const [activeTab, setActiveTab] = useState<StudyTab>('flashcards');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDeck = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(`/api/decks/${id}`);
      const data = await res.json();
      if (data.success) {
        setDeck(data.deck);
      } else {
        setError(data.error || 'Unable to load deck');
      }
    } catch (err: any) {
      setError(err.message || 'Connection failed');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (id) fetchDeck();
  }, [id]);

  const handleToggleMastered = async (wordId: string, isMastered: boolean) => {
    try {
      await fetch(`/api/decks/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ wordId, isMastered }),
      });

      setDeck(prev => {
        if (!prev) return null;
        return {
          ...prev,
          words: prev.words.map(w => (w.id === wordId ? { ...w, isMastered } : w)),
        };
      });
    } catch (err) {
      console.error('Failed to update mastered status', err);
    }
  };

  const handlePlayAudio = (word: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleDeleteDeck = async () => {
    if (!confirm('Delete this deck? This action cannot be undone.')) return;
    try {
      await fetch(`/api/decks/${id}`, { method: 'DELETE' });
      router.push('/');
    } catch (err) {
      console.error('Failed to delete deck', err);
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-24 space-y-4 text-slate-500">
        <RefreshCw className="w-8 h-8 animate-spin text-[#0a192f]" />
        <p className="text-sm font-bold">Loading deck content...</p>
      </div>
    );
  }

  if (error || !deck) {
    return (
      <div className="p-8 text-center rounded-3xl bg-white border-2 border-[#0a192f] space-y-4 shadow-sm">
        <p className="text-red-600 font-bold">{error || 'Deck not found'}</p>
        <Link href="/" className="inline-flex items-center gap-1.5 text-xs text-[#0a192f] font-bold hover:underline">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to decks
        </Link>
      </div>
    );
  }

  const masteredCount = deck.words.filter(w => w.isMastered).length;

  return (
    <div className="space-y-8">
      {/* Header Info */}
      <div className="no-print flex flex-wrap items-start justify-between gap-4 border-b-2 border-[#0a192f]/10 pb-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="text-[#0a192f] hover:bg-slate-100 p-1.5 rounded-xl border border-[#0a192f]/20 transition"
              title="返回總覽"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-2xl sm:text-3xl font-black text-[#0a192f] tracking-tight">
              {deck.title}
            </h1>
          </div>

          {deck.description && (
            <p className="text-xs sm:text-sm text-slate-600 pl-9">
              {deck.description}
            </p>
          )}

          <div className="flex items-center gap-3 pl-9 pt-1 text-xs text-slate-500 font-medium">
            <span>{deck.words.length} words</span>
            <span>•</span>
            <span className="text-emerald-700 font-bold">Mastered {masteredCount}</span>
          </div>
        </div>

        <button
          onClick={handleDeleteDeck}
          title="刪除題庫"
          className="text-slate-500 hover:text-red-600 p-2 rounded-xl hover:bg-red-50 border border-slate-300 transition text-xs font-bold flex items-center gap-1"
        >
          <Trash2 className="w-4 h-4" />
          <span>Delete</span>
        </button>
      </div>

      {/* Study Navigation Tabs */}
      <div className="no-print flex flex-wrap items-center gap-2 border-b-2 border-[#0a192f]/10 pb-4">
        <button
          onClick={() => setActiveTab('flashcards')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition border-2 ${
            activeTab === 'flashcards'
              ? 'bg-[#0a192f] text-white border-[#0a192f] shadow-sm'
              : 'bg-white text-[#0a192f] border-[#0a192f]/30 hover:border-[#0a192f]'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Flashcards</span>
        </button>

        {deck.articles && deck.articles.length > 0 && (
          <button
            onClick={() => setActiveTab('cloze')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition border-2 ${
              activeTab === 'cloze'
                ? 'bg-[#0a192f] text-white border-[#0a192f] shadow-sm'
                : 'bg-white text-[#0a192f] border-[#0a192f]/30 hover:border-[#0a192f]'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Cloze Article</span>
        </button>
      )}

        {deck.quizzes && deck.quizzes.length > 0 && (
          <button
            onClick={() => setActiveTab('quiz')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition border-2 ${
              activeTab === 'quiz'
                ? 'bg-[#0a192f] text-white border-[#0a192f] shadow-sm'
                : 'bg-white text-[#0a192f] border-[#0a192f]/30 hover:border-[#0a192f]'
          }`}
        >
          <HelpCircle className="w-4 h-4" />
          <span>Quiz Questions</span>
        </button>
      )}

        <button
          onClick={() => setActiveTab('wordlist')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition border-2 ${
            activeTab === 'wordlist'
              ? 'bg-[#0a192f] text-white border-[#0a192f] shadow-sm'
              : 'bg-white text-[#0a192f] border-[#0a192f]/30 hover:border-[#0a192f]'
          }`}
        >
          <List className="w-4 h-4" />
          <span>Word List</span>
        </button>

      </div>

      {/* Tab Contents */}
      <div className="pt-2">
        {activeTab === 'flashcards' && (
          <FlashcardPlayer words={deck.words} onToggleMastered={handleToggleMastered} />
        )}

        {activeTab === 'cloze' && deck.articles && deck.articles.length > 0 && (
          <ClozeExercise article={deck.articles[0]} words={deck.words} />
        )}

        {activeTab === 'quiz' && deck.quizzes && deck.quizzes.length > 0 && (
          <QuizRunner quizzes={deck.quizzes} words={deck.words} deckId={deck.id} />
        )}

        {activeTab === 'wordlist' && (
          <div className="rounded-3xl border-2 border-[#0a192f] bg-white overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-[#0a192f]">
                <thead className="bg-slate-100 text-xs font-black text-[#0a192f] uppercase tracking-wider border-b-2 border-[#0a192f]">
                  <tr>
                    <th className="px-6 py-4">Word</th>
                    <th className="px-4 py-4">Pronunciation / POS</th>
                    <th className="px-6 py-4">Definition</th>
                    <th className="px-6 py-4">Example</th>
                    <th className="px-4 py-4 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#0a192f]/10">
                  {deck.words.map((w, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition">
                      <td className="px-6 py-4 font-black text-[#0a192f] flex items-center gap-2">
                        <span>{w.word}</span>
                        <button
                          onClick={() => handlePlayAudio(w.word)}
                          title="發音"
                          className="p-1 rounded text-slate-500 hover:text-[#0a192f] hover:bg-slate-200"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </td>
                      <td className="px-4 py-4 font-mono text-xs text-[#0a192f] font-bold">
                        {w.phonetic} <span className="italic text-[#1e3a8a]">{w.pos}</span>
                      </td>
                      <td className="px-6 py-4 font-bold text-[#0a192f]">{w.translation}</td>
                      <td className="px-6 py-4 text-xs text-slate-600 max-w-xs">
                        <p className="font-semibold text-[#0a192f]">"{w.example}"</p>
                        {w.exampleZh && <p className="text-slate-500 mt-0.5 font-cjk">{w.exampleZh}</p>}
                      </td>
                      <td className="px-4 py-4 text-center">
                        <button
                          onClick={() => w.id && handleToggleMastered(w.id, !w.isMastered)}
                          className={`p-1.5 rounded-lg border transition ${
                            w.isMastered
                              ? 'bg-emerald-100 text-emerald-800 border-emerald-600'
                              : 'bg-white text-slate-400 border-slate-300 hover:text-[#0a192f]'
                          }`}
                        >
                          <CheckCircle2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
