import type { DeckData, GeneratedWord } from '@/types';

const STORAGE_KEY = 'vocabmaster:guest-decks:v1';

export type GuestDeck = DeckData & {
  description: string;
  isGuest: true;
};

function canUseStorage(): boolean {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
}

export function getGuestDecks(): GuestDeck[] {
  if (!canUseStorage()) return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item): item is GuestDeck =>
      !!item && typeof item === 'object' &&
      typeof (item as GuestDeck).id === 'string' &&
      typeof (item as GuestDeck).title === 'string' &&
      Array.isArray((item as GuestDeck).words)
    );
  } catch {
    return [];
  }
}

export function getGuestDeck(id: string): GuestDeck | undefined {
  return getGuestDecks().find(deck => deck.id === id);
}

export function saveGuestDeck(deck: GuestDeck): void {
  if (!canUseStorage()) throw new Error('此瀏覽器目前無法使用本機儲存。');
  const decks = getGuestDecks();
  const next = [deck, ...decks.filter(item => item.id !== deck.id)];
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    throw new Error('瀏覽器儲存空間不足，請匯出或刪除部分單字本後再試。');
  }
}

export function deleteGuestDeck(id: string): void {
  if (!canUseStorage()) return;
  const next = getGuestDecks().filter(deck => deck.id !== id);
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
}

export function updateGuestWord(deckId: string, wordId: string, isMastered: boolean): GuestDeck | undefined {
  const deck = getGuestDeck(deckId);
  if (!deck) return undefined;
  const updated: GuestDeck = {
    ...deck,
    updatedAt: new Date().toISOString(),
    words: deck.words.map((word: GeneratedWord) =>
      word.id === wordId ? { ...word, isMastered } : word
    ),
  };
  saveGuestDeck(updated);
  return updated;
}
