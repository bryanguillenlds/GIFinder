import { describe, it, expect } from "vitest";
import { useGifs } from "./useGifs";
import { renderHook, waitFor } from "@testing-library/react";

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
})