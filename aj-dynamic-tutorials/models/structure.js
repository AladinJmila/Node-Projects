const mongoose = require('mongoose');

const Structure = mongoose.model(
  'Structure',
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
  })
);
