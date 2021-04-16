const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ColorSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  hex: {
    type: String,
    required: true
  },
  rgb: {
    type: String
  },
  hsl: {
    type: String
  }
});

module.exports = ColorSchema;