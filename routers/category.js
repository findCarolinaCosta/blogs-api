const express = require('express');
const controller = require('../controllers');
const middleware = require('../middlewares');

const router = express.Router();

router.post(
  '/',
  middleware.validateCategory,
  controller.createTag,
);

module.exports = router;