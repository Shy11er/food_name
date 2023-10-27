import { PrismaClient } from '@prisma/client';
import { seedAdmin } from './seedAdmin';

const prisma = new PrismaClient();
const seedFns = [seedAdmin];

async function main() {
  for (const seed of seedFns) {
    console.log('Running ' + seed.name);
    await seed(prisma);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    await prisma.$disconnect();
    console.error(`seed error: ${e}`);
    process.exit(1);
  });
