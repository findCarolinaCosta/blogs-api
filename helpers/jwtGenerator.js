// fonte: monitoria 24.5 com o Gaspar
// https://github.dev/tryber/sd-015-b-live-lectures/tree/monitoria/24.5
const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '1d',
};

const SECRET = process.env.JWT_SECRET;

module.exports = (data = {}) => jwt.sign({ data }, SECRET, jwtConfig);