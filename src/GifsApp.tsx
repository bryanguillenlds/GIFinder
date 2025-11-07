import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { GifList } from './gifs/components/GifList';
import { useState } from 'react';
import { getStickersByQuery } from './gifs/actions/get-stickers-by-query.action';
import type { Sticker } from './gifs/interfaces/sticker.interface';

export const GifsApp = () => {

  const [previousSearches, setPreviousSearches] = useState<string[]>([]);
  const [stickers, setStickers] = useState<Sticker[]>([]);

  const handlePreviousSearchClick = (search: string): void => {
    handleSearchInput(search);
  }

  const handleSearchInput = async (query: string): Promise<void> => {
    if (query.trim() === '') return;

    const newSearchTerm = query.trim().toLowerCase();

    if (previousSearches.includes(newSearchTerm)) return;

    setPreviousSearches(prev => [newSearchTerm, ...prev].slice(0, 4));

    const stickers = await getStickersByQuery(newSearchTerm);

    setStickers(stickers);
  }

  return (
    <>
      <CustomHeader title="Sticker Finder" description="Find the perfect Sticker for your chat! (Rated R)" />

      <SearchBar placeholder="Search for a GIF" onSearch={handleSearchInput} />

      {previousSearches.length > 0 && (
        <PreviousSearches searches={previousSearches} onPreviousSearchClick={handlePreviousSearchClick} />
      )}

      <GifList gifs={stickers} />
    </>
  )
};