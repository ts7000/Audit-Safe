const express = require('express');
const multer = require('multer');
const pdfParse = require('pdf-parse');
const fs = require('fs');
const User = require('.../models/User');
const router = express.Router();

// Set up multer for file uploads
const upload = multer({ dest: 'uploads/' });

router.get('/getFile', upload.single('pdf'), async (req, res) => {
    try {
        const pdfPath = req.file.path;
        const dataBuffer = fs.readFileSync(pdfPath);

        const data = await pdfParse(dataBuffer);
        const text = data.text;

        // Find the user by email
        const email = req.body.email;
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }

        // Save the extracted text to the user's document
        user.textFile = text;
        await user.save();
    } catch (error) {
        res.status(500).send({ error: 'Failed to process PDF' });
    }
});

module.exports = router;