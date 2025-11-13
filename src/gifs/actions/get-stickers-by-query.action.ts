import type { GiphyResponse } from "../interfaces/giphy.response";
import type { Sticker } from "../interfaces/sticker.interface";
import { giphyApi } from "../api/giphy.api";

export const getStickersByQuery = async (query: string): Promise<Sticker[]> => {
  if (!query.trim()) {
    return [];
  }

  try {
    const { data: response } = await giphyApi.get<GiphyResponse>(`/search`, {
      params: {
        q: query,
        limit: 10,
        offset: 0,
        lang: "en",
      },
    });

    return response.data.map((sticker) => ({
      id: sticker.id,
      title: sticker.title,
      url: sticker.images.original.url,
      width: Number(sticker.images.original.width),
      height: Number(sticker.images.original.height),
    }));
  } catch (error) {
    console.error(error);

    return [];
  }
};
