const mongoose = require('mongoose');

const CoachSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    programName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    mondayName: {
        type: String,
        default: ""
    },
    mondayDescription: {
        type: String,
        default: ""
    },
    tuesdayName: {
        type: String,
        default: ""
    },
    tuesdayDescription: {
        type: String,
        default: ""
    },
    wednesdayName: {
        type: String,
        default: ""
    },
    wednesdayDescription: {
        type: String,
        default: ""
    },
    thursdayName: {
        type: String,
        default: ""
    },
    thursdayDescription: {
        type: String,
        default: ""
    },
    fridayName: {
        type: String,
        default: ""
    },
    fridayDescription: {
        type: String,
        default: ""
    },
    saturdayName: {
        type: String,
        default: ""
    },
    saturdayDescription: {
        type: String,
        default: ""
    },
    sundayName: {
        type: String,
        default: ""
    },
    sundayDescription: {
        type: String,
        default: ""
    }
})

module.exports = mongoose.model('coach', CoachSchema);