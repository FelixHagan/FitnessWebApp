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
    workoutsCompleted: [
        {
            name: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ], 
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