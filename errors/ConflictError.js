const { CONFLICTERROR_MESSAGE } = require('../utils/constants');

class ConflictError extends Error {
  constructor() {
    super(CONFLICTERROR_MESSAGE);
    this.statusCode = 409;
  }
}

module.exports = ConflictError;
