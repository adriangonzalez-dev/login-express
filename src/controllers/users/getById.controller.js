const { request, response } = require("express");
const {
  userGetByIdServices,
} = require("../../services/users/getById.services");

const getByIdUserController = async (req = request, res = response) => {
  const { id } = req.params;
  try {
    const user = await userGetByIdServices(id);
    return res.status(200).json({
      user,
    });
  } catch (error) {
    return res.status(500).json({
      error,
    });
  }
};

module.exports = {
  getByIdUserController,
};
