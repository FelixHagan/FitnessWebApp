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
    exercises: {
            exercise1: {
                name: {
                    type: String,
                    required: true
                },
                videoUrl: {
                    type: String
                }
            },
            exercise2: {
                name: {
                    type: String,
                    required: true
                },
                videoUrl: {
                    type: String
                }
            },
            exercise3: {
                name: {
                    type: String,
                    required: true
                },
                videoUrl: {
                    type: String
                }
            },
            exercise4: {
                name: {
                    type: String,
                    required: true
                },
                videoUrl: {
                    type: String
                }
            },
            exercise5: {
                name: {
                    type: String,
                    required: true
                },
                videoUrl: {
                    type: String
                }
            },
            exercise6: {
                name: {
                    type: String,
                    required: true
                },
                videoUrl: {
                    type: String
                }
            },
            exercise7: {
                name: {
                    type: String,
                    required: true
                },
                videoUrl: {
                    type: String
                }
            },
            exercise8: {
                name: {
                    type: String,
                    required: true
                },
                videoUrl: {
                    type: String
                }
            },
            exercise9: {
                name: {
                    type: String,
                    required: true
                },
                videoUrl: {
                    type: String
                }
            },
            exercise10: {
                name: {
                    type: String,
                    required: true
                },
                videoUrl: {
                    type: String
                }
            },
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('workout', WorkoutSchema);