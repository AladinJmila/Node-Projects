const express = require('express');
const router = express.Router();
const Slide = require('../models/slide');
const Feature = require('../models/feature');

router.post('/', async (req, res) => {
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
    features: [feature._id],
    name: 'init',
  });

  await slide.save();

  feature.slides.push(slide._id);
  await feature.save();

  res.send('Success');
});

router.put('/:id', async (req, res) => {
  const slide = await Slide.findByIdAndUpdate(req.params.id, {
    name: req.body.slideName,
    notes: req.body.notes,
    duration: parseInt(req.body.duration),
  });

  const features = await Promise.all(
    slide.features.map(async featureId => {
      return await Feature.findById(featureId);
    })
  );

  features.forEach(async feature => {
    if (feature.slides.includes(slide._id)) {
      feature.duration += parseInt(req.body.duration);
      await feature.save();
    }
  });

  res.send('Success');
});

module.exports = router;
