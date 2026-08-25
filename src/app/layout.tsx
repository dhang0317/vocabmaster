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
      <body className="bg-slate-50 text-black min-h-screen flex flex-col selection:bg-slate-200 selection:text-black">
        <SessionProvider>
          <Navbar />
          <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</main>
          <footer className="no-print border-t border-black/20 py-6 text-center text-xs bg-white">
            <p>© {new Date().getFullYear()} Vocabulum • Vocabulary Learning Studio</p>
          </footer>
        </SessionProvider>
      </body>
    </html>
  );
}
