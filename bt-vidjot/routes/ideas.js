const express = require('express');
const router = express.Router();
const { Idea } = require('../models/idea');

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
