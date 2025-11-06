import { mockGifs } from './mock-data/gifs.mock';
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { GifList } from './gifs/components/GifList';
import { useState } from 'react';

export const GifsApp = () => {

  const [previousSearches, setPreviousSearches] = useState(['dragon ball', 'super mario', 'pokemon']);

  const handlePreviousSearchClick = (search: string): void => {
    console.log(search);
  }

  const handleSearchInput = (query: string): void => {
    if (query.trim() === '') return;

    const newSearchTerm = query.trim().toLowerCase();

    console.log('includes', previousSearches.includes(newSearchTerm));

    if (previousSearches.includes(newSearchTerm)) return;

    setPreviousSearches(prev => [newSearchTerm, ...prev].slice(0, 4));
  }

  return (
    <>
      <CustomHeader title="GIF Finder" description="Find the perfect GIF for your situation" />

      <SearchBar placeholder="Search for a GIF" onSearch={handleSearchInput} />

      <PreviousSearches searches={previousSearches} onPreviousSearchClick={handlePreviousSearchClick} />

      <GifList gifs={mockGifs} />
    </>
  )
};