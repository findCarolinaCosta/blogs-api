const Category = require('../services/category');

const createTag = async (req, res, next) => {
  try {
    const { name } = req.body;

    if (!name) return res.status(400).end();

    const category = await Category.createCategory(name);

    return res.status(201).json(category);
  } catch (error) {
    next(error);
  }
};

const getCategories = async (_req, res, next) => {
  try {
    const tags = await Category.getCategories();

    return res.status(200).json(tags);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createTag,
  getCategories,
};