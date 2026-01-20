import express from "express";
import { connectDB } from "./db.config";
import restaurantRoutes from "./routes/restaurant.routes";
import categoryRoutes from "./routes/category.routes";
import { notFoundHandler } from "./middlewares/notFoundHandler";
import { errorHandler } from "./middlewares/errorHandler";
import path from "path";

const app = express();

connectDB();

const port = process.env.PORT;

// Middleware
app.use(express.json());

// Routes
app.use("/restaurants", restaurantRoutes);
app.use("/categories", categoryRoutes);

// Serve uploaded files
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// Error Handling
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
