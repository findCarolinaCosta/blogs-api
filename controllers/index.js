const { create, getAll, getByUserId } = require('./user');
const { login } = require('./login');
const { createTag, getCategories } = require('./category');
const { createPost, getPosts } = require('./post');

module.exports.create = create;
module.exports.login = login;
module.exports.getAll = getAll;
module.exports.getByUserId = getByUserId;
module.exports.createTag = createTag;
module.exports.getCategories = getCategories;
module.exports.createPost = createPost;
module.exports.getPosts = getPosts;