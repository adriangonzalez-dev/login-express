const { user } = require("../../database/models");

const userCreateService = async (data) => {
  const newUser = user.build(data);
  await newUser.save();
  return newUser;
};

module.exports = {
  userCreateService,
};
