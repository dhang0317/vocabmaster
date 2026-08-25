'use client';

import React, { useState, useEffect, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle2, XCircle, RotateCcw, ArrowRight, HelpCircle, BookOpen, Clock } from 'lucide-react';
import { GeneratedQuiz, GeneratedWord } from '@/types';

interface QuizRunnerProps {
  quizzes: GeneratedQuiz[];
  words: GeneratedWord[];
  deckId?: string;
}

function cleanOptionLabel(raw: string): string {
  return raw.replace(/^\s*[A-Da-d][).:\-]\s*/, '').trim();
}

/** Rewrite flat "meaning match" stems into context-style prompts. */
function rewriteMeaningQuestion(quiz: GeneratedQuiz): GeneratedQuiz {
  const isMeaning =
    /which word best matches this meaning|select the word that means|is best expressed by which word/i.test(
      quiz.question
    );
  if (!isMeaning) return quiz;

  const meaningMatch = quiz.question.match(/["「]([^"」]+)["」]/);
  const meaning =
    meaningMatch?.[1] ||
    quiz.questionZh?.match(/「([^」]+)」/)?.[1] ||
    quiz.targetWord;

  return {
    ...quiz,
    question: `Choose the word that best fits this context: a plan or idea related to "${meaning}".`,
    questionZh: quiz.questionZh?.includes('_____')
      ? quiz.questionZh
      : `請選出最符合「${meaning}」這個概念的單字。`,
  };
}

function sanitizeQuizOptions(quiz: GeneratedQuiz): GeneratedQuiz {
  const rewritten = rewriteMeaningQuestion(quiz);
  const cleaned = rewritten.options.map(cleanOptionLabel).filter(Boolean);
  const correctRaw = cleaned[rewritten.correctIdx] ?? cleanOptionLabel(rewritten.targetWord);
  const correctKey = correctRaw.toLowerCase();

  const unique: string[] = [];
  for (const opt of cleaned) {
    const key = opt.toLowerCase();
    if (unique.some(u => u.toLowerCase() === key)) continue;
    unique.push(opt);
  }

  if (!unique.some(u => u.toLowerCase() === correctKey)) {
    unique.unshift(correctRaw);
  }

  while (unique.length < 4) {
    unique.push(`option${unique.length + 1}`);
  }

  const options = unique.slice(0, 4);
  const correctIdx = Math.max(
    0,
    options.findIndex(o => o.toLowerCase() === correctKey)
  );

  return { ...rewritten, options, correctIdx };
}

export function QuizRunner({ quizzes: initialQuizzes, words, deckId }: QuizRunnerProps) {
  const sanitizedInitial = useMemo(
    () => initialQuizzes.map(sanitizeQuizOptions),
    [initialQuizzes]
  );

  const [quizzes, setQuizzes] = useState<GeneratedQuiz[]>(sanitizedInitial);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [isRegenerating, setIsRegenerating] = useState(false);
  const [optionTranslations, setOptionTranslations] = useState<Record<string, string>>({});
  const [isTranslatingOptions, setIsTranslatingOptions] = useState(false);

  useEffect(() => {
    setQuizzes(sanitizedInitial);
    setCurrentIndex(0);
    setSelectedAnswers({});
    setShowExplanation(false);
    setIsFinished(false);
    setSeconds(0);
  }, [sanitizedInitial]);

  useEffect(() => {
    let cancelled = false;
    const normalize = (value: string) => value.trim().toLowerCase();

    const knownTranslations = new Set(
      words.filter(word => word.translation?.trim()).map(word => normalize(word.word))
    );

    const currentOptions = Array.from(
      new Set(
        quizzes
          .flatMap(quiz => quiz.options)
          .map(option => option.trim())
          .filter(Boolean)
      )
    );
    const currentOptionKeys = new Set(currentOptions.map(normalize));

    setOptionTranslations(prev =>
      Object.fromEntries(Object.entries(prev).filter(([key]) => currentOptionKeys.has(key)))
    );

    const missing = currentOptions.filter(option => !knownTranslations.has(normalize(option)));
    if (missing.length === 0) {
      setIsTranslatingOptions(false);
      return () => {
        cancelled = true;
      };
    }

    const translateMissingOptions = async () => {
      const apiKey = typeof window !== 'undefined' ? localStorage.getItem('gemini_api_key') || '' : '';
      if (!apiKey.trim()) {
        setIsTranslatingOptions(false);
        return;
      }
      setIsTranslatingOptions(true);
      try {
        const response = await fetch('/api/generate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'translate',
            words: missing.map(word => ({ word })),
            apiKey,
          }),
        });
        const result = await response.json();
        if (!cancelled && response.ok && result.success) {
          const normalizedTranslations = Object.fromEntries(
            Object.entries(result.translations || {}).map(([word, translation]) => [
              normalize(word),
              String(translation),
            ])
          );
          setOptionTranslations(prev => ({ ...prev, ...normalizedTranslations }));
        }
      } catch (error) {
        if (!cancelled) console.warn('Failed to translate quiz options', error);
      } finally {
        if (!cancelled) setIsTranslatingOptions(false);
      }
    };

    translateMissingOptions();
    return () => {
      cancelled = true;
    };
  }, [quizzes, words]);

  useEffect(() => {
    if (isFinished) return;
    const interval = setInterval(() => setSeconds(prev => prev + 1), 1000);
    return () => clearInterval(interval);
  }, [isFinished]);

  const currentQ = quizzes[currentIndex] || null;
  const currentSelected = currentQ ? selectedAnswers[currentIndex] : undefined;
  const hasAnswered = currentSelected !== undefined;

  const handleSelectOption = (optIdx: number) => {
    if (hasAnswered) return;
    setSelectedAnswers(prev => ({ ...prev, [currentIndex]: optIdx }));
    setShowExplanation(true);
  };

  const handleNext = () => {
    setShowExplanation(false);
    if (currentIndex < quizzes.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = async () => {
    setIsFinished(true);

    let score = 0;
    const answersRecord = quizzes.map((q, idx) => {
      const chosen = selectedAnswers[idx];
      const isCorrect = chosen === q.correctIdx;
      if (isCorrect) score++;
      return {
        question: q.question,
        targetWord: q.targetWord,
        chosenIdx: chosen,
        correctIdx: q.correctIdx,
        isCorrect,
      };
    });

    if (score / quizzes.length >= 0.8 && quizzes.length > 0) {
      confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
    }

    if (deckId) {
      try {
        await fetch('/api/quiz', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            deckId,
            score,
            total: quizzes.length,
            answers: answersRecord,
          }),
        });
      } catch (err) {
        console.error('Failed to save quiz result', err);
      }
    }
  };

  const resetQuiz = (nextQuizzes: GeneratedQuiz[] = quizzes) => {
    setQuizzes(nextQuizzes.map(sanitizeQuizOptions));
    setSelectedAnswers({});
    setCurrentIndex(0);
    setShowExplanation(false);
    setIsFinished(false);
    setSeconds(0);
  };

  const handleOldQuizRestart = () => resetQuiz(quizzes);
  const handleNewQuizRestart = async () => {
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
      if (!response.ok || !result.success || !result.data?.quizzes?.length) {
        throw new Error(result.error || result.data?.fallbackReason || 'Unable to generate a new quiz.');
      }
      resetQuiz(result.data.quizzes);
    } catch (error) {
      console.error('Failed to generate a new quiz', error);
      window.alert(error instanceof Error ? error.message : 'Unable to generate a new quiz.');
    } finally {
      setIsRegenerating(false);
    }
  };

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getOtherOptionTranslations = (quiz: GeneratedQuiz) =>
    quiz.options
      .map((option, index) => {
        if (index === quiz.correctIdx) return null;
        const word = words.find(item => item.word.trim().toLowerCase() === option.trim().toLowerCase());
        return `${option}：${word?.translation || optionTranslations[option.trim().toLowerCase()] || (isTranslatingOptions ? '翻譯中...' : '中文翻譯未提供')}`;
      })
      .filter(Boolean)
      .join('；');

  if (!currentQ && !isFinished) {
    return (
      <div className="text-center py-16 text-slate-500">
        <BookOpen className="w-12 h-12 mx-auto mb-3 opacity-40 text-[#0a192f]" />
        <p className="font-bold">This deck has no quiz questions.</p>
      </div>
    );
  }

  let correctCount = 0;
  quizzes.forEach((q, idx) => {
    if (selectedAnswers[idx] === q.correctIdx) correctCount++;
  });
  const scorePercent = Math.round((correctCount / quizzes.length) * 100);

  // Force white letter on black badge (survives dark-mode overrides)
  const letterBadge = (letter: string) => (
    <span
      className="w-7 h-7 rounded-xl flex items-center justify-center text-xs font-mono font-bold shrink-0 border border-[#0a192f]"
      style={{ backgroundColor: '#0a192f', color: '#ffffff' }}
    >
      {letter}
    </span>
  );

  if (isFinished) {
    return (
      <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in duration-300">
        <div className="liquid-glass liquid-glass-hover rounded-3xl p-8 text-center space-y-4">
          <div>
            <h3 className="text-3xl font-black text-[#0a192f]">Quiz complete!</h3>
            <p className="text-sm text-slate-600 mt-1 font-medium">Time: {formatTime(seconds)}</p>
          </div>

          <div className="flex items-center justify-center gap-6 py-4">
            <div className="text-center">
              <span className="text-4xl font-black text-[#0a192f]">
                {correctCount} / {quizzes.length}
              </span>
              <p className="text-xs text-slate-600 mt-1 font-bold">Correct answers</p>
            </div>
            <div className="h-10 w-0.5 bg-black/10" />
            <div className="text-center">
              <span className="text-4xl font-black text-[#1e3a8a]">{scorePercent}%</span>
              <p className="text-xs text-slate-600 mt-1 font-bold">Accuracy</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleOldQuizRestart}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#0a192f] hover:bg-[#132c5b] text-white font-bold text-sm shadow-md transition transform hover:-translate-y-0.5"
              style={{ color: '#ffffff' }}
            >
              <RotateCcw className="w-4 h-4" style={{ color: '#ffffff' }} />
              <span>Retake original quiz</span>
            </button>
            <button
              onClick={handleNewQuizRestart}
              disabled={isRegenerating}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#0a192f] hover:bg-[#132c5b] disabled:opacity-60 text-white font-bold text-sm shadow-md transition transform hover:-translate-y-0.5"
              style={{ color: '#ffffff' }}
            >
              <RotateCcw className="w-4 h-4" style={{ color: '#ffffff' }} />
              <span>{isRegenerating ? 'Generating new quiz...' : 'Retake shuffled quiz'}</span>
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {/* Align title with card inner text (p-6), not outer border */}
          <h4 className="text-lg font-black text-[#0a192f] px-6">Review & explanations</h4>

          {quizzes.map((q, idx) => {
            const userChosen = selectedAnswers[idx];
            const isCorrect = userChosen === q.correctIdx;

            return (
              <div
                key={idx}
                className={`liquid-glass liquid-glass-hover rounded-3xl p-6 space-y-3 ${
                  isCorrect ? '' : 'ring-2 ring-red-400/60'
                }`}
              >
                <div className="flex items-start justify-end gap-3">
                  {isCorrect ? (
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full border border-emerald-600">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Correct
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-red-800 bg-red-100 px-2.5 py-1 rounded-full border border-red-500">
                      <XCircle className="w-3.5 h-3.5" /> Incorrect
                    </span>
                  )}
                </div>

                <p className="text-base font-bold text-[#0a192f]">{q.question}</p>
                {q.questionZh && (
                  <p className="text-xs text-slate-600 border-l-2 border-[#0a192f]/30 pl-2">{q.questionZh}</p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {q.options.map((opt, optIdx) => {
                    const isRightOption = optIdx === q.correctIdx;
                    const isUserChoice = optIdx === userChosen;

                    return (
                      <div
                        key={optIdx}
                        className={`px-3.5 py-2 rounded-xl text-xs font-bold border-2 flex items-center justify-between gap-2 ${
                          isRightOption
                            ? 'bg-emerald-100 border-emerald-600'
                            : isUserChoice
                            ? 'bg-red-100 border-red-500'
                            : 'bg-white/80 border-[#0a192f]/20'
                        }`}
                      >
                        <span className="flex items-center gap-2 min-w-0">
                          {letterBadge(String.fromCharCode(65 + optIdx))}
                          <span className="text-black truncate">{opt}</span>
                        </span>
                        {isRightOption && <span className="text-[10px] font-black text-black shrink-0">Correct</span>}
                        {isUserChoice && !isRightOption && (
                          <span className="text-[10px] font-black text-black shrink-0">Your choice</span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {q.explanation && (
                  <div className="mt-3 p-3.5 bg-white/60 rounded-xl border border-[#0a192f]/15 text-xs text-[#0a192f] leading-relaxed">
                    <strong className="text-[#0a192f]">Explanation:</strong> {q.explanation}
                    <br />
                    <strong className="text-[#0a192f]">選項翻譯：</strong> {getOtherOptionTranslations(q)}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center justify-between text-sm">
        <span className="font-black text-[#0a192f]">
          Question {currentIndex + 1} / {quizzes.length}
        </span>
        <div className="flex items-center gap-1.5 text-xs text-[#0a192f] font-mono font-bold liquid-glass px-3 py-1.5 rounded-xl">
          <Clock className="w-3.5 h-3.5" />
          <span>{formatTime(seconds)}</span>
        </div>
      </div>

      <div className="w-full bg-black/10 h-2.5 rounded-full overflow-hidden">
        <div
          className="bg-[#0a192f] h-full transition-all duration-300 rounded-full"
          style={{ width: `${Math.round(((currentIndex + 1) / quizzes.length) * 100)}%` }}
        />
      </div>

      <div className="liquid-glass liquid-glass-hover p-6 sm:p-8 rounded-3xl space-y-6">
        <h3 className="text-lg sm:text-xl font-bold text-[#0a192f] leading-relaxed pt-2">
          {currentQ.question}
        </h3>

        <div className="space-y-3 pt-2">
          {currentQ.options.map((opt, optIdx) => {
            const isSelected = currentSelected === optIdx;
            const isCorrect = optIdx === currentQ.correctIdx;

            let optionStyle = 'bg-white/90 border-[#0a192f] text-black hover:bg-white';

            if (hasAnswered) {
              if (isCorrect) {
                optionStyle = 'bg-emerald-100 border-emerald-600 text-black ring-2 ring-emerald-600/30';
              } else if (isSelected) {
                optionStyle = 'bg-red-100 border-red-500 text-black ring-2 ring-red-500/30';
              } else {
                optionStyle = 'bg-white/90 border-[#0a192f]/40 text-black';
              }
            }

            return (
              <button
                key={optIdx}
                onClick={() => handleSelectOption(optIdx)}
                disabled={hasAnswered}
                className={`w-full p-4 rounded-2xl border-2 text-left font-bold text-sm sm:text-base flex items-center justify-between transition ${optionStyle}`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  {letterBadge(String.fromCharCode(65 + optIdx))}
                  <span className="text-black truncate">{opt}</span>
                </div>

                {hasAnswered && isCorrect && <CheckCircle2 className="w-5 h-5 text-black shrink-0" />}
                {hasAnswered && isSelected && !isCorrect && (
                  <XCircle className="w-5 h-5 text-black shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {showExplanation && (
          <div className="p-5 rounded-2xl bg-white/60 border border-[#0a192f]/20 space-y-3 animate-in fade-in duration-200">
            <div className="flex items-center gap-2 text-xs font-black text-[#0a192f]">
              <HelpCircle className="w-4 h-4" />
              <span>Translation & explanation</span>
            </div>

            {currentQ.questionZh && (
              <div className="p-3 rounded-xl bg-white border border-[#0a192f]/15 text-xs sm:text-sm text-[#0a192f] font-medium leading-relaxed">
                <span className="font-bold text-[#0a192f]">Translation:</span> {currentQ.questionZh}
              </div>
            )}

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              <strong className="text-[#0a192f]">Explanation:</strong> {currentQ.explanation}
              <br />
              <strong className="text-[#0a192f]">選項翻譯：</strong> {getOtherOptionTranslations(currentQ)}
            </p>
          </div>
        )}
      </div>

      {hasAnswered && (
        <div className="flex justify-end">
          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-[#0a192f] hover:bg-[#132c5b] text-white font-bold text-sm shadow-md transition transform hover:-translate-y-0.5"
            style={{ color: '#ffffff' }}
          >
            <span>{currentIndex === quizzes.length - 1 ? 'View results' : 'Next question'}</span>
            <ArrowRight className="w-4 h-4" style={{ color: '#ffffff' }} />
          </button>
        </div>
      )}
    </div>
  );
}
