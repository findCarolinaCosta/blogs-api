const express = require('express');
const controller = require('../controllers');
const middleware = require('../middlewares');

const router = express.Router();

router.post(
  '/',
  middleware.validatePost,
  middleware.validateToken,
  controller.createPost,
);

module.exports = router;