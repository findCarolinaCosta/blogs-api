const jwt = require('jsonwebtoken');
const { User } = require('../models');
const jwtGenerator = require('../helpers/jwtGenerator');

// fonte base usado na função create: monitoria 24.5 com o Gaspar
// https://github.dev/tryber/sd-015-b-live-lectures/tree/monitoria/24.5
const create = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
    const existingEmail = await User.findOne({ where: { email } });

    if (existingEmail) return res.status(409).json({ message: 'User already registered' });
    
     const newUser = await User.create({ displayName, email, password, image });

     const token = jwtGenerator({ id: newUser.id, displayName });

     return res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }

    jwt.verify(token, process.env.JWT_SECRET);

    const users = await User.findAll();

    return res.status(200).json(users);
  } catch (error) {
    if (error.message) {
      error.status = 401;
      error.message = 'Expired or invalid token';
    }
    next(error);
  }
};

const getByUserId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ where: { id } });

    if (!user) {
      return res.status(404).json({ message: 'User does not exist' });
    }
    const token = req.headers.authorization;

    if (!token) return res.status(401).json({ message: 'Token not found' });

    jwt.verify(token, process.env.JWT_SECRET);

    return res.status(200).json(user);
  } catch (error) {
    if (error.message) {
      error.status = 401;
      error.message = 'Expired or invalid token';
    }
    next(error);
  }
};

const destroyUser = async (req, res, next) => {
  try {
    await User.destroy({ where: { id: req.decoded } });
    
    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  getAll,
  getByUserId,
  destroyUser,
};