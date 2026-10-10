'use client';

import React, { useState, useEffect } from 'react';
import { Key, X, Check, ExternalLink, Cpu, Sparkles } from 'lucide-react';

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ApiKeyModal({ isOpen, onClose }: ApiKeyModalProps) {
  const [geminiApiKey, setGeminiApiKey] = useState('');
  const [groqApiKey, setGroqApiKey] = useState('');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedGemini = localStorage.getItem('gemini_api_key') || '';
      const storedGroq = localStorage.getItem('groq_api_key') || '';
      setGeminiApiKey(storedGemini);
      setGroqApiKey(storedGroq);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSave = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('gemini_api_key', geminiApiKey.trim());
      localStorage.setItem('groq_api_key', groqApiKey.trim());
      setSaved(true);
      setTimeout(() => {
        setSaved(false);
        onClose();
      }, 800);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a192f]/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-lg rounded-3xl bg-white border-2 border-[#0a192f] shadow-2xl p-6 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-[#0a192f] p-1.5 rounded-xl hover:bg-slate-100 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-slate-100 text-[#0a192f] rounded-2xl border-2 border-[#0a192f]">
            <Key className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-black text-[#0a192f]">AI 模型與金鑰設定</h3>
            <p className="text-xs text-slate-600">支援 Google Gemini 與 Google Gemma 2 (Groq 雲端加速，免費且極速)。</p>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-xs text-slate-500">
            金鑰僅保存在您的瀏覽器中（LocalStorage），絕不上傳第三方伺服器。
          </p>

          {/* OpenRouter / Gemma 2 */}
          <div className="p-3.5 rounded-2xl border-2 border-[#0a192f]/20 bg-amber-50/40 space-y-2">
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-1.5 text-xs font-bold text-[#0a192f]">
                <Cpu className="w-4 h-4 text-amber-600" />
                OPENROUTER API KEY (Google Gemma)
              </label>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300">
                免費・免信用卡・Google Gemma
              </span>
            </div>
            <input
              type="password"
              value={groqApiKey}
              onChange={(e) => setGroqApiKey(e.target.value)}
              placeholder="sk-or-v1-..."
              className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#0a192f]/40 text-[#0a192f] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0a192f]/20 text-sm font-mono"
            />
            <div className="flex items-center justify-between pt-1">
              <a
                href="https://openrouter.ai/settings/keys"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs text-[#0a192f] font-bold underline hover:text-amber-700"
              >
                前往 OpenRouter 免費取得 Key (免信用卡) <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <span className="text-[11px] text-slate-500">模型: google/gemma-2-9b-it:free</span>
            </div>
          </div>


          {/* Gemini */}
          <div className="p-3.5 rounded-2xl border-2 border-[#0a192f]/20 bg-blue-50/30 space-y-2">
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-1.5 text-xs font-bold text-[#0a192f]">
                <Sparkles className="w-4 h-4 text-blue-600" />
                GEMINI API KEY (Gemini 1.5)
              </label>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                Google 官方
              </span>
            </div>
            <input
              type="password"
              value={geminiApiKey}
              onChange={(e) => setGeminiApiKey(e.target.value)}
              placeholder="AIzaSy..."
              className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#0a192f]/40 text-[#0a192f] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0a192f]/20 text-sm font-mono"
            />
            <div className="flex items-center justify-between pt-1">
              <a
                href="https://aistudio.google.com/app/apikey"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs text-[#0a192f] font-bold underline hover:text-blue-700"
              >
                前往 Google AI Studio 取得免費 Key <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <span className="text-[11px] text-slate-500">模型: gemini-1.5-flash</span>
            </div>
          </div>

          <div className="p-3 bg-slate-50 rounded-2xl border border-[#0a192f]/20 text-xs text-slate-600">
            💡 提示：若兩個皆未填寫，系統將會使用內建的離線題庫與單字模擬生成器。
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-sm font-bold text-slate-600 hover:text-[#0a192f] hover:bg-slate-100 transition"
            >
              取消
            </button>
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-[#0a192f] hover:bg-[#132c5b] text-white shadow-sm transition border border-[#0a192f]"
            >
              {saved ? (
                <>
                  <Check className="w-4 h-4" /> 已儲存設定
                </>
              ) : (
                '儲存設定'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

