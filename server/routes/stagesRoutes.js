const express = require('express');
const router = express.Router();
const stagesController = require('../controllers/stagesController');

router.get('/', stagesController.getStagesInfo);

module.exports = router;
