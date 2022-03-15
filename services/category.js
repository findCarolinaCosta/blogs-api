const { Category } = require('../models');

const createTag = async (name) => {
    if (!name) return null;

    const category = await Category.create({ name });

    return category;
};

const getCategories = async () => Category.findAll();

module.exports = {
  createTag,
  getCategories,
};