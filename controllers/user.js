const { User } = require('../models');
const jwtGenerator = require('../helpers/jwtGenerator');

// fonte base: monitoria 24.5 com o Gaspar
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

module.exports = {
  create,
};