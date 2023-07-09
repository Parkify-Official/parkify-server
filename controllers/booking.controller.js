const bookingService = require("../services/booking.service");
const { messageCustom } = require("../utils/message");
const { OK, NOT_FOUND, BAD_REQUEST } = require("../utils/messageTypes");
const handleErrors = require("../utils/errorHandler");

const newBooking = async (req, res) => {
  try {
    // accept from client

    const booking = await bookingService.newBooking(req.body);

    const return_object = {
      booking,
    };

    messageCustom(res, OK, "Booking created successfully", return_object);
  } catch (error) {
    handleErrors(req, res, error);
  }
};

module.exports = {
  newBooking,
};
