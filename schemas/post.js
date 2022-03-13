const Joi = require('joi');

module.exports = Joi.object({
  title: Joi.string().min(1).required().messages({
    // status code | message 
    'any.required': '400|"title" is required',
    'string.min': '400|"title" length must be at least 1 characters long',
  }),
  content: Joi.string().min(1).required().messages({
    // status code | message 
    'any.required': '400|"content" is required',
    'string.min': '400|"content" length must be at least 1 characters long',
  }),
  categoryIds: Joi.array().length(1).required().messages({
    // status code | message 
    'any.required': '400|"categoryIds" is required',
  }),
});
