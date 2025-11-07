import axios from "axios";

export const giphyApi = axios.create({
  baseURL: "https://api.giphy.com/v1/stickers",
  params: {
    bundle: "messaging_non_clips",
    rating: "r",
    api_key: import.meta.env.VITE_GIPHY_API_KEY,
  },
});
