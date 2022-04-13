const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ideaSchema = new Schema({
  creatorId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
});

const Idea = mongoose.model('Idea', ideaSchema);

exports.Idea = Idea;
