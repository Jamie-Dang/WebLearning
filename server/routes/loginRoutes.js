const express = require('express');
const passport = require('passport');

const accountController = require('../controllers/accountController');

const router = express.Router();

router.get('/', accountController.getAccountInfo);

//
// router.post(
//     '/login',
//     passport.authenticate('local', {
//         successRedirect: '/',
//         failureRedirect: '/login',
//     }),
// );

router.post('/login', accountController.postLoginUser);
module.exports = router;
