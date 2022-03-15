const User = require('../services/login');

const login = async (req, res, next) => {
  try {
    const token = await User.login(req.body);

    if (!token) return res.status(400).json({ message: 'Invalid fields' });

    return res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
};
