'use client';

import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { BookOpen, Check, HelpCircle, Eye, EyeOff, RotateCcw, Award } from 'lucide-react';
import { GeneratedCloze, GeneratedWord } from '@/types';

interface ClozeExerciseProps {
  article: GeneratedCloze;
  words: GeneratedWord[];
}

export function ClozeExercise({ article: initialArticle, words }: ClozeExerciseProps) {
  const [article, setArticle] = useState<GeneratedCloze>(initialArticle);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [activeBlankId, setActiveBlankId] = useState<number | null>(null);
  const [showHints, setShowHints] = useState<Record<number, boolean>>({});
  const [showChinese, setShowChinese] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [score, setScore] = useState<{ correct: number; total: number } | null>(null);
  const [isRegenerating, setIsRegenerating] = useState(false);

  useEffect(() => {
    setUserAnswers({});
    setActiveBlankId(article.blanks?.[0]?.id || null);
    setShowHints({});
    setShowChinese(false);
    setIsChecked(false);
    setScore(null);
  }, [article]);

  const handleSelectWordFromBank = (word: string) => {
    if (activeBlankId === null) return;
    setUserAnswers(prev => ({ ...prev, [activeBlankId]: word }));

    // Auto-advance to next blank
    const blankIds = article.blanks.map(b => b.id);
    const currIdx = blankIds.indexOf(activeBlankId);
    if (currIdx !== -1 && currIdx < blankIds.length - 1) {
      setActiveBlankId(blankIds[currIdx + 1]);
    }
  };

  const handleInputChange = (blankId: number, val: string) => {
    setUserAnswers(prev => ({ ...prev, [blankId]: val }));
  };

  const handleToggleHint = (blankId: number) => {
    setShowHints(prev => ({ ...prev, [blankId]: !prev[blankId] }));
  };

  const handleCheckAnswers = () => {
    let correctCount = 0;
    article.blanks.forEach(blank => {
      const ans = (userAnswers[blank.id] || '').trim().toLowerCase();
      if (ans === blank.word.trim().toLowerCase()) {
        correctCount++;
      }
    });

    const total = article.blanks.length;
    setScore({ correct: correctCount, total });
    setIsChecked(true);

    if (correctCount === total && total > 0) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  };

  const handleReset = () => {
    setUserAnswers({});
    setActiveBlankId(article.blanks?.[0]?.id || null);
    setIsChecked(false);
    setScore(null);
  };

  const handleNewArticleRestart = async () => {
    setIsRegenerating(true);
    try {
      const apiKey = typeof window !== 'undefined' ? localStorage.getItem('gemini_api_key') || '' : '';
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          words: words.map(word => ({
            word: word.word,
            pos: word.pos,
            translation: word.translation,
            phonetic: word.phonetic,
            definition: word.definition,
            example: word.example,
            exampleZh: word.exampleZh,
          })),
          level: 'highschool',
          apiKey,
        }),
      });
      const result = await response.json();
      if (!response.ok || !result.success || !result.data?.article) {
        throw new Error(result.error || result.data?.fallbackReason || 'Unable to generate a new article.');
      }
      setArticle(result.data.article);
      setUserAnswers({});
      setIsChecked(false);
      setScore(null);
    } catch (error) {
      console.error('Failed to generate a new article', error);
      window.alert(error instanceof Error ? error.message : 'Unable to generate a new article.');
    } finally {
      setIsRegenerating(false);
    }
  };

  // Render article text by replacing [blank_X] with input/interactive slot
  const renderStoryWithBlanks = () => {
    const parts = article.content.split(/(\[blank_\d+\])/g);

    return parts.map((part, index) => {
      const match = part.match(/\[blank_(\d+)\]/);
      if (match) {
        const blankId = parseInt(match[1], 10);
        const blankData = article.blanks.find(b => b.id === blankId);
        const userVal = userAnswers[blankId] || '';
        const isCorrect = isChecked && blankData && userVal.trim().toLowerCase() === blankData.word.trim().toLowerCase();
        const isWrong = isChecked && blankData && userVal.trim().toLowerCase() !== blankData.word.trim().toLowerCase();
        const isActive = activeBlankId === blankId;

        return (
          <span key={index} className="inline-block mx-1 my-1">
            <span
              onClick={() => setActiveBlankId(blankId)}
              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-xl border-2 font-bold text-sm transition ${
                isCorrect
                  ? 'bg-emerald-100 border-emerald-600 text-emerald-900'
                  : isWrong
                  ? 'bg-red-100 border-red-500 text-red-900'
                  : isActive
                  ? 'bg-blue-50 border-[#0a192f] text-[#0a192f] ring-2 ring-[#0a192f]/20'
                  : 'bg-white border-[#0a192f]/40 text-[#0a192f] hover:border-[#0a192f]'
              }`}
            >
              <span className="text-[11px] font-mono text-slate-500">({blankId})</span>
              <input
                type="text"
                value={userVal}
                onFocus={() => setActiveBlankId(blankId)}
                onChange={(e) => handleInputChange(blankId, e.target.value)}
                placeholder="____"
                disabled={isChecked}
                className="bg-transparent border-none outline-none text-center font-bold text-sm text-[#0a192f] placeholder-slate-400 w-24"
              />
              {blankData && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleToggleHint(blankId);
                  }}
                  title="Show/hide hint"
                  className="text-slate-400 hover:text-[#0a192f] p-0.5 rounded"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                </button>
              )}
            </span>

            {/* Hint popover */}
            {showHints[blankId] && blankData && (
              <span className="block text-[11px] text-[#0a192f] bg-amber-50 border border-amber-300 rounded px-1.5 py-0.5 mt-0.5 font-medium">
                💡 {blankData.hint}
              </span>
            )}

            {/* If wrong, show correction */}
            {isWrong && blankData && (
              <span className="block text-[11px] text-emerald-800 font-bold mt-0.5">
                ✓ Correct: {blankData.word}
              </span>
            )}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  const wordBank = Array.from(new Set(article.blanks.map(b => b.word)));

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#0a192f]/10 pb-4">
        <div>
          <h3 className="text-xl font-black text-[#0a192f] flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#0a192f]" />
            {article.title || 'Context cloze exercise'}
          </h3>
          <p className="text-xs text-slate-600">
            Choose or type the correct word from the word bank for each blank.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowChinese(!showChinese)}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-100 text-xs font-bold text-[#0a192f] border-2 border-[#0a192f] transition shadow-sm"
          >
            {showChinese ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            <span>{showChinese ? '隱藏中文對照' : '顯示中文對照'}</span>
          </button>

          {isChecked && (
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-100 text-xs font-bold text-[#0a192f] border-2 border-[#0a192f] transition shadow-sm"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Try again</span>
            </button>
          )}
        </div>
      </div>

      {/* Word Bank Chips */}
      {!isChecked && (
        <div className="p-4 rounded-2xl bg-white border-2 border-[#0a192f] space-y-2 shadow-sm">
          <div className="flex items-center justify-between text-xs text-slate-600">
            <span className="font-bold text-[#0a192f]">
              Word Bank - click a word to fill the active blank:
            </span>
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            {wordBank.map((word, idx) => {
              const isUsed = Object.values(userAnswers).includes(word);
              return (
                <button
                  key={idx}
                  onClick={() => handleSelectWordFromBank(word)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition border-2 ${
                    isUsed
                      ? 'bg-slate-100 text-slate-400 line-through border-slate-300'
                      : 'bg-[#0a192f] hover:bg-[#132c5b] !text-white border-[#0a192f] hover:scale-105 shadow-sm'
                  }`}
                >
                  {word}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Score Banner if Checked */}
      {score && (
        <div className="p-5 rounded-2xl bg-white border-2 border-[#0a192f] flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-slate-100 rounded-xl text-[#0a192f] border border-[#0a192f]">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg font-black text-[#0a192f]">
                Score: {score.correct} / {score.total} correct
              </h4>
              <p className="text-xs text-slate-600 font-medium">
                Accuracy: {Math.round((score.correct / score.total) * 100)}%
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={handleReset}
              className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 !text-[#0a192f] text-xs font-bold shadow-sm transition border-2 border-[#0a192f]"
            >
              Retake original quiz
            </button>
            <button
              onClick={handleNewArticleRestart}
              disabled={isRegenerating}
              className="px-4 py-2.5 rounded-xl bg-[#0a192f] hover:bg-[#132c5b] disabled:opacity-60 !text-white text-xs font-bold shadow-sm transition border border-[#0a192f]"
            >
              {isRegenerating ? 'Generating...' : 'Retake shuffled quiz'}
            </button>
          </div>
        </div>
      )}

      {/* Story Content Box */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#0a192f] shadow-sm space-y-6">
        <div className="text-[#0a192f] text-base sm:text-lg leading-loose font-normal">
          {renderStoryWithBlanks()}
        </div>

        {/* Chinese Translation */}
        {showChinese && article.contentZh && (
          <div className="pt-6 border-t-2 border-[#0a192f]/10 space-y-2 animate-in fade-in duration-300">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#0a192f]">
              Full translation
            </h5>
            <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-[#0a192f]/20">
              {article.contentZh}
            </p>
          </div>
        )}
      </div>

      {/* Submit Button */}
      {!isChecked && (
        <div className="flex justify-end">
          <button
            onClick={handleCheckAnswers}
            className="flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-[#0a192f] hover:bg-[#132c5b] text-white font-bold text-sm shadow-md transition transform hover:-translate-y-0.5 border border-[#0a192f]"
          >
            <Check className="w-4 h-4" />
              <span>Check answers and score</span>
          </button>
        </div>
      )}
    </div>
  );
}
