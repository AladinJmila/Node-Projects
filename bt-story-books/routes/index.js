const express = require('express');
const router = express.Router();
const { auth, guest } = require('../services/auth');

router.get('/', guest, (req, res) => {
  res.render('index/welcome');
});

router.get('/dashboard', auth, (req, res) => {
  res.render('index/dashboard');
});

router.get('/about', (req, res) => {
  res.render('index/about');
});

module.exports = router;
