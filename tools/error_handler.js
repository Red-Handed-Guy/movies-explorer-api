const { ServerError } = require('../errors/Server');

module.exports.errorHandler = (err, req, res, next) => {
  const serverErr = new ServerError('На сервере произошла ошибка');
  const { statusCode = serverErr.statusCode, message } = err;

  res
    .status(err.statusCode)
    .send({
      message: statusCode === serverErr.statusCode
        ? serverErr.message
        : message,
    });
  return next();
};
