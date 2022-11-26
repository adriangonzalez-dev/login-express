const { request, response } = require("express");
const jwt = require("jsonwebtoken");

const accessWithJwt = (req = request, res = response, next) => {
  const token = req.header("Authorization")?.split("Bearer ")[1];
  if (!token) {
    return res.status(400).json({
      msg: "token is required",
    });
  }
  try {
    const { id, role } = jwt.verify(token, process.env.JWT_SECRET);
    req.role = role;
    next();
  } catch (error) {
    return res.status(401).json({
      msg: "invalid token",
    });
  }
};

module.exports = {
  accessWithJwt,
};
