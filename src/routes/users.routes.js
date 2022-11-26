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
  adminAccess
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
  adminAccess,
  createValidator,
  catchErrors,
  createUserController
);
router.put(
  "/:id",
  accessWithJwt,
  adminAccess,
  idValidator,
  catchErrors,
  updateUserController
);
router.delete(
  "/:id",
  accessWithJwt,
  adminAccess,
  idValidator,
  catchErrors,
  deleteUserController
);

module.exports = router;
