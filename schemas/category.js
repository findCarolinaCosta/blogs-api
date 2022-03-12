const Joi = require('joi');

module.exports = Joi.object({
  name: Joi.string().min(1).required().messages({
    // status code | message 
    'any.required': '400|"name" is required',
    'string.min': '400|"name" length must be at least 1 characters long',
  }),
});
