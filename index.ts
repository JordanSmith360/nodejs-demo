import express from "express";
import dotenv from "dotenv";
import users from "./api/users";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});

app.use("/user", users);
