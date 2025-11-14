import { describe, it, expect } from "vitest";
import { useGifs } from "./useGifs";
import { renderHook, waitFor } from "@testing-library/react";
import * as stickersActions from '../actions/get-stickers-by-query.action';
import { vi } from "vitest";

describe("useGifs", () => {
  it('should return default values and methods', () => {
    const { result } = renderHook(() => useGifs());

    const { previousSearches, stickers, handlePreviousSearchClick, handleSearchInput } = result.current;

    expect(previousSearches).toEqual([]);
    expect(stickers).toEqual([]);
    expect(handlePreviousSearchClick).toBeDefined();
    expect(handleSearchInput).toBeDefined();
  });

  it('should return a list of stickers', async () => {
    const { result } = renderHook(() => useGifs());

    await result.current.handleSearchInput('test');

    // waitFor retries the assertion until the state update is reflected or it times out.
    // This is needed because React batches state updates (groups multiple updates together)
    // and applies them asynchronously, so the state change isn't immediately visible after await.
    await waitFor(() => {
      expect(result.current.stickers).toHaveLength(10);
    });
  });

  it('should return a list of stickers from cache when handlePreviousSearchClick is called', async () => {
    const { result } = renderHook(() => useGifs());

    // First populate the cache
    await result.current.handleSearchInput('test');

    await result.current.handlePreviousSearchClick('test');

    await waitFor(() => {
      expect(result.current.stickers).toHaveLength(10);
    });
  });

  it('should return no more than 4 previous searches', async () => {
    // SpyOn takes an object as the first argument and the method name as the second argument.
    // So we need to import the sticker actions as a namespace import at the top of the file, not a named import.
    // So that we can access it as stickersActions.getStickersByQuery and spy that.
    vi.spyOn(stickersActions, 'getStickersByQuery').mockResolvedValue([]);

    const { result } = renderHook(() => useGifs());

    await result.current.handleSearchInput('test');
    await result.current.handleSearchInput('test2');
    await result.current.handleSearchInput('test3');
    await result.current.handleSearchInput('test4');
    await result.current.handleSearchInput('test5');

    await waitFor(() => {
      expect(result.current.previousSearches).toHaveLength(4);
      expect(result.current.previousSearches).toEqual(['test5', 'test4', 'test3', 'test2']);
    });
  });
})