const app = require('express');
const router = app.Router();
const Application = require('../models/application');

router.get('/show', async (req, res) => {
  let data = [];
  const tutoApps = await Application.find().lean();
  tutoApps.forEach(item => {
    const progress = parseInt((item.watchedDuration / item.duration) * 100);
    data.push({
      _id: item._id,
      name: item.name,
      progress: progress ? progress : 0,
    });
  });
  console.log(data);
  res.render('index', { data });
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
