const catchAsync = require('../utils/catchAsync');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');

exports.getAccountInfo = catchAsync(async (req, res, next) => {
    console.log('This is a login page');
    res.render('pages/login/login');
});

exports.postLoginUser = catchAsync(async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username }).exec();
        if (user) {
            const same = await bcrypt.compare(password, user.password);
            if (same) {
                // if password match

                req.session.userId = user._id;
                res.redirect('/');
            } else {
                res.redirect('/login');
            }
        } else {
            res.redirect('/login');
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('An error occurred while authenticating the user.');
    }
});

exports.getNewUSer = catchAsync(async (req, res, next) => {
    console.log('This is a register page');
    res.render('pages/register/register');
});

exports.postNewUser = catchAsync(async (req, res, next) => {
    // Kiểm tra dữ liệu đầu vào
    const { username, password } = req.body;
    console.log(username, password);
    if (!username || !password) {
        return res.status(400).send('Username and password are required.');
    }

    // Kiểm tra trường username không được trống
    if (username.trim() === '') {
        return res.status(400).send('Username cannot be empty.');
    }

    const existedUser = await User.findOne({ username });
    if (existedUser) {
        return res.status(400).send('username is already existed.');
    }

    // // Kiểm tra định dạng email
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!emailRegex.test(username)) {
    //     return res.status(400).send('Invalid email format.');
    // }

    try {
        // Tạo người dùng mới
        const newUser = await User.create({ username, password });
        res.redirect('/login');
    } catch (error) {
        console.error('Error:', error);
        res.redirect('/register');
    }
});

exports.getLogout = catchAsync(async (req, res, next) => {
    req.session.destroy(() => {
        // Đây là callback được truyền vào hàm destroy()
        res.redirect('/');
    });
});

// const userCtrl = {
//     register: async (req, res) => {
//         try {
//             res.json({ msg: 'Register Test' });
//         } catch (err) {
//             return res.status(500).json({ msg: err.message });
//         }
//     },
// };

// module.exports = userCtrl;
