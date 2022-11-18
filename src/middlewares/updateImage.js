const { request, response } = require('express');
const {user} = require('../database/models')
const cloudinary = require('cloudinary').v2
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME_CLOUDINARY,
    api_key: process.env.API_KEY_CLOUDINARY,
    api_secret: process.env.API_SECRET_CLOUDINARY
    });

const updateImage = async (req=request,res=response, next)=> {
    const {id} = req.params;
    if(req.file){
        const userFind = user.findByPk(id);
        if(userFind.avatar_public_id){
            await cloudinary.uploader.destroy(userFind.avatar_public_id)
        };
        const {secure_url, public_id} = await cloudinary.uploader.upload(req.file.path);
        req.image = {
            secure_url,
            public_id
        }
        next();
    } else {
        next();
    }
}

module.exports = {
    updateImage
}
