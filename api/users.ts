import express, { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const router: Router = express.Router();

router.get("/", async (req, res) => {
  const users = await prisma.user.findMany();
  res.send(users);
});

router.get("/dummy", async (req, res) => {
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

export default router;
