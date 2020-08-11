const { Joi } = require("celebrate");

const { BaseSchema } = require("./baseSchema");

const searchSiswaParamSchema = BaseSchema.keys({
  id: Joi.string().max(50).required(),
}).unknown(true);

// const deleteUserParamSchema = BaseSchema.keys({
//   id: Joi.string().max(50).required(),
// }).unknown(true);

// const insertUserParamSchema = BaseSchema.keys({
//   id: Joi.string().max(50).required(),
//   name: Joi.string().max(50).required(),
//   email: Joi.string().max(50).required(),
//   password: Joi.string().max(50).required(),
//   createdBy: Joi.string().max(50).required(),
// }).unknown(true);

// const updateUserParamSchema = BaseSchema.keys({
//   id: Joi.string().max(50).required(),
//   name: Joi.string().max(50).required(),
//   email: Joi.string().max(50).required(),
//   updatedBy: Joi.string().max(50).required(),
// }).unknown(true);

module.exports = {
  searchSiswaParamSchema,
  // insertUserParamSchema,
  // updateUserParamSchema,
  // deleteUserParamSchema,
};
