// src/routes/packageRoutes.js
const express = require("express");
const Package = require("../models/Package");

const router = express.Router();

// GET /api/packages - Fetch all packages
router.get("/packages", async (req, res) => {
  try {
    const packages = await Package.find();
    res.json(packages);
  } catch (error) {
    console.error("Error fetching packages:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
