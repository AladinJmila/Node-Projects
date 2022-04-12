const express = require('express');
const router = express.Router();
const { User } = require('../models/user');

router.get('/login', (req, res) => {
  res.render('users/login');
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

  res.send('passed');
});

module.exports = router;
