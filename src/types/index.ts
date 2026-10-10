export interface RawWordInput {
  word: string;
  pos?: string;
  translation?: string;
  phonetic?: string;
  definition?: string;
  example?: string;
  exampleZh?: string;
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
}

export interface ClozeBlank {
  id: number;
  word: string;
  hint: string;
  options: string[];
}

export interface GeneratedCloze {
  id?: string;
  title: string;
  content: string; // text with [blank_1], [blank_2] ...
  contentZh: string;
  blanks: ClozeBlank[];
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
