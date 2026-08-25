'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Volume2, RotateCw, ChevronLeft, ChevronRight, CheckCircle2, BookOpen } from 'lucide-react';
import { GeneratedWord } from '@/types';

interface FlashcardPlayerProps {
  words: GeneratedWord[];
  onToggleMastered?: (wordId: string, isMastered: boolean) => void;
}

export function FlashcardPlayer({ words: initialWords, onToggleMastered }: FlashcardPlayerProps) {
  const [words, setWords] = useState<GeneratedWord[]>(initialWords);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  useEffect(() => {
    setWords(initialWords);
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [initialWords]);

  const currentWord = words[currentIndex] || null;

  const handleNext = useCallback(() => {
    if (currentIndex < words.length - 1) {
      setIsFlipped(false);
      setCurrentIndex(prev => prev + 1);
    }
  }, [currentIndex, words.length]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setIsFlipped(false);
      setCurrentIndex(prev => prev - 1);
    }
  }, [currentIndex]);

  const handleFlip = useCallback(() => {
    setIsFlipped(prev => !prev);
  }, []);

  const handlePlayAudio = useCallback((e?: React.MouseEvent) => {
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
  }, [currentWord]);

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

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="w-full bg-white/30 h-2.5 rounded-full overflow-hidden border border-white/40">
        <div
          className="bg-[#0a192f] h-full transition-all duration-300 rounded-full"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div
        onClick={handleFlip}
        className="w-full h-96 perspective-1000 cursor-pointer select-none group"
      >
        <div
          className={`relative w-full h-full duration-500 transform-style-3d rounded-3xl ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
        >
          <div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl liquid-glass p-8 flex flex-col justify-between">
            <div className="flex items-center justify-end">
              <button
                onClick={handleToggleMaster}
                title={currentWord.isMastered ? 'Marked as mastered' : 'Mark as mastered'}
                className={`p-2 rounded-xl transition border ${
                  currentWord.isMastered
                    ? 'bg-emerald-100 text-emerald-800 border-emerald-600'
                    : 'bg-white/40 text-slate-600 hover:text-emerald-700 border-white/50'
                }`}
              >
                <CheckCircle2 className="w-5 h-5" />
              </button>
            </div>

            <div className="text-center my-auto space-y-3">
              <h2 className="text-4xl sm:text-5xl font-black text-[#0a192f] tracking-tight">
                {currentWord.word}
              </h2>

              <div className="flex items-center justify-center gap-3">
                {currentWord.phonetic && (
                  <span className="text-sm font-ipa text-[#0a192f] bg-white/40 px-3 py-1 rounded-md border border-white/50 font-semibold">
                    {currentWord.phonetic}
                  </span>
                )}
                {currentWord.pos && (
                  <span className="text-xs italic text-[#0a192f] bg-white/40 px-2.5 py-1 rounded-md border border-white/50 font-bold">
                    {currentWord.pos}
                  </span>
                )}

                <button
                  onClick={handlePlayAudio}
                  title="Listen to pronunciation (press A)"
                  className="p-2 rounded-full bg-white/40 hover:bg-white/60 text-black transition border border-white/50"
                >
                  <Volume2 className={`w-4 h-4 ${isPlayingAudio ? 'animate-pulse' : ''}`} />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center text-xs text-slate-500 font-medium gap-1.5">
              <RotateCw className="w-3.5 h-3.5" />
              <span>Click or press Space to view the definition and example.</span>
            </div>
          </div>

          <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-3xl liquid-glass p-8 flex flex-col justify-between">
            <div className="flex items-center justify-end">
              <button
                onClick={handleToggleMaster}
                className={`p-2 rounded-xl transition border ${
                  currentWord.isMastered
                    ? 'bg-emerald-100 text-emerald-800 border-emerald-600'
                    : 'bg-white/40 text-slate-600 hover:text-emerald-700 border-white/50'
                }`}
              >
                <CheckCircle2 className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 my-auto overflow-y-auto max-h-56 pr-1">
              <div>
                <span className="text-2xl font-black text-[#0a192f] block mb-1">
                  {currentWord.translation}
                </span>
                {currentWord.definition && (
                  <p className="text-sm text-slate-600 italic">
                    {currentWord.definition}
                  </p>
                )}
              </div>

              {currentWord.example && (
                <div className="p-3.5 rounded-2xl bg-white/30 border border-white/40 space-y-1.5">
                  <p className="text-sm text-[#0a192f] leading-relaxed font-semibold">
                    "{currentWord.example}"
                  </p>
                  {currentWord.exampleZh && (
                    <p className="text-xs text-slate-600">
                      {currentWord.exampleZh}
                    </p>
                  )}
                </div>
              )}
            </div>

            <div className="flex items-center justify-center text-xs text-slate-500 font-medium gap-1.5">
              <RotateCw className="w-3.5 h-3.5" />
              <span>Click to flip back</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="liquid-glass liquid-glass-hover flex items-center gap-2 px-5 py-3 rounded-2xl disabled:opacity-30 text-[#0a192f] font-bold text-sm"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Previous (←)</span>
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex === words.length - 1}
          className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#0a192f] hover:bg-[#132c5b] disabled:opacity-30 text-white font-bold text-sm transition"
        >
          <span>Next (→)</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
