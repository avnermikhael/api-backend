const express = require("express");
const router = express.Router();

const { celebrate } = require("celebrate");

const PrestasiController = require("../controller/PrestasiController");

const {
  searchPrestasiParamSchema,
  insertPrestasiParamSchema,
  updatePrestasiParamSchema,
  deletePrestasiParamSchema,
} = require("../schema/prestasiSchema");

router.route("/getallprestasi").get(PrestasiController.doSearchAllPrestasi);

router
  .route("/")
  .get(
    celebrate({ query: searchPrestasiParamSchema }),
    PrestasiController.doSearchPrestasi
  )
  .post(
    celebrate({
      body: insertPrestasiParamSchema,
    }),
    PrestasiController.doInsertPrestasi
  )
  .put(
    celebrate({
      body: updatePrestasiParamSchema,
    }),
    PrestasiController.doUpdatePrestasi
  )
  .delete(
    celebrate({ query: deletePrestasiParamSchema }),
    PrestasiController.doDeletePrestasi
  );

module.exports = router;
