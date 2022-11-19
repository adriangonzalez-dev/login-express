const { request, response } = require("express");
const { userUpdateService } = require("../../services/users/update.services");

const updateUserController = async (req = request, res = response) => {
  console.log(req.body);
  const { email, password, roleId, id: idUser, ...data } = req.body;
  const { id } = req.params;
  /* avatar: req.image ? req.image.src : null,
        avatar_public_id: req.image ?  req.image.public_id : null */
  try {
    await userUpdateService(id, {
      ...data,
      avatar: req.image ? req.image.secure_url : null,
      avatar_public_id: req.image ? req.image.public_id : null,
    });
    return res.status(201).json({
      msg: "updated ok",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error,
    });
  }
};

module.exports = {
  updateUserController,
};
