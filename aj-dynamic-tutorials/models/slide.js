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
    imageURL: {
      type: String,
      default: '',
    },
    audioURL: {
      type: String,
      default: '',
    },
    note: String,
    isSeen: {
      type: Boolean,
      default: false,
    },
  })
);

module.exports = Slide;
