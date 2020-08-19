const { Joi } = require("celebrate");

const { BaseSchema } = require("./baseSchema");

const searchAyahParamSchema = BaseSchema.keys({
  id: Joi.string().max(10).required(),
}).unknown(true);

const deleteAyahParamSchema = BaseSchema.keys({
  id: Joi.string().max(10).required(),
}).unknown(true);

const insertAyahParamSchema = BaseSchema.keys({
  id_ayah: Joi.string().max(10).required(),
  nama_ayah: Joi.string().max(50).required(),
  nik_ayah: Joi.string().max(16).required(),
  // tahun_lahir: Joi.string().max(4).required(),
  // pendidikan: Joi.string().max(6).required(),
  // pekerjaan: Joi.string().max(6).required(),
  // penghasilan_bulanan: Joi.string().max(6).required(),
  // berkebutuhan_khusus: Joi.string().max(6).required(),
}).unknown(true);

const updateAyahParamSchema = BaseSchema.keys({
  id_ayah: Joi.string().max(10).required(),
  nama_ayah: Joi.string().max(50).required(),
}).unknown(true);

module.exports = {
  searchAyahParamSchema,
  insertAyahParamSchema,
  updateAyahParamSchema,
  deleteAyahParamSchema,
};
