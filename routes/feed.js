const express = require('express');

const feedController = require('../controllers/feed')

const router = express.Router();

router.use('/getFeed', feedController.getFeeds);

router.use('/postFeed', feedController.postFeeds);

module.exports = router;