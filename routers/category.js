const express = require('express');
const middleware = require('../middlewares');

const router = express.Router();

router.post(
  '/',
  middleware.validateCategory,
);

module.exports = router;