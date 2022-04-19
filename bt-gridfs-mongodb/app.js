const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const crypto = require('crypto');
const mongoose = require('mongoose');
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const metodOverride = require('method-override');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(metodOverride('_method'));
app.set('view engine', 'ejs');

const mongoURI = 'mongodb://localhost:27017';

// Creat mongo connection
const conn = mongoose.createConnection(mongoURI);

// Init gfs
let gfs;
let gridfsBucket;

conn.once('open', () => {
  gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: 'uploads',
  });
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
});

// Create storage engine

const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) return reject(err);

        const filename =
          buf.toString('hex') + '-' + path.basename(file.originalname);
        // path.extname(file.originalname);
        const fileInfo = {
          filename,
          bucketName: 'uploads',
        };
        resolve(fileInfo);
      });
    });
  },
});

const upload = multer({ storage });

app.get('/', async (req, res) => {
  await gfs.files.find().toArray((err, files) => {
    if (!files || !files.length) {
      return res.render('index', { files: false });
    } else {
      files.map(file => {
        if (file.contentType.startsWith('image')) file.type = 'image';
        else if (file.contentType.startsWith('video')) file.type = 'video';
        else file.type = '';
      });
    }
    res.render('index', { files });
  });
});

app.get('/files', async (req, res) => {
  await gfs.files.find().toArray((err, files) => {
    if (!files || !files.length)
      return res.status(404).send('There are no files in db.');

    res.send(files);
  });
});

app.get('/files/:filename', async (req, res) => {
  await gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    if (!file)
      return res
        .status(404)
        .send('There are no files with the given filename.');

    res.send(file);
  });
});

app.get('/image/:filename', async (req, res) => {
  await gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    if (!file)
      return res
        .status(404)
        .send('There are no files with the given filename.');

    if (file.contentType.startsWith('image')) {
      const readstream = gridfsBucket.openDownloadStream(file._id);
      readstream.pipe(res);
    } else {
      res.status(404).send('The file with the given filename is not an image');
    }
  });
});

app.get('/video/:filename', async (req, res) => {
  await gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    if (!file)
      return res
        .status(404)
        .send('There are no files with the given filename.');

    if (file.contentType.startsWith('video')) {
      const readstream = gridfsBucket.openDownloadStream(file._id);
      readstream.pipe(res);
    } else {
      res.status(404).send('The file with the given filename is not a video');
    }
  });
});

app.post('/upload', upload.single('file'), (req, res) => {
  res.redirect('/');
});

app.delete('/files/:filename', async (req, res) => {
  await gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    if (err) return res.send(err);

    if (!file)
      return res.status(404).send('There is no file with the given filename.');

    gridfsBucket.delete(file._id);

    res.redirect('/');
  });
});

const port = 4500;

app.listen(port, () => console.log(`Listening on port ${port}...`));
