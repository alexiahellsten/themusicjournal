import { prisma } from "../../prisma";
import type { DiscogsArtist } from "../../types/discogs";

export async function importArtists(artists: DiscogsArtist[]) {
  return Promise.all(
    artists.map((artist) =>
      prisma.artist.upsert({
        where: {
          discogsId: artist.id,
        },
        update: {
          name: artist.name,
        },
        create: {
          name: artist.name,
          discogsId: artist.id,
        },
      }),
    ),
  );
}
