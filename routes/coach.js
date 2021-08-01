const express = require('express');
const router = express.Router();

// @route   GET api/coach
// @desc    Get workouts created by coach
// @access  Private
router.get('/', (req, res) => {
    res.send('Get workouts created by coach');
});

// @route   POST api/coach
// @desc    add workout
// @access  Private
router.post('/', (req, res) => {
    res.send('Add workout');
});

// @route   PUT api/coach/:id
// @desc    Update running workout
// @access  Private
router.put('/:id', (req, res) => {
    res.send('Update workout');
});

// @route   DELETE api/coach/:id
// @desc    delete workout
// @access  Private
router.delete('/:id', (req, res) => {
    res.send('Delete workout');
});


module.exports = router;