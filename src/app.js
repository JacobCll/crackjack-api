require("dotenv").config;
const express = require("express");
const httpStatus = require("http-status");
const routes = require("./routes/v1");
const { errorConverter, errorHandler } = require("./middleware/error");
const ApiError = require("./utils/ApiError");

const app = express();

DB_URL = process.env.DATABASE_URL;

// parse request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: false }));

// serve static files
app.use("/static", express.static("static"));

// api routes
app.use("/v1", routes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});

// convert error to ApiError
app.use(errorConverter);

// error handling
app.use(errorHandler);

module.exports = app;
