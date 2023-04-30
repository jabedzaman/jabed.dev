import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.signature.create({
    data: {
      name: "John Doe",
      email: "johndoe@gmail.com",
      message: "Hello World",
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
