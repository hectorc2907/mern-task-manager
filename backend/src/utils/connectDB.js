import mongoose from "mongoose";
import { MONGODB_URI } from "./envConfig.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
  } catch (error) {
    console.error(error);
  }
};

mongoose.connection.on("connected", () => {
  console.log("MongoDB is connected to", mongoose.connection.db.databaseName);
});