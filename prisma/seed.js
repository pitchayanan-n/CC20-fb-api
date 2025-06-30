import prisma from "../src/config/prisma.config.js";
import bcrypt from "bcryptjs";

const hashedPassword = bcrypt.hashSync("123456", 10);

const userData = [
  {
    firstName: "Andy",
    lastName: "Codecamp",
    password: hashedPassword,
    email: "andy@ggg.mail",
    profileImage: "https://www.svgrepo.com/show/420360/avatar-batman-comics.svg",
  },
  {
    firstName: "Bobby",
    lastName: "Codecamp",
    password: hashedPassword,
    email: "bobby@ggg.mail",
    profileImage:
      "https://www.svgrepo.com/show/420329/anime-away-face.svg",
  },
  {
    firstName: "Candy",
    lastName: "Codecamp",
    password: hashedPassword,
    mobile: "1111111111",
    profileImage: "https://www.svgrepo.com/show/434124/joker.svg",
  },
  {
    firstName: "Danny",
    lastName: "Codecamp",
    password: hashedPassword,
    mobile: "2222222222",
    profileImage:
      "https://www.svgrepo.com/show/18543/superheroe.svg",
  },
];

const postData = [
  { message: "Hello1", userId: 2 },
  { message: "Hello2", userId: 4 },
];

async function seedDB() {
  await prisma.user.createMany({ data: userData, skipDuplicates: true });
  await prisma.post.createMany({ data: postData, skipDuplicates: true });
}

seedDB()
  .then(console.log("DB Seed Successful"))
  .catch(console.log)
  .finally(prisma.$disconnect());
