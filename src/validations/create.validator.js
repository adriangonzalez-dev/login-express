const { check } = require("express-validator");
const { emailExists, roleExists } = require("../helpers/check-db");

const createValidator = [
  check("firstName", "Name is required").notEmpty().isLength({ min: 3 }),

  check("lastName", "LastName is required").notEmpty().isLength({ min: 3 }),

  check("email", "Is not valid email").notEmpty().isEmail(),

  check("email", "Email exists in db").custom((value) => emailExists(value)),

  check("password", "Password is required")
    .notEmpty()
    .isLength({ min: 8, max: 12 }),

  check("roleId", "Role is a integer").isInt(),

  check("roleId", "Role not exists in db").custom((value) => roleExists(value)),
];

module.exports = {
  createValidator,
};
