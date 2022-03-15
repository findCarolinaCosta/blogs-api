module.exports = (error, _req, res, _next) => {
  console.error(error);
  return res.status(error.status || 500).json({ message: error.message });
};