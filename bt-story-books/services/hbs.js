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

exports.select = (selected, options) => {
  return options
    .fn()
    .replace(new RegExp(` value=\'` + selected + `\'`), `$& selected`);
};

exports.editIcon = (storyUser, loggedUser, storyId, floating = true) => {
  if (String(storyUser) === String(loggedUser)) {
    if (floating) {
      return `<a href="/stories/edit/${storyId}" class="btn-floating halfway-fab red">
        <i class="fa fa-pencil"></i>
      </a>`;
    }

    return `<a href="/stories/edit/${storyId}"><i class="fa fa-pencil"></i></a>`;
  }

  return '';
};
