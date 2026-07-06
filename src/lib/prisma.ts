import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

// const globalForPrisma = globalThis as {
//     prisma: PrismaClient;
// };

declare global {
    var prisma: PrismaClient | undefined;
}

if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL environment variable is not set.");
}`'`

export const prisma =
    global.prisma ??     // or i can use globalThis.prisma
    (() => {
        const pool = new Pool({
            connectionString: process.env.DATABASE_URL,
        });

        const adapter = new PrismaPg(pool);

        return new PrismaClient({ adapter });
    })();

if (process.env.NODE_ENV !== "production") {
    global.prisma = prisma;
}
