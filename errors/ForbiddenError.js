const { WRONG_DATA_MESSAGE } = require('../utils/constants');

class ForbiddenError extends Error {
  constructor() {
    super(WRONG_DATA_MESSAGE);
    this.statusCode = 403;
  }
}

module.exports = ForbiddenError;
