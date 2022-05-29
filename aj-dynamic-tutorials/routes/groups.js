const express = require('express');
const Group = require('../models/group');
const router = express.Router();

router.post('/', async (req, res) => {
  // if (req.body.parentGroup) {

  // }

  const group = new Group({
    application: req.body.application,
    name: req.body.name,
  });

  await group.save();

  res.status(200);
});

module.exports = router;
