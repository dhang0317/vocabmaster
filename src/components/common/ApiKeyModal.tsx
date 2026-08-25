'use client';

import React, { useState, useEffect } from 'react';
import { Key, X, Check, ExternalLink } from 'lucide-react';

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ApiKeyModal({ isOpen, onClose }: ApiKeyModalProps) {
  const [apiKey, setApiKey] = useState('');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('gemini_api_key') || '';
      setApiKey(stored);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSave = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('gemini_api_key', apiKey.trim());
      setSaved(true);
      setTimeout(() => {
        setSaved(false);
        onClose();
      }, 800);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a192f]/40 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="liquid-glass w-full max-w-md rounded-3xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-[#0a192f] p-1.5 rounded-xl hover:bg-white/40 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-white/40 text-[#0a192f] rounded-2xl border border-white/50">
            <Key className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-black text-[#0a192f]">API Key Settings</h3>
            <p className="text-xs text-slate-600">Enable high-quality online flashcard, article, and quiz generation.</p>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm text-slate-600">
            Your API key is stored only in your browser (LocalStorage) and is never uploaded to a third-party server.
          </p>

          <div>
            <label className="block text-xs font-bold text-[#0a192f] mb-1">
              GEMINI API KEY
            </label>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="AIzaSy..."
              className="w-full px-4 py-2.5 rounded-xl bg-white/40 border border-white/50 text-[#0a192f] placeholder-slate-400 focus:outline-none focus:border-white/80 text-sm font-mono transition-colors"
            />
          </div>

          <a
            href="https://aistudio.google.com/app/apikey"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-[#0a192f] font-bold underline"
          >
            Get a free Google Gemini API key <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <div className="p-3 bg-white/30 rounded-2xl border border-white/40 text-xs text-slate-600">
              💡 Tip: without an API key, the built-in offline fallback still supports flashcards, cloze exercises, and quizzes.
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-sm font-bold text-slate-600 hover:text-[#0a192f] hover:bg-white/40 transition"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-[#0a192f] hover:bg-[#132c5b] text-white shadow-sm transition"
            >
              {saved ? (
                <>
                  <Check className="w-4 h-4" /> Saved
                </>
              ) : (
                'Save settings'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
