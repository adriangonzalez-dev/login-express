const { check, body } = require("express-validator");
const { idExists } = require("../helpers/check-db");

let idValidator = [
  check("id", "id not valid").notEmpty().isUUID(),

  check("id", "id not exists in db").custom((value) => idExists(value)),
];

module.exports = {
  idValidator,
};
