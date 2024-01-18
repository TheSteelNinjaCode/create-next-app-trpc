import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// User
const userData = [
  {
    name: "Juan",
    email: "j@gmail.com",
    password: "$2b$10$mgjotYzIXwrK1MCWmu4tgeUVnLcb.qzvqwxOq4FXEL8k2obwXivDi", // TODO: template password 1234 (bcrypt) testing only
    roleId: 1,
  },
];

// UserRole
const userRoleData = [
  {
    name: "Admin",
  },
  {
    name: "User",
  },
];

async function main() {
  // ========================================
  // Code for PostgreSQL
  // ----------------------------------------
  // User
  // ----------------------------------------
  // await prisma.user.deleteMany();
  // await prisma.user.createMany({ data: userData });
  // ----------------------------------------
  // UserRole
  // ----------------------------------------
  // await prisma.userRole.deleteMany();
  // await prisma.userRole.createMany({ data: userRoleData });
  // await prisma.$executeRaw`ALTER SEQUENCE "UserRole_id_seq" RESTART WITH 1`;
  // ========================================
  // Code for MySQL
  // ----------------------------------------
  // User
  // ----------------------------------------
  // await prisma.user.deleteMany();
  // await prisma.user.createMany({ data: userData });
  // ----------------------------------------
  // UserRole
  // ----------------------------------------
  // await prisma.userRole.deleteMany();
  // await prisma.userRole.createMany({ data: userRoleData });
  // await prisma.$executeRaw`ALTER TABLE UserRole AUTO_INCREMENT = 1`;
  // ========================================
  // Code for MongoDB
  // ----------------------------------------
  // User
  // ----------------------------------------
  // await prisma.user.deleteMany();
  // await prisma.user.createMany({ data: userData });
  // ----------------------------------------
  // UserRole
  // ----------------------------------------
  // await prisma.userRole.deleteMany();
  // await prisma.userRole.createMany({ data: userRoleData });
  // ========================================
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
