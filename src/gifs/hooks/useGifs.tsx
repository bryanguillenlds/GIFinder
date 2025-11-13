import { useRef, useState } from 'react';
import { getStickersByQuery } from '../actions/get-stickers-by-query.action';
import type { Sticker } from '../interfaces/sticker.interface';

// Alternative to useRef so it persists across renders.
// const stickersCache: Record<string, Sticker[]> = {};

export const useGifs = () => {
  const [previousSearches, setPreviousSearches] = useState<string[]>([]);
  const [stickers, setStickers] = useState<Sticker[]>([]);

  // useRef allows us to persist data across renders (does not trigger re-renders).
  // (it is only persistent for this component instance, but that is ok for our use case)
  const stickersCacheRef = useRef<Record<string, Sticker[]>>({});

  const handlePreviousSearchClick = async (search: string): Promise<void> => {
    setStickers(stickersCacheRef.current[search]);
  }

  const handleSearchInput = async (query: string): Promise<void> => {
    if (query.trim() === '') return;

    const newSearchTerm = query.trim().toLowerCase();

    if (previousSearches.includes(newSearchTerm)) return;

    setPreviousSearches(prev => [newSearchTerm, ...prev].slice(0, 4));

    const stickers = await getStickersByQuery(newSearchTerm);

    setStickers(stickers);

    stickersCacheRef.current[newSearchTerm] = stickers;
  }

  return {
    previousSearches,
    stickers,

    handlePreviousSearchClick,
    handleSearchInput,
  }
}