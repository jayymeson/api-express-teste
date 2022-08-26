import express from "express";
import * as path from 'path'
import { Router, Request, Response } from "express";

const app = express();
console.log(path);

const route = Router();

app.use(express.json());

route.get("/", (req: Request, res: Response) => {
  res.json({ message: "hello world with Typescript" });
});

app.use(route);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  if (!process.env.PORT) {
    console.log(`API is running 🚀 on port http://localhost:${port}`);
  }
});
