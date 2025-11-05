import type { Gif } from "../../mock-data/gifs.mock";

interface GifListProp {
  gifs: Gif[];
}

export const GifList = ({ gifs }: GifListProp) => {
  return (
    <div className="gifs-container">
        {gifs.map((gif) => (
          <div className="gif-card" key={gif.id}>
            <img src={gif.url} alt={gif.title} />
            <h3>{gif.title}</h3>
            <p>{gif.width} x {gif.height} (1.5Mb)</p>
          </div>
        ))}
      </div>
  )
}