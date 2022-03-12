const jwt = require('jsonwebtoken');
const { Category } = require('../models');

const createTag = async (req, res, next) => {
  try {
    const { name } = req.body;

    if (!name) return res.status(400).end();

    const token = req.headers.authorization;

    if (!token) return res.status(401).json({ message: 'Token not found' });

    jwt.verify(token, process.env.JWT_SECRET);

    const category = await Category.create({ name });

    return res.status(201).json(category);
  } catch (error) {
    if (error.message) {
      error.status = 401;
      error.message = 'Expired or invalid token';
    }
    next(error);
  }
};

const getCategories = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }

    jwt.verify(token, process.env.JWT_SECRET);

    const tags = await Category.findAll();

    return res.status(200).json(tags);
  } catch (error) {
    if (error.message) {
      error.status = 401;
      error.message = 'Expired or invalid token';
    }
    next(error);
  }
};

module.exports = {
  createTag,
  getCategories,
};