const ErrorHandler = require("../utils/ErrorHandle");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal server error";

  //duplicate key error

  // if (err.code === 11000) {
  //   const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
  //   err = new ErrorHandler(message, 400);
  // }

  //wrong jwt token key error

  // if (err.name === "jsonWebTokenError") {
  //   const message = `url invalid try again`;
  //   err = new ErrorHandler(message, 400);
  // }
  // if (err.name === "TokenExpiredError") {
  //   const message = `url expired try again`;
  //   err = new ErrorHandler(message, 400);
  // }

  res.status(err.statusCode).json({
    success: false,
    error: err.message,
  });
};
