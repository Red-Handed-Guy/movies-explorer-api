const Movie = require('../models/movie');
const { ValidationError } = require('../errors/Validation');
const { NotFoundError } = require('../errors/Not_found');
const { ForbiddenError } = require('../errors/Forbidden');

module.exports.createMovie = (req, res, next) => {
  Movie.create({ ...req.body, owner: req.user._id })
    .then((movie) => {
      res.status(201).send(movie);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(
          new ValidationError(`Переданы некорректные данные ${err.message}`),
        );
      } else {
        next(err);
      }
    });
};

module.exports.getMovies = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    .then((cards) => res.send(cards))
    .catch((err) => next(err));
};

module.exports.delMovieByMovieId = (req, res, next) => {
  const { _id } = req.params;
  Movie.findOne({ movieId: _id })
    .orFail(() => new NotFoundError('Запрашиваемый фильм не найден'))
    .then((movie) => {
      if (!(movie.owner.toString() === req.user._id)) {
        throw new ForbiddenError('Вы не можете удалить фильм не из своей коллекции!');
      }
      return movie.deleteOne().then((delMovie) => res.send(delMovie));
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new ValidationError('Переданы некорректные данные.'));
      } else {
        next(err);
      }
    });
};
