'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Settings, LogIn, LogOut } from 'lucide-react';
import { useSession, signOut } from 'next-auth/react';
import { ApiKeyModal } from './ApiKeyModal';

export function Navbar() {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const [isKeyModalOpen, setIsKeyModalOpen] = useState(false);

  const initial = (session?.user?.name || session?.user?.email || '?').charAt(0).toUpperCase();

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b-2 border-black bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center"><span className="text-2xl tracking-tight">Vocabulum</span></Link>
          <nav className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={() => setIsKeyModalOpen(true)}
              title="API Key Settings"
              className="p-2 rounded-xl text-black border border-black/30 hover:border-black transition"
            >
              <Settings className="w-5 h-5" />
            </button>

            {status === 'authenticated' ? (
              <div className="flex items-center gap-2">
                {session.user?.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={session.user.image}
                    alt={session.user.name || session.user.email || 'user'}
                    title={session.user.email || ''}
                    className="w-8 h-8 rounded-full border border-black/30 object-cover"
                  />
                ) : (
                  <span
                    title={session.user?.email || ''}
                    className="w-8 h-8 rounded-full bg-[#0a192f] text-white flex items-center justify-center text-xs font-black border border-black"
                  >
                    {initial}
                  </span>
                )}
                <button
                  onClick={() => signOut({ callbackUrl: '/' })}
                  title={`登出 ${session.user?.email || ''}`}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm transition border bg-white text-black border-black/30 hover:border-black"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="hidden sm:inline">登出</span>
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm transition border bg-black text-white border-black hover:bg-slate-800"
              >
                <LogIn className="w-4 h-4" />
                <span>登入</span>
              </Link>
            )}
          </nav>
        </div>
      </header>
      <ApiKeyModal isOpen={isKeyModalOpen} onClose={() => setIsKeyModalOpen(false)} />
    </>
  );
}
