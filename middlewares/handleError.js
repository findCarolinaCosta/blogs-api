// fonte base: monitoria 24.5 com o Gaspar
// https://github.dev/tryber/sd-015-b-live-lectures/tree/monitoria/24.5

const verify = (error, value) => 
  typeof error.status === 'string' && error.status.includes(value);

module.exports = (error, _req, res, _next) => {
  console.error(error);
  const err = error;

  if (verify(error, '"email" with value')) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  if (verify(error, 'is not allowed to be empty')) {
    err.message = error.status;
    err.status = 400; 
  }

  return res.status(err.status || 500).json({ message: err.message });
};