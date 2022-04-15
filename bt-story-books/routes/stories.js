const express = require('express');
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

router.get('/edit/:id', auth, async (req, res) => {
  const story = await Story.findById(req.params.id).lean();

  if (String(story.creator) !== String(req.user._id))
    return res.redirect('/stories');

  res.render('stories/edit', { story });
});

router.get('/show/:id', async (req, res) => {
  const story = await Story.findById(req.params.id)
    .populate('creator')
    .populate('comments.commentUser')
    .lean();
  story.date = story['_id'].getTimestamp();

  if (story.status === 'public') return res.render('stories/show', { story });

  if (req.user && String(req.user._id) === String(story.creator._id))
    return res.render('stories/show', { story });

  res.redirect('/stories');
});

router.get('/user/:userId', async (req, res) => {
  const stories = await Story.find({
    creator: req.params.userId,
    status: 'public',
  })
    .populate('creator')
    .sort('-_id')
    .lean();

  res.render('stories/index', { stories });
});

router.get('/my', auth, async (req, res) => {
  const stories = await Story.find({ creator: req.user._id })
    .populate('creator')
    .sort('-_id')
    .lean();

  res.render('stories/index', { stories });
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

router.post('/comment/:id', auth, async (req, res) => {
  const story = await Story.findById(req.params.id);

  story.comments.unshift({
    commentBody: req.body.commentBody,
    commentUser: req.user._id,
  });

  await story.save();

  res.redirect(`/stories/show/${story._id}`);
});

router.put('/:id', auth, async (req, res) => {
  const { title, status, allowComments, body } = req.body;

  await Story.findByIdAndUpdate(req.params.id, {
    title,
    status,
    body,
    allowComments: allowComments ? true : false,
  });
  res.redirect('/dashboard');
});

router.delete('/:id', auth, async (req, res) => {
  await Story.findByIdAndDelete(req.params.id);

  res.redirect('/dashboard');
});

module.exports = router;
