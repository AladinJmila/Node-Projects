const express = require('express');
const router = express.Router();
const { Media } = require('../models/media');

router.get('/', async (req, res) => {
  const media = await Media.findById('62628c495d4dd624aa2a3c9b').lean();

  res.send(media);
});

module.exports = router;

router.post('/create-media', async (req, res) => {
  console.log(req.body);
});
