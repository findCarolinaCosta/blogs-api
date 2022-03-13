const { validateUser } = require('./validateUser');
const handleError = require('./handleError');
const { validateLogin } = require('./validateLogin');
const { validateCategory } = require('./validateCategory');
const { validatePost } = require('./validatePost');
const validateToken = require('./validateToken');

module.exports.validateUser = validateUser;
module.exports.handleError = handleError;
module.exports.validateLogin = validateLogin;
module.exports.validateCategory = validateCategory;
module.exports.validatePost = validatePost;
module.exports.validateToken = validateToken;