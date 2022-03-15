const { createSchema, updateSchema } = require('../schemas/post');

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

const postUpdateValidation = (req, _res, next) => {
  try {
    const { title, content } = req.body;
  const { error } = updateSchema.validate({ title, content });
     
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
  postUpdateValidation,
};