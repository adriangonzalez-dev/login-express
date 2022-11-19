const { request, response } = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { user } = require("../../database/models");
const {
  userGetByIdServices,
} = require("../../services/users/getById.services");

const loginController = async (req = request, res = response) => {
  const { email, password } = req.body;
  try {
    const userLogged = await user.findOne({
      where: { email },
    });
    if (!userLogged) {
      return res.status(400).json({
        msg: "user o password inccrrect",
      });
    }
    if (!bcrypt.compareSync(password, userLogged.password)) {
      return res.status(400).json({
        msg: "user o password inccrrect",
      });
    }
    const data = {
      id: userLogged.id,
      firstName: userLogged.firstName,
      lastName: userLogged.lastName,
      email: userLogged.email,
      avatar: userLogged.avatar,
    };
    const payload = {
      id: userLogged.id,
      role: userLogged.roleId,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET);
    return res.status(200).json({
      ...data,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      error,
    });
  }
};

module.exports = {
  loginController,
};
