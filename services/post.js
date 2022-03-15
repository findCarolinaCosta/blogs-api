const { Op } = require('sequelize');
const { BlogPost, Category, PostsCategory, User } = require('../models');

const createCategories = async ({ categoryIds, post }) => Promise.all(
  categoryIds.map(async (category) => {
    const categoryCurrent = await Category.findOne({
      where: { id: category },
    });
    if (!categoryCurrent) return true;
    await PostsCategory.create({ categoryId: category, postId: post.id });
  }),
);

const createPost = async ({ title, content, categoryIds, decoded }) => {
    const post = await BlogPost.create({ title, content, userId: decoded });
    
    const listToCheck = await createCategories({ categoryIds, post });
    const checkItems = listToCheck.some((category) => category);
    
    if (checkItems) return '"categoryIds" not found';

    return post;
};

const getPosts = async () => BlogPost.findAll({ 
      attributes: { exclude: 'userId' },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } }, 
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });

const getPostById = async ({ id }) => {
    const post = await BlogPost.findOne({ 
      where: { id },
      attributes: { exclude: 'userId' },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } }, 
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });

    if (!post) return null;

    return post;
};

const updatePost = async ({ id, title, content, categoryIds, decoded }) => {
    if (decoded !== Number(id)) return 'Unauthorized user';
    if (categoryIds) return 'Categories cannot be edited';

    await BlogPost.update({ title, content }, { where: { id } });

    const post = await BlogPost.findOne({ where: { id },
    attributes: ['title', 'content', 'userId'],
      include: { model: Category, as: 'categories', through: { attributes: [] } } });

    if (!post) return null;

    return post;
};

const destroyPost = async ({ id, decoded }) => {
    const post = await BlogPost.findOne({ where: { id } });

    if (!post) return null;
    if (decoded !== post.dataValues.userId) return 'Unauthorized user';
    
    return BlogPost.destroy({ where: { id } });
};

const getSearchTerm = async (q) => {
    const post = await BlogPost.findAll({ where: { 
        [Op.or]: 
          { title: { [Op.like]: `%${q}%` },
            content: { [Op.like]: `%${q}%` } } },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } }, 
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    
    return post;
};

module.exports = {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  destroyPost,
  getSearchTerm,
};
