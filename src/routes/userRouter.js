const express = require("express");
const router = express.Router();

const { celebrate } = require("celebrate");

const SiswaController = require("../controller/SiswaController");

const {
  searchSiswaParamSchema,
  insertSiswaParamSchema,
  updateSiswaParamSchema,
  deleteSiswaParamSchema,
} = require("../schema/siswaSchema");

router
  .route("/")
  .get(
    celebrate({ query: searchSiswaParamSchema }),
    SiswaController.doSearchSiswa
  )
  .post(
    celebrate({
      body: insertSiswaParamSchema,
    }),
    SiswaController.doInsertSiswa
  )
  .put(
    celebrate({
      body: updateSiswaParamSchema,
    }),
    SiswaController.doUpdateSiswa
  )
  .delete(
    celebrate({ query: deleteSiswaParamSchema }),
    SiswaController.doDeleteSiswa
  );

module.exports = router;
