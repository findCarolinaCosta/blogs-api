const { validateUser } = require('./validateUser');
const handleError = require('./handleError');
const { validateLogin } = require('./validateLogin');
const { validateCategory } = require('./validateCategory');

module.exports.validateUser = validateUser;
module.exports.handleError = handleError;
module.exports.validateLogin = validateLogin;
module.exports.validateCategory = validateCategory;