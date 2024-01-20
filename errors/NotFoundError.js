const { NOTFOUNDERROR_MESSAGE } = require('../utils/constants');

class NotFoundError extends Error {
  constructor() {
    super(NOTFOUNDERROR_MESSAGE);
    this.statusCode = 404;
  }
}

module.exports = NotFoundError;
