var express = require('express');
var router = express.Router();
const itemController = require('../controller/itemController');

router.get('/filter/', itemController.categoryFiltering);
module.exports = router;
