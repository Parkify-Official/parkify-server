const mongoose = require('mongoose');

const cameraSchema = new mongoose.Schema({
    location_x:
    {
        type: Number,
    },
    location_y:
    {
        type: Number,
    },
    address: {
        type: String,
    },
},
{
    timestamps: true,
});

const Camera = mongoose.model('Camera', cameraSchema);

module.exports = Camera;
