const express = require("express");
const { roleGetAllController } = require("../controllers/role/");
const router = express.Router();

router.get("/", roleGetAllController);

module.exports = router;
