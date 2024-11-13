const express = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const router = express.Router();
const genAI = new GoogleGenerativeAI(process.env.GEMINIKEY); // Use environment variable for API key
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

router.post("/get-insights", async (req, res) => {
    const { auditReport } = req.body; // Extract audit report from request body

    // Validate input
    if (!auditReport || typeof auditReport !== 'string') {
        return res.status(400).json({ error: "Invalid or missing auditReport" });
    }

    // Prepare the prompt to generate insights
    const prompt = `Generate a detailed JSON object containing insights based on the provided audit report. The insights should include the following fields:

    1. "compliance" (an array of objects, where each object represents a compliance metric with:
        - "name" (the name of the compliance metric, e.g., Security Policy Compliance, Data Protection),
        - "score" (a numerical score between 0 and 100 for each metric).
    2. "risk" (an array of objects, where each object represents a risk category with:
        - "name" (the name of the risk category, e.g., Data Breach Risk, Insider Threat Risk),
        - "value" (a numerical value representing the level of risk for that category, where higher values represent higher risk).
    3. "vulnerabilities" (an array of objects, where each object represents a vulnerability with:
        - "name" (the name of the vulnerability, e.g., Unpatched Software, Misconfigured Firewall),
        - "count" (a numerical value representing the number of occurrences of the vulnerability).
    4. "trend" (an array of objects, where each object represents a trend over the last few months with:
        - "month" (the name of the month, e.g., January, February),
        - "incidents" (a numerical value representing the number of security incidents in that month).

    The response should be a well-structured JSON object with the above fields, without any additional text or formatting. Analyze the audit findings and provide insights for each of the fields based on typical audit data. \n\nAudit Report:\n${auditReport}`;

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
