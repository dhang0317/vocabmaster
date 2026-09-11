'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { 
  Plus, 
  BookOpen, 
  Layers, 
  CheckCircle2, 
  Award, 
  Trash2, 
  ArrowRight, 
  Search, 
  Globe, 
  Flame, 
  Sparkles,
  TrendingUp,
  Volume2
} from 'lucide-react';
import { ConfirmModal } from '@/components/common/ConfirmModal';

interface DeckSummary {
  id: string;
  title: string;
  description: string | null;
  isPublic?: boolean;
  createdAt: string;
  wordCount: number;
  masteredCount: number;
  articleCount: number;
  quizCount: number;
  resultCount: number;
}

const CATEGORIES = [
  { id: 'all', label: '全部題庫', icon: '✨' },
  { id: 'workplace', label: '職場商務', icon: '💼', keyword: 'workplace|職場|商務|business' },
  { id: 'academic', label: '學術留學', icon: '🎓', keyword: 'academic|學術|留學|toefl|ielts' },
  { id: 'daily', label: '日常生活', icon: '☕', keyword: 'daily|日常|生活|communication' },
  { id: 'science', label: '科技科學', icon: '🔬', keyword: 'science|科技|科學|technology' },
  { id: 'travel', label: '觀光旅遊', icon: '✈️', keyword: 'travel|旅遊|觀光|exploration' },
];

export default function HomePage() {
  const [decks, setDecks] = useState<DeckSummary[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [deleteTarget, setDeleteTarget] = useState<DeckSummary | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [streakDays, setStreakDays] = useState(1);

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
    // Load or initialize streak
    try {
      const storedStreak = localStorage.getItem('vocab_streak');
      const lastStudy = localStorage.getItem('vocab_last_study_date');
      const today = new Date().toDateString();
      if (storedStreak) {
        setStreakDays(parseInt(storedStreak, 10) || 1);
      } else {
        localStorage.setItem('vocab_streak', '1');
        localStorage.setItem('vocab_last_study_date', today);
        setStreakDays(1);
      }
    } catch {
      /* ignore */
    }
  }, []);

  const openDeleteModal = useCallback((deck: DeckSummary, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDeleteTarget(deck);
  }, []);

  const closeDeleteModal = useCallback(() => {
    if (deleting) return;
    setDeleteTarget(null);
  }, [deleting]);

  const confirmDelete = useCallback(async () => {
    if (!deleteTarget) return;
    const id = deleteTarget.id;
    setDeleting(true);
    try {
      const res = await fetch(`/api/decks/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setDecks(prev => prev.filter(d => d.id !== id));
        setDeleteTarget(null);
      }
    } catch (err) {
      console.error('Failed to delete deck', err);
    } finally {
      setDeleting(false);
    }
  }, [deleteTarget]);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: decks.length };
    CATEGORIES.forEach(cat => {
      if (cat.id === 'all') return;
      const regex = new RegExp(cat.keyword || '', 'i');
      counts[cat.id] = decks.filter(d => regex.test(d.title) || (d.description && regex.test(d.description))).length;
    });
    return counts;
  }, [decks]);

  const filteredDecks = useMemo(() => {
    return decks.filter(d => {
      // 1. Search Query Filter
      const matchesSearch = 
        d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (d.description && d.description.toLowerCase().includes(searchQuery.toLowerCase()));

      if (!matchesSearch) return false;

      // 2. Category Filter
      if (selectedCategory === 'all') return true;
      const currentCat = CATEGORIES.find(c => c.id === selectedCategory);
      if (!currentCat || !currentCat.keyword) return true;
      const regex = new RegExp(currentCat.keyword, 'i');
      return regex.test(d.title) || (d.description && regex.test(d.description));
    });
  }, [decks, searchQuery, selectedCategory]);

  const totalWords = decks.reduce((acc, d) => acc + d.wordCount, 0);
  const totalMastered = decks.reduce((acc, d) => acc + d.masteredCount, 0);
  const totalQuizzes = decks.reduce((acc, d) => acc + d.resultCount, 0);
  const overallMasteryRate = totalWords > 0 ? Math.round((totalMastered / totalWords) * 100) : 0;

  return (
    <div className="relative space-y-8">
      <ConfirmModal
        open={!!deleteTarget}
        title="Delete this deck?"
        description={
          deleteTarget
            ? `“${deleteTarget.title}” and all flashcards, cloze articles, and quizzes will be permanently removed.`
            : undefined
        }
        confirmLabel="Delete"
        cancelLabel="Cancel"
        loading={deleting}
        onConfirm={confirmDelete}
        onCancel={closeDeleteModal}
      />

      {/* Hero Banner with Liquid Glass */}
      <div className="liquid-glass liquid-glass-hover rounded-3xl p-8 sm:p-12 relative overflow-hidden">
        <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-2xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/60 border border-[#0a192f]/10 text-xs font-bold text-[#0a192f] shadow-sm backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>AI-Powered Vocabulary Master</span>
          </div>

          <h1 className="text-3xl sm:text-5xl text-[#0a192f] font-black tracking-tight leading-tight">
            Vocabulary Mastery
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
            透過 AI 情境短文、克漏字與智能測驗題，系統化加深英語長期記憶。
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/create"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#0a192f] hover:bg-[#132c5b] text-white font-bold text-sm shadow-md transition transform hover:-translate-y-0.5"
              style={{ color: '#ffffff' }}
            >
              <Plus className="w-5 h-5" />
              <span>新增單字庫</span>
            </Link>
            <Link
              href="/explore"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white/80 hover:bg-white text-[#0a192f] font-bold text-sm shadow-sm transition border border-[#0a192f]/15 transform hover:-translate-y-0.5"
            >
              <Globe className="w-5 h-5 text-[#0a192f]" />
              <span>公共題庫 (Public Library)</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 4 Statistics Cards with Streak */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {/* Streak Card */}
        <div className="liquid-glass liquid-glass-hover p-5 rounded-2xl space-y-1.5 border border-white/60">
          <div className="flex items-center justify-between text-slate-600">
            <span className="text-xs font-bold">連續學習</span>
            <Flame className="w-4 h-4 text-amber-500 animate-bounce" />
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl sm:text-3xl font-black text-[#0a192f]">{streakDays}</span>
            <span className="text-xs text-slate-500 font-bold">天</span>
          </div>
        </div>

        {/* Total Words Card */}
        <div className="liquid-glass liquid-glass-hover p-5 rounded-2xl space-y-1.5 border border-white/60">
          <div className="flex items-center justify-between text-slate-600">
            <span className="text-xs font-bold">總單字量</span>
            <BookOpen className="w-4 h-4 text-[#0a192f]" />
          </div>
          <span className="text-2xl sm:text-3xl font-black text-[#0a192f]">{totalWords.toLocaleString()}</span>
        </div>

        {/* Mastered Words Card */}
        <div className="liquid-glass liquid-glass-hover p-5 rounded-2xl space-y-1.5 border border-white/60">
          <div className="flex items-center justify-between text-slate-600">
            <span className="text-xs font-bold">已熟練單字</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl sm:text-3xl font-black text-emerald-700">{totalMastered.toLocaleString()}</span>
            {totalWords > 0 && (
              <span className="text-xs text-emerald-600 font-extrabold">({overallMasteryRate}%)</span>
            )}
          </div>
        </div>

        {/* Quizzes Completed Card */}
        <div className="liquid-glass liquid-glass-hover p-5 rounded-2xl space-y-1.5 border border-white/60">
          <div className="flex items-center justify-between text-slate-600">
            <span className="text-xs font-bold">測驗完成次數</span>
            <Award className="w-4 h-4 text-[#0a192f]" />
          </div>
          <span className="text-2xl sm:text-3xl font-black text-[#0a192f]">{totalQuizzes.toLocaleString()}</span>
        </div>
      </div>

      {/* Main Section: Search & Category Filter Pills */}
      <div className="space-y-4 pt-2">
        {/* Search Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 px-2 sm:px-0">
          <h2 className="text-2xl font-black text-[#0a192f] flex items-center gap-2">
            <span>我的題庫列表</span>
            <span className="text-xs font-bold text-slate-500 bg-white/70 px-2.5 py-1 rounded-full border border-black/5">
              {filteredDecks.length}
            </span>
          </h2>

          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜尋題庫名稱或關鍵字..."
              className="liquid-glass w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm text-[#0a192f] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0a192f]/20 font-medium transition"
            />
          </div>
        </div>

        {/* Category Filter Pills (Horizontal Scroll) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-1">
          {CATEGORIES.map(cat => {
            const count = categoryCounts[cat.id] || 0;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap border shadow-sm ${
                  isSelected
                    ? 'bg-[#0a192f] text-white border-[#0a192f] shadow-md scale-[1.02]'
                    : 'bg-white/70 text-slate-700 hover:bg-white hover:text-[#0a192f] border-black/5'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
                {count > 0 && (
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-200/80 text-slate-600'
                  }`}>
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Deck Cards Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="h-52 rounded-3xl liquid-glass animate-pulse border border-white/40" />
            ))}
          </div>
        ) : filteredDecks.length === 0 ? (
          <div className="liquid-glass liquid-glass-hover p-12 text-center rounded-3xl space-y-4 border border-white/60">
            <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-2xl">
              🔍
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-[#0a192f]">沒有找到相符的題庫</h3>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                您可以切換分類標籤，或是點擊下方按鈕建立全新單字庫。
              </p>
            </div>
            <Link
              href="/create"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#0a192f] hover:bg-[#132c5b] text-white font-semibold text-xs transition shadow-sm"
              style={{ color: '#ffffff' }}
            >
              <Plus className="w-4 h-4" />
              建立新題庫
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {filteredDecks.map(deck => {
              const masteryPercent = deck.wordCount > 0 ? Math.round((deck.masteredCount / deck.wordCount) * 100) : 0;
              const isHighMastery = masteryPercent >= 80;
              const isMediumMastery = masteryPercent >= 40 && masteryPercent < 80;

              return (
                <Link
                  key={deck.id}
                  href={`/decks/${deck.id}`}
                  className="liquid-glass liquid-glass-hover group relative rounded-3xl p-6 flex flex-col justify-between border border-white/60 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-black text-lg text-[#0a192f] group-hover:text-indigo-900 transition line-clamp-1">
                        {deck.title}
                      </h3>
                      <button
                        type="button"
                        onClick={(e) => openDeleteModal(deck, e)}
                        title="Delete deck"
                        className="text-slate-400 hover:text-red-600 p-1.5 rounded-xl hover:bg-red-50 transition opacity-0 group-hover:opacity-100"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {deck.description && (
                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {deck.description}
                      </p>
                    )}

                    {/* Chips & Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {deck.isPublic && (
                        <span className="chip-light text-[11px] px-2.5 py-0.5 rounded-lg font-bold inline-flex items-center gap-1 border border-indigo-200 bg-indigo-50/70 text-indigo-700">
                          <Globe className="w-3 h-3" /> 公共
                        </span>
                      )}
                      <span className="chip-light text-[11px] px-2.5 py-0.5 rounded-lg font-bold border border-slate-200 bg-white/70 text-slate-700">
                        {deck.wordCount} 個單字
                      </span>
                      {deck.articleCount > 0 && (
                        <span className="chip-light text-[11px] px-2.5 py-0.5 rounded-lg font-bold border border-emerald-200 bg-emerald-50/70 text-emerald-800">
                          克漏字故事
                        </span>
                      )}
                      {deck.quizCount > 0 && (
                        <span className="chip-light text-[11px] px-2.5 py-0.5 rounded-lg font-bold border border-amber-200 bg-amber-50/70 text-amber-800">
                          {deck.quizCount} 道測驗
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Mastery Progress Bar & Action */}
                  <div className="pt-5 border-t border-black/5 mt-4 space-y-2.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">
                        熟練度: <strong className="text-[#0a192f]">{deck.masteredCount}</strong> / {deck.wordCount}
                      </span>
                      <span className={`text-[11px] font-black px-2 py-0.5 rounded-md ${
                        isHighMastery
                          ? 'bg-emerald-100 text-emerald-800'
                          : isMediumMastery
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-slate-100 text-slate-600'
                      }`}>
                        {masteryPercent}%
                      </span>
                    </div>

                    {/* Mini Progress Line */}
                    <div className="w-full h-1.5 rounded-full bg-slate-200/80 overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${
                          isHighMastery ? 'bg-emerald-500' : isMediumMastery ? 'bg-amber-500' : 'bg-indigo-600'
                        }`}
                        style={{ width: `${Math.min(100, Math.max(4, masteryPercent))}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-end pt-1">
                      <span className="flex items-center gap-1 text-xs font-bold text-[#0a192f] group-hover:translate-x-1 transition transform">
                        開始學習 <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}