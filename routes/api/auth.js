const express = require("express");
const route = express.Router();
const registrationControllers = require("../../controllers/registrationControllers");

route.get("/registration", registrationControllers);

module.exports = route;
