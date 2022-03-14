const express = require('express');
const controller = require('../controllers');
const middleware = require('../middlewares');

const router = express.Router();

router.post(
  '/',
  middleware.postCreationValidation,
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
  controller.getPostById,
);

router.put(
  '/:id',
  middleware.validateToken,
  middleware.postUpdateValidation,
);

module.exports = router;