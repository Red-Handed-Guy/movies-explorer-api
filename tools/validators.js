const { Joi } = require('celebrate');
const { regexForUrl } = require('./config');

module.exports.createUserValid = {
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    name: Joi.string().required().min(2).max(30),
  }),
};

module.exports.loginValid = {
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
};

module.exports.createMovieValid = {
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().regex(regexForUrl),
    trailerLink: Joi.string().required().regex(regexForUrl),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
    thumbnail: Joi.string().required().regex(regexForUrl),
    movieId: Joi.number().required(),
  }),
};

module.exports.movieIdValid = {
  params: Joi.object().keys({
    _id: Joi.string().required().length(24).hex(),
  }),
};

module.exports.modifyUserValid = {
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
  }),
};
