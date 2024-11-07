// src/models/Package.js
const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema({
  packageName: String,
  packageDescription: String,
  packagePrice: Number,
});

const Package = mongoose.model("Package", packageSchema);

module.exports = Package;
