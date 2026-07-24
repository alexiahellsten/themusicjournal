import { prisma } from "../../prisma";

export async function importGenres(genres: string[] = []) {
  return Promise.all(
    genres.map((genre) =>
      prisma.genre.upsert({
        where: {
          name: genre,
        },
        update: {},
        create: {
          name: genre,
        },
      }),
    ),
  );
}

export async function importStyles(styles: string[] = []) {
  return Promise.all(
    styles.map((style) =>
      prisma.style.upsert({
        where: {
          name: style,
        },
        update: {},
        create: {
          name: style,
        },
      }),
    ),
  );
}
