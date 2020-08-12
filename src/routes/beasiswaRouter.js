const express = require("express");
const router = express.Router();

const { celebrate } = require("celebrate");

const BeasiswaController = require("../controller/BeasiswaController");

const {
  searchBeasiswaParamSchema,
  insertBeasiswaParamSchema,
  updateBeasiswaParamSchema,
  deleteBeasiswaParamSchema,
} = require("../schema/beasiswaSchema");

router
  .route("/")
  .get(
    celebrate({ query: searchBeasiswaParamSchema }),
    BeasiswaController.doSearchBeasiswa
  )
  .post(
    celebrate({
      body: insertBeasiswaParamSchema,
    }),
    BeasiswaController.doInsertBeasiswa
  )
  .put(
    celebrate({
      body: updateBeasiswaParamSchema,
    }),
    BeasiswaController.doUpdateBeasiswa
  )
  .delete(
    celebrate({ query: deleteBeasiswaParamSchema }),
    BeasiswaController.doDeleteBeasiswa
  );

module.exports = router;
