const { create } = require('./user');
const { login } = require('./login');
const { getAll } = require('./user');
const { getByUserId } = require('./user');

module.exports.create = create;
module.exports.login = login;
module.exports.getAll = getAll;
module.exports.getByUserId = getByUserId;