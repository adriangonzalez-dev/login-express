const { request, response } = require("express");
const { userGetByIdServices } = require("../../services/users/getById.services");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME_CLOUDINARY,
  api_key: process.env.API_KEY_CLOUDINARY,
  api_secret: process.env.API_SECRET_CLOUDINARY,
});

const uploadImageController = async (req=request, res=response) => {
    const {id} = req.params;
    try {
        const user = await userGetByIdServices(id);

        const { secure_url, public_id } = await cloudinary.uploader.upload(
            req.file.path
        );

        if(user.avatar){
            await cloudinary.uploader.destroy(user.avatar_public_id);
        };

        user.avatar = secure_url
        user.avatar_public_id = public_id
        user.save();
        return res.status(201).json({
            upload: 'ok',
            user: {
                avatar: user.avatar
            }
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: 'upload image failed'
        })
    }

}

module.exports = {
    uploadImageController
}