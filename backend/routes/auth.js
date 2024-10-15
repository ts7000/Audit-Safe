const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Ensure your User model is imported correctly
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

// Validation middleware for registration
const registerValidation = [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password must be at least 6 characters').isLength({ min: 6 })
];

// Register a user
router.post('/register', registerValidation, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password, firstName,
        lastName,
        profession,
        phoneNumber,
        address,
        city,
        country,
        company,
        position,
        bio,
    } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        user = new User({
            email,
            password,
            firstName,
            lastName,
            profession,
            phoneNumber,
            address,
            city,
            country,
            company,
            position,
            bio,
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '1h' // Used a string for better readability
        }, (err, token) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ msg: 'Token generation error' });
            }
            res.json({ msg: "success", token, user: user });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Login a user
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the user exists
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // Check if the password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // Create a payload for JWT
        const payload = {
            user: {
                id: user.id
            }
        };

        // Sign the token
        jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '1h'
        }, (err, token) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ msg: 'Token generation error' });
            }
            res.json({ token, msg: "success" });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Export the router
module.exports = router;
