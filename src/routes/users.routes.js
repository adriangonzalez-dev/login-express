const express = require("express");
const router = express.Router();
//Controllers
const {
  createUserController,
  updateUserController,
  getByIdUserController,
  userGetAllController,
  deleteUserController,
} = require("../controllers/users");

//Middlewars
const {
  accessWithJwt,
  catchErrors,
  updateImage,
  uploadAvatar,
  uploadCloudinary,
} = require("../middlewares");

//Validations
const { createValidator, idValidator } = require("../validations");

//Routes
router.get("/", accessWithJwt, userGetAllController);
router.get(
  "/:id",
  accessWithJwt,
  idValidator,
  catchErrors,
  getByIdUserController
);
router.post(
  "/",
  accessWithJwt,
  createValidator,
  uploadAvatar.single("avatar"),
  catchErrors,
  uploadCloudinary,
  createUserController
);
router.put(
  "/:id",
  accessWithJwt,
  idValidator,
  uploadAvatar.single("avatar"),
  catchErrors,
  updateImage,
  updateUserController
);
router.delete(
  "/:id",
  accessWithJwt,
  idValidator,
  catchErrors,
  deleteUserController
);

module.exports = router;
