'use client';

import React, { useState } from 'react';
import { Printer, Grid, FileCheck, Layers } from 'lucide-react';
import { GeneratedWord, GeneratedCloze, GeneratedQuiz } from '@/types';

interface PrintableLayoutProps {
  title: string;
  words: GeneratedWord[];
  article?: GeneratedCloze;
  quizzes?: GeneratedQuiz[];
}

export function PrintableLayout({ title, words, article, quizzes }: PrintableLayoutProps) {
  const [printMode, setPrintMode] = useState<'flashcards' | 'exam'>('flashcards');

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Controls - Hidden during print */}
      <div className="no-print p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h4 className="text-lg font-bold text-white flex items-center gap-2">
            <Printer className="w-5 h-5 text-indigo-400" />
            Print & worksheet center
          </h4>
          <p className="text-xs text-slate-400">
            Choose a layout and use your browser to print or export a PDF.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center bg-slate-800 p-1 rounded-xl border border-slate-700">
            <button
              onClick={() => setPrintMode('flashcards')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                printMode === 'flashcards'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              Physical flashcards (cut-out)
            </button>
            <button
              onClick={() => setPrintMode('exam')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                printMode === 'exam'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <FileCheck className="w-3.5 h-3.5" />
              Printed quiz and cloze worksheet
            </button>
          </div>

          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-lg shadow-indigo-600/30 transition"
          >
            <Printer className="w-4 h-4" />
            <span>Print now / Save as PDF</span>
          </button>
        </div>
      </div>

      {/* Printable Sheet View */}
      <div className="bg-white text-slate-900 p-8 rounded-3xl shadow-2xl min-h-[600px] border border-slate-200">
        <div className="border-b-2 border-slate-900 pb-4 mb-6 text-center">
          <h1 className="text-2xl font-extrabold uppercase tracking-wide text-slate-900">
            {title} - Learning assessment
          </h1>
          <div className="flex items-center justify-between text-xs text-slate-600 mt-2">
            <span>Name: _________________</span>
            <span>Date: _________________</span>
            <span>Score: _________________</span>
          </div>
        </div>

        {/* Flashcards Mode */}
        {printMode === 'flashcards' && (
          <div className="grid grid-cols-2 gap-4">
            {words.map((w, idx) => (
              <div
                key={idx}
                className="border-2 border-dashed border-slate-400 rounded-xl p-4 flex flex-col justify-between h-44 bg-slate-50"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-slate-200 pb-1 mb-2">
                    <span className="font-bold text-lg text-indigo-900">{w.word}</span>
                    <span className="text-xs text-slate-500 font-mono">{w.phonetic} {w.pos}</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-800">{w.translation}</p>
                </div>
                {w.example && (
                  <p className="text-xs text-slate-600 italic border-t border-slate-200 pt-1">
                    "{w.example}"
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Exam Paper Mode */}
        {printMode === 'exam' && (
          <div className="space-y-8">
            {/* Part 1: Cloze */}
            {article && (
              <div className="space-y-3">
                <h3 className="font-bold text-base border-b border-slate-300 pb-1">
                  I. Context cloze exercise
                </h3>
                <p className="text-sm leading-loose text-slate-800 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  {article.content.split(/(\[blank_\d+\])/g).map((part, i) => {
                    const match = part.match(/\[blank_(\d+)\]/);
                    if (match) {
                      return <strong key={i} className="underline mx-1">({match[1]}) ___________</strong>;
                    }
                    return <span key={i}>{part}</span>;
                  })}
                </p>
              </div>
            )}

            {/* Part 2: Multiple Choice Quiz */}
            {quizzes && quizzes.length > 0 && (
              <div className="space-y-4">
                <h3 className="font-bold text-base border-b border-slate-300 pb-1">
                  II. Multiple-choice questions
                </h3>
                <div className="space-y-4">
                  {quizzes.map((q, idx) => (
                    <div key={idx} className="text-sm space-y-1.5">
                      <p className="font-medium text-slate-900">
                        {idx + 1}. {q.question}
                      </p>
                      <div className="grid grid-cols-2 gap-2 pl-4 text-xs text-slate-700">
                        {q.options.map((opt, oIdx) => (
                          <div key={oIdx}>
                            ({String.fromCharCode(65 + oIdx)}) {opt}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Answer Key Footer */}
            <div className="pt-8 border-t-2 border-dashed border-slate-300 mt-12 print-page-break">
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500 mb-2">
                【Answer key and word list】
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-slate-600">
                {quizzes?.map((q, idx) => (
                  <div key={idx}>
                    <strong>Question {idx + 1}:</strong> ({String.fromCharCode(65 + q.correctIdx)}) {q.targetWord}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
