import { PrismaClient } from '@prisma/client';

// Never print the connection string itself; it contains database credentials.
if (!process.env.DATABASE_URL) {
  console.error(
    '[Prisma] DATABASE_URL is not configured. Set it in the Vercel environment variables for this deployment.',
  );
}

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
