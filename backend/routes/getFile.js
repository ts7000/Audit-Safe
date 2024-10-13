const express = require('express');
const multer = require('multer');
const pdfParse = require('pdf-parse');
const fs = require('fs');
const router = express.Router();

// Set up multer to store uploaded files temporarily in 'uploads/' directory
const upload = multer({ dest: 'uploads/' });

router.post('/uploadPDF', upload.single('pdf'), async (req, res) => {
    try {
        // Ensure a file was uploaded
        if (!req.file) {
            return res.status(400).send({ error: 'No PDF uploaded.' });
        }

        const pdfPath = req.file.path; // Path of the uploaded PDF
        const dataBuffer = fs.readFileSync(pdfPath); // Read the PDF as buffer

        // Extract text content from the PDF
        const data = await pdfParse(dataBuffer);
        const extractedText = data.text; // Store extracted text in a variable

        // Clean up: Delete the PDF file after processing to free space
        fs.unlinkSync(pdfPath);

        // Send the extracted text back to the client
        res.status(200).json({ text: extractedText });
    } catch (error) {
        console.error('Error processing PDF:', error);
        res.status(500).send({ error: 'Failed to process PDF.' });
    }
});

module.exports = router;
