import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/common/Navbar";
import { SessionProvider } from "@/components/providers/SessionProvider";

export const metadata: Metadata = {
  title: "Vocabulum - Vocabulary Learning",
  description: "Create flashcards, context exercises, and quizzes from your vocabulary.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-black min-h-screen flex flex-col selection:bg-slate-200 selection:text-black relative">
        {/* Global soft orbs so liquid-glass blur is visible site-wide */}
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-sky-200/45 blur-3xl" />
          <div className="absolute top-1/4 -right-24 w-96 h-96 rounded-full bg-indigo-200/40 blur-3xl" />
          <div className="absolute bottom-10 left-1/3 w-80 h-80 rounded-full bg-emerald-100/45 blur-3xl" />
          <div className="absolute top-2/3 left-10 w-64 h-64 rounded-full bg-violet-100/35 blur-3xl" />
        </div>

        <SessionProvider>
          <Navbar />
          <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</main>
          <footer className="no-print liquid-glass border-0 border-t border-white/40 py-6 text-center text-xs">
            <p>© {new Date().getFullYear()} Vocabulum • Vocabulary Learning Studio</p>
          </footer>
        </SessionProvider>
      </body>
    </html>
  );
}
