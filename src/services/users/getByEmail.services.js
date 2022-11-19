const { user } = require("../../database/models");

const getUserByEmailService = async (email) => {
  const findUser = await user.findOne({
    where: { email },
  });
  return findUser;
};

module.exports = {
  getUserByEmailService,
};
