const { Joi } = require("celebrate");

const { BaseSchema } = require("./baseSchema");

const searchSiswaPrestasiParamSchema = BaseSchema.keys({
  id: Joi.string().max(10).required(),
}).unknown(true);

const deleteSiswaPrestasiParamSchema = BaseSchema.keys({
  id: Joi.string().max(10).required(),
}).unknown(true);

const insertSiswaPrestasiParamSchema = BaseSchema.keys({
  id_siswa: Joi.string().max(10).required(),
  id_prestasi: Joi.string().max(50).required(),
}).unknown(true);

const updateSiswaPrestasiParamSchema = BaseSchema.keys({
  id_siswa: Joi.string().max(10).required(),
  id_prestasi: Joi.string().max(50).required(),
}).unknown(true);

module.exports = {
  searchSiswaPrestasiParamSchema,
  insertSiswaPrestasiParamSchema,
  updateSiswaPrestasiParamSchema,
  deleteSiswaPrestasiParamSchema,
};
