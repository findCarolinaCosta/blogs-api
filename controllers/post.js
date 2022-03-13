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

const getPosts = async (req, res, next) => {
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

module.exports = {
  createPost,
  getPosts,
};
