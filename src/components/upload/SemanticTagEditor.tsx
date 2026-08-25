'use client';

import React, { useMemo, useState } from 'react';
import { ChevronDown, ChevronUp, Tags } from 'lucide-react';
import { RawWordInput } from '@/types';
import {
  ALL_SEMANTIC_TAGS,
  TAG_LABELS_ZH,
  SemanticTag,
  inferSemanticTags,
} from '@/lib/semanticTags';

interface Props {
  words: RawWordInput[];
  onChange: (words: RawWordInput[]) => void;
}

export function SemanticTagEditor({ words, onChange }: Props) {
  const [open, setOpen] = useState(false);

  const preview = useMemo(() => {
    return words.slice(0, 12).map(w => ({
      word: w.word,
      tags: (w.semanticTags && w.semanticTags.length > 0
        ? w.semanticTags
        : inferSemanticTags(w.word, w.pos, w.definition)) as SemanticTag[],
    }));
  }, [words]);

  if (words.length === 0) return null;

  const toggleTag = (index: number, tag: SemanticTag) => {
    const next = words.map((w, i) => {
      if (i !== index) return w;
      const current =
        w.semanticTags && w.semanticTags.length > 0
          ? [...w.semanticTags]
          : inferSemanticTags(w.word, w.pos, w.definition);
      const has = current.includes(tag);
      const tags = has ? current.filter(t => t !== tag) : [...current, tag];
      return { ...w, semanticTags: tags };
    });
    onChange(next);
  };

  const autoFillAll = () => {
    onChange(
      words.map(w => ({
        ...w,
        semanticTags: inferSemanticTags(w.word, w.pos, w.definition),
      }))
    );
  };

  return (
    <div className="rounded-2xl border border-white/50 bg-white/30 overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-white/20 transition"
      >
        <span className="flex items-center gap-2 text-sm font-bold text-[#0a192f]">
          <Tags className="w-4 h-4" />
          語意標籤（可選）· 改善挖空匹配
        </span>
        {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>

      {open && (
        <div className="px-4 pb-4 space-y-4 border-t border-white/40">
          <div className="flex flex-wrap items-center justify-between gap-2 pt-3">
            <p className="text-xs text-slate-600">
              系統已自動推斷標籤。可點擊調整；留空則使用自動結果。
            </p>
            <button
              type="button"
              onClick={autoFillAll}
              className="text-xs font-bold px-3 py-1.5 rounded-lg bg-[#0a192f] text-white"
            >
              全部自動填入
            </button>
          </div>

          <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
            {words.map((w, index) => {
              const tags =
                w.semanticTags && w.semanticTags.length > 0
                  ? (w.semanticTags as SemanticTag[])
                  : inferSemanticTags(w.word, w.pos, w.definition);
              return (
                <div key={`${w.word}-${index}`} className="p-3 rounded-xl bg-white/40 border border-white/50">
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <span className="font-bold text-sm text-[#0a192f]">{w.word}</span>
                    <span className="text-[10px] text-slate-500">{w.pos || '—'}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {ALL_SEMANTIC_TAGS.map(tag => {
                      const active = tags.includes(tag);
                      return (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => toggleTag(index, tag)}
                          className={`text-[10px] px-2 py-0.5 rounded-md border font-semibold transition ${
                            active
                              ? 'bg-[#0a192f] text-white border-[#0a192f]'
                              : 'bg-white/60 text-slate-600 border-slate-200 hover:border-[#0a192f]/40'
                          }`}
                          title={tag}
                        >
                          {TAG_LABELS_ZH[tag]}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {preview.length > 0 && (
            <p className="text-[10px] text-slate-500">
              預覽：{preview.map(p => `${p.word}[${p.tags.slice(0, 2).join(',')}]`).join(' · ')}
              {words.length > 12 ? ' …' : ''}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
