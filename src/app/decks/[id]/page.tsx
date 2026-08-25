'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Layers, BookOpen, Pencil, ArrowLeft, CheckCircle2, Volume2, RefreshCw, Trash2, List, Globe } from 'lucide-react';
import { FlashcardPlayer } from '@/components/flashcard/FlashcardPlayer';
import { ClozeExercise } from '@/components/cloze/ClozeExercise';
import { QuizRunner } from '@/components/quiz/QuizRunner';
import { ConfirmModal } from '@/components/common/ConfirmModal';
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
  const [publishing, setPublishing] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleting, setDeleting] = useState(false);

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

  const handleTogglePublic = async () => {
    if (!deck) return;
    const next = !deck.isPublic;
    setPublishing(true);
    try {
      const res = await fetch(`/api/decks/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isPublic: next }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setDeck(prev =>
          prev
            ? {
                ...prev,
                isPublic: data.deck.isPublic,
                publishedAt: data.deck.publishedAt,
              }
            : null
        );
      } else {
        alert(data.error || 'Failed to update sharing');
      }
    } catch (err) {
      console.error(err);
      alert('Failed to update sharing');
    } finally {
      setPublishing(false);
    }
  };

  const confirmDelete = useCallback(async () => {
    setDeleting(true);
    try {
      await fetch(`/api/decks/${id}`, { method: 'DELETE' });
      router.push('/');
    } catch (err) {
      console.error('Failed to delete deck', err);
      setDeleting(false);
      setShowDeleteModal(false);
    }
  }, [id, router]);

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
      <div className="liquid-glass p-8 text-center rounded-3xl space-y-4">
        <p className="text-red-600 font-bold">{error || 'Deck not found'}</p>
        <Link href="/" className="inline-flex items-center gap-1.5 text-xs text-[#0a192f] font-bold hover:underline">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to decks
        </Link>
      </div>
    );
  }

  const masteredCount = deck.words.filter(w => w.isMastered).length;

  const tabClass = (active: boolean) =>
    `flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold liquid-glass liquid-glass-hover ${
      active ? 'liquid-glass-active text-white' : 'text-[#0a192f]'
    }`;

  return (
    <div className="space-y-8">
      <ConfirmModal
        open={showDeleteModal}
        title="Delete this deck?"
        description={`“${deck.title}” and all related content will be permanently removed. This cannot be undone.`}
        confirmLabel="Delete"
        cancelLabel="Cancel"
        loading={deleting}
        onConfirm={confirmDelete}
        onCancel={() => !deleting && setShowDeleteModal(false)}
      />

      <div className="no-print flex flex-wrap items-start justify-between gap-4 border-b border-black/10 pb-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="liquid-glass liquid-glass-hover text-[#0a192f] p-2 rounded-xl inline-flex items-center justify-center"
              title="Back"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-2xl sm:text-3xl font-black text-[#0a192f] tracking-tight">
              {deck.title}
            </h1>
            {deck.isPublic && (
              <span className="text-[11px] px-2 py-0.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold inline-flex items-center gap-1">
                <Globe className="w-3 h-3" /> Public
              </span>
            )}
          </div>

          {deck.description && (
            <p className="text-xs sm:text-sm text-slate-600 pl-11">
              {deck.description}
            </p>
          )}

          <div className="flex items-center gap-3 pl-11 pt-1 text-xs text-slate-500 font-medium">
            <span>{deck.words.length} words</span>
            <span>•</span>
            <span className="text-emerald-700 font-bold">Mastered {masteredCount}</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={handleTogglePublic}
            disabled={publishing}
            title={deck.isPublic ? 'Remove from public library' : 'Share to public library'}
            className={`liquid-glass liquid-glass-hover p-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 disabled:opacity-50 ${
              deck.isPublic ? 'text-emerald-800' : 'text-slate-600'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>{publishing ? '…' : deck.isPublic ? 'Public' : 'Share'}</span>
          </button>
          <button
            type="button"
            onClick={() => setShowDeleteModal(true)}
            title="Delete deck"
            className="liquid-glass liquid-glass-hover text-slate-600 hover:text-slate-800 p-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5"
          >
            <Trash2 className="w-4 h-4" />
            <span>Delete</span>
          </button>
        </div>
      </div>

      <div className="no-print flex flex-wrap items-center gap-2 border-b border-black/10 pb-4">
        <button type="button" onClick={() => setActiveTab('flashcards')} className={tabClass(activeTab === 'flashcards')}>
          <Layers className="w-4 h-4" />
          <span>Flashcards</span>
        </button>

        {deck.articles && deck.articles.length > 0 && (
          <button type="button" onClick={() => setActiveTab('cloze')} className={tabClass(activeTab === 'cloze')}>
            <BookOpen className="w-4 h-4" />
          <span>Cloze Article</span>
          </button>
        )}

        {deck.quizzes && deck.quizzes.length > 0 && (
          <button type="button" onClick={() => setActiveTab('quiz')} className={tabClass(activeTab === 'quiz')}>
            <Pencil className="w-4 h-4" />
            <span>Quiz Questions</span>
          </button>
        )}

        <button type="button" onClick={() => setActiveTab('wordlist')} className={tabClass(activeTab === 'wordlist')}>
          <List className="w-4 h-4" />
          <span>Word List</span>
        </button>
      </div>

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
          <div className="liquid-glass rounded-3xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-[#0a192f] [&>tbody>tr>td]:align-middle [&>thead>tr>th]:align-middle">
                <thead className="bg-white/30 text-xs font-black text-[#0a192f] uppercase tracking-wider border-b border-white/40">
                  <tr>
                    <th className="px-6 py-4">Word</th>
                    <th className="px-4 py-4">Pronunciation</th>
                    <th className="px-4 py-4">POS</th>
                    <th className="px-6 py-4">Definition</th>
                    <th className="px-6 py-4">Example</th>
                    <th className="px-4 py-4 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5">
                  {deck.words.map((w, idx) => (
                    <tr key={idx} className="hover:bg-white/25 transition">
                      <td className="px-6 py-4 font-black text-[#0a192f]">
                        <div className="flex items-center gap-2">
                          <span>{w.word}</span>
                          <button
                            type="button"
                            onClick={() => handlePlayAudio(w.word)}
                            title="Pronounce"
                            className="p-1 rounded text-slate-500 hover:text-[#0a192f] hover:bg-white/40"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        {w.phonetic ? (
                          <span className="font-ipa text-sm text-[#0a192f]">{w.phonetic}</span>
                        ) : (
                          <span className="text-xs text-slate-400">—</span>
                        )}
                      </td>
                      <td className="px-4 py-4">
                        {w.pos ? (
                          <span className="text-xs italic text-[#1e3a8a] bg-white/40 px-2 py-0.5 rounded-md border border-white/50 font-bold">{w.pos}</span>
                        ) : (
                          <span className="text-xs text-slate-400">—</span>
                        )}
                      </td>
                      <td className="px-6 py-4 font-bold text-[#0a192f]">{w.translation}</td>
                      <td className="px-6 py-4 text-xs text-slate-600 max-w-xs">
                        <p className="font-semibold text-[#0a192f]">"{w.example}"</p>
                        {w.exampleZh && <p className="text-slate-500 mt-0.5 font-cjk">{w.exampleZh}</p>}
                      </td>
                      <td className="px-4 py-4 text-center">
                        <button
                          type="button"
                          onClick={() => w.id && handleToggleMastered(w.id, !w.isMastered)}
                          className={`p-1.5 rounded-lg border transition ${
                            w.isMastered
                              ? 'bg-emerald-100 text-emerald-800 border-emerald-600'
                              : 'bg-white/40 text-slate-400 border-white/50 hover:text-[#0a192f]'
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
