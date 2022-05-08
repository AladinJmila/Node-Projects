const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const mongoose = require('mongoose');
const passport = require('passport');
require('./config/passport')(passport);
const dbURI = require('./config/db');
const app = express();
const { Feature } = require('./models/feature');

// Load routes
const general = require('./routes/general');
const media = require('./routes/media');

// Launch server
const port = process.env.PORT || 4500;
app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});

// Connect to mongoDB
mongoose
  .connect(dbURI)
  .then(() => console.log('connected to MongoDB...'))
  .catch(err => console.log(err));

// Handlebars middleware
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

// Method-override middleware
app.use(methodOverride('_method'));

// Express session middleware
app.use(
  session({
    secret: 'crazy-lama',
    resave: false,
    saveUninitialized: true,
  })
);

// Addine authentication to sessions with passport
app.use(passport.initialize());
app.use(passport.session());

// Global variables
app.use((req, res, next) => {
  res.locals.user = req.user || null;

  next();
});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', general);
app.use('/media', media);

// gridfs related imports and operations
const crypto = require('crypto');
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');

const conn = mongoose.createConnection(dbURI);

let gfs;
let gridfsBucket;

conn.once('open', () => {
  gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: 'dynamic-tutorials-media',
  });

  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('dynamic-tutorials-media');
});

const storage = new GridFsStorage({
  url: dbURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) return reject(err);

        const filename =
          buf.toString('hex') + '-' + path.basename(file.originalname);

        const fileInfo = {
          filename,
          bucketName: 'dynamic-tutorials-media',
        };

        resolve(fileInfo);
      });
    });
  },
});

const upload = multer({ storage });

app.get('/media/upload-form', (req, res) => {
  res.render('uploadForm');
});

app.post(
  '/media/upload-audio/:slideId',
  upload.single('audio'),
  async (req, res) => {
    console.log(req.file);
    // console.log(req.body);
    // console.log(req);

    const medias = await Feature.find().sort('-_id');
    if (req.file.contentType.startsWith('image')) {
      medias[0].slides[0].imageURL = gfsMedia.filename;
      await medias[0].save();
    } else if (req.file.contentType.startsWith('audio')) {
      medias[0].slides[0].audioURL = gfsMedia.filename;
      await medias[0].save();
    }

    res.redirect('/');
  }
);

app.post(
  '/media/upload-image/:slideId',
  upload.single('image'),
  async (req, res) => {
    console.log(req.file);
    // console.log(req.body);
    // console.log(req);

    // const medias = await Feature.find().sort('-_id');
    // if (req.file.contentType.startsWith('image')) {
    //   medias[0].slides[0].imageURL = gfsMedia.filename;
    //   await medias[0].save();
    // } else if (req.file.contentType.startsWith('audio')) {
    //   medias[0].slides[0].audioURL = gfsMedia.filename;
    //   await medias[0].save();
    // }

    res.redirect('/');
  }
);

app.get('/media/image/:filename', (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    if (!file)
      return res.status(404).send('There is no file with the given filename.');

    if (file.contentType.startsWith('image')) {
      const readstream = gridfsBucket.openDownloadStream(file._id);
      readstream.pipe(res);
    } else {
      res.status(404).send('The file with the given filename is not an image.');
    }
  });
});

app.get('/media/audio/:filename', (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    if (!file)
      return res.status(404).send('There is no file with the given filename.');

    if (file.contentType.startsWith('audio')) {
      const readstream = gridfsBucket.openDownloadStream(file._id);
      readstream.pipe(res);
    } else {
      res.status(404).send('The file with the given filename is not audio.');
    }
  });
});
