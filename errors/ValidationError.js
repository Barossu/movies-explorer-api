const { VALIDATIONERROR_MESSAGE } = require('../utils/constants');

class ValidationError extends Error {
  constructor() {
    super(VALIDATIONERROR_MESSAGE);
    this.statusCode = 400;
  }
}

module.exports = ValidationError;
