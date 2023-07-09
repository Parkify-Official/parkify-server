const { Router } = require("express");
const bookingController = require("../controllers/booking.controller");

const router = Router();

router.route("/new").post(bookingController.newBooking);

module.exports = router;
