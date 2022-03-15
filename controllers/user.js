const User = require('../services/user');

const create = async (req, res, next) => {
  try {
    const user = await User.create(req.body);

    if (!user) return res.status(409).json({ message: 'User already registered' });

     return res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

const getAll = async (_req, res, next) => {
  try {
    const users = await User.getAll();

    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const getByUserId = async (req, res, next) => {
  try {
    const user = await User.getByUserId(req.params);

    if (!user) {
      return res.status(404).json({ message: 'User does not exist' });
    }

    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const destroyUser = async (req, res, next) => {
  try {
    await User.destroyUser({ id: req.decoded });
    
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