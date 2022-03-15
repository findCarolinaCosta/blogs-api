const { Category } = require('../models');

const createTag = async (req, res, next) => {
  try {
    const { name } = req.body;

    if (!name) return res.status(400).end();

    const category = await Category.create({ name });

    return res.status(201).json(category);
  } catch (error) {
    next(error);
  }
};

const getCategories = async (req, res, next) => {
  try {
    const tags = await Category.findAll();

    return res.status(200).json(tags);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createTag,
  getCategories,
};