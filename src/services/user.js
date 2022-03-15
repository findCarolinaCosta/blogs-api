const { User } = require('../models');
const jwtGenerator = require('../helpers/jwtGenerator');

const create = async (body) => {
    const { displayName, email } = body;
    const existingEmail = await User.findOne({ where: { email } });

    if (existingEmail) return null;
    
     const newUser = await User.create(body);

     const token = jwtGenerator({ id: newUser.id, displayName });

     return { token };
};

const getAll = async () => User.findAll();

const getByUserId = async ({ id }) => {
    const user = await User.findOne({ where: { id } });

    if (!user) return null;

    return user;
};

const destroyUser = async ({ id }) => User.destroy({ where: { id } });

module.exports = {
  create,
  getAll,
  getByUserId,
  destroyUser,
};