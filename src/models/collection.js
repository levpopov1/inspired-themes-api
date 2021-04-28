import mongoose from 'mongoose';
const Schema = mongoose.Schema;

var CollectionSchema = new Schema({
  id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  themes: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'Theme'
  }]
});

CollectionSchema.pre(['find', 'findOne'], function(next) {
  this.populate('themes');
  next();
});

export default mongoose.model('Collection', CollectionSchema, 'collections');