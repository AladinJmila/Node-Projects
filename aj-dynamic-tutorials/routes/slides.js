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
    feature: feature._id,
    name: 'init',
  });

  await slide.save();

  feature.slides.push(slide._id);
  await feature.save();

  res.send('Success');
});

router.put('/slide/:id', async (req, res) => {
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
  res.redirect(`/media/slides/${slide._id}`);
});

module.exports = router;
