const { Joi } = require("celebrate");

const { BaseSchema } = require("./baseSchema");

const searchPriodikParamSchema = BaseSchema.keys({
  id: Joi.string().max(10).required(),
}).unknown(true);

const deletePriodikParamSchema = BaseSchema.keys({
  id: Joi.string().max(10).required(),
}).unknown(true);

const insertPriodikParamSchema = BaseSchema.keys({
  id_priodik: Joi.string().max(10).required(),
  tinggi_badan: Joi.string().max(6).required(),
  berat_badan: Joi.string().max(6).required(),
  // jarak_sekolah: Joi.string().max(5).required(),
  // waktu_tempuh: Joi.string().max(20).required(),
}).unknown(true);

const updatePriodikParamSchema = BaseSchema.keys({
  id_priodik: Joi.string().max(10).required(),
  tinggi_badan: Joi.string().max(6).required(),
  berat_badan: Joi.string().max(6).required(),
}).unknown(true);

module.exports = {
  searchPriodikParamSchema,
  insertPriodikParamSchema,
  updatePriodikParamSchema,
  deletePriodikParamSchema,
};
