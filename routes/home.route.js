const express = require('express');

const {
  homeGetController,
  homePostController,
} = require('../controllers/home.controller');

const router = express.Router();

router.route('/').get(homeGetController).post(homePostController);

module.exports = router;
