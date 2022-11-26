const { user } = require("../../database/models");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME_CLOUDINARY,
  api_key: process.env.API_KEY_CLOUDINARY,
  api_secret: process.env.API_SECRET_CLOUDINARY,
});

const userDeleteService = async (id) => {
  const userDeleted = await user.findByPk(id);
  if (userDeleted.avatar) {
    await cloudinary.uploader.destroy(userDeleted.avatar_public_id);
  }
  await userDeleted.destroy();
  return;
};

module.exports = {
  userDeleteService,
};
