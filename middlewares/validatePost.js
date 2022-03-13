const userSchema = require('../schemas/post');

 const validatePost = (req, _res, next) => {
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
  validatePost,
};