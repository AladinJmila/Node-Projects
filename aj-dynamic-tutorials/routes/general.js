const express = require('express');
const router = express.Router();
const { createMedia } = require('../models/feature');

router.get('/', async (req, res) => {
  // await createMedia();

  res.redirect('/tutorials/show');
});

module.exports = router;
