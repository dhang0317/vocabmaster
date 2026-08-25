'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Globe, BookOpen, Layers, Pencil, Plus, Search, User } from 'lucide-react';

interface PublicDeck {
  id: string;
  title: string;
  description: string | null;
  publishedAt: string;
  wordCount: number;
  articleCount: number;
  quizCount: number;
  author: { name: string; image: string | null };
}

export default function ExplorePage() {
  const { status } = useSession();
  const router = useRouter();
  const [decks, setDecks] = useState<PublicDeck[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [addingId, setAddingId] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        setIsLoading(true);
        const res = await fetch('/api/decks/public');
        const data = await res.json();
        if (data.success) setDecks(data.decks || []);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, []);

  const handleAdd = async (deckId: string) => {
    if (status !== 'authenticated') {
      router.push('/login?callbackUrl=/explore');
      return;
    }
    setAddingId(deckId);
    setMessage(null);
    try {
      const res = await fetch(`/api/decks/${deckId}/clone`, { method: 'POST' });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to add deck');
      }
      setMessage(`Added “${data.deck.title}” to your Vocabulary.`);
      setTimeout(() => router.push(`/decks/${data.deck.id}`), 600);
    } catch (err: any) {
      setMessage(err.message || 'Failed to add deck');
    } finally {
      setAddingId(null);
    }
  };

  const filtered = decks.filter(
    d =>
      d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (d.description && d.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
      d.author.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="liquid-glass liquid-glass-hover rounded-3xl p-8 sm:p-10 space-y-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-white/40 border border-white/50 text-[#0a192f]">
            <Globe className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-[#0a192f] tracking-tight">
              Public library
            </h1>
            <p className="text-xs text-slate-600">
              Browse decks shared by the community. Add any deck to your own Vocabulary.
            </p>
          </div>
        </div>
      </div>

      {message && (
        <div className="liquid-glass px-4 py-3 rounded-2xl text-sm font-bold text-[#0a192f]">
          {message}
        </div>
      )}

      <div className="relative w-full sm:max-w-md">
        <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Search titles, descriptions, authors…"
          className="liquid-glass w-full pl-10 pr-4 py-2.5 rounded-xl text-sm text-[#0a192f] placeholder-slate-400 focus:outline-none font-medium"
        />
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-48 rounded-3xl liquid-glass animate-pulse" />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="liquid-glass p-12 text-center rounded-3xl space-y-2">
          <h3 className="text-lg font-bold text-[#0a192f]">No public decks yet</h3>
          <p className="text-xs text-slate-600 max-w-sm mx-auto">
            Be the first to share. Open one of your decks and turn on “Share to public library”.
          </p>
          <Link
            href="/"
            className="inline-block mt-3 text-xs font-bold text-[#0a192f] underline"
          >
            Back to my Vocabulary
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(deck => (
            <div
              key={deck.id}
              className="liquid-glass liquid-glass-hover rounded-3xl p-6 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <h3 className="font-extrabold text-lg text-[#0a192f] line-clamp-2">{deck.title}</h3>
                {deck.description && (
                  <p className="text-xs text-slate-600 line-clamp-2">{deck.description}</p>
                )}
                <div className="flex items-center gap-2 text-[11px] text-slate-500">
                  {deck.author.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={deck.author.image}
                      alt=""
                      className="w-5 h-5 rounded-full object-cover"
                    />
                  ) : (
                    <User className="w-4 h-4" />
                  )}
                  <span className="font-medium truncate">{deck.author.name}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[11px] px-2.5 py-1 rounded-lg bg-white/50 border border-white/40 font-bold text-[#0a192f] inline-flex items-center gap-1">
                    <BookOpen className="w-3 h-3" /> {deck.wordCount} words
                  </span>
                  {deck.articleCount > 0 && (
                    <span className="text-[11px] px-2.5 py-1 rounded-lg bg-white/50 border border-white/40 font-bold text-[#0a192f] inline-flex items-center gap-1">
                      <Layers className="w-3 h-3" /> Cloze
                    </span>
                  )}
                  {deck.quizCount > 0 && (
                    <span className="text-[11px] px-2.5 py-1 rounded-lg bg-white/50 border border-white/40 font-bold text-[#0a192f] inline-flex items-center gap-1">
                      <Pencil className="w-3 h-3" /> {deck.quizCount} quizzes
                    </span>
                  )}
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleAdd(deck.id)}
                disabled={addingId === deck.id}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0a192f] hover:bg-[#132c5b] disabled:opacity-50 text-white text-xs font-bold transition"
                style={{ color: '#ffffff' }}
              >
                <Plus className="w-4 h-4" />
                {addingId === deck.id ? 'Adding…' : 'Add to my Vocabulary'}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
