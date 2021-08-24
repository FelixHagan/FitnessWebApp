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
check('weeks', 'runs required').isArray({ min: 1})] ], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, description, weeks } = req.body;

    try {
        let running = await Running.findOne({ name: name });

        if (running){
            return res.status(400).json({ msg: 'Workout already exists'});
        }

        running = new Running({
            name,
            description,
            weeks
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
    const { name, description, weeks } = req.body;

    const runningProperties = {};
    if (name) runningProperties.name = name;
    if (description) runningProperties.description = description;
    if (weeks) runningProperties.weeks = weeks;

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