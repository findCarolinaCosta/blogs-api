const { create } = require('./user');
const { login } = require('./login');
const { getAll } = require('./user');
const { getByUserId } = require('./user');
const { createTag } = require('./category');
const { getCategories } = require('./category');

module.exports.create = create;
module.exports.login = login;
module.exports.getAll = getAll;
module.exports.getByUserId = getByUserId;
module.exports.createTag = createTag;
module.exports.getCategories = getCategories;