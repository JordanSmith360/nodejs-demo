import express from "express";
import dotenv from "dotenv";
import users from "./apis/users.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});

app.get("/", async (_, res) => {
  res.send("Hello World");
});

app.use("/user", users);
