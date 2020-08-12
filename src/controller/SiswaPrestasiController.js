const {
  selectSiswaPrestasi,
  insertSiswaPrestasi,
  udpateSiswaPrestasi,
  deleteSiswaPrestasi,
} = require("../model/SiswaPrestasi");

class SiswaPrestasiController {
  async doSearchSiswaPrestasi(req, res) {
    const param = req.query;
    try {
      const result = await selectSiswaPrestasi(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearch", err);
    }
  }

  async doInsertSiswaPrestasi(req, res) {
    const param = req.body;
    try {
      const result = await insertSiswaPrestasi(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doInsert", err);
    }
  }

  async doUpdateSiswaPrestasi(req, res) {
    const param = req.body;
    try {
      const result = await udpateSiswaPrestasi(param, param.id);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doUpdate", err);
    }
  }

  async doDeleteSiswaPrestasi(req, res) {
    const param = req.query;
    try {
      const result = await deleteSiswaPrestasi(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doDelete", err);
    }
  }
}

module.exports = new SiswaPrestasiController();
