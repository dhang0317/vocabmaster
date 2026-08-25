'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import {
  LogIn,
  LogOut,
  Key,
  Moon,
  Sun,
  MessageSquare,
  RefreshCw,
} from 'lucide-react';
import { useSession, signOut } from 'next-auth/react';
import { ApiKeyModal } from './ApiKeyModal';

export function Navbar() {
  const { data: session, status } = useSession();
  const [isKeyModalOpen, setIsKeyModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [menuPos, setMenuPos] = useState({ top: 0, right: 0 });
  const [mounted, setMounted] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const initial = (session?.user?.name || session?.user?.email || '?').charAt(0).toUpperCase();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const preferred =
      stored ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(preferred);
    document.documentElement.setAttribute('data-theme', preferred);
  }, []);

  useEffect(() => {
    if (!menuOpen || !buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setMenuPos({
      top: rect.bottom + 8,
      right: Math.max(8, window.innerWidth - rect.right),
    });
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onPointerDown = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        menuRef.current?.contains(target) ||
        buttonRef.current?.contains(target)
      ) {
        return;
      }
      setMenuOpen(false);
    };
    const onResize = () => setMenuOpen(false);
    document.addEventListener('mousedown', onPointerDown);
    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onResize, true);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onResize, true);
    };
  }, [menuOpen]);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.setAttribute('data-theme', next);
  };

  const handleSwitchAccount = async () => {
    setMenuOpen(false);
    await signOut({ callbackUrl: '/login' });
  };

  const handleLogout = async () => {
    setMenuOpen(false);
    await signOut({ callbackUrl: '/' });
  };

  const menu =
    menuOpen && mounted
      ? createPortal(
          <div
            ref={menuRef}
            role="menu"
            className="liquid-glass-menu fixed z-[100] w-64 rounded-2xl py-2"
            style={{ top: menuPos.top, right: menuPos.right }}
          >
            <div className="px-4 py-3 border-b border-white/20">
              <p className="text-sm font-bold text-[#0a192f] truncate">
                {session?.user?.name || 'User'}
              </p>
              <p className="text-[11px] text-slate-500 truncate">
                {session?.user?.email}
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
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-[#0a192f] hover:bg-white/35 transition text-left"
              >
                <Key className="w-4 h-4 shrink-0" />
                <span>API Key settings</span>
              </button>

              <button
                type="button"
                role="menuitem"
                onClick={toggleTheme}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-[#0a192f] hover:bg-white/35 transition text-left"
              >
                {theme === 'light' ? (
                  <Moon className="w-4 h-4 shrink-0" />
                ) : (
                  <Sun className="w-4 h-4 shrink-0" />
                )}
                <span>{theme === 'light' ? 'Dark mode' : 'Light mode'}</span>
              </button>

              <Link
                href="/feedback"
                role="menuitem"
                onClick={() => setMenuOpen(false)}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-[#0a192f] hover:bg-white/35 transition text-left"
              >
                <MessageSquare className="w-4 h-4 shrink-0" />
                <span>Feedback</span>
              </Link>

              <button
                type="button"
                role="menuitem"
                onClick={handleSwitchAccount}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-[#0a192f] hover:bg-white/35 transition text-left"
              >
                <RefreshCw className="w-4 h-4 shrink-0" />
                <span>Switch account</span>
              </button>
            </div>

            <div className="border-t border-white/20 pt-1">
              <button
                type="button"
                role="menuitem"
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50/40 transition text-left"
              >
                <LogOut className="w-4 h-4 shrink-0" />
                <span>Log out</span>
              </button>
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <>
      <header className="liquid-glass sticky top-0 z-40 w-full border-0 border-b border-white/40 nav-header rounded-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-6">
            <Link href="/" className="flex items-center">
              <span className="text-2xl tracking-tight">Vocabulum</span>
            </Link>
          </div>

          <nav className="flex items-center gap-2 sm:gap-3">
            {status === 'authenticated' ? (
              <div className="relative">
                <button
                  ref={buttonRef}
                  type="button"
                  onClick={() => setMenuOpen((v) => !v)}
                  className="rounded-full border border-white/50 hover:border-white/80 transition bg-white/40 p-0.5"
                  aria-expanded={menuOpen}
                  aria-haspopup="menu"
                  title={session.user?.email || 'Account menu'}
                >
                  {session.user?.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={session.user.image}
                      alt={session.user.name || session.user.email || 'user'}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  ) : (
                    <span className="w-8 h-8 rounded-full bg-[#0a192f] text-white flex items-center justify-center text-xs font-black">
                      {initial}
                    </span>
                  )}
                </button>
              </div>
            ) : status === 'loading' ? (
              <div className="w-8 h-8 rounded-full bg-slate-200/60 animate-pulse" />
            ) : (
              <Link
                href="/login"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm transition bg-[#0a192f] text-white hover:bg-[#132c5b]"
              >
                <LogIn className="w-4 h-4" />
                <span>Log in</span>
              </Link>
            )}
          </nav>
        </div>
      </header>
      {menu}
      <ApiKeyModal isOpen={isKeyModalOpen} onClose={() => setIsKeyModalOpen(false)} />
    </>
  );
}
