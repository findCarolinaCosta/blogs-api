const jwtGenerator = require('../helpers/jwtGenerator');
const { User } = require('../models');

const login = async ({ email }) => {
    const existingEmail = await User.findOne({ where: { email } });

    if (!existingEmail) return null;

    const token = jwtGenerator({ id: existingEmail.id, email });

    return token;
};

module.exports = {
  login,
};
