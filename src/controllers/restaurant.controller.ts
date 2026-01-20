import { Request, Response } from "express";
import Restaurant from "../models/restaurant.model";

// GET ALL RESTAURANTS
export const getAllRestaurants = async (req: Request, res: Response) => {
  try {
    // Get all restaurants from the database
    const restaurants = await Restaurant.find().populate(
      "categories",
      "title items",
    );

    // Send the restaurants to the client
    res
      .status(200)
      .json({ message: "Restaurants fetched successfully.", restaurants });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch restaurants", error });
  }
};

// GET RESTAURANT BY ID
export const getRestaurantById = async (req: Request, res: Response) => {
  try {
    // Get the restaurant ID from the request parameters
    const { id } = req.params;

    // Get the restaurant from the database
    const restaurant = await Restaurant.findById(id);

    // Check if restaurant exists
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found." });
    }

    // Send the restaurant to the client
    res
      .status(200)
      .json({ message: "Restaurant fetched successfully.", restaurant });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch restaurant", error });
  }
};

// CREATE RESTAURANT
export const createRestaurant = async (req: Request, res: Response) => {
  try {
    // Get the restaurant data from the request body
    const { name } = req.body;

    // Create the restaurant in the database
    const newRestaurant = await Restaurant.create({ name });

    // Send the restaurant to the client
    res
      .status(201)
      .json({ message: "Restaurant created successfully.", newRestaurant });
  } catch (error) {
    res.status(500).json({ message: "Failed to create restaurant", error });
  }
};

// UPDATE RESTAURANT
export const updateRestaurant = async (req: Request, res: Response) => {
  try {
    // Get the restaurant ID from the request parameters
    // Get the restaurant data from the request body
    // Update the restaurant from the database
    // Send the restaurant to the client
  } catch (error) {
    res.status(500).json({ message: "Failed to update restaurant", error });
  }
};

// DELETE RESTAURANT
export const deleteRestaurant = async (req: Request, res: Response) => {
  try {
    // Get the restaurant ID from the request parameters
    // Delete the restaurant from the database
    // Send the restaurant to the client
  } catch (error) {
    res.status(500).json({ message: "Failed to delete restaurant", error });
  }
};
