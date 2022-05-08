const mongoose = require('mongoose');
const { Schema } = mongoose;

const Feature = mongoose.model(
  'Feature',
  new Schema({
    appName: {
      type: String,
      required: true,
    },
    parentName: String,
    name: {
      type: String,
      required: true,
    },
    slides: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Slide',
      },
    ],
  })
);

exports.Feature = Feature;
