const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Create a new user
  const newUser = await prisma.user.create({
    data: {
      name: 'Mar',
      email: 'mar@prisma.io',
    },
  });
  console.log('Created new user:', newUser);

  // Fetch all users
  const allUsers = await prisma.user.findMany();
  console.log('All users:', allUsers);
}


  // const updateUser = await prisma.user.update({
  //   where: {
  //     id: 1
  //   },
  //   data: {
  //     name: 'Alice',
  //     email: 'alice@prisma.io',
  //   },
  // });

  // const deleteUser = await prisma.user.delete({
  //   where: {
  //     id: 1
  //   }
  // });

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
