const { createSchema } = require('../schemas/post');

 const postCreationValidation = (req, _res, next) => {
   try {
   const { error } = createSchema.validate(req.body);
      
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
  postCreationValidation,
};