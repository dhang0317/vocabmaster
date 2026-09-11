export interface RawWordInput {
  word: string;
  pos?: string;
  translation?: string;
  phonetic?: string;
  definition?: string;
  example?: string;
  exampleZh?: string;
  /** Optional user-selected semantic tags for better cloze slot matching */
  semanticTags?: string[];
}

export interface GeneratedWord {
  id?: string;
  word: string;
  phonetic: string;
  pos: string;
  translation: string;
  definition: string;
  example: string;
  exampleZh: string;
  isMastered?: boolean;
  semanticTags?: string[];
}

export interface ClozeBlank {
  id: number;
  word: string;
  hint: string;
  options: string[];
}

/** Precomputed word/phrase translation for cloze highlight lookup (no API at read time). */
export interface GlossaryEntry {
  en: string;
  zh: string;
  sense?: string;
}

export interface GeneratedCloze {
  id?: string;
  title: string;
  content: string;
  contentZh: string;
  blanks: ClozeBlank[];
  /** Built at article generation time; used for instant highlight translation */
  glossary?: GlossaryEntry[];
}

export interface GeneratedQuiz {
  id?: string;
  question: string;
  questionZh?: string;
  targetWord: string;
  options: string[];
  correctIdx: number;
  explanation: string;
}

export interface DeckData {
  id: string;
  title: string;
  description?: string | null;
  isPublic?: boolean;
  publishedAt?: string | Date | null;
  createdAt: string | Date;
  updatedAt: string | Date;
  words: GeneratedWord[];
  articles: GeneratedCloze[];
  quizzes: GeneratedQuiz[];
  results?: {
    id: string;
    score: number;
    total: number;
    answersJson: string;
    createdAt: string | Date;
  }[];
}

export type GenerationLevel = 'elementary' | 'highschool' | 'toeic' | 'toefl_ielts' | 'advanced';
