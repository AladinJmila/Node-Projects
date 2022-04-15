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

router.get('/edit/:id', async (req, res) => {
  const story = await Story.findById(req.params.id).lean();

  res.render('stories/edit', { story });
});

router.get('/show/:id', async (req, res) => {
  const story = await Story.findById(req.params.id)
    .populate('creator')
    .populate('comments.commentUser')
    .lean();
  story.date = story['_id'].getTimestamp();

  res.render('stories/show', { story });
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

router.post('/comment/:id', async (req, res) => {
  const story = await Story.findById(req.params.id);

  story.comments.unshift({
    commentBody: req.body.commentBody,
    commentUser: req.user._id,
  });

  await story.save();

  res.redirect(`/stories/show/${story._id}`);
});

router.put('/:id', async (req, res) => {
  const { title, status, allowComments, body } = req.body;

  await Story.findByIdAndUpdate(req.params.id, {
    title,
    status,
    body,
    allowComments: allowComments ? true : false,
  });
  res.redirect('/dashboard');
});

router.delete('/:id', async (req, res) => {
  await Story.findByIdAndDelete(req.params.id);

  res.redirect('/dashboard');
});

module.exports = router;
