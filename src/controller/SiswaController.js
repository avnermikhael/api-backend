const {
  selectSiswa,
  // insertUser,
  // updateUser,
  // deleteUser,
} = require("../model/Siswa");

class SiswaController {
  async doSearchSiswa(req, res) {
    const param = req.query;
    try {
      const result = await selectSiswa(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchSiswa", err);
    }
  }

  // async doInsertUser(req, res) {
  //   const param = req.body;
  //   try {
  //     const result = await insertUser(param, param.createdBy);
  //     res.status(200).send({
  //       result,
  //     });
  //   } catch (err) {
  //     console.log("doInsertUser", err);
  //   }
  // }

  // async doUpdateUser(req, res) {
  //   const param = req.body;
  //   try {
  //     const result = await updateUser(param, param.id);
  //     res.status(200).send({
  //       result,
  //     });
  //   } catch (err) {
  //     console.log("doUpdateUser", err);
  //   }
  // }

  // async doDeleteUser(req, res) {
  //   const param = req.query;
  //   try {
  //     const result = await deleteUser(param);
  //     res.status(200).send({
  //       result,
  //     });
  //   } catch (err) {
  //     console.log("doDeleteUser", err);
  //   }
  // }
}

module.exports = new SiswaController();
