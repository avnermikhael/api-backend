const express = require("express");
const router = express.Router();

const { celebrate } = require("celebrate");

const KeluarController = require("../controller/KeluarController");

const {
  searchKeluarParamSchema,
  insertKeluarParamSchema,
  updateKeluarParamSchema,
  deleteKeluarParamSchema,
} = require("../schema/keluarSchema");
const keluarSchema = require("../schema/keluarSchema");

router
  .route("/")
  .get(
    celebrate({ query: searchKeluarParamSchema }),
    KeluarController.doSearchKeluar
  )
  .post(
    celebrate({
      body: insertKeluarParamSchema,
    }),
    KeluarController.doInsertKeluar
  )
  .put(
    celebrate({
      body: updateKeluarParamSchema,
    }),
    KeluarController.doUpdateKeluar
  )
  .delete(
    celebrate({ query: deleteKeluarParamSchema }),
    KeluarController.doDeleteKeluar
  );

module.exports = router;
