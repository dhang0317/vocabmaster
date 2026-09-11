import Link from 'next/link';
import { ArrowLeft, HelpCircle, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center py-16 px-4">
      <div className="liquid-glass p-8 sm:p-12 rounded-3xl max-w-md w-full text-center space-y-6 shadow-xl border border-white/20">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-[#0a192f] text-white flex items-center justify-center shadow-md">
          <HelpCircle className="w-8 h-8 text-emerald-400" />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-[#0a192f] tracking-tight">
            Page Not Found (404)
          </h2>
          <p className="text-sm text-slate-600 font-medium">
            The page or vocabulary deck you are looking for does not exist or may have been removed.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-[#0a192f] hover:bg-[#132c5b] text-white font-bold text-sm shadow-md transition transform hover:-translate-y-0.5"
            style={{ color: '#ffffff' }}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Dashboard</span>
          </Link>
          <Link
            href="/explore"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-white/70 hover:bg-white text-[#0a192f] font-bold text-sm border border-black/10 transition shadow-sm"
          >
            <Compass className="w-4 h-4" />
            <span>Explore Public Decks</span>
          </Link>
        </div>
      </div>
    </div>
  );
}