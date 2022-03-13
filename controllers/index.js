const { create, getAll, getByUserId } = require('./user');
const { login } = require('./login');
const { createTag, getCategories } = require('./category');
const { createPost, getPosts, getPostById } = require('./post');

module.exports = {
  create,
  login,
  getAll,
  getByUserId,
  createTag,
  getCategories,
  createPost,
  getPosts,
  getPostById,
};