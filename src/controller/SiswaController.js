const {
  selectSiswa,
  insertSiswa,
  updateSiswa,
  deleteSiswa,
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

  async doInsertSiswa(req, res) {
    const param = req.body;
    try {
      const result = await insertSiswa(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doInsertSiswa", err);
    }
  }

  async doUpdateSiswa(req, res) {
    const param = req.body;
    try {
      const result = await updateSiswa(param, param.id);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doUpdateSiswa", err);
    }
  }

  async doDeleteSiswa(req, res) {
    const param = req.query;
    try {
      const result = await deleteSiswa(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doDeleteSiswa", err);
    }
  }
}

module.exports = new SiswaController();
