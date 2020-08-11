const { Joi } = require("celebrate");

const { BaseSchema } = require("./baseSchema");

const searchSiswaParamSchema = BaseSchema.keys({
  id: Joi.string().max(10).required(),
}).unknown(true);

const deleteSiswaParamSchema = BaseSchema.keys({
  id: Joi.string().max(10).required(),
}).unknown(true);

const insertSiswaParamSchema = BaseSchema.keys({
  id_siswa: Joi.string().max(10).required(),
  nama_lengkap: Joi.string().max(50).required(),
  jenis_kelamin: Joi.string().max(1).required(),
  tempat_lahir: Joi.string().max(50).required(),
  tanggal_lahir: Joi.date().required(),
  agama: Joi.string().max(20).required(),
  kewarganegaraan: Joi.string().max(20).required(),
  kebutuhan_khusus: Joi.string().max(20).required(),
  alamat: Joi.string().max(50).required(),
  tempat_tinggal: Joi.string().max(1).required(),
  moda_transportasi: Joi.string().max(1).required(),
  layak_pip: Joi.string().max(10).required(),
  bank_name: Joi.string().max(20).required(),
  akta_lahir: Joi.string().max(50).required(),
  bank_account_number: Joi.string().max(20).required(),
  bank_account_name: Joi.string().max(50).required(),
  handphone: Joi.string().max(20).required(),
  email: Joi.string().max(50).required(),
}).unknown(true);

const updateSiswaParamSchema = BaseSchema.keys({
  id_siswa: Joi.string().max(10).required(),
  nama_lengkap: Joi.string().max(50).required(),
  alamat: Joi.string().max(50).required(),
  handphone: Joi.string().max(20).required(),
  email: Joi.string().max(50).required(),
}).unknown(true);

module.exports = {
  searchSiswaParamSchema,
  insertSiswaParamSchema,
  updateSiswaParamSchema,
  deleteSiswaParamSchema,
};
