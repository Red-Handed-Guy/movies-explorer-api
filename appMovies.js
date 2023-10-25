require('dotenv').config();
const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const { errors } = require('celebrate');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
// Слушаем 3000 порт
const {
  NODE_ENV, PORT, MDB_URL,
} = process.env;
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { errorHandler } = require('./tools/error_handler');
const { mdbDev, corsOptions, rateLimitOptions } = require('./tools/config');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(NODE_ENV === 'production' ? MDB_URL : mdbDev, {
    useNewUrlParser: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

app.use(cookieParser());

app.use(requestLogger);

app.use(rateLimit(rateLimitOptions));

app.use(helmet());

app.use(cors(corsOptions));

app.use(require('./routes/index'));

app.use(errorLogger);

app.use(errors());

app.use((err, req, res, next) => {
  errorHandler(err, req, res, next);
});

app.listen(NODE_ENV === 'production' ? PORT : 3000, () => {
  console.log(`App start on PORT ${NODE_ENV === 'production' ? PORT : 3000}`);
});
