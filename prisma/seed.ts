import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

async function main() {
  const hashedPassword = await bcrypt.hash("Shunya3379", 12)

  await prisma.user.upsert({
    where: { email: "shunya.180071@gmail.com" },
    update: {},
    create: {
      name: "shunya071",
      email: "shunya.180071@gmail.com",
      hashedPassword,
    },
  })

  console.log("Admin user created")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
