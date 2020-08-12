const express = require("express");
const router = express.Router();

const { celebrate } = require("celebrate");

const SiswaPrestasiController = require("../controller/SiswaPrestasiController");

const {
  searchSiswaPrestasiParamSchema,
  insertSiswaPrestasiParamSchema,
  updateSiswaPrestasiParamSchema,
  deleteSiswaPrestasiParamSchema,
} = require("../schema/siswaprestasiSchema");

router
  .route("/")
  .get(
    celebrate({ query: searchSiswaPrestasiParamSchema }),
    SiswaPrestasiController.doSearchSiswaPrestasi
  )
  .post(
    celebrate({
      body: insertSiswaPrestasiParamSchema,
    }),
    SiswaPrestasiController.doInsertSiswaPrestasi
  )
  .put(
    celebrate({
      body: updateSiswaPrestasiParamSchema,
    }),
    SiswaPrestasiController.doUpdateSiswaPrestasi
  )
  .delete(
    celebrate({ query: deleteSiswaPrestasiParamSchema }),
    SiswaPrestasiController.doDeleteSiswaPrestasi
  );

module.exports = router;
