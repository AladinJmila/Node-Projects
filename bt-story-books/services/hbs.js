const moment = require('moment');

exports.truncate = (str, len) => {
  if (str.length && str.length > len) return str.substring(0, len) + '...';

  return str;
};

exports.stripTags = str => {
  return str.replace(/<(?:.|\n)*?>/gm, '');
};

exports.formatDate = (timestamp, format) => {
  return moment(timestamp).format(format);
};
