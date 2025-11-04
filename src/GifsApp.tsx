import { mockGifs } from './mock-data/gifs.mock';
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';
import { PreviousSearches } from './gifs/components/PreviousSearches';

export const GifsApp = () => {
  return (
    <>
      <CustomHeader title="GIF Finder" description="Find the perfect GIF for your situation" />

      <SearchBar placeholder="Search for a GIF" />

      <PreviousSearches />

      <div className="gifs-container">
        {mockGifs.map((gif) => (
          <div className="gif-card" key={gif.id}>
            <img src={gif.url} alt={gif.title} />
            <h3>{gif.title}</h3>
            <p>{gif.width} x {gif.height} (1.5Mb)</p>
          </div>
        ))}
      </div>
    </>
  )
};