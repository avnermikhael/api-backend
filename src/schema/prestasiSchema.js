const { Joi } = require("celebrate");

const { BaseSchema } = require("./baseSchema");

const searchPrestasiParamSchema = BaseSchema.keys({
  id: Joi.string().max(10).required(),
}).unknown(true);

const deletePrestasiParamSchema = BaseSchema.keys({
  id: Joi.string().max(10).required(),
}).unknown(true);

const insertPrestasiParamSchema = BaseSchema.keys({
  id_prestasi: Joi.string().max(10).required(),
  jenis_prestasi: Joi.string().max(50).required(),
  // tingkat_prestasi: Joi.string().max(20).required(),
  // nama_prestasi: Joi.string().max(50).required(),
  // tahun: Joi.string().max(4).required(),
  // penyelenggara: Joi.string().max(20).required(),
}).unknown(true);

const updatePrestasiParamSchema = BaseSchema.keys({
  id_prestasi: Joi.string().max(10).required(),
  nama_prestasi: Joi.string().max(50).required(),
}).unknown(true);

module.exports = {
  searchPrestasiParamSchema,
  insertPrestasiParamSchema,
  updatePrestasiParamSchema,
  deletePrestasiParamSchema,
};
