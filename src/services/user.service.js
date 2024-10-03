const User = require("../models/user.models");
const createUser = async (userbody) => {
  if (User.isEmailTaken(userbody.email)) {
    throw new Error();
  }
};
