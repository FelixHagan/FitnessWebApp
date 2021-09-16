const mongoose = require('mongoose');

const MessageCoachSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    name: {
        type: String,
        required: true
    },
    message: {
        type: String,
        default: ""
    },
    reply: {
        type: String,
        default: ""
    },
    email: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('messageCoach', MessageCoachSchema);