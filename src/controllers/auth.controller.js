const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const { userService, authService } = require("../services");

//TODO: ADD AUTH TOKEN

const register = catchAsync(async (req, res) => {
  const status = httpStatus.CREATED;
  const user = await userService.createUser(req.body);
  const response = {
    code: status,
    body: {
      message: "User created successfully",
      user,
    },
  };
  res.status(status).send(response);
});

const login = catchAsync(async (req, res) => {
  const status = httpStatus.ACCEPTED;
  const email = req.body.email;
  const password = req.body.password;
  const user = authService.loginUserWithEmailAndPassword(email, password);
  const response = {
    code: status,
    body: {
      message: "Logged in successfully",
      user,
    },
  };
  res.status(status).send(response);
});

module.exports = {
  register,
  login,
};
