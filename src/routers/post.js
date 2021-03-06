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
  '/search',
  middleware.validateToken,
  controller.getSearchTerm,
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
  controller.updatePost,
);

router.delete(
  '/:id',
  middleware.validateToken,
  controller.destroyPost,
);

module.exports = router;