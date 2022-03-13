const { validateUser } = require('./validateUser');
const handleError = require('./handleError');
const { validateLogin } = require('./validateLogin');
const { validateCategory } = require('./validateCategory');
const { postCreationValidation } = require('./validatePost');
const validateToken = require('./validateToken');

module.exports = {
  validateUser,
  handleError,
  validateLogin,
  validateCategory,
  postCreationValidation,
  validateToken,
};