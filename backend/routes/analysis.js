// routes/summarizeSuitReport.js

const express = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const router = express.Router();
const genAI = new GoogleGenerativeAI(process.env.GEMINIKEY); // Use environment variable for API key
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

router.post("/get-analysis", async (req, res) => {
    const { auditReport } = req.body; // Extract audit report from request body

    // Validate input
    if (!auditReport || typeof auditReport !== 'string') {
        return res.status(400).json({ error: "Invalid or missing auditReport" });
    }
    const prompt = `Generate a JSON object representing an audit report analysis based on the audit findings. The report should include the following fields:

    1. "overallScore" (a numerical score between 0 and 100 representing the overall performance).
    2. "riskLevel" (a string indicating the risk level: "Low", "Medium", or "High").
    3. "keyFindings" (an array of strings summarizing significant observations from the audit).
    4. "metrics" (an array of objects, where each object contains:
       - "name" (the name of the metric, e.g., Security Policy Compliance, Incident Response Effectiveness),
       - "score" (a numerical score between 0 and 100 for each metric).
    
    The response should be a valid JSON object without any additional text or formatting. Provide a well-rounded analysis based on typical audit findings. \n\nAudit Report:\n${auditReport}`;

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
