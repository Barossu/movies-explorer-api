const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/UnauthorizedError');

const JWT_SECRET = process.env.NODE_ENV !== 'production' ? 'dev-jwt' : process.env.JWT_SECRET;

module.exports = (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    next(new UnauthorizedError());
  }
  let payload;
  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    next(new UnauthorizedError());
  }
  req.user = payload;
  next();
};
