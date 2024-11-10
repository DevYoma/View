// src/routes/packageRoutes.js
const express = require("express");
const Package = require("../models/Package");
const BusinessData = require("../models/BusinessData");

const router = express.Router();

// GET /api/businessdata - Fetch all businessdata
router.get("/businessdata", async (req, res) => {
  try {
    const businessData = await BusinessData.find();
    res.json(businessData);
  } catch (error) {
    console.error("Error fetching packages:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
