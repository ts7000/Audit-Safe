const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
require('dotenv').config();
const getFile = require('./routes/getFile');
const authRoutes = require('./routes/auth'); // Import auth routes

const app = express();
const port = 5000;
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api', getFile);
app.use('/api/auth', authRoutes); // Register the auth route
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
