const { ACCESSDENIEDERROR_MESSAGE } = require('../utils/constants');

class ForbiddenError extends Error {
  constructor() {
    super(ACCESSDENIEDERROR_MESSAGE);
    this.statusCode = 403;
  }
}

module.exports = ForbiddenError;
