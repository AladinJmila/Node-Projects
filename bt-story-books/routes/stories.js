const express = require('express');
const router = express.Router();
const { auth } = require('../services/auth');

router.get('/', (req, res) => {
  res.render('stories/index');
});

router.get('/add', auth, (req, res) => {
  res.render('stories/add');
});

module.exports = router;
