const Joi = require('joi');

module.exports = Joi.object({
  displayName: Joi.string().min(8).required().messages({
    // status code | message 
    'any.required': '400|"name" is required',
    'string.empty': '400|"displayName" is not allowed to be empty',
    'string.min': '400|"displayName" length must be at least 8 characters long',
  }),
  password: Joi.string().min(6).required().messages({
    // status code | message 
    'any.required': '400|"password" is required',
    'string.empty': '400|"password" is not allowed to be empty',
    'string.min': '400|"password" length must be 6 characters long',
  }),
  image: Joi.string(),
  email: Joi.string().email().required().messages({
    'any.required': '400|"email" is required',
    'string.empty': '400|"email" is not allowed to be empty',
    'string.email': '400|"email" must be a valid email',
  }),
});
