const express = require('express');
const Feature = require('../models/feature');
const Group = require('../models/group');
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

module.exports = router;
