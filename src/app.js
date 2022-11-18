const process = require("process");
require("dotenv").config();
const PORT = process.env.PORT || 3030

//Modules
const express = require("express");
const app = express();
const path = require("path");
const cloudinary = require('cloudinary');

//Routes
const usersRouter = require("./routes/users.routes");
const rolesRouter = require('./routes/roles.routes');
const authRouter = require('./routes/auth.routes')

//Middlewares
app.use(express.static(path.join(__dirname, "../public")))
app.use(express.urlencoded({extended:false}));
app.use(express.json());

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME_CLOUDINARY,
    api_key: process.env.API_KEY_CLOUDINARY,
    api_secret: process.env.API_SECRET_CLOUDINARY
    });

//Routes middlewares
app.use("/api/users", usersRouter);
app.use('/api/roles', rolesRouter);
app.use('/api/auth', authRouter);

//Local Server
app.listen(PORT, ()=>{
    console.log(`Server listen in port: ${PORT}`)
})