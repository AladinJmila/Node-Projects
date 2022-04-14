const mongoose = require('mongoose');
const { Schema } = mongoose;

const User = mongoose.model(
  'User',
  new Schema({
    googleID: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    firstName: String,
    lastName: String,
    image: String,
  })
);

exports.User = User;
