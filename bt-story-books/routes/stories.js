const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const { auth } = require('../services/auth');
const { Story } = require('../models/story');

router.get('/', async (req, res) => {
  const stories = await Story.find({ status: 'public' })
    .populate('creator')
    .sort('-_id')
    .lean();

  res.render('stories/index', { stories });
});

router.get('/add', auth, (req, res) => {
  res.render('stories/add');
});

router.post('/add', auth, async (req, res) => {
  const { title, status, allowComments, body } = req.body;

  const story = new Story({
    title,
    status,
    body,
    allowComments: allowComments ? true : false,
    creator: req.user._id,
  });

  await story.save();

  res.redirect(`/stories/show/${story._id}`);
});

module.exports = router;
