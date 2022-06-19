const express = require('express');
const Feature = require('../models/feature');
const Group = require('../models/group');
const Slide = require('../models/slide');
const router = express.Router();

router.post('/', async (req, res) => {
  const feature = new Feature({
    groups: [req.body.groupId],
    name: req.body.name,
  });

  await feature.save();

  const groups = await Promise.all(
    feature.groups.map(async groupId => {
      return Group.findById(groupId);
    })
  );

  groups.forEach(async group => {
    group.features.push(feature._id);
    await group.save();
  });

  res.send('Success');
});

router.get('/:id', async (req, res) => {
  const feature = await Feature.findById(req.params.id);
  const slides = await Promise.all(
    feature.slides.map(async slideId => {
      return await Slide.findById(slideId);
    })
  );

  res.send(slides);
});

module.exports = router;
