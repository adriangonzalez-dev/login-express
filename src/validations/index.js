const { createValidator } = require("./create.validator");
const { loginValidator } = require("./login.validator");
const { idValidator } = require("./getId.validator");

module.exports = {
  createValidator,
  loginValidator,
  idValidator,
};
