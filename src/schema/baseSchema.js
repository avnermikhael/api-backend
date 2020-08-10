const { Joi } = require("celebrate");

const BaseSchema = Joi.object().keys({
  createdDate: Joi.date().optional(),
  createdBy: Joi.string().max(20).optional,
  createdDate: Joi.date().optional(),
  createdBy: Joi.string().max(20).optional,
});

module.exports = { BaseSchema };
