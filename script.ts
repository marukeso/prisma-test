import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
// const prisma = new PrismaClient({ log: ['query'] })

async function main() {
  const user = await prisma.user.findMany({
    where: {
      name: { not: 'Sally' },
    },
  })

  console.log(user)
}

main()
  .catch((e) => {
    console.error(e.message)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
