const { rateLimit } = require('express-rate-limit');

const limiter = rateLimit({
  max: 100,
  windowMs: 15 * 60 * 1000,
  message: 'Слишком много запросов',
});

module.exports = { limiter };
