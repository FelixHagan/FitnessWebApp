const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator/check');
const auth = require('../middleware/auth');

const User = require('../models/User');

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post('/', [check('name', 'Please add name').not().isEmpty(), check('email', 'Please include a valid email').isEmail(), check('password', 'Please enter a pasword with 6 or more characters').isLength({ min: 6 }) ], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, fitnessLevel, userType } = req.body;

    try {
        let user = await User.findOne({ email: email });

        if (user) {
            return res.status(400).json({ msg: 'User already exists'});
        }

        user = new User({
            // same as doing name: name
            name,
            email,
            password,
            fitnessLevel,
            userType
        });

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(payload, config.get('jwtSecret'), { 
            expiresIn: 360000
        }, (err, token) => {
            if(err) throw err;
            res.json({ token });
        });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   PUT api/users/:id
// @desc    Update users workouts completed and fitness level
// @access  Private
router.put('/:id', auth, async (req, res) => {
    const { fitnessLevel, numOfWorkoutsCompleted } = req.body;

    const userProperties = {};
    if (fitnessLevel) userProperties.fitnessLevel = fitnessLevel;
    if (numOfWorkoutsCompleted) userProperties.numOfWorkoutsCompleted = numOfWorkoutsCompleted;

    try {
        let user = await User.findById(req.params.id);

        if (!user) return res.status(404).json({ msg: 'User not found '});

        user = await User.findByIdAndUpdate(req.params.id, 
            { $set: userProperties },
            { new: true });

            res.json(user);
    } catch (err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   GET api/users
// @desc    Get all users
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        
        const users = await User.find(req.body).select('-password');
        res.json(users);
    } catch (err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   DELETE api/users/:id
// @desc    delete user
// @access  Private
router.delete('/:id', auth, async (req, res) => {
    try {
        let user = await User.findById(req.params.id);

        if (!user) return res.status(404).json({ msg: 'User not found '});

        await User.findByIdAndRemove(req.params.id);

        res.json({ msg: 'User removed' });
    } catch (err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;