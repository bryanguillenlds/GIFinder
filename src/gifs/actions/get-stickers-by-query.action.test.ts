import { describe, it, expect } from "vitest";
import { getStickersByQuery } from "./get-stickers-by-query.action";
import AxiosMockAdapter from "axios-mock-adapter";
import { giphyApi } from "../api/giphy.api";
import { giphyResponseMock } from "../../../tests/mocks/giphy.response";

const axiosMock = new AxiosMockAdapter(giphyApi);

describe("getStickersByQuery", () => {
  // it("should return the list of stickers by query", async () => {
  //   const stickers = await getStickersByQuery("test");
  //   const [sticker1] = stickers;

  //   expect(stickers).toHaveLength(10);

  //   expect(sticker1).toEqual({
  //     id: expect.any(String),
  //     title: expect.any(String),
  //     url: expect.any(String),
  //     width: expect.any(Number),
  //     height: expect.any(Number),
  //   });
  // });

  it("should return a list of stickers by query", async () => {
    axiosMock.onGet("/search").reply(200, giphyResponseMock);

    const stickers = await getStickersByQuery("shut up");

    expect(stickers).toHaveLength(2);

    stickers.forEach((sticker) => {
      expect(sticker).toEqual({
        id: expect.any(String),
        title: expect.any(String),
        url: expect.any(String),
        width: expect.any(Number),
        height: expect.any(Number),
      });
    });
  });
});
