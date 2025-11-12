import { describe, it, expect } from "vitest";
import { giphyApi } from "./giphy.api";

describe("giphyApi", () => {
  it("should be configured correctly", () => {
    expect(giphyApi.defaults.baseURL).toBe("https://api.giphy.com/v1/stickers");
    expect(giphyApi.defaults.params).toEqual({
      bundle: "messaging_non_clips",
      rating: "r",
      api_key: import.meta.env.VITE_GIPHY_API_KEY,
    });
  });
});
