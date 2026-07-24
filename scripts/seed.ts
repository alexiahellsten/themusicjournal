import "dotenv/config";
import { PrismaClient } from "../lib/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  console.log("Starting seed...");

  const user = await prisma.user.upsert({
    where: {
      email: "alex@example.com",
    },
    update: {},
    create: {
      email: "alex@example.com",
      username: "alex",
      avatarUrl: null,
    },
  });

  console.log("Created user:", user.username);

  const pinkFloyd = await prisma.artist.create({
    data: {
      name: "Pink Floyd",
      discogsId: 1,
    },
  });

  const milesDavis = await prisma.artist.create({
    data: {
      name: "Miles Davis",
      discogsId: 2,
    },
  });

  console.log("Created artists");

  const darkSide = await prisma.album.create({
    data: {
      title: "The Dark Side of the Moon",
      releaseDate: new Date("1973-03-01"),
      coverImage: "https://example.com/dark-side.jpg",
      discogsId: 249504,
      artists: {
        connect: {
          id: pinkFloyd.id,
        },
      },
    },
  });

  const kindOfBlue = await prisma.album.create({
    data: {
      title: "Kind of Blue",
      releaseDate: new Date("1959-08-17"),
      coverImage: "https://example.com/kind-of-blue.jpg",
      discogsId: 2377,
      artists: {
        connect: {
          id: milesDavis.id,
        },
      },
    },
  });

  console.log("Created albums");

  await prisma.collection.create({
    data: {
      userId: user.id,
      albumId: darkSide.id,
      status: "OWNED",
      rating: 10,
      notes: "Classic album.",
      purchasePrice: 30,
    },
  });

  await prisma.collection.create({
    data: {
      userId: user.id,
      albumId: kindOfBlue.id,
      status: "OWNED",
      rating: 10,
      notes: "Essential jazz record.",
      purchasePrice: 25,
    },
  });

  console.log("Created collection entries");

  await prisma.review.create({
    data: {
      userId: user.id,
      albumId: darkSide.id,
      text: "A masterpiece that changed music forever.",
      rating: 10,
      mood: "Relaxed",
    },
  });

  console.log("Created review");

  console.log("Seed completed!");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
