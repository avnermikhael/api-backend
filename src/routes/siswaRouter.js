const express = require("express");
const router = express.Router();

const { celebrate } = require("celebrate");

const SiswaController = require("../controller/SiswaController");

const {
  searchSiswaParamSchema,
  insertSiswaParamSchema,
  updateSiswaParamSchema,
  deleteSiswaParamSchema,
  updateAyahSiswaParamSchema,
  updateIbuSiswaParamSchema,
  updateWaliSiswaParamSchema,
  updatePriodikSiswaParamSchema,
} = require("../schema/siswaSchema");

router.route("/getallsiswa").get(SiswaController.doSearchAllSiswa);
router
  .route("/updateayahsiswa")
  .put(
    celebrate({ body: updateAyahSiswaParamSchema }),
    SiswaController.doUpdateAyahSiswa
  );

router
  .route("/updateibusiswa")
  .put(
    celebrate({ body: updateIbuSiswaParamSchema }),
    SiswaController.doUpdateIbuSiswa
  );

router
  .route("/updatewalisiswa")
  .put(
    celebrate({ body: updateWaliSiswaParamSchema }),
    SiswaController.doUpdateWaliSiswa
  );

router
  .route("/updatepriodiksiswa")
  .put(
    celebrate({ body: updatePriodikSiswaParamSchema }),
    SiswaController.doUpdatePriodikSiswa
  );

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
