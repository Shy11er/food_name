import { Prisma, PrismaClient } from '@prisma/client';

async function makeAdmin(): Promise<Prisma.AdminCreateInput> {
  return {
    id: '9e4fc098-281c-4f07-b011-58c36a90a246',
    email: 'admin@bk.ru',
    password: '1234',
    name: 'YashaLava',
  };
}

export async function seedAdmin(prisma: PrismaClient) {
  const adminData = await makeAdmin();

  await prisma.admin.upsert({
    where: { id: adminData.id },
    create: adminData,
    update: adminData,
  });
}
