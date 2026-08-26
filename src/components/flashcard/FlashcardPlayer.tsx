'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Volume2, CheckCircle2, BookOpen } from 'lucide-react';
import { GeneratedWord } from '@/types';

const SWIPE_THRESHOLD = 56;
const SWIPE_MAX_DRAG = 140;

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
      <div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl liquid-glass p-5 sm:p-8 flex flex-col shadow-xl">
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

        <div className="text-center my-auto space-y-3 px-1">
          <h2 className="text-3xl sm:text-5xl font-black text-[#0a192f] tracking-tight break-words">
            {word.word}
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
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

        <p className="text-center text-[11px] text-slate-500 font-medium pt-2">點擊卡片翻面</p>
      </div>
    );
  }

  const hasTranslation = Boolean(word.translation && word.translation.trim());
  const hasDefinition = Boolean(word.definition && word.definition.trim());
  const hasExample = Boolean(word.example && word.example.trim());
  const hasAnyContent = hasTranslation || hasDefinition || hasExample;

  return (
    <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-3xl liquid-glass p-5 sm:p-8 flex flex-col shadow-xl">
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-bold text-slate-500 truncate">{word.word}</span>
        <button
          onClick={onToggleMaster}
          className={`p-2 rounded-xl transition border shrink-0 ${
            word.isMastered
              ? 'bg-emerald-100 text-emerald-800 border-emerald-600'
              : 'bg-white/40 text-slate-600 hover:text-emerald-700 border-white/50'
          }`}
        >
          <CheckCircle2 className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-3 sm:space-y-4 my-auto overflow-y-auto max-h-[18rem] sm:max-h-64 pr-1">
        {hasAnyContent ? (
          <>
            <div>
              {hasTranslation ? (
                <span className="text-xl sm:text-2xl font-black text-[#0a192f] block mb-1">
                  {word.translation}
                </span>
              ) : (
                <span className="text-sm font-bold text-slate-400 block mb-1">（尚無中文翻譯）</span>
              )}
              {hasDefinition && (
                <p className="text-sm text-slate-600 italic">{word.definition}</p>
              )}
            </div>

            {hasExample && (
              <div className="p-3 sm:p-3.5 rounded-2xl bg-white/30 border border-white/40 space-y-1.5">
                <p className="text-sm text-[#0a192f] leading-relaxed font-semibold">
                  &ldquo;{word.example}&rdquo;
                </p>
                {word.exampleZh && (
                  <p className="text-xs text-slate-600">{word.exampleZh}</p>
                )}
              </div>
            )}
          </>
        ) : (
          <div className="text-center space-y-2 py-4">
            <p className="text-lg font-black text-[#0a192f]">{word.word}</p>
            {word.pos && (
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">{word.pos}</p>
            )}
            <p className="text-sm text-slate-500 leading-relaxed px-2">
              此單字尚未有翻譯或例句。請在建立牌組時填入中文，或重新產生內容。
            </p>
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
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const pointerStart = useRef<{ x: number; y: number; id: number } | null>(null);
  const didSwipe = useRef(false);
  const navigating = useRef(false);

  useEffect(() => {
    setWords(initialWords);
    setCurrentIndex(0);
    setIsFlipped(false);
    setSlideDir(null);
    setDragX(0);
    setIsDragging(false);
    pointerStart.current = null;
    didSwipe.current = false;
    navigating.current = false;
  }, [initialWords]);

  const currentWord = words[currentIndex] || null;
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < words.length - 1;

  const handleNext = useCallback(() => {
    if (navigating.current || currentIndex >= words.length - 1) return;
    navigating.current = true;
    setSlideDir('left');
    setIsFlipped(false);
    setDragX(0);
    window.setTimeout(() => {
      setCurrentIndex(prev => prev + 1);
      setSlideDir(null);
      navigating.current = false;
    }, 180);
  }, [currentIndex, words.length]);

  const handlePrev = useCallback(() => {
    if (navigating.current || currentIndex <= 0) return;
    navigating.current = true;
    setSlideDir('right');
    setIsFlipped(false);
    setDragX(0);
    window.setTimeout(() => {
      setCurrentIndex(prev => prev - 1);
      setSlideDir(null);
      navigating.current = false;
    }, 180);
  }, [currentIndex]);

  const handleFlip = useCallback(() => {
    if (didSwipe.current) return;
    setIsFlipped(prev => !prev);
  }, []);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    const target = e.target as HTMLElement;
    if (target.closest('button, a, input, textarea')) return;

    pointerStart.current = { x: e.clientX, y: e.clientY, id: e.pointerId };
    didSwipe.current = false;
    setIsDragging(true);
    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {
      /* ignore */
    }
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!pointerStart.current || pointerStart.current.id !== e.pointerId) return;

    const dx = e.clientX - pointerStart.current.x;
    const dy = e.clientY - pointerStart.current.y;

    if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 24) {
      return;
    }

    const clamped = Math.max(-SWIPE_MAX_DRAG, Math.min(SWIPE_MAX_DRAG, dx));
    setDragX(clamped);

    if (Math.abs(dx) > 12) {
      didSwipe.current = true;
    }
  }, []);

  const finishPointer = useCallback(
    (e: React.PointerEvent) => {
      if (!pointerStart.current || pointerStart.current.id !== e.pointerId) return;

      const dx = e.clientX - pointerStart.current.x;
      const dy = e.clientY - pointerStart.current.y;
      pointerStart.current = null;
      setIsDragging(false);

      const horizontal = Math.abs(dx) >= Math.abs(dy);
      if (horizontal && Math.abs(dx) >= SWIPE_THRESHOLD) {
        didSwipe.current = true;
        if (dx < 0) {
          handleNext();
        } else {
          handlePrev();
        }
      } else {
        setDragX(0);
      }

      window.setTimeout(() => {
        didSwipe.current = false;
        if (!navigating.current) setDragX(0);
      }, 40);
    },
    [handleNext, handlePrev]
  );

  const onPointerUp = finishPointer;
  const onPointerCancel = useCallback(
    (e: React.PointerEvent) => {
      pointerStart.current = null;
      setIsDragging(false);
      setDragX(0);
      didSwipe.current = false;
      try {
        (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
      } catch {
        /* ignore */
      }
    },
    []
  );

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

  const dragRotate = isDragging ? dragX * 0.04 : 0;
  const mainTransform =
    slideDir === 'left'
      ? 'translateX(-28%) rotate(-4deg) scale(0.94)'
      : slideDir === 'right'
        ? 'translateX(28%) rotate(4deg) scale(0.94)'
        : isDragging
          ? `translateX(${dragX}px) rotate(${dragRotate}deg) scale(1)`
          : 'translateX(0) rotate(0) scale(1)';

  return (
    <div className="max-w-2xl mx-auto space-y-4 sm:space-y-6 px-1">
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

      {/* Stacked deck — side peeks only on sm+ to avoid mobile layout breakage */}
      <div
        className="relative w-full h-[22rem] sm:h-96 select-none touch-pan-y"
        style={{ touchAction: 'pan-y' }}
      >
        <div
          aria-hidden
          className="absolute inset-x-6 sm:inset-x-8 inset-y-4 rounded-3xl liquid-glass opacity-40"
          style={{ transform: 'translateY(14px) scale(0.92)', zIndex: 0 }}
        />
        <div
          aria-hidden
          className="absolute inset-x-4 sm:inset-x-5 inset-y-2 rounded-3xl liquid-glass opacity-55"
          style={{ transform: 'translateY(8px) scale(0.96)', zIndex: 1 }}
        />

        {/* Previous peek — desktop only (3D breaks on many mobile browsers) */}
        {hasPrev && (
          <button
            type="button"
            onClick={handlePrev}
            aria-label="上一張"
            title="上一張"
            className="hidden sm:block absolute left-0 top-3 bottom-3 w-[18%] rounded-2xl liquid-glass border border-white/40 shadow-md overflow-hidden transition hover:brightness-105"
            style={{
              zIndex: 2,
              transform: 'perspective(900px) rotateY(18deg) translateX(-6%) scale(0.94)',
              transformOrigin: 'right center',
            }}
          />
        )}

        {hasNext && (
          <button
            type="button"
            onClick={handleNext}
            aria-label="下一張"
            title="下一張"
            className="hidden sm:block absolute right-0 top-3 bottom-3 w-[18%] rounded-2xl liquid-glass border border-white/40 shadow-md overflow-hidden transition hover:brightness-105"
            style={{
              zIndex: 2,
              transform: 'perspective(900px) rotateY(-18deg) translateX(6%) scale(0.94)',
              transformOrigin: 'left center',
            }}
          />
        )}

        {/* Current card */}
        <div
          className="absolute inset-x-3 sm:inset-x-[16%] top-0 bottom-0 perspective-1000 cursor-grab active:cursor-grabbing"
          style={{
            zIndex: 5,
            transform: mainTransform,
            opacity: slideDir ? 0.85 : isDragging ? 0.92 : 1,
            transition: isDragging
              ? 'none'
              : 'transform 180ms ease, opacity 180ms ease',
            touchAction: 'pan-y',
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerCancel}
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

      {/* Mobile prev/next buttons (replace hidden 3D peeks) */}
      <div className="flex sm:hidden items-center justify-between gap-3">
        <button
          type="button"
          onClick={handlePrev}
          disabled={!hasPrev}
          className="flex-1 py-2.5 rounded-xl liquid-glass border border-white/40 text-sm font-bold text-[#0a192f] disabled:opacity-30"
        >
          ← 上一張
        </button>
        <button
          type="button"
          onClick={handleNext}
          disabled={!hasNext}
          className="flex-1 py-2.5 rounded-xl liquid-glass border border-white/40 text-sm font-bold text-[#0a192f] disabled:opacity-30"
        >
          下一張 →
        </button>
      </div>

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
