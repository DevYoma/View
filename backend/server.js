// server.js

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const packageRoutes = require("./routes/packageRoutes");
const industriesRoutes = require("./routes/industriesRoutes");
const businessDataRoutes = require("./routes/businessDataRoutes");
const BusinessData = require("./models/BusinessData");

dotenv.config();

const app = express();

// Middleware
app.use(express.json()); 

app.use(cors());

// Placeholder route
app.get("/", (req, res) => {
  res.send("Backend is running");
  res.json({ message: "Backend is running" });
});

// Use the package routes at /api
app.use("/api", packageRoutes);
app.use("/api", industriesRoutes);
app.use("/api", businessDataRoutes);

// POST route to handle the data submission
app.post("/api/business", async (req, res) => {
  try {
    const {
      selectedIndustries,
      aboutBusiness,
      textAreaText,
      visaNumber,
      uae,
      optionsbox,
      locations,
      turnOver
    } = req.body;

    // Create a new BusinessData document
    const newBusinessData = new BusinessData({
      selectedIndustries,
      aboutBusiness,
      textAreaText,
      visaNumber,
      uae,
      optionsbox,
      locations,
      turnOver
    });

    // Save the data to the database
    await newBusinessData.save();

    // Respond with success
    res.status(201).json({
      message: "Data saved successfully",
      data: newBusinessData
    });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ error: "Failed to save data" });
  }
});


// Database connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Connection error:", error));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
