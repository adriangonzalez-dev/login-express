const process = require("process");
require("dotenv").config();
const PORT = process.env.PORT || 3030;

//Modules
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

//Routes
const {
  usersRouter,
  authRouter,
  rolesRouter,
  uploadRouter,
} = require("./routes");

//Middlewares
app.use(cors());
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes middlewares
app.use("/api/users", usersRouter);
app.use("/api/roles", rolesRouter);
app.use("/api/auth", authRouter);
app.use("/api/upload", uploadRouter);

//Local Server
app.listen(PORT, () => {
  console.log(`Server listen in port: ${PORT}`);
});
