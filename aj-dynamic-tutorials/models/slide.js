const mongoose = require('mongoose');

const Slide = mongoose.model(
  'Slide',
  new mongoose.Schema({
    feature: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'feature',
      required: true,
    },
    name: { type: String, required: true },
    imageName: { type: String, default: '' },
    audioName: { type: String, default: '' },
    notes: { type: String, default: '' },
    duration: { type: Number, default: 0 },
    isSeen: { type: Boolean, default: false },
    isSolo: { type: Boolean, default: true },
    hasNext: { type: Boolean, default: false },
  })
);

module.exports = Slide;
