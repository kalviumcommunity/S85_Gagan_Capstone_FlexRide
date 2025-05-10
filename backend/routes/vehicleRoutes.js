import express from "express";
import Vehicle from "../models/Vehicle.js";

const router = express.Router();

// GET all vehicles
router.get("/", async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.status(200).json(vehicles);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch vehicles" });
  }
});

// POST a new vehicle
router.post("/", async (req, res) => {
  try {
    const vehicle = new Vehicle(req.body); 
    await vehicle.save();
    res.status(201).json(vehicle); 
  } catch (err) {
    console.error("Error creating vehicle:", err.message);
    res.status(500).json({ error: "Failed to create vehicle" });
  }
});

export default router;
