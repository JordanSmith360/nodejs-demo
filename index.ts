import express from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();

const app = express();
const port = process.env.PORT;
const prisma = new PrismaClient();

app.get("/", async (req, res) => {
  const users = await prisma.user.findMany();
  res.send(users);
});

app.get("/dummy", async (req, res) => {
  const user = await prisma.user.createMany({
    data: [
      {
        username: "Test1",
      },
      {
        username: "Test2",
      },
      {
        username: "Test3",
      },
    ],
  });
  res.send("Created Dummy Data");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
