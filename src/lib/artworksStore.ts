import { Artwork } from "@/types/artwork";
import { INITIAL_ARTWORKS } from "@/data/artworks";

const LOCAL_STORAGE_KEY = "chitralekha_artworks_store_v1";

export async function fetchArtworks(): Promise<Artwork[]> {
  try {
    const res = await fetch("/api/artworks", { cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        if (typeof window !== "undefined") {
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
        }
        return data;
      }
    }
  } catch (err) {
    console.warn("Could not fetch from API, falling back to local storage or defaults", err);
  }

  // Fallback to localStorage if available
  if (typeof window !== "undefined") {
    const cached = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      } catch {
        // ignore parse error
      }
    }
  }

  return INITIAL_ARTWORKS;
}
