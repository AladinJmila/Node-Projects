if (process.env.NODE_ENV === 'production') {
  module.exports =
    'mongodb://<dbuser>:<dbpassword>@randomcode.hostdbName.com:portNum/collectionName';
} else {
  module.exports = 'mongodb://localhost/storybooks';
}
