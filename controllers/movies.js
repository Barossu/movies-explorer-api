const Movie = require('../models/movie');
const ValidationError = require('../errors/ValidationError');
const NotFoundError = require('../errors/NotFoundError');
const AccessDeniedError = require('../errors/AccessDeniedError');

module.exports.getMovies = (req, res, next) => {
  const currentUser = req.user._id;
  Movie.find({ owwner: currentUser })
    .then((movies) => res.send(movies))
    .catch(next);
};

module.exports.postMovie = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  } = req.body;
  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
    owner: req.user._id,
  })
    .then((movie) => res.status(201).send(movie))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new ValidationError());
        return;
      }
      next(err);
    });
};

module.exports.deleteMovie = (req, res, next) => {
  Movie.findByIdAndDelete(req.params.movieId)
    .then((movie) => {
      if (!movie) {
        throw new NotFoundError();
      }
      res.send(movie);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new ValidationError());
        return;
      }
      next(err);
    });
};

module.exports.deleteMovie = (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then((movie) => {
      if (!movie) {
        throw new NotFoundError('Фильм не найден');
      }
      if (movie.owner.toHexString() !== req.user._id) {
        throw new AccessDeniedError();
      }
      Movie.deleteOne(movie)
        .then((deletedMovie) => res.send(deletedMovie))
        .catch(movie);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new ValidationError());
        return;
      }
      next(err);
    });
};
