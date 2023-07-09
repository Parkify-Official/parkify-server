const { Router } = require("express");
const { message } = require("./utils/message");
const { OK, NOT_FOUND } = require("./utils/messageTypes");
const userRouter = require("./routers/user.router");

const router = Router();

router.route("/").get((req, res) => {
  message(res, OK, "Welcome to Parkify API");
});

router.use("/users", userRouter);

router.route("*").all((req, res) => {
  message(res, NOT_FOUND, "Route not found");
});

module.exports = router;
