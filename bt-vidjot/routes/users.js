const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const { User } = require('../models/user');

router.get('/login', (req, res) => {
  res.render('users/login');
});

router.post('/login', async (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/ideas',
    failureRedirect: '/users/login',
    failureFlash: true,
  })(req, res, next);
});

router.get('/register', (req, res) => {
  res.render('users/register');
});

router.post('/register', async (req, res) => {
  const { name, email, password, password2 } = req.body;

  let errors = { empty: true };
  if (password !== password2)
    errors = { ...errors, empty: false, match: 'Passwords do not match' };

  if (password.length < 4)
    errors = {
      ...errors,
      empty: false,
      length: 'Passwords must be at least 4 characters',
    };

  if (!errors.empty)
    return res.render('users/register', {
      errors,
      name,
      email,
      password,
      password2,
    });

  const userInDb = await User.findOne({ email });
  if (userInDb) {
    errors = { ...errors, email: 'This email is already registered!' };

    res.render('users/register', {
      errors,
      name,
      email,
      password,
      password2,
    });
    return;
  }

  const user = await new User({
    name,
    email,
    password,
  });

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  await user.save();

  req.flash('successMsg', 'You are now registered and can login');
  res.redirect('/users/login');
});

module.exports = router;
