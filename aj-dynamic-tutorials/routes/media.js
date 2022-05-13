const express = require('express');
const router = express.Router();
const Feature = require('../models/feature');
const Slide = require('../models/slide');

router.get('/', async (req, res) => {
  const feature = await Feature.findById('62628c495d4dd624aa2a3c9b').lean();

  res.send(feature);
});

router.get('/slides/:id', async (req, res) => {
  const slide = await Slide.findById(req.params.id).lean();

  res.render('index', { slide });
});

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
  if (feature) {
    feature.slides.forEach(async slide => {
      const slideInDb = await Slide.findById(slide);
      if (slideInDb.name === 'init') {
        const index = feature.slides.indexOf(slide);
        if (index > -1) feature.slides.splice(index, 1);
        await Slide.findByIdAndDelete(slide);
      }
    });
  }

  const slide = new Slide({
    feature: feature._id,
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
  const slide = await Slide.findByIdAndUpdate(req.params.id, {
    name: req.body.slideName,
    notes: req.body.notes,
    isSolo: req.body.isSolo,
    hasNext: req.body.hasNext,
    duration: parseInt(req.body.duration),
  });

  let feature = await Feature.findById(slide.feature);
  if (!feature.slides.includes(slide._id)) {
    feature.slides.push(slide._id);
    await feature.save();
  }
  if (feature.slides.includes(slide._id)) {
    feature.duration += parseInt(req.body.duration);
    await feature.save();
  }

  feature = await Feature.findById(slide.feature).lean();
  // res.render('index', { feature });
  res.redirect(`/media/slides/${slide._id}`);
});

module.exports = router;
