const app = require('express');
const router = app.Router();
const Application = require('../models/application');

router.get('/show', async (req, res) => {
  let data = [];
  const tutorials = await Application.find().lean();
  tutorials.forEach(item => {
    const progress = parseInt((item.watchedDuration / item.duration) * 100);
    data.push({
      _id: item._id,
      name: item.name,
      progress: progress ? progress : 0,
    });
  });
  res.render('index', { data });
});

router.get('/show/:id', async (req, res) => {
  const tutorial = await Application.findById(req.params.id).lean();

  res.render('workspace', { tutorial });
});

router.post('/', async (req, res) => {
  const tutoApp = new Application({
    name: req.body.name,
  });

  // console.log(req.body.name);
  await tutoApp.save();

  res.redirect('/tuto-apps/show');
});

module.exports = router;
