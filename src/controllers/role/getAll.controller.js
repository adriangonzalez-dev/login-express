const { request, response } = require("express");
const { roleGetAllServices } = require("../../services/roles/getAll.services");

const roleGetAllController = async (req = request, res = response) => {
  try {
    const roles = await roleGetAllServices();
    return res.status(200).json({
      roles,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error,
    });
  }
};

module.exports = {
  roleGetAllController,
};
