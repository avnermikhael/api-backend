const { Joi } = require("celebrate");

const { BaseSchema } = require("./baseSchema");

const searchWaliParamSchema = BaseSchema.keys({
  id: Joi.string().max(10).required(),
}).unknown(true);

const deleteWaliParamSchema = BaseSchema.keys({
  id: Joi.string().max(10).required(),
}).unknown(true);

const insertWaliParamSchema = BaseSchema.keys({
  id_wali: Joi.string().max(10).required(),
  nama_wali: Joi.string().max(50).required(),
  nik_wali: Joi.string().max(16).required(),
  tahun_lahir: Joi.string().max(4).required(),
  pendidikan: Joi.string().max(6).required(),
  pekerjaan: Joi.string().max(6).required(),
  penghasilan_bulanan: Joi.string().max(6).required(),
}).unknown(true);

const updateWaliParamSchema = BaseSchema.keys({
  id_wali: Joi.string().max(10).required(),
  nama_wali: Joi.string().max(50).required(),
}).unknown(true);

module.exports = {
  searchWaliParamSchema,
  insertWaliParamSchema,
  updateWaliParamSchema,
  deleteWaliParamSchema,
};
