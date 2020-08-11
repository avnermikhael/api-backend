const express = require("express");
const router = express.Router();

const { celebrate } = require("celebrate");

const AyahController = require("../controller/IbuController");

const {
  searchIbuParamSchema,
  insertIbuParamSchema,
  updateIbuParamSchema,
  deleteIbuParamSchema,
} = require("../schema/ibuSchema");
const IbuController = require("../controller/IbuController");

router
  .route("/")
  .get(celebrate({ query: searchIbuParamSchema }), IbuController.doSearchIbu)
  .post(
    celebrate({
      body: insertIbuParamSchema,
    }),
    IbuController.doInsertIbu
  )
  .put(
    celebrate({
      body: updateIbuParamSchema,
    }),
    IbuController.doUpdateIbu
  )
  .delete(
    celebrate({ query: deleteIbuParamSchema }),
    IbuController.doDeleteIbu
  );

module.exports = router;
