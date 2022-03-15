const express = require('express');
const controller = require('../controllers');
const middleware = require('../middlewares');

const router = express.Router();

router.post(
  '/',
  middleware.validateToken,
  middleware.validateCategory,
  controller.createTag,
);

router.get('/', middleware.validateToken, controller.getCategories);

module.exports = router;