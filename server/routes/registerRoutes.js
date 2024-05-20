const express = require('express');
const passport = require('passport');

const userController = require('../controllers/accountController');

const router = express.Router();

router.get('/', userController.getNewUSer);

//
// router.post(
//     '/login',
//     passport.authenticate('local', {
//         successRedirect: '/',
//         failureRedirect: '/login',
//     }),
// );

router.post('/register', userController.postNewUser);
module.exports = router;
