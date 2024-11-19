const express = require("express");
const { handleUserSingup,  handleUserLogin}= require("../controllers/user");

const route = express.Router();

route.post("/", handleUserSingup);

route.post("/login", handleUserLogin);



module.exports = route;