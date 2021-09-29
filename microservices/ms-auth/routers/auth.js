const express = require("express");
const controller = require("../controllers/authController.js");

const router = express.Router();

router.post("/login", controller.login);

module.exports = router;
