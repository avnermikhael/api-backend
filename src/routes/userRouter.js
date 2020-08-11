const express = require("express");
const router = express.Router();

const { celebrate } = require("celebrate");

const SiswaController = require("../controller/SiswaController");

const {
  searchSiswaParamSchema,
  // insertUserParamSchema,
  // updateUserParamSchema,
  // deleteUserParamSchema,
} = require("../schema/siswaSchema");
const SiswaController = require("../controller/SiswaController");

router
  .route("/")
  .get(
    celebrate({ query: searchSiswaParamSchema }),
    SiswaController.doSearchSiswa
  );
// .post(
//   celebrate({
//     body: insertUserParamSchema,
//   }),
//   UserController.doInsertUser
// )
// .put(
//   celebrate({
//     body: updateUserParamSchema,
//   }),
//   UserController.doUpdateUser
// )
// .delete(
//   celebrate({ query: deleteUserParamSchema }),
//   UserController.doDeleteUser
// );

module.exports = router;
