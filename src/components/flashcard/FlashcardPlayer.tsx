'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Volume2, RotateCw, ChevronLeft, ChevronRight, CheckCircle2, Shuffle, BookOpen } from 'lucide-react';
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
  const [isShuffled, setIsShuffled] = useState(false);

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

  // Keyboard navigation
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

  const handleShuffle = () => {
    const shuffled = [...words].sort(() => Math.random() - 0.5);
    setWords(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
    setIsShuffled(true);
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
  const masteredCount = words.filter(w => w.isMastered).length;

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Top Controls & Status */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-3">
          <span className="font-black text-[#0a192f]">
            Card {currentIndex + 1} / {words.length}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-white text-[#0a192f] border border-[#0a192f]">
            Mastered: {masteredCount}/{words.length}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleShuffle}
            title="Shuffle flashcards"
            className={`p-2 rounded-xl border-2 transition ${
              isShuffled
                ? 'bg-[#0a192f] border-[#0a192f] text-white'
                : 'bg-white border-[#0a192f] text-[#0a192f] hover:bg-slate-100'
            }`}
          >
            <Shuffle className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden border border-[#0a192f]/20">
        <div
          className="bg-[#0a192f] h-full transition-all duration-300 rounded-full"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* 3D Flip Card Container */}
      <div
        onClick={handleFlip}
        className="w-full h-96 perspective-1000 cursor-pointer select-none group"
      >
        <div
          className={`relative w-full h-full duration-500 transform-style-3d rounded-3xl shadow-md hover:shadow-lg transition-transform ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
        >
          {/* Card Front */}
          <div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl bg-white border-2 border-[#0a192f] p-8 flex flex-col justify-between">
            {/* Front Header */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-[#0a192f] bg-slate-100 px-3 py-1 rounded-lg border border-[#0a192f]/40 font-bold">
                Front • Flashcard
              </span>

              <button
                onClick={handleToggleMaster}
                title={currentWord.isMastered ? 'Marked as mastered' : 'Mark as mastered'}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition border ${
                  currentWord.isMastered
                    ? 'bg-emerald-100 text-emerald-800 border-emerald-600'
                    : 'bg-white text-slate-600 hover:text-emerald-700 border-[#0a192f]/30'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>{currentWord.isMastered ? 'Mastered' : 'Mark mastered'}</span>
              </button>
            </div>

            {/* Front Body */}
            <div className="text-center my-auto space-y-3">
              <h2 className="text-4xl sm:text-5xl font-black text-[#0a192f] tracking-tight">
                {currentWord.word}
              </h2>

              <div className="flex items-center justify-center gap-3">
                {currentWord.phonetic && (
                  <span className="text-sm font-mono text-[#0a192f] bg-slate-100 px-3 py-1 rounded-md border border-[#0a192f]/30 font-semibold">
                    {currentWord.phonetic}
                  </span>
                )}
                {currentWord.pos && (
                  <span className="text-xs italic text-[#0a192f] bg-blue-50 px-2.5 py-1 rounded-md border border-[#0a192f]/30 font-bold">
                    {currentWord.pos}
                  </span>
                )}

                <button
                  onClick={handlePlayAudio}
                  title="Listen to pronunciation (press A)"
                  className="p-2 rounded-full bg-slate-100 hover:bg-[#0a192f] text-[#0a192f] hover:text-white transition border border-[#0a192f]/40 shadow-sm"
                >
                  <Volume2 className={`w-4 h-4 ${isPlayingAudio ? 'animate-pulse' : ''}`} />
                </button>
              </div>
            </div>

            {/* Front Footer */}
            <div className="flex items-center justify-center text-xs text-slate-500 font-medium gap-1.5">
              <RotateCw className="w-3.5 h-3.5" />
              <span>Click or press Space to view the definition and example.</span>
            </div>
          </div>

          {/* Card Back */}
          <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-3xl bg-white border-2 border-[#0a192f] p-8 flex flex-col justify-between">
            {/* Back Header */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-white bg-[#0a192f] px-3 py-1 rounded-lg font-bold">
                Back • Definition & example
              </span>

              <button
                onClick={handleToggleMaster}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition border ${
                  currentWord.isMastered
                    ? 'bg-emerald-100 text-emerald-800 border-emerald-600'
                    : 'bg-white text-slate-600 hover:text-emerald-700 border-[#0a192f]/30'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>{currentWord.isMastered ? 'Mastered' : 'Mark mastered'}</span>
              </button>
            </div>

            {/* Back Content */}
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
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-[#0a192f]/30 space-y-1.5">
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

            {/* Back Footer */}
            <div className="flex items-center justify-center text-xs text-slate-500 font-medium gap-1.5">
              <RotateCw className="w-3.5 h-3.5" />
              <span>Click to flip back</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between pt-2">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white hover:bg-slate-100 disabled:opacity-30 text-[#0a192f] font-bold text-sm transition border-2 border-[#0a192f] shadow-sm"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Previous (←)</span>
        </button>

        <button
          onClick={handleFlip}
          className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white hover:bg-slate-100 text-[#0a192f] border-2 border-[#0a192f] font-bold text-sm transition shadow-sm"
        >
          <RotateCw className="w-4 h-4" />
          <span>Flip card (Space)</span>
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex === words.length - 1}
          className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#0a192f] hover:bg-[#132c5b] disabled:opacity-30 text-white font-bold text-sm transition border-2 border-[#0a192f] shadow-sm"
        >
          <span>Next (→)</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Keyboard guide tip */}
      <p className="text-center text-xs text-slate-500 font-medium">
        Keyboard shortcuts: [Space] flip • [←/→] change word • [A] pronunciation
      </p>
    </div>
  );
}
