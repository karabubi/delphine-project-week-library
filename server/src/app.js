import "dotenv/config";
import express, { json } from "express";
import cors from "cors";
import db from "./util/db-connect.js";
import usersRoutes from "./routes/users.js";
import booksRoutes from "./routes/books.js";
import authors from "./routes/authors.js";
import authorsRoutes from "./routes/authors.js"; // NOT authors.jsx
import { sql } from "@vercel/postgres";
const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(json());

app.use("/users", usersRoutes);
app.use("/books", booksRoutes);
app.use("/authors", authorsRoutes);

app.get("/", (req, res) => {
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log("api running on port " + PORT);
});
