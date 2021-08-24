const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator/check');


const User = require('../models/User');
const Workout = require('../models/Workout');

// @route   GET api/workouts
// @desc    Get workouts
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const workouts = await Workout.find(req.body);
        res.json(workouts);
    } catch (err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/workouts
// @desc    add workout
// @access  Private
router.post('/', [ auth, [ check('name', 'Name is required').not().isEmpty(), 
check('fitnessLevel', 'FitnessLevel is required').not().isEmpty(),
check('description', 'Description is required').not().isEmpty(),
check('exercises', 'exercises required').isArray({ min: 1})] ], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, fitnessLevel, exercises, description } = req.body;

    try {
        let workout = await Workout.findOne({ name: name });

        if (workout){
            return res.status(400).json({ msg: 'Workout already exists'});
        }

        workout = new Workout({
            name,
            fitnessLevel,
            exercises,
            description
        });

        await workout.save();
        res.json(workout);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   PUT api/workouts/:id
// @desc    Update workout
// @access  Private
router.put('/:id', auth, async (req, res) => {
    const { name, fitnessLevel, exercises, description } = req.body;

    const workoutProperties = {};
    if (name) workoutProperties.name = name;
    if (fitnessLevel) workoutProperties.fitnessLevel = fitnessLevel;
    if (exercises) workoutProperties.exercises = exercises;
    if (description) workoutProperties.description = description;

    try {
        let workout = await Workout.findById(req.params.id);

        if (!workout) return res.status(404).json({ msg: 'Workout not found '});

        workout = await Workout.findByIdAndUpdate(req.params.id, 
            { $set: workoutProperties },
            { new: true });

            res.json(workout);
    } catch (err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   DELETE api/workouts/:id
// @desc    delete workout
// @access  Private
router.delete('/:id', auth, async (req, res) => {
    try {
        let workout = await Workout.findById(req.params.id);

        if (!workout) return res.status(404).json({ msg: 'Workout not found '});

        await Workout.findByIdAndRemove(req.params.id);

        res.json({ msg: 'Workout removed' });
    } catch (err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


module.exports = router;