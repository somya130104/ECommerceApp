import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import { connectDB } from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import upload from "./middleware/multer.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import dotenv from "dotenv";
dotenv.config();


//App Config
const app = express();
const port = process.env.PORT || 4000;
console.log("MongoDB URI:", process.env.MONGODB_URI);
connectDB();
connectCloudinary();

//Middlewares
app.use(express.json()); //This line is used to parse the JSON data that is sent to the server.
app.use(cors()); //This line allows us the access the server from any IP.

//API Endpoints
app.use("/api/user", userRouter); //This line tells Express.js that whenever a request starts with /api/user, it should be handled by userRouter
app.use("/api/product", productRouter); //This line tells Express.js that whenever a request starts with /api/product, it should be handled by productRouter.
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.get("/", (req, res) => res.status(200).send("Hello World"));

//Listener
app.listen(port, () => console.log(`Listening on localhost:${port}`));
