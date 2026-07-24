import { prisma } from "../../prisma";
import { getRelease } from "../../api/discogs";

import { importArtists } from "./import-artists";
import { importLabels } from "./import-labels";
import { importTracks } from "./import-tracks";
import { importGenres, importStyles } from "./import-metadata";

export async function importAlbum(discogsId: number) {
  const release = await getRelease(discogsId);

  const artists = await importArtists(release.artists);

  const labels = await importLabels(release.labels);

  const genres = await importGenres(release.genres);

  const styles = await importStyles(release.styles);

  const album = await prisma.album.upsert({
    where: {
      discogsId,
    },

    update: {
      title: release.title,
      coverImage: release.images?.[0]?.uri ?? null,

      artists: {
        connect: artists.map((artist) => ({
          id: artist.id,
        })),
      },

      labels: {
        connect: labels.map((label) => ({
          id: label.id,
        })),
      },

      genres: {
        connect: genres.map((genre) => ({
          id: genre.id,
        })),
      },

      styles: {
        connect: styles.map((style) => ({
          id: style.id,
        })),
      },
    },

    create: {
      title: release.title,
      discogsId: release.id,
      coverImage: release.images?.[0]?.uri ?? null,

      artists: {
        connect: artists.map((artist) => ({
          id: artist.id,
        })),
      },

      labels: {
        connect: labels.map((label) => ({
          id: label.id,
        })),
      },

      genres: {
        connect: genres.map((genre) => ({
          id: genre.id,
        })),
      },

      styles: {
        connect: styles.map((style) => ({
          id: style.id,
        })),
      },
    },
  });

  await importTracks(album.id, release.tracklist);

  return album;
}
