const express = require("express");
const router = express.Router();

const { celebrate } = require("celebrate");

const SiswaBeasiswaController = require("../controller/SiswaBeasiswaController");

const {
  searchSiswaBeasiswaParamSchema,
  insertSiswaBeasiswaParamSchema,
  updateSiswaBeasiswaParamSchema,
  deleteSiswaBeasiswaParamSchema,
} = require("../schema/siswabeasiswaSchema");

router
  .route("/")
  .get(
    celebrate({ query: searchSiswaBeasiswaParamSchema }),
    SiswaBeasiswaController.doSearchSiswaBeasiswa
  )
  .post(
    celebrate({
      body: insertSiswaBeasiswaParamSchema,
    }),
    SiswaBeasiswaController.doInsertSiswaBeasiswa
  )
  .put(
    celebrate({
      body: updateSiswaBeasiswaParamSchema,
    }),
    SiswaBeasiswaController.doUpdateSiswaBeasiswa
  )
  .delete(
    celebrate({ query: deleteSiswaBeasiswaParamSchema }),
    SiswaBeasiswaController.doDeleteSiswaBeasiswa
  );

module.exports = router;
