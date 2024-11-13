const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
require('dotenv').config();
const getFile = require('./routes/getFile');
const authRoutes = require('./routes/auth'); // Import auth routes
const summarizeAuditReport = require('./routes/summary'); // Import summarizeAuditReport route
const getSuggestions = require('./routes/suggestion'); // Import getSuggestions route
const getAnalysis = require('./routes/analysis'); // Import getAnalysis route
const getVisualization = require('./routes/visualization'); // Import getVisualization route
const editProfile = require('./routes/peronalData'); // Import editProfile route
const fetchUser = require('./routes/fetchUser'); // Import fetchUser route
const app = express();
const port = 5000;
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api', getFile);
app.use('/api/auth', authRoutes); // Register the auth route
app.use("/api", summarizeAuditReport); // Prefixing the API routes
app.use("/api", getSuggestions);
app.use("/api", getAnalysis);
app.use("/api", getVisualization);
app.use("/api", editProfile);
app.use("/api", fetchUser);
app.use("/api", require('./routes/insight')); // Register the insight route

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
