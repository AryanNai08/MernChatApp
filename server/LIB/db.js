import mongoose from "mongoose";

// Function to connect to MongoDB database
export const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("✅ MongoDB connected")
    );

    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
  }
};
