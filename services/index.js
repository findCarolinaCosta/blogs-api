const { create, getAll, getByUserId, destroyUser } = require('./user');
const { login } = require('./login');
const { createTag, getCategories } = require('./category');
const { createPost, getPosts, getPostById, 
  updatePost, destroyPost, getSearchTerm } = require('./post');

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
  updatePost,
  destroyPost,
  destroyUser,
  getSearchTerm,
};