'use client';

import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import confetti from 'canvas-confetti';
import {
  CheckCircle2,
  XCircle,
  RotateCcw,
  ArrowRight,
  HelpCircle,
  BookOpen,
  Clock,
  Languages,
  X,
  Loader2,
} from 'lucide-react';
import { GeneratedQuiz, GeneratedWord } from '@/types';

interface QuizRunnerProps {
  quizzes: GeneratedQuiz[];
  words: GeneratedWord[];
  deckId?: string;
}

interface TranslatePopup {
  text: string;
  translated: string | null;
  loading: boolean;
  error: string | null;
  x: number;
  y: number;
  placeAbove: boolean;
}

function cleanOptionLabel(raw: string): string {
  return raw.replace(/^\s*[A-Da-d][).:\-]\s*/, '').trim();
}

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

function LetterBadge({ letter }: { letter: string }) {
  return (
    <span
      className="inline-flex w-7 h-7 rounded-xl items-center justify-center text-xs font-mono font-bold shrink-0"
      style={{
        backgroundColor: '#0a192f',
        color: '#ffffff',
        border: '1px solid #0a192f',
        // Beat dark-mode inheritance
        WebkitTextFillColor: '#ffffff',
      }}
    >
      <span style={{ color: '#ffffff', WebkitTextFillColor: '#ffffff' }}>{letter}</span>
    </span>
  );
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
  const [popup, setPopup] = useState<TranslatePopup | null>(null);

  const questionRef = useRef<HTMLHeadingElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const translateAbortRef = useRef<AbortController | null>(null);

  const wordMap = useMemo(() => {
    const m = new Map<string, string>();
    for (const w of words) {
      if (w.word && w.translation) m.set(w.word.trim().toLowerCase(), w.translation);
    }
    return m;
  }, [words]);

  useEffect(() => {
    setQuizzes(sanitizedInitial);
    setCurrentIndex(0);
    setSelectedAnswers({});
    setShowExplanation(false);
    setIsFinished(false);
    setSeconds(0);
    setPopup(null);
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

  const closePopup = useCallback(() => {
    if (translateAbortRef.current) {
      translateAbortRef.current.abort();
      translateAbortRef.current = null;
    }
    setPopup(null);
  }, []);

  useEffect(() => {
    if (!popup) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closePopup();
    };
    const onMouseDown = (e: MouseEvent) => {
      const target = e.target as Node;
      if (popupRef.current?.contains(target)) return;
      if (questionRef.current?.contains(target)) return;
      closePopup();
    };
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onMouseDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onMouseDown);
    };
  }, [popup, closePopup]);

  const fetchTranslation = useCallback(async (text: string, x: number, y: number, placeAbove: boolean) => {
    // Local word list first
    const local = wordMap.get(text.trim().toLowerCase());
    if (local) {
      setPopup({
        text,
        translated: local,
        loading: false,
        error: null,
        x,
        y,
        placeAbove,
      });
      return;
    }

    if (translateAbortRef.current) translateAbortRef.current.abort();
    const controller = new AbortController();
    translateAbortRef.current = controller;

    setPopup({
      text,
      translated: null,
      loading: true,
      error: null,
      x,
      y,
      placeAbove,
    });

    try {
      const res = await fetch('/api/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, target: 'zh-TW' }),
        signal: controller.signal,
      });
      const data = await res.json();
      if (controller.signal.aborted) return;
      if (!res.ok || !data.success) {
        setPopup(prev =>
          prev ? { ...prev, loading: false, error: data.error || '翻譯失敗' } : null
        );
        return;
      }
      setPopup(prev =>
        prev ? { ...prev, loading: false, translated: data.translated, error: null } : null
      );
    } catch (err: unknown) {
      if (err instanceof DOMException && err.name === 'AbortError') return;
      setPopup(prev =>
        prev
          ? { ...prev, loading: false, error: err instanceof Error ? err.message : '翻譯失敗' }
          : null
      );
    } finally {
      if (translateAbortRef.current === controller) translateAbortRef.current = null;
    }
  }, [wordMap]);

  const handleQuestionMouseUp = useCallback(() => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed || !questionRef.current) return;

    const text = selection.toString().trim();
    if (!text || text.length < 1 || text.length > 120) return;

    const anchorNode = selection.anchorNode;
    if (!anchorNode || !questionRef.current.contains(anchorNode)) return;

    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const spaceAbove = rect.top;
    const spaceBelow = window.innerHeight - rect.bottom;
    const placeAbove = spaceAbove >= 110 || spaceAbove >= spaceBelow;
    const y = placeAbove ? rect.top - 6 : rect.bottom + 6;

    fetchTranslation(text, x, y, placeAbove);
  }, [fetchTranslation]);

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
    setPopup(null);
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
    setPopup(null);
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

  const translatePopupNode = popup && (
    <div
      ref={popupRef}
      className="fixed z-[100] pointer-events-auto"
      style={{
        left: Math.min(Math.max(popup.x, 160), (typeof window !== 'undefined' ? window.innerWidth : 320) - 160),
        top: popup.y,
        transform: popup.placeAbove ? 'translate(-50%, -100%)' : 'translate(-50%, 0)',
      }}
    >
      <div className="flex flex-col items-center">
        {!popup.placeAbove && (
          <div
            className="w-2.5 h-2.5 rotate-45 mb-[-5px] bg-white/50 border-l border-t border-white/50"
            style={{ backdropFilter: 'blur(8px)' }}
          />
        )}
        <div className="liquid-glass liquid-glass-menu rounded-2xl shadow-xl border border-white/50 min-w-[180px] max-w-[300px] px-3.5 py-3">
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-500">
              <Languages className="w-3 h-3 shrink-0" />
              <span>翻譯</span>
            </div>
            <button
              type="button"
              onClick={closePopup}
              className="p-0.5 rounded-lg text-slate-400 hover:text-[#0a192f] hover:bg-white/40 transition shrink-0"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-xs font-bold text-[#0a192f] break-words leading-snug">{popup.text}</p>
          {popup.loading && (
            <div className="flex items-center gap-1.5 text-xs text-slate-500 py-1.5">
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
              <span>查詢中…</span>
            </div>
          )}
          {popup.error && <p className="text-xs text-red-600 font-medium py-0.5">{popup.error}</p>}
          {popup.translated && !popup.loading && (
            <div className="border-t border-black/10 pt-1.5 mt-1.5">
              <p className="text-sm font-bold text-[#0a192f] font-cjk leading-relaxed break-words">
                {popup.translated}
              </p>
            </div>
          )}
        </div>
        {popup.placeAbove && (
          <div
            className="w-2.5 h-2.5 rotate-45 mt-[-5px] bg-white/50 border-r border-b border-white/50"
            style={{ backdropFilter: 'blur(8px)' }}
          />
        )}
      </div>
    </div>
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
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#0a192f] hover:bg-[#132c5b] font-bold text-sm shadow-md transition transform hover:-translate-y-0.5"
              style={{ color: '#ffffff' }}
            >
              <RotateCcw className="w-4 h-4" style={{ color: '#ffffff' }} />
              <span>Retake original quiz</span>
            </button>
            <button
              onClick={handleNewQuizRestart}
              disabled={isRegenerating}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#0a192f] hover:bg-[#132c5b] disabled:opacity-60 font-bold text-sm shadow-md transition transform hover:-translate-y-0.5"
              style={{ color: '#ffffff' }}
            >
              <RotateCcw className="w-4 h-4" style={{ color: '#ffffff' }} />
              <span>{isRegenerating ? 'Generating new quiz...' : 'Retake shuffled quiz'}</span>
            </button>
          </div>
        </div>

        <div className="space-y-4">
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

                    // Always white card + black text; border shows correctness
                    const borderStyle = isRightOption
                      ? '2px solid #059669'
                      : isUserChoice
                      ? '2px solid #ef4444'
                      : '2px solid rgba(10,25,47,0.2)';

                    return (
                      <div
                        key={optIdx}
                        className="px-3.5 py-2 rounded-xl text-xs font-bold flex items-center justify-between gap-2"
                        style={{
                          backgroundColor: '#ffffff',
                          color: '#000000',
                          border: borderStyle,
                        }}
                      >
                        <span className="flex items-center gap-2 min-w-0">
                          <LetterBadge letter={String.fromCharCode(65 + optIdx)} />
                          <span style={{ color: '#000000' }}>{opt}</span>
                        </span>
                        {isRightOption && (
                          <span className="text-[10px] font-black shrink-0" style={{ color: '#000000' }}>
                            Correct
                          </span>
                        )}
                        {isUserChoice && !isRightOption && (
                          <span className="text-[10px] font-black shrink-0" style={{ color: '#000000' }}>
                            Your choice
                          </span>
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
        <h3
          ref={questionRef}
          onMouseUp={handleQuestionMouseUp}
          className="text-lg sm:text-xl font-bold text-[#0a192f] leading-relaxed pt-2 select-text cursor-text"
          title="反白單字可查看中文翻譯"
        >
          {currentQ.question}
        </h3>
        <p className="text-[11px] text-slate-500 -mt-3">反白題幹單字可查看中文翻譯</p>

        <div className="space-y-3 pt-2">
          {currentQ.options.map((opt, optIdx) => {
            const isSelected = currentSelected === optIdx;
            const isCorrect = optIdx === currentQ.correctIdx;

            let bg = '#ffffff';
            let border = '2px solid #0a192f';
            if (hasAnswered) {
              if (isCorrect) {
                bg = '#d1fae5';
                border = '2px solid #059669';
              } else if (isSelected) {
                bg = '#fee2e2';
                border = '2px solid #ef4444';
              } else {
                bg = '#ffffff';
                border = '2px solid rgba(10,25,47,0.35)';
              }
            }

            return (
              <button
                key={optIdx}
                onClick={() => handleSelectOption(optIdx)}
                disabled={hasAnswered}
                className="w-full p-4 rounded-2xl text-left font-bold text-sm sm:text-base flex items-center justify-between transition"
                style={{ backgroundColor: bg, border, color: '#000000' }}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <LetterBadge letter={String.fromCharCode(65 + optIdx)} />
                  <span style={{ color: '#000000' }}>{opt}</span>
                </div>

                {hasAnswered && isCorrect && <CheckCircle2 className="w-5 h-5 shrink-0" style={{ color: '#000000' }} />}
                {hasAnswered && isSelected && !isCorrect && (
                  <XCircle className="w-5 h-5 shrink-0" style={{ color: '#000000' }} />
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
            className="flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-[#0a192f] hover:bg-[#132c5b] font-bold text-sm shadow-md transition transform hover:-translate-y-0.5"
            style={{ color: '#ffffff' }}
          >
            <span>{currentIndex === quizzes.length - 1 ? 'View results' : 'Next question'}</span>
            <ArrowRight className="w-4 h-4" style={{ color: '#ffffff' }} />
          </button>
        </div>
      )}

      {translatePopupNode}
    </div>
  );
}
