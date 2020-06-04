var express = require('express');
var router = express.Router();
const itemController = require('../controller/itemController');
const homeController = require('../controller/homeController');
const keywordController = require('../controller/keywordController');

router.get('/recommend',itemController.recommendItem);
router.get('/banner', homeController.getBanner);
router.put('/like', itemController.toggleLike);
router.get('/keyword', keywordController.readKeyword);

module.exports = router;
