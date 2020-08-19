const express = require("express");
const router = express.Router();

const { celebrate } = require("celebrate");
const WaliController = require("../controller/WaliController");

const {
  searchWaliParamSchema,
  insertWaliParamSchema,
  updateWaliParamSchema,
  deleteWaliParamSchema,
} = require("../schema/waliSchema");

router.route("/getallwali").get(WaliController.doSearchAllWali);

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
