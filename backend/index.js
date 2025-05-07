import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js"; // use your reusable DB connection function
import vehicleRoutes from "./routes/vehicleRoutes.js";

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/vehicles", vehicleRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the FlexRide API");
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
