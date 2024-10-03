const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");

// convert error to ApiError
const errorConverter = (err, req, res, next) => {
  let error = err;
  if (!(error instanceof ApiError)) {
    const statusCode =
      error.statusCode || error instanceof mongoose.Error
        ? httpStatus.BAD_REQUEST
        : httpStatus.INTERNAL_SERVER_ERROR;
    const message = error.message || httpStatus[statusCode];
  }
  next(error);
};

// error handling
const errorHandler = (error, req, res, next) => {
  const status = error.status || httpStatus.INTERNAL_SERVER_ERROR;
  const message = error.message || "An unexpected error has occured";

  const response = {
    code: status,
    message: message,
  };

  console.error(error);

  res.status(status).json(response);
};

module.exports = {
  errorHandler,
  errorConverter,
};
