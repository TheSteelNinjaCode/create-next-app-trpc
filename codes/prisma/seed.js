const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// User data
const userData = [
  {
    name: "Juan",
  },
];

async function main() {
  // Prisma Seed Data for PostgresSQL
  // User
  // Code below is for PostgresSQL
  // ========================================
  // await prisma.user.deleteMany();
  // await prisma.user.createMany({ data: userData });
  // Reset sequence
  // users is the name of the table in the database
  // id_seq is the name of the sequence in the database that is auto increment
  // Code below is for PostgresSQL
  // ========================================
  // await prisma.$executeRaw`ALTER SEQUENCE users_id_seq RESTART WITH 1`;
  // Prisma Seed Data for MySQL
  // User
  // Code below is for MySQL
  // ========================================
  // await prisma.user.deleteMany();
  // await prisma.user.createMany({ data: userData });
  // Reset sequence
  // users is the name of the table in the database
  // id is the name of the column in the table that is auto increment
  // Code below is for MySQL
  // ========================================
  // await prisma.$executeRaw`ALTER TABLE users AUTO_INCREMENT = 1`;
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
