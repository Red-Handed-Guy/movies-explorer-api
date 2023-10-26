const router = require('express').Router();
const { celebrate } = require('celebrate');
const {
  createMovie,
  getMovies,
  delMovieByMovieId,
} = require('../controllers/movies');
const { createMovieValid, movieIdValid } = require('../tools/validators');

router.get('/', getMovies);
router.delete(
  '/:_id',
  celebrate(movieIdValid),
  delMovieByMovieId,
);
router.post(
  '/',
  celebrate(createMovieValid),
  createMovie,
);

module.exports = router;
