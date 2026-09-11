'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PlusCircle, Settings } from 'lucide-react';
import { ApiKeyModal } from './ApiKeyModal';

export function Navbar() {
  const pathname = usePathname();
  const [isKeyModalOpen, setIsKeyModalOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b-2 border-black bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center"><span className="text-2xl tracking-tight">VocabMaster</span></Link>
          <nav className="flex items-center gap-2 sm:gap-4">
            <Link href="/create" className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm transition border ${pathname === '/create' ? 'bg-black text-white border-black' : 'bg-black text-white border-black hover:bg-slate-800'}`}>
              <PlusCircle className="w-4 h-4" /><span>Create Deck</span>
            </Link>
            <button onClick={() => setIsKeyModalOpen(true)} title="API Key Settings" className="p-2 rounded-xl text-black border border-black/30 hover:border-black transition">
              <Settings className="w-5 h-5" />
            </button>
          </nav>
        </div>
      </header>
      <ApiKeyModal isOpen={isKeyModalOpen} onClose={() => setIsKeyModalOpen(false)} />
    </>
  );
}
