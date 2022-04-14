function truncate(str, len) {
  if (str.length && str.length > len) return str.substring(0, len) + '...';

  return str;
}

function stripTags(str) {
  return str.replace(/<(?:.|\n)*?>/gm, '');
}

exports.truncate = truncate;
exports.stripTags = stripTags;
