import { Request, Response, NextFunction } from "express";
import Category from "../models/category.model";
import Restaurant from "../models/restaurant.model";
import { title } from "node:process";

// GET ALL CATEGORIES
export const getAllCategories = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // Get all categories from the database
    const categories = await Category.find();
    // Send the categories to the client
    res
      .status(200)
      .json({ message: "Categories fetched successfully.", categories });
  } catch (error) {
    next(error);
  }
};

// GET CATEGORY BY ID
export const getCategoryById = async (req: Request, res: Response) => {
  try {
    // Get the category ID from the request parameters
    const { id } = req.params;

    // Get the category from the database
    const category = await Category.findById(id).populate("restaurant", "name");

    // check if Category Exists
    if (!category) {
      return res.status(404).json({ message: "Category not found." });
    }

    // Send the category to the client
    res
      .status(200)
      .json({ message: "Category fetched successfully.", category });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch category", error });
  }
};

// CREATE CATEGORY
export const createCategory = async (req: Request, res: Response) => {
  try {
    // Get the category data from the request body
    const { title, restaurant } = req.body;

    // Get the image file path if it exists
    const image = req.file ? req.file.path : "";

    // Create the category in the database
    const newCategory = await Category.create({ title, restaurant, image });

    // Update restaurant categories
    await Restaurant.findByIdAndUpdate(restaurant, {
      $push: { categories: newCategory._id },
    });

    // Send the category to the client
    res
      .status(201)
      .json({ message: "Category created successfully.", newCategory });
  } catch (error) {
    res.status(500).json({ message: "Failed to create category", error });
  }
};

// UPDATE CATEGORY
export const updateCategory = async (req: Request, res: Response) => {
  try {
    // Get the category ID from the request parameters
    const { categoryId } = req.params;

    // Get the category data from the request body
    const { title, restaurant } = req.body;

    // Update the category from the database
    const updatedCategory = await Category.findByIdAndUpdate(
      categoryId,
      { title, restaurant },
      { new: true },
    );

    // Updated the updated category information in the Restaurant categories list
    await Restaurant.findByIdAndUpdate(restaurant, {
      $addToSet: { categories: categoryId },
    });

    // Send the category to the client
    res
      .status(200)
      .json({ message: "Category updated successfully.", updatedCategory });
  } catch (error) {
    res.status(500).json({ message: "Failed to update category", error });
  }
};

// DELETE CATEGORY
export const deleteCategory = async (req: Request, res: Response) => {
  try {
    // Get the category ID from the request parameters
    const { categoryId } = req.params;

    // check if Category Exists
    const foundCategory = await Category.findById(categoryId);
    if (!foundCategory) {
      return res.status(404).json({ message: "Category not found." });
    }

    // Delete the category from the database
    await Category.findByIdAndDelete(categoryId);

    // Update restaurant categories list to remove the deleted category
    await Restaurant.findByIdAndUpdate(foundCategory.restaurant, {
      $pull: { categories: categoryId },
    });

    // Send the category to the client
    res.status(204).json({ message: "Category deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete category", error });
  }
};

// DELETE ALL CATEGORIES
export const deleteAllCategories = async (req: Request, res: Response) => {
  try {
    // Delete all categories from the database
    // Send the categories to the client
  } catch (error) {
    res.status(500).json({ message: "Failed to delete categories", error });
  }
};
