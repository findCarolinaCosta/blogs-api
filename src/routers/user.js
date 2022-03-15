const express = require('express');
const controller = require('../controllers');
const middleware = require('../middlewares');

const router = express.Router();

router.post(
  '/',
  middleware.validateUser,
  controller.create,
);

router.get('/', middleware.validateToken, controller.getAll);

router.get('/:id', middleware.validateToken, controller.getByUserId);

router.delete(
  '/:me', 
  middleware.validateToken,
  controller.destroyUser,
);

module.exports = router;