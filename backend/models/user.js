const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    profession: {
        type: String,
        required: true
    },
    // Remove any reference to textFile
});

const User = mongoose.model('User', userSchema);

module.exports = User;
