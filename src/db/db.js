import mongoose from "mongoose";
import "dotenv/config";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.DB_URI}/${DB_NAME}`
    );
    console.log(`DB connected ! ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error", error);
    // throw error;
    process.exit(1);
  }
};
export default connectDB;
