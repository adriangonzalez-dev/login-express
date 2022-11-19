const { role } = require("../../database/models");

const roleGetAllServices = async () => {
  const roles = await role.findAll();
  return roles;
};

module.exports = {
  roleGetAllServices,
};
