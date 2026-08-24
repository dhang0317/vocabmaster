'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Plus, BookOpen, Layers, CheckCircle2, Award, Trash2, ArrowRight, Search } from 'lucide-react';

interface DeckSummary {
  id: string;
  title: string;
  description: string | null;
  createdAt: string;
  wordCount: number;
  masteredCount: number;
  articleCount: number;
  quizCount: number;
  resultCount: number;
}

export default function HomePage() {
  const [decks, setDecks] = useState<DeckSummary[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const fetchDecks = async () => {
    try {
      setIsLoading(true);
      const res = await fetch('/api/decks');
      const data = await res.json();
      if (data.success) {
        setDecks(data.decks || []);
      }
    } catch (err) {
      console.error('Failed to load decks', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDecks();
  }, []);

  const handleDeleteDeck = async (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!confirm('Delete this deck? All flashcards and quizzes will be removed.')) return;

    try {
      const res = await fetch(`/api/decks/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setDecks(prev => prev.filter(d => d.id !== id));
      }
    } catch (err) {
      console.error('Failed to delete deck', err);
    }
  };

  const filteredDecks = decks.filter(d =>
    d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (d.description && d.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const totalWords = decks.reduce((acc, d) => acc + d.wordCount, 0);
  const totalMastered = decks.reduce((acc, d) => acc + d.masteredCount, 0);
  const totalQuizzes = decks.reduce((acc, d) => acc + d.resultCount, 0);

  return (
    <div className="space-y-10">
      {/* Hero Banner */}
      <div className="rounded-3xl bg-white border-2 border-[#0a192f] p-8 sm:p-12 shadow-sm">
        <div className="max-w-2xl space-y-4">
          <h1 className="text-3xl sm:text-5xl text-[#0a192f] tracking-tight leading-tight">
            <span className="block">Vocabulary</span>
          </h1>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/create"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#0a192f] hover:bg-[#132c5b] text-white font-bold text-sm shadow-md transition transform hover:-translate-y-0.5 border border-[#0a192f]"
              style={{ color: '#ffffff' }}
            >
              <Plus className="w-5 h-5" />
            <span>Create a vocabulary deck</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white border-2 border-[#0a192f] space-y-1 shadow-sm">
          <div className="flex items-center justify-between text-slate-600">
            <span className="text-xs font-bold">Total decks</span>
            <Layers className="w-4 h-4 text-[#0a192f]" />
          </div>
          <span className="text-2xl sm:text-3xl font-black text-[#0a192f]">{decks.length}</span>
        </div>

        <div className="p-5 rounded-2xl bg-white border-2 border-[#0a192f] space-y-1 shadow-sm">
          <div className="flex items-center justify-between text-slate-600">
            <span className="text-xs font-bold">Total words</span>
            <BookOpen className="w-4 h-4 text-[#0a192f]" />
          </div>
          <span className="text-2xl sm:text-3xl font-black text-[#0a192f]">{totalWords}</span>
        </div>

        <div className="p-5 rounded-2xl bg-white border-2 border-[#0a192f] space-y-1 shadow-sm">
          <div className="flex items-center justify-between text-slate-600">
            <span className="text-xs font-bold">Mastered words</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-700" />
          </div>
          <span className="text-2xl sm:text-3xl font-black text-emerald-700">{totalMastered}</span>
        </div>

        <div className="p-5 rounded-2xl bg-white border-2 border-[#0a192f] space-y-1 shadow-sm">
          <div className="flex items-center justify-between text-slate-600">
            <span className="text-xs font-bold">Quizzes completed</span>
            <Award className="w-4 h-4 text-[#0a192f]" />
          </div>
          <span className="text-2xl sm:text-3xl font-black text-[#0a192f]">{totalQuizzes}</span>
        </div>
      </div>

      {/* Decks Management Header */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-[#0a192f]">My vocabulary decks</h2>
            <p className="text-xs text-slate-600">Choose a deck to study flashcards, cloze exercises, or quizzes.</p>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search deck titles or descriptions..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border-2 border-[#0a192f] text-xs sm:text-sm text-[#0a192f] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0a192f]/20 font-medium"
            />
          </div>
        </div>

        {/* Decks List */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-48 rounded-3xl bg-white border-2 border-[#0a192f]/30 animate-pulse" />
            ))}
          </div>
        ) : filteredDecks.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-white border-2 border-[#0a192f] space-y-4 shadow-sm">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-slate-100 border-2 border-[#0a192f] flex items-center justify-center text-[#0a192f]">
              <BookOpen className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-[#0a192f]">No decks yet</h3>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Upload a word list below and generate your own flashcards and practice questions.
              </p>
            </div>
            <Link
              href="/create"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#0a192f] hover:bg-[#132c5b] text-white font-semibold text-xs transition border border-[#0a192f]"
              style={{ color: '#ffffff' }}
            >
              <Plus className="w-4 h-4" />
              Create your first deck
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDecks.map(deck => (
              <Link
                key={deck.id}
                href={`/decks/${deck.id}`}
                className="group relative rounded-3xl bg-white hover:bg-slate-50 border-2 border-[#0a192f] p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-sm hover:shadow-md"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-extrabold text-lg text-[#0a192f] group-hover:text-[#1e3a8a] transition line-clamp-1">
                      {deck.title}
                    </h3>
                    <button
                      onClick={(e) => handleDeleteDeck(deck.id, e)}
                      title="Delete deck"
                      className="text-slate-400 hover:text-red-600 p-1 rounded-lg hover:bg-red-50 transition opacity-0 group-hover:opacity-100"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {deck.description && (
                    <p className="text-xs text-slate-600 line-clamp-2">
                      {deck.description}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 text-[#0a192f] border border-[#0a192f]/40 font-bold">
                      {deck.wordCount} words
                    </span>
                    {deck.articleCount > 0 && (
                      <span className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 text-[#0a192f] border border-[#0a192f]/40 font-bold">
                        Cloze article
                      </span>
                    )}
                    {deck.quizCount > 0 && (
                      <span className="text-[11px] px-2.5 py-1 rounded-lg bg-indigo-50 text-[#0a192f] border border-[#0a192f]/40 font-bold">
                        <span className="text-[#0a192f]">{deck.quizCount} quiz questions</span>
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-6 border-t border-[#0a192f]/20 flex items-center justify-between text-xs mt-4">
                  <span className="text-slate-600 font-medium">
                    Mastered {deck.masteredCount} / {deck.wordCount}
                  </span>
                  <span className="flex items-center gap-1 font-bold text-[#0a192f] group-hover:translate-x-1 transition transform">
                    Start studying <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
