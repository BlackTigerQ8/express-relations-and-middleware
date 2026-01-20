import { Request, Response } from "express";

// GET ALL CATEGORIES
export const getAllCategories = async (req: Request, res: Response) => {
  try {
    // Get all categories from the database
    // Send the categories to the client
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch categories", error });
  }
};

// GET CATEGORY BY ID
export const getCategoryById = async (req: Request, res: Response) => {
  try {
    // Get the category ID from the request parameters
    // Get the category from the database
    // check if Category Exists
    // Send the category to the client
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch category", error });
  }
};

// CREATE CATEGORY
export const createCategory = async (req: Request, res: Response) => {
  try {
    // Get the category data from the request body
    // Get the image file path if it exists
    // Create the category in the database
    // Update restaurant categories
    // Send the category to the client
  } catch (error) {
    res.status(500).json({ message: "Failed to create category", error });
  }
};

// UPDATE CATEGORY
export const updateCategory = async (req: Request, res: Response) => {
  try {
    // Get the category ID from the request parameters
    // Get the category data from the request body
    // Update the category from the database
    // Updated the updated category information in the Restaurant categories list
    // Send the category to the client
  } catch (error) {
    res.status(500).json({ message: "Failed to update category", error });
  }
};

// DELETE CATEGORY
export const deleteCategory = async (req: Request, res: Response) => {
  try {
    // Get the category ID from the request parameters
    // check if Category Exists
    // Delete the category from the database
    // Update restaurant categories list to remove the deleted category
    // Send the category to the client
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
