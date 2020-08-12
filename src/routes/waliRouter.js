const express = require("express");
const router = express.Router();

const { celebrate } = require("celebrate");

const AyahController = require("../controller/WaliController");

const {
  searchWaliParamSchema,
  insertWaliParamSchema,
  updateWaliParamSchema,
  deleteWaliParamSchema,
} = require("../schema/waliSchema");
const WaliController = require("../controller/WaliController");

router
  .route("/")
  .get(celebrate({ query: searchWaliParamSchema }), WaliController.doSearchWali)
  .post(
    celebrate({
      body: insertWaliParamSchema,
    }),
    WaliController.doInsertWali
  )
  .put(
    celebrate({
      body: updateWaliParamSchema,
    }),
    WaliController.doUpdateWali
  )
  .delete(
    celebrate({ query: deleteWaliParamSchema }),
    WaliController.doDeleteWali
  );

module.exports = router;
