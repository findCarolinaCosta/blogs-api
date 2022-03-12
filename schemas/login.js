const Joi = require('joi');

module.exports = Joi.object({
  email: Joi.string().regex(/\S+@\S+\.\S+/).required().messages({
    'any.required': '400|"email" is required',
    'string.regex': '400|"email" must be a valid email',
  }),
  password: Joi.string().min(6).required().messages({
    // status code | message 
    'any.required': '400|"password" is required',
    'string.min': '400|"password" length must be 6 characters long',
  }),
});
