const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user'); // Import the User model
// POST API to create a new user profile
router.post('/edit-profiles', async (req, res) => {
    try {
        const {
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
            token,
            email,
        } = req.body; // Extract token and form data

        // Check if token exists
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized: No token provided' });
        }

        // Verify and decode the token to extract the email
        let decoded;
        try {
            decoded = jwt.verify(token, process.env.JWT_SECRET); // Replace with your secret key
        } catch (error) {
            return res.status(401).json({ message: 'Invalid token', error: error.message });
        }


        // Check if a user with this email exists in the database
        const userExists = await User.findOne({ email });

        if (!userExists) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Create and save the new user profile
        const newUser = new User({
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

        await newUser.save(); // Store data in the database
        res.status(201).json({ message: 'Profile created successfully', profile: newUser });

    } catch (error) {
        res.status(500).json({ message: 'Failed to create profile', error: error.message });
    }
});

module.exports = router;
