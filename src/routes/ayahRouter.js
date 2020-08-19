const express = require("express");
const router = express.Router();

const { celebrate } = require("celebrate");

const AyahController = require("../controller/AyahController");

const {
  searchAyahParamSchema,
  insertAyahParamSchema,
  updateAyahParamSchema,
  deleteAyahParamSchema,
} = require("../schema/ayahSchema");

router.route("/getallayah").get(AyahController.doSearchAllAyah);

router
  .route("/")
  .get(celebrate({ query: searchAyahParamSchema }), AyahController.doSearchAyah)
  .post(
    celebrate({
      body: insertAyahParamSchema,
    }),
    AyahController.doInsertAyah
  )
  .put(
    celebrate({
      body: updateAyahParamSchema,
    }),
    AyahController.doUpdateAyah
  )
  .delete(
    celebrate({ query: deleteAyahParamSchema }),
    AyahController.doDeleteAyah
  );

module.exports = router;
