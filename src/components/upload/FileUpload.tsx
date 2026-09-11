'use client';

import React, { useState, useRef } from 'react';
import { Upload, FileText, Trash2, Plus, AlertCircle, RefreshCw } from 'lucide-react';
import { RawWordInput } from '@/types';
import { parseRawText, parseCSV, parseExcel } from '@/lib/parseWords';

interface FileUploadProps {
  onWordsLoaded: (words: RawWordInput[]) => void;
  initialWords?: RawWordInput[];
}

const SAMPLE_WORDS: RawWordInput[] = [
  { word: 'ephemeral', translation: 'short-lived (短暫的)', pos: 'adj.', example: 'Fashions are ephemeral, but style is timeless.' },
  { word: 'resilient', translation: 'able to recover quickly (有適應力的)', pos: 'adj.', example: 'Children are often remarkably resilient to change.' },
  { word: 'meticulous', translation: 'very careful and precise (一絲不苟的)', pos: 'adj.', example: 'He is meticulous about keeping his records up to date.' },
  { word: 'pragmatic', translation: 'practical (務實的)', pos: 'adj.', example: 'We need to adopt a pragmatic approach to solving this crisis.' },
  { word: 'eloquent', translation: 'fluent and persuasive (雄辯的)', pos: 'adj.', example: 'She made an eloquent speech in defense of human rights.' },
];

export function FileUpload({ onWordsLoaded, initialWords = [] }: FileUploadProps) {
  const [words, setWords] = useState<RawWordInput[]>(initialWords);
  const [inputText, setInputText] = useState('');
  const [activeTab, setActiveTab] = useState<'file' | 'text'>('file');
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleProcessFile = async (file: File) => {
    setIsProcessing(true);
    setError(null);
    try {
      const ext = file.name.split('.').pop()?.toLowerCase();
      let parsed: RawWordInput[] = [];

      if (ext === 'csv') {
        const text = await file.text();
        parsed = await parseCSV(text);
      } else if (ext === 'xlsx' || ext === 'xls') {
        const buffer = await file.arrayBuffer();
        parsed = parseExcel(buffer);
      } else if (ext === 'txt') {
        const text = await file.text();
        parsed = parseRawText(text);
      } else {
        throw new Error('Only .csv, .xlsx, .xls, and .txt files are supported.');
      }

      if (parsed.length === 0) {
        throw new Error('No words could be parsed from the file. Please check its format.');
      }

      const combined = [...words, ...parsed];
      setWords(combined);
      onWordsLoaded(combined);
    } catch (err: any) {
      setError(err.message || 'File parsing failed');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleProcessFile(e.dataTransfer.files[0]);
    }
  };

  const handleTextSubmit = () => {
    if (!inputText.trim()) return;
    const parsed = parseRawText(inputText);
    if (parsed.length > 0) {
      const combined = [...words, ...parsed];
      setWords(combined);
      onWordsLoaded(combined);
      setInputText('');
    }
  };

  const handleLoadSample = () => {
    setWords(SAMPLE_WORDS);
    onWordsLoaded(SAMPLE_WORDS);
  };

  const handleRemoveWord = (index: number) => {
    const updated = words.filter((_, i) => i !== index);
    setWords(updated);
    onWordsLoaded(updated);
  };

  const handleWordChange = (index: number, field: keyof RawWordInput, val: string) => {
    const updated = [...words];
    updated[index] = { ...updated[index], [field]: val };
    setWords(updated);
    onWordsLoaded(updated);
  };

  const handleAddNewRow = () => {
    const updated = [...words, { word: '', translation: '', pos: '', example: '' }];
    setWords(updated);
    onWordsLoaded(updated);
  };

  const handleClearAll = () => {
    setWords([]);
    onWordsLoaded([]);
  };

  const inputClass =
    'rounded-xl border border-black/10 bg-white/80 px-3.5 py-2 text-sm text-[#0a192f] placeholder-slate-400 focus:outline-none focus:border-[#0a192f]/40 focus:ring-2 focus:ring-[#0a192f]/10 transition font-medium shadow-sm';

  return (
    <div className="space-y-5">
      {/* Tab Switcher & Sample Loader */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/5 pb-4">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('file')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition shadow-sm border ${
              activeTab === 'file'
                ? 'bg-[#0a192f] text-white border-[#0a192f]'
                : 'bg-white/70 hover:bg-white text-slate-700 border-black/5'
            }`}
            style={activeTab === 'file' ? { color: '#ffffff' } : {}}
          >
            <Upload className="w-4 h-4" />
            <span>Upload file (CSV / Excel / TXT)</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('text')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition shadow-sm border ${
              activeTab === 'text'
                ? 'bg-[#0a192f] text-white border-[#0a192f]'
                : 'bg-white/70 hover:bg-white text-slate-700 border-black/5'
            }`}
            style={activeTab === 'text' ? { color: '#ffffff' } : {}}
          >
            <FileText className="w-4 h-4" />
            <span>Paste text</span>
          </button>
        </div>

        <button
          type="button"
          onClick={handleLoadSample}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-white/70 hover:bg-white text-[#0a192f] border border-black/10 transition shadow-sm"
        >
          <span>載入範例單字</span>
        </button>
      </div>

      {error && (
        <div className="flex items-center gap-2 p-4 rounded-2xl bg-red-50/90 border border-red-200 text-red-700 text-sm">
          <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-500" />
          <span>{error}</span>
        </div>
      )}

      {/* File Dropzone */}
      {activeTab === 'file' && (
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`liquid-glass rounded-2xl p-8 sm:p-10 text-center cursor-pointer transition-all duration-300 border-2 border-dashed ${
            isDragging
              ? 'border-[#0a192f] bg-white/80 scale-[0.99]'
              : 'border-[#0a192f]/20 hover:border-[#0a192f]/50 hover:bg-white/70'
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept=".csv,.xlsx,.xls,.txt"
            className="hidden"
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                handleProcessFile(e.target.files[0]);
              }
            }}
          />
          {isProcessing ? (
            <div className="flex flex-col items-center justify-center gap-2">
              <RefreshCw className="w-6 h-6 animate-spin text-[#0a192f]" />
              <span className="text-sm font-bold text-[#0a192f]">Processing word file…</span>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-white/80 border border-black/5 flex items-center justify-center mx-auto shadow-sm">
                <Upload className="w-6 h-6 text-[#0a192f]" />
              </div>
              <h4 className="text-sm sm:text-base font-extrabold text-[#0a192f]">
                Click or drag & drop word files here
              </h4>
              <p className="text-xs text-slate-500 font-medium">
                Supports .CSV, .XLSX, .XLS, or .TXT format (Word, POS, Translation, Example)
              </p>
            </div>
          )}
        </div>
      )}

      {/* Paste Text Area */}
      {activeTab === 'text' && (
        <div className="space-y-3">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={`Enter one word per line, or separate fields with commas or tabs, for example:\nephemeral, short-lived, adj.\nresilient, able to recover quickly\nmeticulous, very careful\npragmatic - practical`}
            rows={5}
            className="w-full rounded-2xl border border-black/10 bg-white/80 px-4 py-3 text-sm text-[#0a192f] placeholder-slate-400 focus:outline-none focus:border-[#0a192f]/40 focus:ring-2 focus:ring-[#0a192f]/10 font-mono transition shadow-sm"
          />
          <button
            type="button"
            onClick={handleTextSubmit}
            disabled={!inputText.trim()}
            className="px-6 py-2.5 rounded-xl bg-[#0a192f] hover:bg-[#132c5b] text-white text-xs sm:text-sm font-bold disabled:opacity-50 transition shadow-sm border border-[#0a192f]"
            style={{ color: '#ffffff' }}
          >
            Add to word list
          </button>
        </div>
      )}

      {/* Unified Imported Words Table */}
      {words.length > 0 && (
        <div className="liquid-glass rounded-2xl overflow-hidden border border-white/60 shadow-sm space-y-0">
          <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 bg-white/60 border-b border-black/5">
            <div className="flex items-center gap-2">
              <span className="text-sm font-black text-[#0a192f]">
                Imported words
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#0a192f]/10 text-[#0a192f] font-bold border border-[#0a192f]/10">
                {words.length} words
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleAddNewRow}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-white hover:bg-slate-50 text-[#0a192f] border border-black/10 transition shadow-sm"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add word row</span>
              </button>
              <button
                type="button"
                onClick={handleClearAll}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 transition shadow-sm"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear</span>
              </button>
            </div>
          </div>

          <div className="max-h-80 overflow-y-auto divide-y divide-black/5 bg-transparent p-2 space-y-1.5">
            {words.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 sm:gap-3 p-2 rounded-xl bg-white/50 hover:bg-white/80 transition border border-black/5"
              >
                <span className="text-xs font-mono font-bold text-slate-400 w-6 text-center">
                  {idx + 1}
                </span>

                <input
                  type="text"
                  value={item.word}
                  onChange={(e) => handleWordChange(idx, 'word', e.target.value)}
                  placeholder="Word"
                  className={`${inputClass} w-1/3 sm:w-1/4 font-bold`}
                />

                <input
                  type="text"
                  value={item.pos || ''}
                  onChange={(e) => handleWordChange(idx, 'pos', e.target.value)}
                  placeholder="POS"
                  className={`${inputClass} w-16 text-xs text-center px-1 font-bold`}
                />

                <input
                  type="text"
                  value={item.translation || ''}
                  onChange={(e) => handleWordChange(idx, 'translation', e.target.value)}
                  placeholder="Definition / Translation (optional)"
                  className={`${inputClass} flex-1`}
                />

                <button
                  type="button"
                  onClick={() => handleRemoveWord(idx)}
                  className="p-2 rounded-xl text-slate-400 hover:text-red-600 hover:bg-red-50 transition shrink-0"
                  title="Delete"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}