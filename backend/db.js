const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGOURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Successfully connected to Database.');
    } catch (error) {
        console.log('Failed to connect to Database.', error);
    }
};
module.exports = connectDB;