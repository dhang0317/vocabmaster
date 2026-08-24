import Link from 'next/link';
import { ArrowLeft, HelpCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-24 space-y-4 text-center">
      <div className="p-4 rounded-3xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
        <HelpCircle className="w-12 h-12" />
      </div>
      <h2 className="text-2xl font-bold text-white">Page not found (404)</h2>
      <p className="text-sm text-slate-400 max-w-sm">The page or deck you are looking for may have been removed or does not exist.</p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition"
      >
        <ArrowLeft className="w-4 h-4" /> Return home
      </Link>
    </div>
  );
}
