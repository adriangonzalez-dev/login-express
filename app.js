const process = require("process");
require("dotenv").config();
const PORT = process.env.PORT || 3030;

//Modules
const express = require("express");
const app = express();
const path = require("path");

//Routes
const usersRouter = require("./src/routes/users.routes");
const rolesRouter = require("./src/routes/roles.routes");
const authRouter = require("./src/routes/auth.routes");

//Middlewares
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes middlewares
app.use("/api/users", usersRouter);
app.use("/api/roles", rolesRouter);
app.use("/api/auth", authRouter);

//Local Server
app.listen(PORT, () => {
  console.log(`Server listen in port: ${PORT}`);
});