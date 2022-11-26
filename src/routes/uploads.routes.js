const express = require("express");
const router = express.Router();
const { uploadImageController } = require("../controllers/uploads/upload.controller");
const {idValidator} = require("../validations");
const {catchErrors, uploadAvatar,accessWithJwt} = require("../middlewares")

router.post("/:id",
            accessWithJwt,
            idValidator,
            uploadAvatar.single("avatar"),
            catchErrors,
            uploadImageController);

module.exports = router;
