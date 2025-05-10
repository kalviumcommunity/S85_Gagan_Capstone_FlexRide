import express from "express";
import Vehicle from "../models/Vehicle.js";

const router = express.Router();

// GET 
router.get("/", async (req, res) => {
  try {
    const vehicles = await Vehicle.find().populate('owner', 'name email');
    res.status(200).json(vehicles);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch vehicles" });
  }
});

// POST 
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

//PUT
router.put("/:id", async (req, res) => {
  try {
    const updatedVehicle = await Vehicle.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedVehicle) {
      return res.status(404).json({ error: "Vehicle not found" });
    }

    res.status(200).json(updatedVehicle);
  } catch (err) {
    console.error("Error updating vehicle:", err.message);
    res.status(500).json({ error: "Failed to update vehicle" });
  }
});

export default router;
