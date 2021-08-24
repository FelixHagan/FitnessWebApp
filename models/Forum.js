const mongoose = require('mongoose');

const ForumSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
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
                type: mongoose.Schema.Types.ObjectId,
                ref: 'users'
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