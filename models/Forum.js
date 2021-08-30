const mongoose = require('mongoose');

const ForumSchema = mongoose.Schema({
    user: {
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
    },
    messages: [
        {
            user: {
                type: String,
                required: true
            },
            message: {
                type: String,
                required: true
            },
            date: {
                type: Date,
                default: Date.now
            },
            flag: {
                type: Boolean,
                default: false
            }
        }
    ]
})

module.exports = mongoose.model('forum', ForumSchema);