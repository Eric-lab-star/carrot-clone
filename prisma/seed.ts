import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function main() {
  Array.from(Array(100).keys()).forEach(async (item) => {
    await client?.stream.create({
      data: {
        name: String(item),
        price: String(item),
        description: String(item),
        user: {
          connect: {
            id: 1,
          },
        },
      },
    });
    console.log(`${item}/500`);
  });
}

main()
  .catch((e) => console.log(e))
  .finally(() => client.$disconnect());
