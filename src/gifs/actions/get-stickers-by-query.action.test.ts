import { describe, it, expect, beforeEach, vi } from "vitest";
import { getStickersByQuery } from "./get-stickers-by-query.action";
import AxiosMockAdapter from "axios-mock-adapter";
import { giphyApi } from "../api/giphy.api";
import { giphyResponseMock } from "../../../tests/mocks/giphy.response";

const axiosMock = new AxiosMockAdapter(giphyApi);

beforeEach(() => {
  axiosMock.reset();
});

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

  it("should return an empty array if the query is empty", async () => {
    axiosMock.onGet("/search").reply(200, { data: [] });

    const stickers = await getStickersByQuery("");

    expect(stickers).toHaveLength(0);
  });

  it("should catch error and console.error it", async () => {
    axiosMock.onGet("/search").reply(500, { data: [] });

    const consoleErrorSpy = vi.spyOn(console, "error");

    await getStickersByQuery("test");

    expect(consoleErrorSpy).toHaveBeenCalledWith(expect.any(Error));
  });
});
