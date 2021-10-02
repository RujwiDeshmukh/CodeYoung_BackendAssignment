const express = require("express");
const route = express.Router();

const {getTranslatedResponse} = require("../middleware/index");

route.post("/translatetext", getTranslatedResponse);

module.exports = route;
