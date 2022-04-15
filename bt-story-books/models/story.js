const mongoose = require('mongoose');
const { Schema } = mongoose;

const Story = mongoose.model(
  'Storie',
  new Schema({
    creator: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      defualt: 'public',
    },
    allowComments: {
      type: Boolean,
      default: true,
    },
    comments: [
      {
        commentBody: {
          type: String,
          required: true,
        },
        commentUser: {
          type: Schema.Types.ObjectId,
          ref: 'User',
          required: true,
        },
      },
    ],
  })
);

exports.Story = Story;
