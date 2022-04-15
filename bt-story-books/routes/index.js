const express = require('express');
const router = express.Router();
const { auth, guest } = require('../services/auth');
const { Story } = require('../models/story');

router.get('/', guest, (req, res) => {
  res.render('index/welcome');
});

router.get('/dashboard', auth, async (req, res) => {
  const stories = await Story.find({ user: req.user.id }).sort('-_id').lean();
  res.render('index/dashboard', { stories });
});

router.get('/about', (req, res) => {
  res.render('index/about');
});

module.exports = router;
