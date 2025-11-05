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

  const handleSearch = (query: string): void => {
    console.log(query);
  }

  return (
    <>
      <CustomHeader title="GIF Finder" description="Find the perfect GIF for your situation" />

      <SearchBar placeholder="Search for a GIF" onSearch={handleSearch} />

      <PreviousSearches searches={previousSearches} onPreviousSearchClick={handlePreviousSearchClick} />

      <GifList gifs={mockGifs} />
    </>
  )
};