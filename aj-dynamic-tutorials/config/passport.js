const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

module.exports = passport => {
  passport.use(
    new LocalStrategy(
      { usernameField: 'email' },
      async (email, password, done) => {
        const user = await User.findOne({ email }).lean();

        if (!user)
          return done(null, false, { message: 'Invalid email or password' });

        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;

          if (!isMatch)
            return done(null, false, { message: 'Invalid email or password' });

          if (isMatch) return done(null, user);
        });
      }
    )
  );
  passport.serializeUser((user, done) => done(null, user._id));

  passport.deserializeUser(async (id, done) => {
    await User.findById(id, (err, user) => done(err, user));
  });
};
