const { Router } = require("express");
const registerController = require("../controllers/user.controller");

const router = Router();

router.route("/register").post(registerController.registerUser);

router.route("/login").post(registerController.loginUser);

module.exports = router;
