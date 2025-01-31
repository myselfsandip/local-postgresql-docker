import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log:['info','query']});

async function main() {
    await prisma.user.create({
        data:{
            email: "random2@gmail.com",
            name: "Random Bitch 2"
        }
    })
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });

    