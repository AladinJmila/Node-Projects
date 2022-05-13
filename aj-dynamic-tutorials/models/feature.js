const mongoose = require('mongoose');
const { Schema } = mongoose;

const Feature = mongoose.model(
  'Feature',
  new Schema({
    group: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Group',
      required: true,
    },
    name: { type: String, required: true },
    duration: { type: Number, default: 0 },
    watchedDuration: { type: Number, default: 0 },
    slides: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Slide',
      },
    ],
  })
);

module.exports = Feature;
