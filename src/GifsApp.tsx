import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { GifList } from './gifs/components/GifList';
import { useGifs } from './gifs/hooks/useGifs';

export const GifsApp = () => {

  const { previousSearches, stickers, handlePreviousSearchClick, handleSearchInput } = useGifs();

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