const bcrypt = require("bcryptjs");
const { roleGetAllServices } = require("../services/roles/getAll.services");
const {
  getUserByEmailService,
} = require("../services/users/getByEmail.services");
const { userGetByIdServices } = require("../services/users/getById.services");

const emailExists = async (email) => {
  const userEmail = await getUserByEmailService(email);
  if (userEmail) {
    throw new Error();
  }
};

const roleExists = async (role) => {
  const roles = await roleGetAllServices();
  const idRoles = roles.map((rol) => rol.id);
  if (!idRoles.includes(role)) {
    throw new Error();
  }
};

const idExists = async (id) => {
  const idExist = await userGetByIdServices(id);
  if (!idExist) {
    throw new Error();
  }
};

const emailNotExists = async (email) => {
  const userEmail = await getUserByEmailService(email);
  if (!userEmail) {
    throw new Error();
  }
};

module.exports = {
  emailExists,
  roleExists,
  idExists,
  emailNotExists,
};
