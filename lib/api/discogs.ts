const BASE_URL = "https://api.discogs.com";

const headers = {
  "User-Agent": process.env.DISCOGS_USER_AGENT!,
  Authorization: `Discogs token=${process.env.DISCOGS_TOKEN}`,
};

export async function searchReleases(query: string) {
  const params = new URLSearchParams({
    q: query,
    type: "release",
    per_page: "20",
  });

  const response = await fetch(`${BASE_URL}/database/search?${params}`, {
    headers,
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Discogs search failed");
  }

  const data = await response.json();

  return data.results.map((release: any) => ({
    id: release.id,
    title: release.title,
    year: release.year,
    cover: release.cover_image,
    thumb: release.thumb,
    genre: release.genre ?? [],
    style: release.style ?? [],
    label: release.label ?? [],
  }));
}

export async function getRelease(id: number) {
  const response = await fetch(`${BASE_URL}/releases/${id}`, {
    headers,
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch Discogs release ${id}`);
  }

  return response.json();
}
