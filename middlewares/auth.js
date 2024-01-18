const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/UnauthorizedError');

const { JWT_SECRET = 'e67ddc6d404d0f0ac43d9ff22d0524cb014184909c5ae5c1a261ae905ddb956f' } = process.env;
const error = new UnauthorizedError('Необходима авторизация');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    next(error);
  }
  const token = authorization.replace('Bearer ', '');
  let payload;
  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    next(error);
  }
  req.user = payload;
  next();
};
