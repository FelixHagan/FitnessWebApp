const express = require('express');
const Coach = require('../models/Coach');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator/check');

// @route   GET api/coach
// @desc    Get workouts created by coach
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const program = await Coach.find({ user: req.body.user });
        res.json(program);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/coach
// @desc    add workout
// @access  Private
router.post('/', [ auth, [check('programName', 'Name for the program is required').not().isEmpty() ] ], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    const { mondayName, mondayDescription, tuesdayName, tuesdayDescription, wednesdayName, wednesdayDescription,
        thursdayName, thursdayDescription, fridayName, fridayDescription, saturdayName, saturdayDescription, 
        sundayName, sundayDescription, programName} = req.body;
    
    try {
        let program = new Coach({
            programName,
            mondayName,
            mondayDescription,
            tuesdayName,
            tuesdayDescription,
            wednesdayName,
            wednesdayDescription,
            thursdayName,
            thursdayDescription,
            fridayName,
            fridayDescription,
            saturdayName,
            saturdayDescription,
            sundayName,
            sundayDescription
        })

        await program.save();
        res.json(program);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   PUT api/coach/:id
// @desc    Update running workout
// @access  Private
router.put('/:id', async (req, res) => {
    const { mondayName, mondayDescription, tuesdayName, tuesdayDescription, wednesdayName, wednesdayDescription,
        thursdayName, thursdayDescription, fridayName, fridayDescription, saturdayName, saturdayDescription, 
        sundayName, sundayDescription, programName} = req.body;

    const programProperties = {};
    if (programName) programProperties.programName = programName
    if (mondayName) programProperties.mondayName = mondayName;
    if (mondayDescription) programProperties.mondayDescription = mondayDescription;
    if (tuesdayName) programProperties.tuesdayName = tuesdayName;
    if (tuesdayDescription) programProperties.tuesdayDescription = tuesdayDescription;
    if (wednesdayName) programProperties.wednesdayName = wednesdayName;
    if (wednesdayDescription) programProperties.wednesdayDescription = wednesdayDescription;
    if (thursdayName) programProperties.thursdayName = thursdayName;
    if (thursdayDescription) programProperties.thursdayDescription = thursdayDescription;
    if (fridayName) programProperties.fridayName = fridayName;
    if (fridayDescription) programProperties.fridayDescription = fridayDescription;
    if (saturdayName) programProperties.saturdayName = saturdayName;
    if (saturdayDescription) programProperties.saturdayDescription = saturdayDescription;
    if (sundayName) programProperties.sundayName = sundayName;
    if (sundayDescription) programProperties.sundayDescription = sundayDescription;

    try {
        let program = await Coach.findById(req.params.id);

        if (!program) return res.status(404).json({ msg: 'Program not found '});

        program = await Coach.findByIdAndUpdate(req.params.id, 
            { $set: programProperties },
            { new: true });

            res.json(program);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }

});

// @route   DELETE api/coach/:id
// @desc    delete workout
// @access  Private
router.delete('/:id', async (req, res) => {
    try {
        let program = await Coach.findById(req.params.id);

        if (!program) return res.status(404).json({ msg: 'Running schedule not found' });

        await Coach.findByIdAndRemove(req.params.id);

        res.json({ msg: 'program removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


module.exports = router;