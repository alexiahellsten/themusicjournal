import "dotenv/config";
import type { DiscogsRelease } from "../types/discogs";

const DISCOGS_URL = "https://api.discogs.com";

export async function getRelease(id: number): Promise<DiscogsRelease> {
  const response = await fetch(`${DISCOGS_URL}/releases/${id}`, {
    headers: {
      "User-Agent": process.env.DISCOGS_USER_AGENT!,
      Authorization: `Discogs token=${process.env.DISCOGS_TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Discogs request failed: ${response.status}`);
  }

  return response.json();
}
