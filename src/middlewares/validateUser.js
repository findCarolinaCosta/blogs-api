const userSchema = require('../schemas/user');

 const validateUser = (req, _res, next) => {
   try {
   const { error } = userSchema.validate(req.body);
      
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
  validateUser,
};