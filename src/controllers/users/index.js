const { createUserController } = require("./create.controller");
const { deleteUserController } = require("./delete.controller");
const { userGetAllController } = require("./getAll.controller");
const { getByIdUserController } = require("./getById.controller");
const { updateUserController } = require("./update.controller");

module.exports = {
  createUserController,
  updateUserController,
  deleteUserController,
  userGetAllController,
  getByIdUserController,
};
