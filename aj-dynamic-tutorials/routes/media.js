const express = require('express');
const router = express.Router();
const { Media } = require('../models/media');

router.get('/', async (req, res) => {
  const media = await Media.findById('626275a11470bc5ad105d522').lean();

  res.send(media);
});

module.exports = router;
