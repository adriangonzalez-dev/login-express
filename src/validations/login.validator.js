const { check } = require("express-validator");
const { emailNotExists } = require("../helpers/check-db");

let loginValidator = [
  check("email", "Email is not valid").notEmpty().isEmail(),
  check("password").notEmpty(),
];

module.exports = {
  loginValidator,
};
