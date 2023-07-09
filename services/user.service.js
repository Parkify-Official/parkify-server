const User = require("../models/user.model");

const registerUser = async (userBody) => {
  const user = new User(userBody);
  await user.save();
  return user;
};

const getUser = async (filter) => {
  const user = await User.findOne(filter);
  return user;
};

module.exports = {
  registerUser,
  getUser,
};
