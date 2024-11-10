const mongoose = require('mongoose');

const businessDataSchema = new mongoose.Schema({
  selectedIndustries: [String],
  aboutBusiness: String,
  textAreaText: String,
  visaNumber: Number,
  uae: String,
  optionsbox: [String],
  locations: [String],
  turnOver: String,
});

const BusinessData = mongoose.model('BusinessData', businessDataSchema);
module.exports = BusinessData;
