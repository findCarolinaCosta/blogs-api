const categorySchema = require('../schemas/category');

 const validateCategory = (req, _res, next) => {
   try {
     const { error } = categorySchema.validate(req.body);
     console.log(req.body);
      
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
  validateCategory,
};