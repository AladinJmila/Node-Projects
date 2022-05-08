const express = require('express');
const router = express.Router();
const { createMedia } = require('../models/media');

router.get('/', async (req, res) => {
  // await createMedia();

  res.render('index');
});

module.exports = router;
