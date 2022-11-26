const { request, response } = require("express");
const { v4: uuid } = require("uuid");
const bcrypt = require("bcryptjs");
const { userCreateService } = require("../../services/users/create.services");

const createUserController = async (req = request, res = response) => {
  const data = {
    id: uuid(),
    firstName: req.body.firstName.trim().toLowerCase(),
    lastName: req.body.lastName.trim().toLowerCase(),
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
    roleId: req.body.roleId,
    avatar: req.image ? req.image.secure_url : null,
    avatar_public_id: req.image ? req.image.public_id : null,
  };
  const newUser = await userCreateService(data);
  const { id, firstName, lastName, email, avatar } = newUser.dataValues;
  return res.status(201).json({
    id,
    firstName,
    lastName,
    email,
    avatar,
  });
};

module.exports = {
  createUserController,
};
