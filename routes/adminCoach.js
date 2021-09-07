const express = require('express');
const MessageCoach = require('../models/MessageCoach');
const router = express.Router();
const auth = require('../middleware/auth');


// @route   GET api/adminCoach
// @desc    Get all messages to the coach
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const messages = await MessageCoach.find(req.body);
        res.json(messages);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;