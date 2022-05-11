const mongoose = require('mongoose');

const Apllication = mongoose.model(
  'Application',
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 0,
    },
    groups: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group',
      },
    ],
  })
);

exports.Application = Apllication;
