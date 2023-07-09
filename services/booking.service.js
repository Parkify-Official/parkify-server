const booking = require("../models/booking.model");

const newBooking = async (bookingBody) => {
  return await booking.create(bookingBody);
};

const findBooking = async (params) => {
  return await booking.find(params);
};

module.exports = {
  newBooking,
  findBooking,
};
