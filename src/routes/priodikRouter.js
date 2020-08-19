const express = require("express");
const router = express.Router();

const { celebrate } = require("celebrate");

const PriodikController = require("../controller/PriodikController");

const {
  searchPriodikParamSchema,
  insertPriodikParamSchema,
  updatePriodikParamSchema,
  deletePriodikParamSchema,
} = require("../schema/priodikSchema");

router.route("/getallpriodik").get(PriodikController.doSearchAllPriodik);

router
  .route("/")
  .get(
    celebrate({ query: searchPriodikParamSchema }),
    PriodikController.doSearchPriodik
  )
  .post(
    celebrate({
      body: insertPriodikParamSchema,
    }),
    PriodikController.doInsertPriodik
  )
  .put(
    celebrate({
      body: updatePriodikParamSchema,
    }),
    PriodikController.doUpdatePriodik
  )
  .delete(
    celebrate({ query: deletePriodikParamSchema }),
    PriodikController.doDeletePriodik
  );

module.exports = router;
