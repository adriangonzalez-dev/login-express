const { request, response } = require("express");

const adminAccess = (req = request, res = response, next) => {
  if (!(req.role === 2)) {
    return res.status(403).json({
      msg: "Access denied",
    });
  }
  next();
};

module.exports = {
  adminAccess,
};
