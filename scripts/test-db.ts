import "dotenv/config";
import { PrismaClient } from "../lib/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DIRECT_URL!,
});

console.log(process.env.DIRECT_URL);

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  const user = await prisma.user.create({
    data: {
      email: "alex@example.com",
      username: "alex",
    },
  });

  console.log(user);
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
