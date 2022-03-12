const { validateUser } = require('./validateUser');
const handleError = require('./handleError');
const { validateLogin } = require('./validateLogin');

module.exports.validateUser = validateUser;
module.exports.handleError = handleError;
module.exports.validateLogin = validateLogin;