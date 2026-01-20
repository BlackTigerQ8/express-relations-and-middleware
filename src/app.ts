import express from "express";
import { connectDB } from "./db.config";

const app = express();

connectDB();

const port = process.env.PORT;

// Middleware
app.use(express.json());

// Routes

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
