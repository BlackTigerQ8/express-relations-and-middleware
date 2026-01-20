import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const database = process.env.DATABASE_URL as string;

export const connectDB = async () => {
  try {
    await mongoose.connect(database);
    console.log("Database connected successfully");
  } catch (error) {
    console.log(error);
  }
};
