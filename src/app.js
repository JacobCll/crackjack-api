const express = require("express");
const httpStatus = require("http-status");
const routes = require("./routes/v1");
const { errorHandler } = require("./middleware/error");
require("dotenv").config;

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
app.use("/blackjack", bJRoutes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = httpStatus.NOT_FOUND;
  next(error);
});

// error handling
app.use(errorHandler);

module.exports = app;
