const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { errors } = require('celebrate');
const { limiter } = require('./utils/rateLimit');
const router = require('./routes/index');
const errorHandler = require('./middlewares/errorHandler');
const DB_CONN_DEV = require('./utils/constants');
const { requestLogger, errorLogger } = require('./middlewares/logger');

dotenv.config();

const app = express();
const { PORT = 3000, DB_CONN = DB_CONN_DEV } = process.env;

mongoose.connect(DB_CONN);

app.use(helmet());
app.use(limiter);
app.use(bodyParser.json());
app.use(cookieParser());
app.use(requestLogger);

app.use(cors({
  credentials: true,
  origin: [
    'https://api.movie.kalashnikov.nomoredomainsmonster.ru',
    'https://movie.kalashnikov.nomoredomainsmonster.ru',
    'http://localhost:3000'
  ],
}));

app.use(router);

app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT);
