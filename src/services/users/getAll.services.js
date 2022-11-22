const { user, role } = require("../../database/models");

const userGetAllServices = async () => {
  const users = await user.findAll({
    attributes: ["id","firstName","lastName","email","avatar","roleId"],
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
