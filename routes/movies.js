const router = require('express').Router();
const {
  getMovies, postMovie, deleteMovie,
} = require('../controllers/movies');
const {
  validationMovieId,
  validationPostMovie,
} = require('../middlewares/validators');

router.get('/', getMovies);
router.post('/', validationPostMovie, postMovie);
router.delete('/:movieId', validationMovieId, deleteMovie);

module.exports = router;
