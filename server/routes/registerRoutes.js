const express = require('express');
const passport = require('passport');

const accountController = require('../controllers/accountController');

const router = express.Router();

router.get('/', accountController.getNewUSer);

//
// router.post(
//     '/login',
//     passport.authenticate('local', {
//         successRedirect: '/',
//         failureRedirect: '/login',
//     }),
// );

router.post('/register', accountController.postNewUser);
module.exports = router;
