const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: 'Token not found' });
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.decoded = decoded.data.id;
    next();
  } catch (error) {
    if (error.message) {
      error.status = 401;
      error.message = 'Expired or invalid token';
    }
    next(error);
  }
};