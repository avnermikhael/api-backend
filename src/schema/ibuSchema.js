const { Joi } = require("celebrate");

const { BaseSchema } = require("./baseSchema");

const searchIbuParamSchema = BaseSchema.keys({
  id: Joi.string().max(10).required(),
}).unknown(true);

const deleteIbuParamSchema = BaseSchema.keys({
  id: Joi.string().max(10).required(),
}).unknown(true);

const insertIbuParamSchema = BaseSchema.keys({
  id_ibu: Joi.string().max(10).required(),
  nama_ibu: Joi.string().max(50).required(),
  nik_ibu: Joi.string().max(16).required(),
  // tahun_lahir: Joi.string().max(4).required(),
  // pendidikan: Joi.string().max(6).required(),
  // pekerjaan: Joi.string().max(6).required(),
  // penghasilan_bulanan: Joi.string().max(6).required(),
  // berkebutuhan_khusus: Joi.string().max(6).required(),
}).unknown(true);

const updateIbuParamSchema = BaseSchema.keys({
  id_ibu: Joi.string().max(10).required(),
  nama_ibu: Joi.string().max(50).required(),
}).unknown(true);

module.exports = {
  searchIbuParamSchema,
  insertIbuParamSchema,
  updateIbuParamSchema,
  deleteIbuParamSchema,
};
