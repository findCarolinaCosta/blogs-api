const loginSchema = require('../schemas/login');

 const validateLogin = (req, res, next) => {
   try {
    const { error } = loginSchema.validate(req.body);
    
    if (error) {
      const [code, message] = error.message.split('|');
      const err = { status: code, message };
      throw err;
   }

   return next();
   } catch (error) {
    next(error);
   }
};

module.exports = {
  validateLogin,
};