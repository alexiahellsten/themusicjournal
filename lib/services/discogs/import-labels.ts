import { prisma } from "../../prisma";
import type { DiscogsLabel } from "../../types/discogs";

export async function importLabels(labels: DiscogsLabel[] = []) {
  return Promise.all(
    labels.map((label) =>
      prisma.label.upsert({
        where: {
          discogsId: label.id,
        },
        update: {
          name: label.name,
        },
        create: {
          name: label.name,
          discogsId: label.id,
        },
      }),
    ),
  );
}
