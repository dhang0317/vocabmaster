'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  LogIn,
  LogOut,
  Key,
  Moon,
  Sun,
  MessageSquare,
  RefreshCw,
  ChevronDown,
} from 'lucide-react';
import { useSession, signOut } from 'next-auth/react';
import { ApiKeyModal } from './ApiKeyModal';

export function Navbar() {
  const { data: session, status } = useSession();
  const [isKeyModalOpen, setIsKeyModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const menuRef = useRef<HTMLDivElement>(null);

  const initial = (session?.user?.name || session?.user?.email || '?').charAt(0).toUpperCase();

  // Load theme preference
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const preferred =
      stored ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(preferred);
    document.documentElement.setAttribute('data-theme', preferred);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const onPointerDown = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', onPointerDown);
    return () => document.removeEventListener('mousedown', onPointerDown);
  }, [menuOpen]);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.setAttribute('data-theme', next);
  };

  const handleFeedback = () => {
    setMenuOpen(false);
    window.open(
      'mailto:jeffery0990317@gmail.com?subject=Vocabulum%20Feedback',
      '_blank'
    );
  };

  const handleSwitchAccount = async () => {
    setMenuOpen(false);
    await signOut({ callbackUrl: '/login' });
  };

  const handleLogout = async () => {
    setMenuOpen(false);
    await signOut({ callbackUrl: '/' });
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b-2 border-black bg-white/95 backdrop-blur-md shadow-sm nav-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-2xl tracking-tight">Vocabulum</span>
          </Link>

          <nav className="flex items-center gap-2 sm:gap-3">
            {status === 'authenticated' ? (
              <div className="relative" ref={menuRef}>
                <button
                  type="button"
                  onClick={() => setMenuOpen((v) => !v)}
                  className="flex items-center gap-1.5 rounded-full pl-0.5 pr-1.5 py-0.5 border border-black/30 hover:border-black transition bg-white"
                  aria-expanded={menuOpen}
                  aria-haspopup="menu"
                >
                  {session.user?.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={session.user.image}
                      alt={session.user.name || session.user.email || 'user'}
                      className="w-8 h-8 rounded-full border border-black/20 object-cover"
                    />
                  ) : (
                    <span className="w-8 h-8 rounded-full bg-[#0a192f] text-white flex items-center justify-center text-xs font-black border border-black">
                      {initial}
                    </span>
                  )}
                  <ChevronDown
                    className={`w-4 h-4 text-slate-600 transition-transform ${menuOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {menuOpen && (
                  <div
                    role="menu"
                    className="absolute right-0 mt-2 w-64 rounded-2xl bg-white border-2 border-[#0a192f] shadow-lg py-2 z-50 overflow-hidden"
                  >
                    {/* User info */}
                    <div className="px-4 py-3 border-b border-[#0a192f]/15">
                      <p className="text-sm font-bold text-[#0a192f] truncate">
                        {session.user?.name || 'User'}
                      </p>
                      <p className="text-[11px] text-slate-500 truncate">
                        {session.user?.email}
                      </p>
                    </div>

                    <div className="py-1">
                      <button
                        type="button"
                        role="menuitem"
                        onClick={() => {
                          setMenuOpen(false);
                          setIsKeyModalOpen(true);
                        }}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-[#0a192f] hover:bg-slate-100 transition text-left"
                      >
                        <Key className="w-4 h-4 shrink-0" />
                        <span>API Key 設定</span>
                      </button>

                      <button
                        type="button"
                        role="menuitem"
                        onClick={toggleTheme}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-[#0a192f] hover:bg-slate-100 transition text-left"
                      >
                        {theme === 'light' ? (
                          <Moon className="w-4 h-4 shrink-0" />
                        ) : (
                          <Sun className="w-4 h-4 shrink-0" />
                        )}
                        <span>{theme === 'light' ? '深色模式' : '淺色模式'}</span>
                      </button>

                      <button
                        type="button"
                        role="menuitem"
                        onClick={handleFeedback}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-[#0a192f] hover:bg-slate-100 transition text-left"
                      >
                        <MessageSquare className="w-4 h-4 shrink-0" />
                        <span>意見回饋</span>
                      </button>

                      <button
                        type="button"
                        role="menuitem"
                        onClick={handleSwitchAccount}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-[#0a192f] hover:bg-slate-100 transition text-left"
                      >
                        <RefreshCw className="w-4 h-4 shrink-0" />
                        <span>切換帳號</span>
                      </button>
                    </div>

                    <div className="border-t border-[#0a192f]/15 pt-1">
                      <button
                        type="button"
                        role="menuitem"
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition text-left"
                      >
                        <LogOut className="w-4 h-4 shrink-0" />
                        <span>登出</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : status === 'loading' ? (
              <div className="w-8 h-8 rounded-full bg-slate-200 animate-pulse" />
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
