var express = require('express');
var router = express.Router();
const itemController = require('../controller/itemController');
const homeController = require('../controller/homeController');

router.get('/recommend',itemController.recommendItem);
router.get('/banner', homeController.getBanner);
router.put('/like', itemController.toggleLike);

module.exports = router;