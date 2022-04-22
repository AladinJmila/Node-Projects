const mongoose = require('mongoose');
const { Schema } = mongoose;

const Media = mongoose.model(
  'Media',
  new Schema({
    title: {
      type: String,
      required: true,
    },
    slides: [
      {
        imageURL: {
          type: String,
          required: true,
        },
        audioURL: {
          type: String,
          required: true,
        },
        note: String,
      },
    ],
  })
);

async function createMedia() {
  const media = new Media({
    title: 'agent information',
    slides: [
      {
        imageURL: 'display image highlighting EMAIL ADRESS',
        audioURL: 'provide audio explaining EMAIL ADRESS',
        note: 'This is what you need to retain about EMAIL ADRESS',
      },
      {
        imageURL: 'display image highlighting AGENT NAME',
        audioURL: 'provide audio explaining AGENT NAME',
        note: 'This is what you need to retain about AGENT NAME',
      },
      {
        imageURL: 'display image highlighting CHAT NAME',
        audioURL: 'provide audio explaining CHAT NAME',
        note: 'This is what you need to retain about CHAT NAME',
      },
      {
        imageURL: 'display image highlighting INITIALS',
        audioURL: 'provide audio explaining INITIALS',
        note: 'This is what you need to retain about INITIALS',
      },
      {
        imageURL: 'display image highlighting USER NAME',
        audioURL: 'provide audio explaining USER NAME',
        note: 'This is what you need to retain about USER NAME',
      },
      {
        imageURL: 'display image highlighting AGENT AVAILABILITY FOR CHANNELS',
        audioURL: 'provide audio explaining AGENT AVAILABILITY FOR CHANNELS',
        note: 'This is what you need to retain about AGENT AVAILABILITY FOR CHANNELS',
      },
      {
        imageURL: 'display image highlighting PERMISSION GROUP',
        audioURL: 'provide audio explaining PERMISSION GROUP',
        note: 'This is what you need to retain about PERMISSION GROUP',
      },
      {
        imageURL: 'display image highlighting LANGUAGES',
        audioURL: 'provide audio explaining LANGUAGES',
        note: 'This is what you need to retain about LANGUAGES',
      },
    ],
  });

  await media.save();
}

exports.Media = Media;
exports.createMedia = createMedia;
