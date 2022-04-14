const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { User } = require('../models/user');
const keys = require('./keys');

module.exports = passport => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        // passReqToCallback: true,
        // proxy: true
      },
      async (accessToken, refreshToken, profile, done) => {
        // console.log(accessToken);
        // console.log(profile);
        if (profile) {
          const userInDb = await User.findOne({
            email: profile.emails[0].value,
          }).lean();

          if (userInDb) {
            done(null, userInDb);
          } else {
            const user = new User({
              googleID: profile.id,
              email: profile.emails[0].value,
              firstName: profile.name.givenName,
              lastName: profile.name.familyName,
              image: profile.photos[0].value,
            });

            await user.save();
            done(null, user);
          }
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id).lean();
    done(null, user);
  });
};
