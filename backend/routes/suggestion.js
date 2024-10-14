// routes/summarizeSuitReport.js

const express = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const router = express.Router();
const genAI = new GoogleGenerativeAI(process.env.GEMINIKEY); // Use environment variable for API key
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

router.post("/get-suggestion", async (req, res) => {
    const { auditReport } = req.body; // Extract audit report from request body

    // Validate input
    if (!auditReport || typeof auditReport !== 'string') {
        return res.status(400).json({ error: "Invalid or missing auditReport" });
    }
    const prompt = `Generate a list of actionable suggestions for improving our organizational practices. Each suggestion should include the following fields: "id" (a unique identifier starting from 1), "category" (the area of focus, e.g., Risk Management, Compliance, Financial Controls), "suggestion" (a detailed description of the suggestion), "impact" (the impact level of the suggestion: High, Medium, or Low), and "effort" (the effort level required to implement the suggestion: High, Medium, or Low). Please format the response as a JSON array of objects.

    Here are some example categories:
    1. Risk Management
    2. Compliance
    3. Financial Controls
    
    Please provide at least three suggestions.\n\nAudit Report:\n${auditReport}`;


    try {
        const result = await model.generateContent(prompt);

        // Log the raw response
        const jsonResponse = await result.response.text();
        console.log("Raw response from API:", jsonResponse); // Log the raw response

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
