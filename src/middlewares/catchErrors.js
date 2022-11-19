const { request, response } = require("express");
const { validationResult } = require("express-validator");

const catchErrors = (req = request, res = response, next) => {
  let errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.mapped(),
    });
  }

  next();
};

module.exports = {
  catchErrors,
};
