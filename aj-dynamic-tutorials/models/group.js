const mongoose = require('mongoose');

const Group = mongoose.model(
  'Group',
  new mongoose.Schema({
    application: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    },
    name: { type: String, required: true },
    duration: { type: Number, default: 0 },
    watchedDuration: { type: Number, default: 0 },
    features: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Feature',
      },
    ],
  })
);

module.exports = Group;
