const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    fitnessLevel: {
        type: String,
        default: '1'
    },
    numOfWorkoutsCompleted: {
        type: Number,
        default: 0
    }, 
    date: {
        type: Date,
        default: Date.now
    },
    userType: {
        type: String,
        default: 1
    }
})

module.exports = mongoose.model('user', UserSchema);