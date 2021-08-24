const mongoose = require('mongoose');

const WorkoutSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    fitnessLevel: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    startWorkout: {
        type: Boolean,
        default: false
    },
    exercises: [
        {
            name: {
                type: String,
                required: true
            },
            videoUrl: {
                type: String,
                required: true
            }
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('workout', WorkoutSchema);