import { prisma } from "./"

const users = [
  {
    username: "admin",
    email: "admin@example.com",
    password: "admin",
  },
  {
    username: "user",
    email: "user@example.com",
    password: "user",
  },
  {
    username: "user2",
    email: "user2@example.com",
    password: "user2",
  },
]

const seed = async () => {
  try {
    await prisma.user.createMany({ data: users })
    console.log(`Database has been seeded. 🌱`)
  } catch (err) {
    console.error(`Error seeding the database: ${err}`)
    process.exit(1)
  }
}

seed()
