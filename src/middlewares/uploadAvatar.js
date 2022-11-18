const {v4:uuid} = require('uuid')
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    /* destination: function (req, file, cb) {
       cb(null, path.join(__dirname, '../../public/img/users'));
    }, */
    filename: function (req, file, cb) {
       cb(null, `${uuid()}_avatar_${path.extname(file.originalname)}`);  }
  })

  const filterMimetype = (req, file, cb) => {
   const mimetypeRegex = /^image\/(jpg|jpeg|png|svg|webp)$/;
   if (file && !mimetypeRegex.test(file.mimetype)) {
     return cb(new Error('invalid image'));
   }
   cb(null, true);
 };
 
 const uploadAvatar = multer({ storage, fileFilter: filterMimetype });

module.exports = uploadAvatar;