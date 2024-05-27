import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;

import express from "express";
import CookieParser from "cookie-parser";
const app = express();

const connect = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB Conneted!");
  } catch (error) {
    throw error;
  }
};

//middlewares
app.use(CookieParser());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.listen(PORT, () => {
  connect();
  console.log(`Server started at port ${PORT}`);
});
