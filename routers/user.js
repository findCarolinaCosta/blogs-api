const express = require('express');
const controller = require('../controllers');
const middleware = require('../middlewares');

const router = express.Router();

router.post(
  '/',
  middleware.validateUser,
  controller.create,
);

module.exports = router;