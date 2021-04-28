import mongoose from 'mongoose';
const Schema = mongoose.Schema;

var ThemeSchema = new Schema({
  id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  collectionName: {
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
    },
    secondary: {
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
    },
    highlight: {
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
    },
    dark: {
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
    },
    light: {
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
    }
  }
});

export default mongoose.model('Theme', ThemeSchema, 'themes');