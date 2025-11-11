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

      <SearchBar placeholder="Search for a Sticker" onSearch={handleSearchInput} />

      {previousSearches.length > 0 && (
        <PreviousSearches searches={previousSearches} onPreviousSearchClick={handlePreviousSearchClick} />
      )}

      <GifList gifs={stickers} />

      <footer style={{ marginTop: "2rem", textAlign: "center", color: "#888", fontSize: "0.9rem" }}>
        &copy; {new Date().getFullYear()} Bryan Guillen. All rights reserved.
        <br />
        <a
          href="https://www.linkedin.com/in/bryanguillen/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#888", textDecoration: "underline" }}
        >
          LinkedIn
        </a>
      </footer>
    </>
  )
};