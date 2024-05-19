const express = require('express');
const passport = require('passport');

const router = express.Router();

// ---------------------------
// require('../../passport');

// router.use(passport.initialize());
// router.use(passport.session());
// ---------------------------

const accountController = require('../controllers/accountController');
router.get('/', accountController.getAccountInfo);

// ---------------------------
// Auth
// router.get(
//     '/auth/google',
//     passport.authenticate('google', {
//         scope: ['email', 'profile'],
//     }),
// );

// Auth Callback
// Auth callback
// router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
//     // Regenerate session to prevent session fixation attacks
//     req.session.regenerate((err) => {
//         if (err) {
//             console.error('Session regeneration error:', err);
//             return res.redirect('/login');
//         }
//         // Successful authentication, redirect home.
//         res.redirect('/');
//     });
// });

// ---------------------------
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
