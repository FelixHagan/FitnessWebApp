const express = require('express');
const Forum = require('../models/Forum');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const User = require('../models/User');

// @route   GET api/forum
// @desc    Get messages on forum
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const messages = await Forum.find(req.body);
        res.json(messages);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/forum
// @desc    add a message
// @access  Private
router.post('/', [ auth, [ check('description', 'Topic is required').not().isEmpty()] ], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    const { description, messages, user } = req.body;

    try {
        let newMessage = new Forum({
            user: user,
            description,
            messages: messages
        });

        const theMessage = await newMessage.save();
        res.json(theMessage);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   PUT api/forum/:id
// @desc    Update message
// @access  Private
router.put('/:id', auth, async (req, res) => {
    const { description, messages } = req.body;

    const forumProperties = {};
    if (description) forumProperties.description = description;
    if (messages) forumProperties.messages = messages;

    try {
        let forumMessage = await Forum.findById(req.params.id);

        if (!forumMessage) return res.status(404).json({ msg: 'Forum topic not found '});

        forumMessage = await Forum.findByIdAndUpdate(req.params.id, 
            { $set: forumProperties },
            { new: true}
        );

        res.json(forumMessage);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   DELETE api/forum/:id
// @desc    delete message
// @access  Private
router.delete('/:id', auth, async (req, res) => {
    try {
        let forumMessage = await Forum.findById(req.params.id);

        if (!forumMessage) return res.status(404).json({ msg: 'Message not found'});

        await Forum.findByIdAndRemove(req.params.id);

        res.json({ msg: 'Message has been removed from the forum' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


module.exports = router;