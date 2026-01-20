import { Router } from "express";
import {
  createCategory,
  deleteCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
} from "../controllers/category.controller";
import upload from "../middlewares/upload";

const router = Router();

router.post("/", upload.single("image"), createCategory);
router.get("/", getAllCategories);
router.get("/:id", getCategoryById);
router.delete("/:categoryId", deleteCategory);
router.put("/:categoryId", updateCategory);

export default router;
