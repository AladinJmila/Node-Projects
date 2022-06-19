const mongoose = require('mongoose');

const Slide = mongoose.model(
  'Slide',
  new mongoose.Schema({
    features: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'feature',
        required: true,
      },
    ],
    name: { type: String, required: true },
    imageName: { type: String, default: '' },
    editedImageName: { type: String, default: '' },
    audioName: { type: String, default: '' },
    notes: { type: String, default: '' },
    duration: { type: Number, default: 0 },
    isViewed: { type: Boolean, default: false },
  })
);

module.exports = Slide;
