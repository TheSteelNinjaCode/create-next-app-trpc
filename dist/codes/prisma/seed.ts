import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// UserRole
const userRoleData = [
  {
    name: "Admin",
  },
  {
    name: "User",
  },
];

// User
const userData = [
  {
    name: "Juan",
    email: "j@gmail.com",
    password: "$2b$10$mgjotYzIXwrK1MCWmu4tgeUVnLcb.qzvqwxOq4FXEL8k2obwXivDi", // TODO: template password 1234 (bcrypt) testing only
    roleId: 1,
  },
];

async function main() {
  // ========================================
  // Code for PostgreSQL
  // ----------------------------------------
  // UserRole
  // ----------------------------------------
  // await prisma.userRole.deleteMany();
  // await prisma.userRole.createMany({ data: userRoleData });
  // await prisma.$executeRaw`ALTER SEQUENCE userRole_id_seq RESTART WITH 1`;
  // ----------------------------------------
  // User
  // ----------------------------------------
  // await prisma.user.deleteMany();
  // await prisma.user.createMany({ data: userData });
  // await prisma.$executeRaw`ALTER SEQUENCE users_id_seq RESTART WITH 1`;
  // ========================================
  // Code for MySQL
  // ----------------------------------------
  // UserRole
  // ----------------------------------------
  // await prisma.userRole.deleteMany();
  // await prisma.userRole.createMany({ data: userRoleData });
  // await prisma.$executeRaw`ALTER TABLE userRole AUTO_INCREMENT = 1`;
  // ----------------------------------------
  // User
  // ----------------------------------------
  // await prisma.user.deleteMany();
  // await prisma.user.createMany({ data: userData });
  // await prisma.$executeRaw`ALTER TABLE users AUTO_INCREMENT = 1`;
  // ========================================
  // Code for MongoDB
  // ----------------------------------------
  // UserRole
  // ----------------------------------------
  // await prisma.userRole.deleteMany();
  // await prisma.userRole.createMany({ data: userRoleData });
  // ----------------------------------------
  // User
  // ----------------------------------------
  // await prisma.user.deleteMany();
  // await prisma.user.createMany({ data: userData });
  // ========================================
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
