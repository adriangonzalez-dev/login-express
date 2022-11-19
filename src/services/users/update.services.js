const { user } = require("../../database/models");

const userUpdateService = async (id, data) => {
  const userEdit = await user.update(data, { where: { id } });
  return userEdit;
};

module.exports = {
  userUpdateService,
};
