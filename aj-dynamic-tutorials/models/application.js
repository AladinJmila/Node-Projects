const mongoose = require('mongoose');

const Application = mongoose.model(
  'Application',
  new mongoose.Schema({
    name: { type: String, required: true },
    duration: { type: Number, default: 0 },
    watchedDuration: { type: Number, default: 0 },
    groups: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group',
      },
    ],
  })
);

module.exports = Application;
