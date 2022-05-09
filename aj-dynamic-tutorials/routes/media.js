const express = require('express');
const router = express.Router();
const { Feature } = require('../models/feature');
const Slide = require('../models/slide');

router.get('/', async (req, res) => {
  const feature = await Feature.findById('62628c495d4dd624aa2a3c9b').lean();

  res.send(feature);
});

router.get('/update-slide/:id', async (req, res) => {});

router.post('/create-feature', async (req, res) => {
  const { appName, parentName, name } = req.body;
  let feature = new Feature({
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
  }

  const featureData = {
    featureId: feature._id,
  };

  res.render('index', { featureData });
});

router.post('/create-slide', async (req, res) => {
  const feature = await Feature.findById(req.body.featureId);
  // Add feature null checking

  const slide = new Slide({
    featureId: feature._id,
    name: 'init',
  });

  await slide.save();

  feature.slides.push(slide._id);
  await feature.save();

  const slideData = {
    featureId: feature._id,
    slideId: slide._id,
  };

  res.render('index', { slideData });
});

router.put('/update-slide/:id', async (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  res.send('');
});

module.exports = router;
