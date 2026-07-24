import { prisma } from "../../prisma";
import type { DiscogsTrack } from "../../types/discogs";

export async function importTracks(
  albumId: string,
  tracks: DiscogsTrack[] = [],
) {
  await prisma.track.deleteMany({
    where: {
      albumId,
    },
  });

  if (!tracks.length) return;

  await prisma.track.createMany({
    data: tracks.map((track) => ({
      albumId,
      position: track.position,
      title: track.title,
      duration: track.duration ?? null,
    })),
  });
}
