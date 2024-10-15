const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user'); // Import the user model
// Route to fetch user profile data
router.post('/get-profiles', async (req, res) => {
    try {
        const { token, email } = req.body; // Extract token and email from the request body
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized: No token provided' });
        }

        // Verify the token and extract the user's email
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Fetch the user data based on the email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Send the user profile data as a response
        res.status(200).json({
            firstName: user.firstName,
            lastName: user.lastName,
            profession: user.profession,
            phoneNumber: user.phoneNumber,
            address: user.address,
            city: user.city,
            country: user.country,
            company: user.company,
            position: user.position,
            bio: user.bio,
        });
    } catch (error) {
        console.error('Error fetching user profile:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
