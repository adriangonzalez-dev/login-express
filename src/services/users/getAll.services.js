const { user, role } = require("../../database/models");

const userGetAllServices = async () => {
  const users = await user.findAll({
    include: [
      {
        attributes: ["name"],
        model: role,
      },
    ],
  });
  return users;
};

module.exports = {
  userGetAllServices,
};
