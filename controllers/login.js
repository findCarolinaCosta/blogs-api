const jwtGenerator = require('../helpers/jwtGenerator');
const { User } = require('../models');

const login = async (req, res, next) => {
  try {
    const { email } = req.body;
    
    const existingEmail = await User.findOne({ where: { email } });

    if (!existingEmail) return res.status(400).json({ message: 'Invalid fields' });

    const token = jwtGenerator({ id: existingEmail.id, email });

    return res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
};
