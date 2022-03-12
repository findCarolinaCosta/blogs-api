const express = require('express');
const controller = require('../controllers');
const middleware = require('../middlewares');

const router = express.Router();

router.post(
  '/',
  middleware.validateUser,
  controller.create,
);

router.get('/', controller.getAll);

router.get('/:id', controller.getByUserId);

module.exports = router;