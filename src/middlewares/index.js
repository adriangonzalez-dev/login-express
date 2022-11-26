const { accessWithJwt } = require("./accessWithJwt");
const { catchErrors } = require("./catchErrors");
const { updateImage } = require("./updateImage");
const { uploadAvatar } = require("./uploadAvatar");
const { uploadCloudinary } = require("./uploadCloudinary");
const {adminAccess} = require("./adminAccess")

module.exports = {
  accessWithJwt,
  catchErrors,
  updateImage,
  uploadAvatar,
  uploadCloudinary,
  adminAccess
};
