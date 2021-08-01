const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator/check');


const User = require('../models/User');
const Running = require('../models/Running');

// @route   GET api/running
// @desc    Get running workouts
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const running = await Running.find({ name: req.body.name });
        res.json(running);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');

    }
});

// @route   POST api/running
// @desc    add running workout
// @access  Private
router.post('/', [ auth, [ check('name', 'Name is required').not().isEmpty(), 
check('week1', 'Week 1 runs required').not().isEmpty(),
check('week2', 'Week 2 runs required').not().isEmpty(),
check('week3', 'Week 3 runs required').not().isEmpty(),
check('week4', 'Week 4 runs required').not().isEmpty(),
check('week5', 'Week 5 runs required').not().isEmpty(),
check('week6', 'Week 6 runs required').not().isEmpty(),
check('week7', 'Week 7 runs required').not().isEmpty(),
check('week8', 'Week 8 runs required').not().isEmpty(),
check('week9', 'Week 9 runs required').not().isEmpty()] ], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, week1, week2, week3, week4, week5, week6, week7, week8, week9 } = req.body;

    try {
        let running = await Running.findOne({ name: name });

        if (running){
            return res.status(400).json({ msg: 'Workout already exists'});
        }

        running = new Running({
            name,
            week1,
            week2,
            week3,
            week4,
            week5,
            week6,
            week7,
            week8,
            week9
        });

        await running.save();
        res.json(running);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   PUT api/running/:id
// @desc    Update running workout
// @access  Private
router.put('/:id', auth, async (req, res) => {
    const { name, week1, week2, week3, week4, week5, week6, week7, week8, week9 } = req.body;

    const runningProperties = {};
    if (name) runningProperties.name = name;
    if (week1) runningProperties.week1 = week1;
    if (week2) runningProperties.week2 = week2;
    if (week3) runningProperties.week3 = week3;
    if (week4) runningProperties.week4 = week4;
    if (week5) runningProperties.week5 = week5;
    if (week6) runningProperties.week6 = week6;
    if (week7) runningProperties.week7 = week7;
    if (week8) runningProperties.week8 = week8;
    if (week9) runningProperties.week9 = week9;

    try {
        let running = await Running.findById(req.params.id);

        if (!running) return res.status(404).json({ msg: 'Running schedule not found '});

        running = await Running.findByIdAndUpdate(req.params.id, 
            { $set: runningProperties },
            { new: true });

            res.json(running);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   DELETE api/running/:id
// @desc    delete running workout
// @access  Private
router.delete('/:id', auth, async (req, res) => {
    try {
        let running = await Running.findById(req.params.id);

        if (!running) return res.status(404).json({ msg: 'Running schedule not found' });

        await Running.findByIdAndRemove(req.params.id);

        res.json({ msg: 'Running schedule removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


module.exports = router;