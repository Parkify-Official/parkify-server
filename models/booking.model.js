const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    garageId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Garage',
    },
    slotId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Garage.slots',
    },
    slotName:{
        type: String,
    },
    status:{
        type: String,
        enum: ['inbooking', 'cancelled', 'completed'],
    },
    startTime:{
        type: Date,
    },
    endTime:{
        type: Date,
    },
    amount:{
        type: Number,
    },
    amountPerHour:{
        type: Number,
    }
},
{
    timestamps: true,
});

const booking = mongoose.model('Booking', bookingSchema);

module.exports = booking;
