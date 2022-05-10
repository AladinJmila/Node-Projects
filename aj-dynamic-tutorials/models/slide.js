const mongoose = require('mongoose');

const Slide = mongoose.model(
  'Slide',
  new mongoose.Schema({
    featureId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'feature',
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    imageName: {
      type: String,
      default: '',
    },
    audioName: {
      type: String,
      default: '',
    },
    notes: String,
    isSeen: {
      type: Boolean,
      default: false,
    },
  })
);

module.exports = Slide;
