const { Joi } = require("celebrate");

const { BaseSchema } = require("./baseSchema");

const searchBeasiswaParamSchema = BaseSchema.keys({
  id: Joi.string().max(10).required(),
}).unknown(true);

const deleteBeasiswaParamSchema = BaseSchema.keys({
  id: Joi.string().max(10).required(),
}).unknown(true);

const insertBeasiswaParamSchema = BaseSchema.keys({
  id_beasiswa: Joi.string().max(10).required(),
  jenis_beasiswa: Joi.string().max(50).required(),
  keterangan: Joi.string().max(16).required(),
}).unknown(true);

const updateBeasiswaParamSchema = BaseSchema.keys({
  id_beasiswa: Joi.string().max(10).required(),
  keterangan: Joi.string().max(50).required(),
}).unknown(true);

module.exports = {
  searchBeasiswaParamSchema,
  insertBeasiswaParamSchema,
  updateBeasiswaParamSchema,
  deleteBeasiswaParamSchema,
};
