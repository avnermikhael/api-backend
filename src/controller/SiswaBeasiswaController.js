const {
  selectSiswaBeasiswa,
  insertSiswaBeasiswa,
  udpateSiswaBeasiswa,
  deleteSiswaBeasiswa,
} = require("../model/SiswaBeasiswa");

class SiswaBeasiswaController {
  async doSearchSiswaBeasiswa(req, res) {
    const param = req.query;
    try {
      const result = await selectSiswaBeasiswa(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearch", err);
    }
  }

  async doInsertSiswaBeasiswa(req, res) {
    const param = req.body;
    try {
      const result = await insertSiswaBeasiswa(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doInsert", err);
    }
  }

  async doUpdateSiswaBeasiswa(req, res) {
    const param = req.body;
    try {
      const result = await udpateSiswaBeasiswa(param, param.id);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doUpdate", err);
    }
  }

  async doDeleteSiswaBeasiswa(req, res) {
    const param = req.query;
    try {
      const result = await deleteSiswaBeasiswa(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doDelete", err);
    }
  }
}

module.exports = new SiswaBeasiswaController();
