const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: email,
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
    textFile: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;