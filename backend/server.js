// server.js

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const packageRoutes = require("./routes/packageRoutes");
const industriesRoutes = require("./routes/industriesRoutes");

dotenv.config();

const app = express();

// Middleware
app.use(express.json()); 

app.use(cors());

// Placeholder route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Use the package routes at /api
app.use("/api", packageRoutes);
app.use("/api", industriesRoutes);

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
