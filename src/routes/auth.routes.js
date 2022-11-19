const express = require("express");
const { loginController } = require("../controllers/auth");
const router = express.Router();

router.post("/", loginController);

module.exports = router;
