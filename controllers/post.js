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

const createPost = async (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;

    const post = await BlogPost.create({ title, content, userId: req.decoded });
    
    const listToCheck = await createCategories({ categoryIds, post });
    const checkItems = listToCheck.some((category) => category);
    
    if (checkItems) {
      return res.status(400).json({ message: '"categoryIds" not found' });
    }

    return res.status(201).json(post.dataValues);
  } catch (error) {
    next(error);
  }
};

const getPosts = async (_req, res, next) => {
  try {
    const posts = await BlogPost.findAll({ 
      attributes: { exclude: 'userId' },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } }, 
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    return res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

const getPostById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await BlogPost.findOne({ 
      where: { id },
      attributes: { exclude: 'userId' },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } }, 
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });

    if (!post) {
      return res.status(404).json({ message: 'Post does not exist' });
    }

    return res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};

const updatePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, content, categoryIds } = req.body;
    if (categoryIds) return res.status(400).json({ message: 'Categories cannot be edited' });
    if (req.decoded !== Number(id)) return res.status(401).json({ message: 'Unauthorized user' });

    await BlogPost.update({ title, content }, { where: { id } });

    let post = await BlogPost.findOne({ where: { id },
    attributes: ['title', 'content', 'userId'],
      include: { model: Category, as: 'categories', through: { attributes: [] } } });

    if (!post) {
      return res.status(404).json({ message: 'Post does not exist' });
    }

    // { ...post.dataValues, categories: post.dataValues.categories[0].dataValues }; 1ª forma :) 
    // 2ª gambiara para pegar ambos dataValues do BlogPosts e do categories
    post = JSON.stringify(post);
    post = JSON.parse(post);

    return res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createPost,
  getPosts,
  getPostById,
  updatePost,
};
