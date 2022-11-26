const { user, role } = require("../../database/models");

const userGetByIdServices = async (id) => {
  const findUser = await user.findByPk(id, {
    attributes: ["id", "firstName", "lastName", "email", "avatar", "roleId"],
    include: [
      {
        attributes: ["name"],
        model: role,
      },
    ],
  });
  return findUser;
};

module.exports = {
  userGetByIdServices,
};
