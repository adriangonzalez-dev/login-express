const { request, response } = require('express');
const cloudinary = require('cloudinary').v2
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME_CLOUDINARY,
    api_key: process.env.API_KEY_CLOUDINARY,
    api_secret: process.env.API_SECRET_CLOUDINARY
    });

const uploadCloudinary = async (req=request,res=response, next)=> {
    
    if(req.file){
        const {secure_url, public_id} = await cloudinary.uploader.upload(req.file.path);
        req.image = {
            secure_url,
            public_id
        }
        next();
    }
    next();
}

module.exports = {
    uploadCloudinary
}
