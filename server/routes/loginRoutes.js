const express = require('express');

const router = express.Router();

// ---------------------------
// ---------------------------

const userController = require('../controllers/accountController');
router.get('/', userController.getAccountInfo);

// ---------------------------
//
// router.post(
//     '/login',
//     passport.authenticate('local', {
//         successRedirect: '/',
//         failureRedirect: '/login',
//     }),
// );

router.post('/login', userController.postLoginUser);
module.exports = router;
