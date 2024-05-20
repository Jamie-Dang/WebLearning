const express = require('express');
const passport = require('passport');

const userController = require('../controllers/accountController');

const router = express.Router();

router.get('/', userController.getLogout);
module.exports = router;
