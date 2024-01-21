const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;
const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: (v) => /^https?:\/\/(www\.)?(\S+)$#?/gi.test(v),
      message: 'Неправельный формат ссылки',
    },
  },
  trailerLink: {
    type: String,
    required: true,
    validate: {
      validator: (v) => /^https?:\/\/(www\.)?(\S+)$#?/gi.test(v),
      message: 'Неправельный формат ссылки',
    },
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator: (v) => /^https?:\/\/(www\.)?(\S+)$#?/gi.test(v),
      message: 'Неправельный формат ссылки',
    },
  },
  owner: {
    type: ObjectId,
    required: true,
  },
  movieId: {
    type: Number,
    required: true,
  },
  nameRU: {
    type: String,
    required: true,
  },
  nameEN: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('movie', movieSchema);
