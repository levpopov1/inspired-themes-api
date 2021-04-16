import ColorSchema from './color';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ThemeSchema = new Schema({
  id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  collection: {
    type: String,
    required: true
  },
  slug: {
    type: String
  },
  image: {
    type: String,
    required: true
  },
  colors: {
    primary: {
      type: ColorSchema
    },
    secondary: {
      type: ColorSchema
    },
    highlight: {
      type: ColorSchema
    },
    dark: {
      type: ColorSchema
    },
    light: {
      type: ColorSchema
    }
  }
});

module.exports = mongoose.model('Theme', ThemeSchema, 'themes');