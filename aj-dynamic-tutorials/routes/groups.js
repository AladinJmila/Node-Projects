const express = require('express');
const Group = require('../models/group');
const router = express.Router();

router.post('/', async (req, res) => {
  const group = new Group({
    application: req.body.application,
    name: req.body.name,
    isTopLevel: !Boolean(req.body.parentGroupId),
  });

  await group.save();

  if (req.body.parentGroupId) {
    const parentGroup = await Group.findById(req.body.parentGroupId);
    parentGroup.groups.push(group._id);

    await parentGroup.save();
  }

  // res.redirect(`/tutorials/show/${req.body.application}`);//
  res.status(200).send('Success');
});

module.exports = router;
