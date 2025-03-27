import userModel from "../models/userModel.js";

// Add to the cart
export const addToCart = async (req, res) => {
  try {
    const { userId, itemId, size } = req.body;

    // Fetch user data
    const userData = await userModel.findById(userId);
    console.log("User Data:", userData);

    // Check if user exists
    if (!userData) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Initialize cart data if it doesn't exist
    let cartData = userData.cartData || {};

    // Handle cart item addition
    if (!cartData[itemId]) {
      cartData[itemId] = {};
    }

    if (cartData[itemId][size]) {
      cartData[itemId][size] += 1;
    } else {
      cartData[itemId][size] = 1;
    }

    // Log updated cart data
    console.log("Updated Cart Data:", cartData);

    // Update the user's cart data
    try {
      await userModel.findByIdAndUpdate(userId, { cartData });
      res.json({ success: true, message: "Added to Cart" });
    } catch (dbError) {
      console.error("Database Error:", dbError);
      return res
        .status(500)
        .json({ success: false, message: "Database update failed" });
    }
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update user cart
export const updateCart = async (req, res) => {
  try {
    const { userId, itemId, size, quantity } = req.body;
    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;

    cartData[itemId][size] = quantity;
    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Updated the Cart Quantity." });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Failed to update the cart." });
  }
};

// Get user cart data
export const getUserData = async (req, res) => {
  try {
    const { userId } = req.body;

    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;

    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Failed to update the cart." });
  }
};
