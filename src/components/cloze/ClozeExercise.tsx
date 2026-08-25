'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { BookOpen, Check, HelpCircle, Eye, EyeOff, Award, Languages, X, Loader2 } from 'lucide-react';
import { GeneratedCloze, GeneratedWord } from '@/types';

interface ClozeExerciseProps {
  article: GeneratedCloze;
  words: GeneratedWord[];
}

interface TranslatePopup {
  text: string;
  translated: string | null;
  sense: string | null;
  contextZh: string | null;
  loading: boolean;
  error: string | null;
  x: number;
  y: number;
  placeAbove: boolean;
}

/** Restore blank markers to plain text for context extraction */
function articlePlainText(content: string, blanks: GeneratedCloze['blanks']): string {
  return content.replace(/\[blank_(\d+)\]/g, (_, idStr: string) => {
    const id = parseInt(idStr, 10);
    const blank = blanks.find(b => b.id === id);
    return blank?.word || '____';
  });
}

/** Extract the sentence (or nearby window) containing `selected` within `fullText`. */
function extractContext(fullText: string, selected: string): string {
  const hay = fullText;
  const needle = selected.trim();
  if (!needle) return '';

  // Case-insensitive locate
  const lowerHay = hay.toLowerCase();
  const lowerNeedle = needle.toLowerCase();
  let idx = lowerHay.indexOf(lowerNeedle);
  if (idx === -1) {
    // fallback: first word of selection
    const first = needle.split(/\s+/)[0];
    idx = lowerHay.indexOf(first.toLowerCase());
  }
  if (idx === -1) {
    // last resort: a window is not available
    return needle;
  }

  // Expand to sentence boundaries . ! ? or newlines
  const breakChars = /[.!?\n\u3002\uff01\uff1f]/;
  let start = idx;
  while (start > 0 && !breakChars.test(hay[start - 1])) start--;
  let end = idx + needle.length;
  while (end < hay.length && !breakChars.test(hay[end])) end++;
  if (end < hay.length && breakChars.test(hay[end])) end++;

  let sentence = hay.slice(start, end).trim();

  // Cap length
  if (sentence.length > 280) {
    const center = idx - start + Math.floor(needle.length / 2);
    const half = 120;
    const s = Math.max(0, center - half);
    const e = Math.min(sentence.length, center + half);
    sentence = (s > 0 ? '…' : '') + sentence.slice(s, e).trim() + (e < sentence.length ? '…' : '');
  }

  return sentence || needle;
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
  const [popup, setPopup] = useState<TranslatePopup | null>(null);

  const articleRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const translateAbortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    setUserAnswers({});
    setActiveBlankId(article.blanks?.[0]?.id || null);
    setShowHints({});
    setShowChinese(false);
    setIsChecked(false);
    setScore(null);
    setPopup(null);
  }, [article]);

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
      if (articleRef.current?.contains(target)) return;
      closePopup();
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onMouseDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onMouseDown);
    };
  }, [popup, closePopup]);

  useEffect(() => {
    if (!popup || !popupRef.current) return;

    const el = popupRef.current;
    const rect = el.getBoundingClientRect();
    const pad = 8;
    let dx = 0;
    let dy = 0;

    if (rect.left < pad) dx = pad - rect.left;
    if (rect.right > window.innerWidth - pad) dx = window.innerWidth - pad - rect.right;
    if (rect.top < pad) dy = pad - rect.top;
    if (rect.bottom > window.innerHeight - pad) dy = window.innerHeight - pad - rect.bottom;

    if (dx !== 0 || dy !== 0) {
      el.style.transform = `translate(calc(-50% + ${dx}px), ${popup.placeAbove ? `calc(-100% + ${dy}px)` : `${dy}px`})`;
    }
  }, [popup]);

  const fetchTranslation = useCallback(
    async (text: string, context: string, x: number, y: number, placeAbove: boolean) => {
      if (translateAbortRef.current) {
        translateAbortRef.current.abort();
      }
      const controller = new AbortController();
      translateAbortRef.current = controller;

      setPopup({
        text,
        translated: null,
        sense: null,
        contextZh: null,
        loading: true,
        error: null,
        x,
        y,
        placeAbove,
      });

      try {
        const apiKey =
          typeof window !== 'undefined' ? localStorage.getItem('gemini_api_key') || '' : '';

        const res = await fetch('/api/translate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            text,
            context,
            target: 'zh-TW',
            apiKey: apiKey || undefined,
          }),
          signal: controller.signal,
        });
        const data = await res.json();

        if (controller.signal.aborted) return;

        if (!res.ok || !data.success) {
          setPopup(prev =>
            prev
              ? {
                  ...prev,
                  loading: false,
                  error: data.error || '翻譯失敗',
                }
              : null
          );
          return;
        }

        setPopup(prev =>
          prev
            ? {
                ...prev,
                loading: false,
                translated: data.translated,
                sense: data.sense || null,
                contextZh: data.contextZh || null,
                error: null,
              }
            : null
        );
      } catch (err: unknown) {
        if (err instanceof DOMException && err.name === 'AbortError') return;
        setPopup(prev =>
          prev
            ? {
                ...prev,
                loading: false,
                error: err instanceof Error ? err.message : '翻譯失敗',
              }
            : null
        );
      } finally {
        if (translateAbortRef.current === controller) {
          translateAbortRef.current = null;
        }
      }
    },
    []
  );

  const handleArticleMouseUp = useCallback(() => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed || !articleRef.current) {
      return;
    }

    const text = selection.toString().trim();
    if (!text || text.length < 1 || text.length > 200) {
      return;
    }

    const anchorNode = selection.anchorNode;
    if (!anchorNode || !articleRef.current.contains(anchorNode)) {
      return;
    }

    const anchorEl =
      anchorNode.nodeType === Node.ELEMENT_NODE
        ? (anchorNode as Element)
        : anchorNode.parentElement;
    if (anchorEl?.closest('input, button, textarea')) {
      return;
    }

    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();

    const x = rect.left + rect.width / 2;
    const spaceAbove = rect.top;
    const spaceBelow = window.innerHeight - rect.bottom;
    const placeAbove = spaceAbove >= 110 || spaceAbove >= spaceBelow;
    const y = placeAbove ? rect.top - 6 : rect.bottom + 6;

    const plain = articlePlainText(article.content, article.blanks);
    const context = extractContext(plain, text);

    fetchTranslation(text, context, x, y, placeAbove);
  }, [article.content, article.blanks, fetchTranslation]);

  const handleSelectWordFromBank = (word: string) => {
    if (activeBlankId === null) return;
    setUserAnswers(prev => ({ ...prev, [activeBlankId]: word }));

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
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
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

  const renderStoryWithBlanks = () => {
    const parts = article.content.split(/(\[blank_\d+\])/g);

    return parts.map((part, index) => {
      const match = part.match(/\[blank_(\d+)\]/);
      if (match) {
        const blankId = parseInt(match[1], 10);
        const blankData = article.blanks.find(b => b.id === blankId);
        const userVal = userAnswers[blankId] || '';
        const isCorrect =
          isChecked &&
          blankData &&
          userVal.trim().toLowerCase() === blankData.word.trim().toLowerCase();
        const isWrong =
          isChecked &&
          blankData &&
          userVal.trim().toLowerCase() !== blankData.word.trim().toLowerCase();
        const isActive = activeBlankId === blankId;

        return (
          <span key={index} className="inline-block mx-1 my-1">
            <span
              onClick={() => setActiveBlankId(blankId)}
              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-xl border font-bold text-sm transition ${
                isCorrect
                  ? 'bg-emerald-100 border-emerald-600 !text-black'
                  : isWrong
                  ? 'bg-red-100 border-red-500 !text-black'
                  : isActive
                  ? 'bg-white/50 border-white/80 !text-black ring-2 ring-[#0a192f]/15'
                  : 'bg-white/30 border-white/50 !text-black hover:bg-white/45'
              }`}
            >
              <span className="text-[11px] font-mono !text-black/50">({blankId})</span>
              <input
                type="text"
                value={userVal}
                onFocus={() => setActiveBlankId(blankId)}
                onChange={e => handleInputChange(blankId, e.target.value)}
                placeholder="____"
                disabled={isChecked}
                className="bg-transparent border-none outline-none text-center font-bold text-sm !text-black placeholder-slate-400 w-24"
              />
              {blankData && (
                <button
                  type="button"
                  onClick={e => {
                    e.stopPropagation();
                    handleToggleHint(blankId);
                  }}
                  title="Show/hide hint"
                  className="!text-black/40 hover:!text-black p-0.5 rounded"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                </button>
              )}
            </span>

            {showHints[blankId] && blankData && (
              <span className="block text-[11px] !text-black bg-amber-50 border border-amber-300 rounded px-1.5 py-0.5 mt-0.5 font-medium">
                💡 {blankData.hint}
              </span>
            )}

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
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/10 pb-4">
        <div>
          <h3 className="text-xl font-black text-[#0a192f] flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#0a192f]" />
            {article.title || 'Context cloze exercise'}
          </h3>
          <p className="text-xs text-slate-600">
            Choose or type the correct word from the word bank for each blank.
            <span className="ml-1 text-slate-500">· 反白文章單字可查語境翻譯</span>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowChinese(!showChinese)}
            className="liquid-glass liquid-glass-hover flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-[#0a192f]"
          >
            {showChinese ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            <span>{showChinese ? 'Hide translation' : 'Show translation'}</span>
          </button>
        </div>
      </div>

      {!isChecked && (
        <div className="liquid-glass p-4 rounded-2xl space-y-2">
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
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition border ${
                    isUsed
                      ? 'bg-white/20 text-slate-400 line-through border-white/30'
                      : 'bg-[#0a192f] hover:bg-[#132c5b] !text-white border-[#0a192f] hover:scale-105'
                  }`}
                >
                  {word}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {score && (
        <div className="liquid-glass p-5 rounded-2xl flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white/40 rounded-xl text-[#0a192f] border border-white/50">
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
              className="liquid-glass liquid-glass-hover px-4 py-2.5 rounded-xl !text-[#0a192f] text-xs font-bold"
            >
              Retake original quiz
            </button>
            <button
              onClick={handleNewArticleRestart}
              disabled={isRegenerating}
              className="px-4 py-2.5 rounded-xl bg-[#0a192f] hover:bg-[#132c5b] disabled:opacity-60 !text-white text-xs font-bold transition"
            >
              {isRegenerating ? 'Generating...' : 'Retake shuffled quiz'}
            </button>
          </div>
        </div>
      )}

      <div className="liquid-glass p-6 sm:p-8 rounded-3xl space-y-6 relative">
        <div
          ref={articleRef}
          onMouseUp={handleArticleMouseUp}
          className="text-[#0a192f] text-base sm:text-lg leading-loose font-normal select-text cursor-text"
        >
          {renderStoryWithBlanks()}
        </div>

        {showChinese && article.contentZh && (
          <div className="pt-6 border-t border-black/10 space-y-2 animate-in fade-in duration-300">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#0a192f]">
              Full translation
            </h5>
            <p className="text-sm text-slate-700 leading-relaxed bg-white/30 p-4 rounded-2xl border border-white/40">
              {article.contentZh}
            </p>
          </div>
        )}
      </div>

      {!isChecked && (
        <div className="flex justify-end">
          <button
            onClick={handleCheckAnswers}
            className="flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-[#0a192f] hover:bg-[#132c5b] text-white font-bold text-sm shadow-md transition transform hover:-translate-y-0.5"
          >
            <Check className="w-4 h-4" />
            <span>Check answers and score</span>
          </button>
        </div>
      )}

      {popup && (
        <div
          ref={popupRef}
          className="fixed z-[100] pointer-events-auto"
          style={{
            left: Math.min(Math.max(popup.x, 160), window.innerWidth - 160),
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

            <div className="liquid-glass liquid-glass-menu rounded-2xl shadow-xl border border-white/50 min-w-[200px] max-w-[320px] px-3.5 py-3">
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  <Languages className="w-3 h-3 shrink-0" />
                  <span>語境翻譯</span>
                </div>
                <button
                  type="button"
                  onClick={closePopup}
                  className="p-0.5 rounded-lg text-slate-400 hover:text-[#0a192f] hover:bg-white/40 transition shrink-0"
                  title="關閉"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              <p className="text-xs font-bold text-[#0a192f] break-words leading-snug">
                {popup.text}
              </p>

              {popup.loading && (
                <div className="flex items-center gap-1.5 text-xs text-slate-500 py-1.5">
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>依語境翻譯中…</span>
                </div>
              )}

              {popup.error && (
                <p className="text-xs text-red-600 font-medium py-0.5">{popup.error}</p>
              )}

              {popup.translated && !popup.loading && (
                <div className="border-t border-black/10 pt-1.5 mt-1.5 space-y-1.5">
                  <p className="text-sm font-bold text-[#0a192f] font-cjk leading-relaxed break-words">
                    {popup.translated}
                  </p>
                  {popup.sense && (
                    <p className="text-[11px] text-slate-600 font-cjk leading-relaxed break-words">
                      {popup.sense}
                    </p>
                  )}
                  {popup.contextZh && (
                    <p className="text-[11px] text-slate-500 font-cjk leading-relaxed break-words bg-white/25 rounded-lg px-2 py-1.5 border border-white/40">
                      <span className="font-bold text-slate-600">句意：</span>
                      {popup.contextZh}
                    </p>
                  )}
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
      )}
    </div>
  );
}
