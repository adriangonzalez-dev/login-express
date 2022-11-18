const express = require("express");
const { createUserController,
        updateUserController,
        getByIdUserController,
        userGetAllController,
        deleteUserController } = require("../controllers/users");
const { updateImage } = require("../middlewares/updateImage");
const uploadAvatar = require("../middlewares/uploadAvatar");
const { uploadCloudinary } = require("../middlewares/uploadCloudinary");
const router = express.Router();

/* //controllers
const usersControllers = require("../controllers/users.controllers");
const {createUserController} = require('../controllers/users')

//middlewares
const userLogged = require("../middlewares/userLogged");
const uploadAvatar = require("../middlewares/uploadAvatar");

//validations
const registerValidator =require("../validations/registerValidator");
const loginValidator = require("../validations/loginValidator");
const profileValidator = require("../validations/profileValidator")

router.get("/login", userLogged,usersControllers.login);

router.post("/login", loginValidator ,usersControllers.processLogin);

router.get("/logout", usersControllers.logout);

router.get("/register", userLogged, usersControllers.register);

router.post("/register", registerValidator ,usersControllers.processRegister);

router.get("/profile", usersControllers.profile);

router.put("/profile" ,uploadAvatar.single("avatar"),profileValidator ,usersControllers.processProfile);

router.delete("/delete", usersControllers.deleteUser); */
/**** API**** */
router.get('/', userGetAllController);
router.get('/:id',getByIdUserController);
router.post('/',uploadAvatar.single('avatar'),uploadCloudinary,createUserController);
router.put('/:id', uploadAvatar.single('avatar'), updateImage,updateUserController);
router.delete('/:id', deleteUserController)

module.exports = router