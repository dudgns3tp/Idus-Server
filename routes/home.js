var express = require('express');
var router = express.Router();
const itemController = require('../controller/itemController');

router.get('/recommend',itemController.recommendItem);

module.exports = router;
