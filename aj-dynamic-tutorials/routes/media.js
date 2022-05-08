const express = require('express');
const router = express.Router();
const { Media } = require('../models/media');

router.get('/', async (req, res) => {
  const media = await Media.findById('62628c495d4dd624aa2a3c9b').lean();

  res.send(media);
});

router.post('/create-media', async (req, res) => {
  const { appName, parentName, featureName } = req.body;
  let media = new Media({
    appName,
    parentName,
    featureName,
    slides: [{ name: 'init' }],
  });

  await media.save();

  // media = await Media.findById(media._id).lean();
  const slide = {
    _id: media.slides[media.slides.length - 1]._id,
    name: media.slides[media.slides.length - 1].name,
  };

  res.render('index', { slide });
  // res.send(media).render('index');
  // res.redirect('/../');
});

module.exports = router;
