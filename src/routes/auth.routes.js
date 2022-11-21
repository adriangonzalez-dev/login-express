const express = require("express");
const router = express.Router();
const { loginController } = require("../controllers/auth");
const { createUserController } = require("../controllers/users");
const { catchErrors } = require("../middlewares");
const { createValidator, loginValidator } = require("../validations");

router.post("/login", loginValidator, catchErrors, loginController);
router.post("/register", createValidator, catchErrors, createUserController);

module.exports = router;
