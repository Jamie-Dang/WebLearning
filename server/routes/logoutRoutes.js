const express = require('express');
const passport = require('passport');

const accountController = require('../controllers/accountController');

const router = express.Router();

router.get('/', accountController.getLogout);
module.exports = router;
