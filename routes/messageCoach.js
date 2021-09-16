const express = require('express');
const MessageCoach = require('../models/MessageCoach');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const User = require('../models/User');

// @route   GET api/messageCoach
// @desc    Get messages to the coach
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const messages = await MessageCoach.find({ user: req.user.id });
        res.json(messages);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/messageCoach
// @desc    add a message
// @access  Private
router.post('/', auth, async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    const { user, reply, name, message, email } = req.body;

    try {
        let newMessage = new MessageCoach({
            user,
            message,
            reply,
            name,
            email
        });

        const theMessage = await newMessage.save();
        res.json(theMessage);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   PUT api/messageCoach/:id
// @desc    Update message
// @access  Private
router.put('/:id', auth, async (req, res) => {
    const { message, user, reply  } = req.body;

    const messageProperties = {};
    if (message) messageProperties.message = message;
    if (reply) messageProperties.reply = reply;

    try {
        let updateMessage = await MessageCoach.findById(req.params.id);

        if (!updateMessage) return res.status(404).json({ msg: 'Message to coach not found '});

        updateMessage = await MessageCoach.findByIdAndUpdate(req.params.id, 
            { $set: messageProperties },
            { new: true}
        );

        res.json(updateMessage);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   DELETE api/messageCoach/:id
// @desc    delete message
// @access  Private
router.delete('/:id', auth, async (req, res) => {
    try {
        let message = await MessageCoach.findById(req.params.id);

        if (!message) return res.status(404).json({ msg: 'Message not found'});

        await MessageCoach.findByIdAndRemove(req.params.id);

        res.json({ msg: 'Message has been removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


module.exports = router;