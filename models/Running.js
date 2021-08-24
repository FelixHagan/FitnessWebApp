const mongoose = require('mongoose');

const RunningSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    weeks: [
        {
            run1: {
                name: {
                    type: String,
                    required: true
                },
                description: {
                    type: String,
                    required: true
                }
            },
            run2: {
                name: {
                    type: String,
                    required: true
                },
                description: {
                    type: String,
                    required: true
                }
            },
            run3: {
                name: {
                    type: String,
                    required: true
                },
                description: {
                    type: String,
                    required: true
                }
            }
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('running', RunningSchema);