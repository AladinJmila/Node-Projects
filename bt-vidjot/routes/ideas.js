const express = require('express');
const router = express.Router();
const { Idea } = require('../models/idea');
const auth = require('../services/auth');

router.get('/', auth, async (req, res) => {
  const ideas = await Idea.find({}).sort('-_id').lean();

  res.render('ideas/index', { ideas });
});

router.get('/add', auth, (req, res) => {
  res.render('ideas/add');
});

router.get('/edit/:id', auth, async (req, res) => {
  const idea = await Idea.findOne({ _id: req.params.id }).lean();

  res.render('ideas/edit', { idea });
});

router.post('/', auth, async (req, res) => {
  const { title, details } = req.body;

  let errors = { empty: true };

  if (!title) errors = { ...errors, title: 'Please add a title', empty: false };
  if (!details)
    errors = { ...errors, details: 'Please add idea details', empty: false };

  if (!errors.empty) return res.render('ideas/add', { errors, title, details });

  const idea = new Idea({ title, details });
  await idea.save();

  req.flash('successMsg', 'Video idea added');
  res.redirect('/ideas');
});

router.put('/:id', auth, async (req, res) => {
  await Idea.findByIdAndUpdate(req.params.id, req.body);

  req.flash('successMsg', 'Video idea updated');
  res.redirect('/ideas');
});

router.delete('/:id', auth, async (req, res) => {
  await Idea.findByIdAndDelete(req.params.id);
  req.flash('successMsg', 'Video idea removed');
  res.redirect('/ideas');
});

module.exports = router;
