const express = require('express');
const router = express.Router();
const { Idea } = require('../models/Idea');

router.get('/', async (req, res) => {
  const ideas = await Idea.find({}).sort('-_id').lean();

  res.render('ideas/index', { ideas });
});

router.get('/add', (req, res) => {
  res.render('ideas/add');
});

router.get('/edit/:id', async (req, res) => {
  const idea = await Idea.findOne({ _id: req.params.id }).lean();

  res.render('ideas/edit', { idea });
});

router.post('/', async (req, res) => {
  const { title, details } = req.body;

  const errors = [];

  if (!title) errors.push({ text: 'Please add a title' });
  if (!details) errors.push({ text: 'Please add some details' });

  if (errors.length) return res.render('ideas/add', { errors, title, details });

  const idea = new Idea({ title, details });
  await idea.save();

  req.flash('successMsg', 'Video idea added');
  res.redirect('/ideas');
});

router.put('/:id', async (req, res) => {
  await Idea.findByIdAndUpdate(req.params.id, req.body);

  req.flash('successMsg', 'Video idea updated');
  res.redirect('/ideas');
});

router.delete('/:id', async (req, res) => {
  await Idea.findByIdAndDelete(req.params.id);
  req.flash('successMsg', 'Video idea removed');
  res.redirect('/ideas');
});

module.exports = router;
