// routes/summarizeSuitReport.js

const express = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const router = express.Router();
const genAI = new GoogleGenerativeAI(process.env.GEMINIKEY); // Use environment variable for API key
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

router.post("/get-visualization", async (req, res) => {
    const { auditReport } = req.body; // Extract audit report from request body

    // Validate input
    if (!auditReport || typeof auditReport !== 'string') {
        return res.status(400).json({ error: "Invalid or missing auditReport" });
    }
    const prompt = `Generate a JSON object that contains two properties:

    1. "sampleData": an array of objects representing monthly performance data. Each object should include the following fields:
    - "name" (a string representing the month, e.g., "Jan", "Feb", "Mar").
    - "value" (a numerical value representing a performance metric for that month, which can vary based on the audit report).

    The number of months included can vary but must contain at least six months of data. Ensure that the months can be represented in any order (not necessarily sequential).

    2. "colors": an array of strings representing color codes in hexadecimal format. The colors should correspond to the monthly performance data.

    Ensure that the response is formatted as valid JSON without any additional text or formatting.
    \n\nAudit Report:\n${auditReport}`;

    try {
        const result = await model.generateContent(prompt);

        // Log the raw response
        const jsonResponse = await result.response.text();
        // console.log("Raw response from API:", jsonResponse); // Log the raw response

        // Clean the response to remove unwanted characters
        const cleanedResponse = jsonResponse.replace(/```json\n|\n```/g, '').trim(); // Remove code block formatting

        let parsedResponse;
        try {
            parsedResponse = JSON.parse(cleanedResponse); // Try to parse as JSON
        } catch (parseError) {
            // Handle parsing error
            console.error("Error parsing JSON:", parseError);
            return res.status(500).json({ error: "Failed to parse JSON response", raw: cleanedResponse });
        }

        // Send the parsed response back to the client
        res.json(parsedResponse);
    } catch (error) {
        console.error("Error generating content:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;
