const mongoose = require("mongoose");

const garageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    ownerUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    address: {
      type: String,
    },
    locationX: {
      type: Number,
    },
    locationY: {
      type: Number,
    },
    slots: [
      {
        name: {
          type: String,
        },
        type: {
          type: String,
          enum: ["car", "motorbike", "truck"],
        },
        chargePerHour: {
          type: Number,
        },
        status: {
          type: String,
          enum: ["available", "occupied", "reserved"],
        },
      },
    ],
    images: [
      {
        type: String,
      },
    ],
    locationCategory: {
      type: String,
      enum: ["prime", "normal", "outskirt"],
    },
  },
  {
    timestamps: true,
  },
);

const garage = mongoose.model("Garage", garageSchema);

module.exports = garage;
