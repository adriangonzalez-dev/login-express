const express = require("express");
const {
  createUserController,
  updateUserController,
  getByIdUserController,
  userGetAllController,
  deleteUserController,
} = require("../controllers/users");
const { catchErrors } = require("../middlewares/catchErrors");
const { updateImage } = require("../middlewares/updateImage");
const uploadAvatar = require("../middlewares/uploadAvatar");
const { uploadCloudinary } = require("../middlewares/uploadCloudinary");
const { createValidator } = require("../validations/create.validator");
const { idValidator } = require("../validations/getId.validator");
const router = express.Router();

router.get("/", userGetAllController);
router.get("/:id", idValidator, catchErrors, getByIdUserController);
router.post(
  "/",
  createValidator,
  uploadAvatar.single("avatar"),
  catchErrors,
  uploadCloudinary,
  createUserController
);
router.put(
  "/:id",
  idValidator,
  uploadAvatar.single("avatar"),
  catchErrors,
  updateImage,
  updateUserController
);
router.delete("/:id", idValidator, catchErrors, deleteUserController);

module.exports = router;
