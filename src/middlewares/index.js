const { accessWithJwt } = require("./AccessWithJwt");
const { catchErrors } = require("./catchErrors");
const { updateImage } = require("./updateImage");
const { uploadAvatar } = require("./uploadAvatar");
const { uploadCloudinary } = require("./uploadCloudinary");

module.exports = {
  accessWithJwt,
  catchErrors,
  updateImage,
  uploadAvatar,
  uploadCloudinary,
};
