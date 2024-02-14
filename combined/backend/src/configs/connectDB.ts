import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoURL = process.env.MONGO_URL || "";

const connectDB = mongoose.connect(mongoURL);

export default connectDB;
