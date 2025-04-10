// server.js

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { connectDB } from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import upload from "./middleware/multer.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// Load environment variables from .env
dotenv.config();

// App configuration
const app = express();
const port = process.env.PORT || 4000;

// Allowed origins for CORS (local + production)
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174", // local dev frontend
  "https://foreverfrontend-ten.vercel.app",
  "https://foreverfrontend-ten.vercel.app/", // production frontend
  "https://foreveradmin-two.vercel.app", // production admin
];

// Middleware
app.use(express.json()); // Parse incoming JSON

// CORS Configuration
var corsOptions = {
  origin: [
    "https://foreverfrontend-ten.vercel.app",
    "https://foreveradmin-two.vercel.app",
  ],
  optionsSuccessStatus: 200, // For legacy browser support
};

app.use(cors(corsOptions));

// Connect to MongoDB and Cloudinary
console.log("🟡 Connecting to MongoDB...");
connectDB();

console.log("🟡 Connecting to Cloudinary...");
connectCloudinary();

// Routes
app.get("/", (req, res) => {
  res.status(200).send("✅ Server is running successfully!");
});

app.get("/api/test-cors", (req, res) => {
  res.json({ success: true, message: "✅ CORS is working fine!" });
});

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// Server listener
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
