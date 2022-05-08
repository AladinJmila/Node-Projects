const express = require('express');
const router = express.Router();
const { Feature } = require('../models/feature');
const Slide = require('../models/slide');

router.get('/', async (req, res) => {
  const feature = await Feature.findById('62628c495d4dd624aa2a3c9b').lean();

  res.send(feature);
});

router.post('/create-feature', async (req, res) => {
  const { appName, parentName, name } = req.body;
  const feature = new Feature({
    appName,
    parentName,
    name,
  });

  await feature.save();

  let slide;
  if (feature.slides.length === 0) {
    slide = new Slide({
      featureId: feature._id,
      name: 'init',
    });

    await slide.save();
  }

  const data = {
    featureId: feature._id,
    slideId: slide._id,
  };
  // feature = await Feature.findById(feature._id).lean();

  res.render('index', { data });
  // res.send(feature).render('index');
  // res.redirect('/../');
});

module.exports = router;
