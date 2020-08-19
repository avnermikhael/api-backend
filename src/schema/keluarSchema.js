const { Joi } = require("celebrate");

const { BaseSchema } = require("./baseSchema");

const searchKeluarParamSchema = BaseSchema.keys({
  id: Joi.string().max(10).required(),
}).unknown(true);

const deleteKeluarParamSchema = BaseSchema.keys({
  id: Joi.string().max(10).required(),
}).unknown(true);

const insertKeluarParamSchema = BaseSchema.keys({
  id_keluar: Joi.string().max(10).required(),
  // info_keluar: Joi.string().max(50).required(),
  // tanggal_keluar: Joi.string().max(20).required(),
  alasan: Joi.string().max(50).required(),
  id_siswa: Joi.string().max(10).required(),
}).unknown(true);

const updateKeluarParamSchema = BaseSchema.keys({
  id_keluar: Joi.string().max(10).required(),
  alasan: Joi.string().max(50).required(),
}).unknown(true);

module.exports = {
  searchKeluarParamSchema,
  insertKeluarParamSchema,
  updateKeluarParamSchema,
  deleteKeluarParamSchema,
};
