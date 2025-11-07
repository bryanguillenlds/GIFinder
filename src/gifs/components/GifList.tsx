import type { Sticker } from "../interfaces/sticker.interface";

interface GifListProp {
  gifs: Sticker[];
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