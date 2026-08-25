'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { MessageSquare, Send, CheckCircle2, ArrowLeft } from 'lucide-react';

type FeedbackType = 'bug' | 'feature' | 'general';

const TYPE_OPTIONS: { value: FeedbackType; label: string; description: string }[] = [
  { value: 'bug', label: 'Bug report', description: 'Something is broken or not working as expected' },
  { value: 'feature', label: 'Feature request', description: 'An idea to improve Vocabulum' },
  { value: 'general', label: 'General feedback', description: 'Comments, questions, or anything else' },
];

export default function FeedbackPage() {
  const { data: session } = useSession();
  const [type, setType] = useState<FeedbackType>('general');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (session?.user?.email) {
      setEmail(session.user.email);
    }
  }, [session]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setSubmitting(true);

    const typeLabel = TYPE_OPTIONS.find((t) => t.value === type)?.label || type;
    const subject = encodeURIComponent(`[Vocabulum] ${typeLabel}`);
    const body = encodeURIComponent(
      [
        `Type: ${typeLabel}`,
        email.trim() ? `From: ${email.trim()}` : '',
        '',
        message.trim(),
      ]
        .filter(Boolean)
        .join('\n')
    );

    window.location.href = `mailto:jeffery0990317@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto py-16 space-y-6 text-center">
        <div className="liquid-glass w-16 h-16 mx-auto rounded-2xl flex items-center justify-center text-emerald-700">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-black text-[#0a192f]">Thank you</h1>
          <p className="text-sm text-slate-600">
            Your feedback has been prepared in your email app. Send the message to complete submission.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setMessage('');
              setType('general');
            }}
            className="liquid-glass px-5 py-2.5 rounded-xl text-sm font-bold text-[#0a192f] hover:bg-white/50 transition"
          >
            Send another
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0a192f] hover:bg-[#132c5b] text-white text-sm font-bold transition"
            style={{ color: '#ffffff' }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto space-y-8">
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="liquid-glass p-2.5 rounded-2xl text-[#0a192f]">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-[#0a192f]">Feedback</h1>
            <p className="text-xs text-slate-600">Help us improve Vocabulum</p>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="liquid-glass rounded-3xl p-6 sm:p-8 space-y-6"
      >
        <div className="space-y-3">
          <label className="block text-xs font-bold text-[#0a192f]">What is this about?</label>
          <div className="space-y-2">
            {TYPE_OPTIONS.map((opt) => (
              <label
                key={opt.value}
                className={`flex items-start gap-3 p-3 rounded-2xl border cursor-pointer transition ${
                  type === opt.value
                    ? 'border-white/70 bg-white/40'
                    : 'border-white/30 hover:border-white/55 bg-white/15'
                }`}
              >
                <input
                  type="radio"
                  name="type"
                  value={opt.value}
                  checked={type === opt.value}
                  onChange={() => setType(opt.value)}
                  className="mt-1 accent-[#0a192f]"
                />
                <span className="space-y-0.5">
                  <span className="block text-sm font-bold text-[#0a192f]">{opt.label}</span>
                  <span className="block text-[11px] text-slate-500">{opt.description}</span>
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="feedback-message" className="block text-xs font-bold text-[#0a192f]">
            Your message
          </label>
          <textarea
            id="feedback-message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us what you think, what went wrong, or what you'd like to see…"
            className="w-full px-4 py-3 rounded-2xl bg-white/40 border border-white/50 text-sm text-[#0a192f] placeholder-slate-400 focus:outline-none focus:border-white/80 transition-colors resize-y min-h-[120px]"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="feedback-email" className="block text-xs font-bold text-[#0a192f]">
            Reply-to email <span className="font-normal text-slate-400">(optional)</span>
          </label>
          <input
            id="feedback-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full px-4 py-2.5 rounded-xl bg-white/40 border border-white/50 text-sm text-[#0a192f] placeholder-slate-400 focus:outline-none focus:border-white/80 transition-colors"
          />
        </div>

        <button
          type="submit"
          disabled={submitting || !message.trim()}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#0a192f] hover:bg-[#132c5b] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm transition"
          style={{ color: '#ffffff' }}
        >
          <Send className="w-4 h-4" />
          {submitting ? 'Opening…' : 'Send feedback'}
        </button>

        <p className="text-[11px] text-slate-400 text-center">
          This opens your email app with a pre-filled message. You can review and send it from there.
        </p>
      </form>

      <div className="text-center">
        <Link href="/" className="text-xs font-bold text-[#0a192f] underline hover:no-underline">
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
