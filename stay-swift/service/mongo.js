import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(
      String(process.env.MONGODB_CONNECTION_STRING)
    );
    console.log("MongoDB connected");
    return conn;
  } catch (error) {
    console.log(error);
  }
};
