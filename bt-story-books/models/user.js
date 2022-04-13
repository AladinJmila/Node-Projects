const mongoose = require('mongoose');

const User = mongoose.model('User', {
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
});

exports.User = User;
