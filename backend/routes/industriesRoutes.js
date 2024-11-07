// src/routes/industriesRoutes.js
const express = require("express");
const List = require("../models/listModel");

const router = express.Router();

// GET /api/industries - Fetch all industries (lists)
router.get("/industries", async (req, res) => {
  try {
    const industries = await List.find(); 
    res.json(industries); 
  } catch (error) {
    console.error("Error fetching industries:", error);
    res.status(500).json({ message: "Server error" });  // Handle errors gracefully
  }
});

module.exports = router;
