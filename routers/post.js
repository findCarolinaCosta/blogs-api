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

router.get(
  '/', 
  middleware.validateToken,
  controller.getPosts,
);

router.get(
  '/:id', 
  middleware.validateToken,
);

module.exports = router;