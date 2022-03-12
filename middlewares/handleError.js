// fonte base: monitoria 24.5 com o Gaspar
// https://github.dev/tryber/sd-015-b-live-lectures/tree/monitoria/24.5

module.exports = (error, _req, res, _next) => {
  console.error(error);

  // erro no email dipara RangeError status por usar schema do regex(/\S+@\S+\.\S+/):
  // "email" with value "@gmail.com" fails to match the required pattern: /\\S+@\\S+\\.\\S+/'
 // "email" with value "rubinho" fails to match the required pattern: /\\S+@\\S+\\.\\S+/
  if (error.status.includes('"email" with value')) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

 if (error instanceof SyntaxError && error.message.includes('Unexpected string in JSON')) {
    return res.status(400).json({ message: 'Invalid body syntax' });
  }

  return res.status(error.status || 500).json({ message: error.message });
};