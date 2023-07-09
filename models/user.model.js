const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        enum: ['user', 'garage_owner', 'admin'],        
    },    
    phone:{
        type: String,
    },
    email:{
        type: String,
    },
    address:{
        type: String,
    },    
    picture:{
        type: String,
    }
},
{
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
