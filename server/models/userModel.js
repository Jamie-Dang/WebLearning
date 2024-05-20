const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema(
    {
        _id: {
            type: String, // Use String to match Google's profile.id
            required: true,
        },
        username: {
            type: String,
            required: [true, 'Please enter your email!'],
            // unique: true,
        },

        password: {
            type: String,
            required: [true, 'Please enter your password!'],
        },
        displayName: {
            type: String,
        },
        // role: {
        //     type: Number,
        //     enum: ['user', 'admin'],
        //     default: 'user',
        // },
    },
    {
        timestamps: true,
    },
);

UserSchema.pre('save', function (next) {
    const user = this;
    bcrypt.hash(user.password, 10, (error, hash) => {
        user.password = hash;
        next();
    });
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
