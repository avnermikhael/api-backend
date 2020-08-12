const { Joi } = require("celebrate");

const { BaseSchema } = require("./baseSchema");

const searchSiswaBeasiswaParamSchema = BaseSchema.keys({
  id: Joi.string().max(10).required(),
}).unknown(true);

const deleteSiswaBeasiswaParamSchema = BaseSchema.keys({
  id: Joi.string().max(10).required(),
}).unknown(true);

const insertSiswaBeasiswaParamSchema = BaseSchema.keys({
  id_siswa: Joi.string().max(10).required(),
  id_beasiswa: Joi.string().max(10).required(),
  tahun_mulai: Joi.string().max(4).required(),
  tahun_selesai: Joi.string().max(4).required(),
}).unknown(true);

const updateSiswaBeasiswaParamSchema = BaseSchema.keys({
  id_beasiswa: Joi.string().max(10).required(),
  tahun_mulai: Joi.string().max(50).required(),
  tahun_selesai: Joi.string().max(4).required(),
}).unknown(true);

module.exports = {
  searchSiswaBeasiswaParamSchema,
  insertSiswaBeasiswaParamSchema,
  updateSiswaBeasiswaParamSchema,
  deleteSiswaBeasiswaParamSchema,
};
