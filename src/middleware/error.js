const httpStatus = require("http-status");

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
};
