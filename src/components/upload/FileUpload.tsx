'use client';

import React, { useState, useRef } from 'react';
import { Upload, FileText, Trash2, Plus, AlertCircle, FileSpreadsheet, RefreshCw } from 'lucide-react';
import { RawWordInput } from '@/types';
import { parseRawText, parseCSV, parseExcel } from '@/lib/parseWords';

interface FileUploadProps {
  onWordsLoaded: (words: RawWordInput[]) => void;
  initialWords?: RawWordInput[];
}

const SAMPLE_WORDS: RawWordInput[] = [
  { word: 'ephemeral', translation: 'short-lived', pos: 'adj.', example: 'Fashions are ephemeral, but style is timeless.' },
  { word: 'resilient', translation: 'able to recover quickly', pos: 'adj.', example: 'Children are often remarkably resilient to change.' },
  { word: 'meticulous', translation: 'very careful and precise', pos: 'adj.', example: 'He is meticulous about keeping his records up to date.' },
  { word: 'pragmatic', translation: 'practical', pos: 'adj.', example: 'We need to adopt a pragmatic approach to solving this crisis.' },
  { word: 'eloquent', translation: 'fluent and persuasive', pos: 'adj.', example: 'She made an eloquent speech in defense of human rights.' },
];

/** Solid light field — beats dark-mode global white text overrides */
const fieldClass =
  'rounded-lg border border-black/25 bg-white px-3 py-1.5 text-sm text-black placeholder:text-slate-400 focus:outline-none focus:border-black/50 focus:ring-1 focus:ring-black/20';

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

  return (
    <div className="space-y-6">
      {/* Upload Tabs */}
      <div className="flex items-center justify-between border-b-2 border-[#0a192f]/10 pb-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('file')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition border-2 ${
              activeTab === 'file'
                ? 'bg-[#0a192f] text-white border-[#0a192f]'
                : 'bg-white text-[#0a192f] border-[#0a192f]/30 hover:border-[#0a192f]'
            }`}
          >
            <Upload className="w-4 h-4" />
            Upload file (CSV / Excel / TXT)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('text')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition border-2 ${
              activeTab === 'text'
                ? 'bg-[#0a192f] text-white border-[#0a192f]'
                : 'bg-white text-[#0a192f] border-[#0a192f]/30 hover:border-[#0a192f]'
            }`}
          >
            <FileText className="w-4 h-4" />
            Paste text
          </button>
        </div>

        <button
          type="button"
          onClick={handleLoadSample}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-white text-[#0a192f] border-2 border-[#0a192f] hover:bg-slate-100 transition shadow-sm"
        >
          Load sample words
        </button>
      </div>

      {error && (
        <div className="flex items-center gap-2 p-4 rounded-xl bg-red-50 border-2 border-red-300 text-red-700 text-sm">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
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
          className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all duration-200 ${
            isDragging
              ? 'border-[#0a192f] bg-slate-100 scale-[0.99]'
              : 'border-[#0a192f] bg-white hover:bg-slate-50'
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
          <div className="w-14 h-14 mx-auto rounded-2xl bg-slate-100 border-2 border-[#0a192f] flex items-center justify-center text-[#0a192f] mb-4">
            {isProcessing ? (
              <RefreshCw className="w-6 h-6 animate-spin text-[#0a192f]" />
            ) : (
              <FileSpreadsheet className="w-6 h-6" />
            )}
          </div>
          <h4 className="text-base font-extrabold text-[#0a192f] mb-1">
            Click here or drag a word file to upload
          </h4>
          <p className="text-xs text-slate-600 max-w-sm mx-auto mb-3">
            Supports CSV, Excel (.xlsx/.xls), and plain TXT files. Word, definition, and example columns are detected automatically.
          </p>
          <div className="inline-flex items-center gap-3 text-[11px] text-slate-500 font-medium">
            <span>• Multi-column CSV</span>
            <span>• Standard Excel sheets</span>
            <span>• One word per line</span>
          </div>
        </div>
      )}

      {/* Direct Text Input */}
      {activeTab === 'text' && (
        <div className="space-y-3">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={`Enter one word per line, or separate fields with commas or tabs, for example:\nephemeral, short-lived, adj.\nresilient, able to recover quickly\nmeticulous\npragmatic - practical`}
            rows={5}
            className={`${fieldClass} w-full font-mono`}
          />
          <button
            type="button"
            onClick={handleTextSubmit}
            disabled={!inputText.trim()}
            className="px-5 py-2.5 rounded-xl text-sm font-bold bg-[#0a192f] hover:bg-[#132c5b] disabled:opacity-50 text-white transition shadow-sm border border-[#0a192f]"
          >
            Add to word list
          </button>
        </div>
      )}

      {/* Vocabulary Table Preview — always light surface for readable fields */}
      {words.length > 0 && (
        <div className="word-import-panel rounded-2xl border border-black/15 bg-white overflow-hidden shadow-sm">
          <div className="flex items-center justify-between px-5 py-3.5 bg-slate-100 border-b border-black/10">
            <div className="flex items-center gap-2">
              <span className="text-sm font-black text-black">Imported words</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#0a192f] text-white font-bold">
                {words.length} words
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleAddNewRow}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold bg-[#0a192f] text-white hover:bg-[#132c5b] transition"
              >
                <Plus className="w-3.5 h-3.5" />
                Add word row
              </button>
              <button
                type="button"
                onClick={handleClearAll}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold text-red-700 bg-white hover:bg-red-50 transition border border-red-300"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Clear
              </button>
            </div>
          </div>

          <div className="max-h-80 overflow-y-auto divide-y divide-black/8 bg-white">
            {words.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 px-5 py-2.5 bg-white hover:bg-slate-50 transition"
              >
                <span className="text-xs font-mono font-bold text-slate-600 w-6">{idx + 1}</span>

                <input
                  type="text"
                  value={item.word}
                  onChange={(e) => handleWordChange(idx, 'word', e.target.value)}
                  placeholder="Word"
                  className={`${fieldClass} w-1/4 font-bold`}
                />

                <input
                  type="text"
                  value={item.pos || ''}
                  onChange={(e) => handleWordChange(idx, 'pos', e.target.value)}
                  placeholder="POS"
                  className={`${fieldClass} w-16 text-xs text-center px-2`}
                />

                <input
                  type="text"
                  value={item.translation || ''}
                  onChange={(e) => handleWordChange(idx, 'translation', e.target.value)}
                  placeholder="Definition (optional)"
                  className={`${fieldClass} flex-1`}
                />

                <button
                  type="button"
                  onClick={() => handleRemoveWord(idx)}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-red-600 hover:bg-red-50 transition"
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
