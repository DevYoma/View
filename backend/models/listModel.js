const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  }
});

const List = mongoose.model('List', listSchema);

module.exports = List;
