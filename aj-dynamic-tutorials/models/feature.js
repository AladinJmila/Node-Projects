const mongoose = require('mongoose');

const Feature = mongoose.model(
  'Feature',
  new mongoose.Schema({
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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Slide',
      },
    ],
  })
);

module.exports = Feature;
