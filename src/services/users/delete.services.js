const { user } = require("../../database/models");

const userDeleteService = async (id) => {
  const userDeleted = await user.destroy({
    where: { id },
  });
  return userDeleted;
};

module.exports = {
  userDeleteService,
};
