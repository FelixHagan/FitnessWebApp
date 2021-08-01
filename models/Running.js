const mongoose = require('mongoose');

const RunningSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    week1: {
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
    },
    week2: {
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
    },
    week3: {
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
    },
    week4: {
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
    },
    week5: {
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
    },
    week6: {
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
    },
    week7: {
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
    },
    week8: {
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
    },
    week9: {
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
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('running', RunningSchema);