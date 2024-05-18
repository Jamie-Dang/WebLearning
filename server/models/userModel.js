const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, 'Please enter your email!'],
            // unique: true,
        },

        password: {
            type: String,
            required: [true, 'Please enter your password!'],
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
