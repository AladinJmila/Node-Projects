const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const passport = require('passport');

router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/',
    successRedirect: '/dashboard',
  })
);

router.get('/verify', (req, res) => {
  if (req.user) console.log(req.user);
  else console.log('Not auth');
});

router.get('/logout', (req, res) => {
  req.logOut();
  res.redirect('/');
});

module.exports = router;
