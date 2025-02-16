const { PrismaClient } = require("@prisma/client"); // Fix: Destructuring import
const prisma = new PrismaClient({
    log: ["query"], // Optional: Logs all Prisma queries
});

module.exports = prisma; // Fix: Proper module export
