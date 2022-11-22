class ErrorHandler extends Error {
  constructor(messasge, statusCode) {
    super(messasge);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ErrorHandler;
