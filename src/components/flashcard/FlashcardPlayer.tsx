'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Volume2, CheckCircle2, BookOpen } from 'lucide-react';
import { GeneratedWord } from '@/types';

interface FlashcardPlayerProps {
  words: GeneratedWord[];
  onToggleMastered?: (wordId: string, isMastered: boolean) => void;
}

function CardFace({
  word,
  side,
  isPlayingAudio,
  onToggleMaster,
  onPlayAudio,
}: {
  word: GeneratedWord;
  side: 'front' | 'back';
  isPlayingAudio: boolean;
  onToggleMaster: (e: React.MouseEvent) => void;
  onPlayAudio: (e?: React.MouseEvent) => void;
}) {
  if (side === 'front') {
    return (
      <div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl liquid-glass p-8 flex flex-col shadow-xl">
        <div className="flex items-center justify-end">
          <button
            onClick={onToggleMaster}
            title={word.isMastered ? 'Marked as mastered' : 'Mark as mastered'}
            className={`p-2 rounded-xl transition border ${
              word.isMastered
                ? 'bg-emerald-100 text-emerald-800 border-emerald-600'
                : 'bg-white/40 text-slate-600 hover:text-emerald-700 border-white/50'
            }`}
          >
            <CheckCircle2 className="w-5 h-5" />
          </button>
        </div>

        <div className="text-center my-auto space-y-3">
          <h2 className="text-4xl sm:text-5xl font-black text-[#0a192f] tracking-tight">
            {word.word}
          </h2>

          <div className="flex items-center justify-center gap-3">
            {word.phonetic && (
              <span className="text-sm font-ipa text-[#0a192f] bg-white/40 px-3 py-1 rounded-md border border-white/50 font-semibold">
                {word.phonetic}
              </span>
            )}
            {word.pos && (
              <span className="text-xs italic text-[#0a192f] bg-white/40 px-2.5 py-1 rounded-md border border-white/50 font-bold">
                {word.pos}
              </span>
            )}

            <button
              onClick={onPlayAudio}
              title="Listen to pronunciation (press A)"
              className="p-2 rounded-full bg-white/40 hover:bg-white/60 text-black transition border border-white/50"
            >
              <Volume2 className={`w-4 h-4 ${isPlayingAudio ? 'animate-pulse' : ''}`} />
            </button>
          </div>
        </div>

        <p className="text-center text-[11px] text-slate-500 font-medium mt-auto">
          點卡片翻面 · 點兩側書頁換字
        </p>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-3xl liquid-glass p-8 flex flex-col shadow-xl">
      <div className="flex items-center justify-end">
        <button
          onClick={onToggleMaster}
          className={`p-2 rounded-xl transition border ${
            word.isMastered
              ? 'bg-emerald-100 text-emerald-800 border-emerald-600'
              : 'bg-white/40 text-slate-600 hover:text-emerald-700 border-white/50'
          }`}
        >
          <CheckCircle2 className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-4 my-auto overflow-y-auto max-h-64 pr-1">
        <div>
          <span className="text-2xl font-black text-[#0a192f] block mb-1">
            {word.translation}
          </span>
          {word.definition && (
            <p className="text-sm text-slate-600 italic">{word.definition}</p>
          )}
        </div>

        {word.example && (
          <div className="p-3.5 rounded-2xl bg-white/30 border border-white/40 space-y-1.5">
            <p className="text-sm text-[#0a192f] leading-relaxed font-semibold">
              &ldquo;{word.example}&rdquo;
            </p>
            {word.exampleZh && (
              <p className="text-xs text-slate-600">{word.exampleZh}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export function FlashcardPlayer({ words: initialWords, onToggleMastered }: FlashcardPlayerProps) {
  const [words, setWords] = useState<GeneratedWord[]>(initialWords);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [slideDir, setSlideDir] = useState<'left' | 'right' | null>(null);

  useEffect(() => {
    setWords(initialWords);
    setCurrentIndex(0);
    setIsFlipped(false);
    setSlideDir(null);
  }, [initialWords]);

  const currentWord = words[currentIndex] || null;
  const prevWord = currentIndex > 0 ? words[currentIndex - 1] : null;
  const nextWord = currentIndex < words.length - 1 ? words[currentIndex + 1] : null;

  const handleNext = useCallback(() => {
    if (currentIndex >= words.length - 1) return;
    setSlideDir('left');
    setIsFlipped(false);
    window.setTimeout(() => {
      setCurrentIndex(prev => prev + 1);
      setSlideDir(null);
    }, 180);
  }, [currentIndex, words.length]);

  const handlePrev = useCallback(() => {
    if (currentIndex <= 0) return;
    setSlideDir('right');
    setIsFlipped(false);
    window.setTimeout(() => {
      setCurrentIndex(prev => prev - 1);
      setSlideDir(null);
    }, 180);
  }, [currentIndex]);

  const handleFlip = useCallback(() => {
    setIsFlipped(prev => !prev);
  }, []);

  const handlePlayAudio = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      if (!currentWord || typeof window === 'undefined' || !('speechSynthesis' in window)) return;

      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(currentWord.word);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;

      setIsPlayingAudio(true);
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);

      window.speechSynthesis.speak(utterance);
    },
    [currentWord]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.code === 'Space') {
        e.preventDefault();
        handleFlip();
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key.toLowerCase() === 'a') {
        e.preventDefault();
        handlePlayAudio();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleFlip, handleNext, handlePrev, handlePlayAudio]);

  const handleToggleMaster = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!currentWord) return;
    const newStatus = !currentWord.isMastered;
    const updated = [...words];
    updated[currentIndex] = { ...currentWord, isMastered: newStatus };
    setWords(updated);

    if (currentWord.id && onToggleMastered) {
      onToggleMastered(currentWord.id, newStatus);
    }
  };

  if (!currentWord) {
    return (
      <div className="text-center py-16 text-slate-500">
        <BookOpen className="w-12 h-12 mx-auto mb-3 opacity-40 text-[#0a192f]" />
        <p className="font-bold">This deck has no flashcards.</p>
      </div>
    );
  }

  const progressPercent = Math.round(((currentIndex + 1) / words.length) * 100);

  const mainTransform =
    slideDir === 'left'
      ? 'translateX(-28%) rotate(-4deg) scale(0.94)'
      : slideDir === 'right'
        ? 'translateX(28%) rotate(4deg) scale(0.94)'
        : 'translateX(0) rotate(0) scale(1)';

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center justify-between gap-3">
        <div className="flex-1 bg-white/30 h-2.5 rounded-full overflow-hidden border border-white/40">
          <div
            className="bg-[#0a192f] h-full transition-all duration-300 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <span className="text-xs font-bold text-[#0a192f] tabular-nums shrink-0">
          {currentIndex + 1} / {words.length}
        </span>
      </div>

      {/* Stacked book-page deck */}
      <div className="relative w-full h-[26rem] sm:h-96 select-none">
        {/* Deep stack layers (decorative) */}
        <div
          aria-hidden
          className="absolute inset-x-8 inset-y-4 rounded-3xl liquid-glass opacity-40"
          style={{ transform: 'translateY(14px) scale(0.92)', zIndex: 0 }}
        />
        <div
          aria-hidden
          className="absolute inset-x-5 inset-y-2 rounded-3xl liquid-glass opacity-55"
          style={{ transform: 'translateY(8px) scale(0.96)', zIndex: 1 }}
        />

        {/* Previous page (left peek) */}
        {prevWord && (
          <button
            type="button"
            onClick={handlePrev}
            title="上一張"
            className="absolute left-0 top-3 bottom-3 w-[22%] sm:w-[18%] rounded-2xl liquid-glass border border-white/40 shadow-md overflow-hidden group/prev transition hover:brightness-105"
            style={{
              zIndex: 2,
              transform: 'perspective(900px) rotateY(18deg) translateX(-6%) scale(0.94)',
              transformOrigin: 'right center',
            }}
          >
            <div className="h-full w-full flex flex-col items-center justify-center px-2 bg-gradient-to-r from-white/10 to-transparent">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                Prev
              </span>
              <span className="text-sm sm:text-base font-black text-[#0a192f] truncate max-w-full">
                {prevWord.word}
              </span>
              <span className="mt-2 text-[10px] text-slate-500 opacity-0 group-hover/prev:opacity-100 transition">
                點擊上一張
              </span>
            </div>
          </button>
        )}

        {/* Next page (right peek) */}
        {nextWord && (
          <button
            type="button"
            onClick={handleNext}
            title="下一張"
            className="absolute right-0 top-3 bottom-3 w-[22%] sm:w-[18%] rounded-2xl liquid-glass border border-white/40 shadow-md overflow-hidden group/next transition hover:brightness-105"
            style={{
              zIndex: 2,
              transform: 'perspective(900px) rotateY(-18deg) translateX(6%) scale(0.94)',
              transformOrigin: 'left center',
            }}
          >
            <div className="h-full w-full flex flex-col items-center justify-center px-2 bg-gradient-to-l from-white/10 to-transparent">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                Next
              </span>
              <span className="text-sm sm:text-base font-black text-[#0a192f] truncate max-w-full">
                {nextWord.word}
              </span>
              <span className="mt-2 text-[10px] text-slate-500 opacity-0 group-hover/next:opacity-100 transition">
                點擊下一張
              </span>
            </div>
          </button>
        )}

        {/* Current card (center, flippable) */}
        <div
          className="absolute inset-x-[14%] sm:inset-x-[16%] top-0 bottom-0 perspective-1000 cursor-pointer"
          style={{
            zIndex: 5,
            transform: mainTransform,
            opacity: slideDir ? 0.85 : 1,
            transition: 'transform 180ms ease, opacity 180ms ease',
          }}
          onClick={handleFlip}
        >
          <div
            className={`relative w-full h-full duration-500 transform-style-3d rounded-3xl ${
              isFlipped ? 'rotate-y-180' : ''
            }`}
          >
            <CardFace
              word={currentWord}
              side="front"
              isPlayingAudio={isPlayingAudio}
              onToggleMaster={handleToggleMaster}
              onPlayAudio={handlePlayAudio}
            />
            <CardFace
              word={currentWord}
              side="back"
              isPlayingAudio={isPlayingAudio}
              onToggleMaster={handleToggleMaster}
              onPlayAudio={handlePlayAudio}
            />
          </div>
        </div>
      </div>

      {/* Compact progress dots (optional navigation) */}
      {words.length <= 24 && (
        <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
          {words.map((w, i) => (
            <button
              key={w.id || `${w.word}-${i}`}
              type="button"
              onClick={() => {
                if (i === currentIndex) return;
                setIsFlipped(false);
                setCurrentIndex(i);
              }}
              title={w.word}
              className={`h-2 rounded-full transition-all ${
                i === currentIndex
                  ? 'w-6 bg-[#0a192f]'
                  : 'w-2 bg-[#0a192f]/25 hover:bg-[#0a192f]/45'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
