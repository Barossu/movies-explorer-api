const { UNAUTHORIZEDERROR_MESSAGE } = require('../utils/constants');

class UnauthorizedError extends Error {
  constructor() {
    super(UNAUTHORIZEDERROR_MESSAGE);
    this.statusCode = 401;
  }
}

module.exports = UnauthorizedError;
