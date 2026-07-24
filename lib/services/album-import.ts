import { prisma } from "../prisma";
import { getRelease } from "../api/discogs";

export async function importAlbum(discogsId: number) {
  const release = await getRelease(discogsId);

  const artists = await Promise.all(
    release.artists.map((artist) =>
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

  const album = await prisma.album.upsert({
    where: {
      discogsId: release.id,
    },
    update: {
      title: release.title,
      coverImage: release.images?.[0]?.uri ?? null,
      releaseDate: release.year ? new Date(`${release.year}-01-01`) : null,

      artists: {
        connect: artists.map((artist) => ({
          id: artist.id,
        })),
      },
    },

    create: {
      title: release.title,
      discogsId: release.id,
      coverImage: release.images?.[0]?.uri ?? null,
      releaseDate: release.year ? new Date(`${release.year}-01-01`) : null,

      artists: {
        connect: artists.map((artist) => ({
          id: artist.id,
        })),
      },
    },
  });

  return album;
}
