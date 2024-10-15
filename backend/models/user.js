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
    date: {
        type: Date,
        default: Date.now
    },
    firstName: {
        type: String,
        trim: true,
    },
    lastName: {
        type: String,
        trim: true,
    },
    profession: {
        type: String,
        trim: true,
    },
    phoneNumber: {
        type: String,
        match: /^\+?[1-9]\d{1,14}$/, // E.164 format validation
    },
    address: {
        type: String,
        trim: true,
    },
    city: {
        type: String,
        trim: true,
    },
    country: {
        type: String,
        trim: true,
    },
    company: {
        type: String,
        trim: true,
    },
    position: {
        type: String,
        trim: true,
    },
    bio: {
        type: String,
        maxlength: 500,
    },
    date: {
        type: Date,
        default: Date.now,
    }
}, {
    timestamps: true, // Adds createdAt and updatedAt timestamps
});

const User = mongoose.model('User', userSchema);

module.exports = User;
