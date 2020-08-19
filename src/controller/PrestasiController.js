const {
  selectPrestasi,
  insertPrestasi,
  udpatePrestasi,
  deletePrestasi,
  selectAllPrestasi,
} = require("../model/Prestasi");

class PrestasiController {
  async doSearchPrestasi(req, res) {
    const param = req.query;
    try {
      const result = await selectPrestasi(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearch", err);
    }
  }

  async doSearchAllPrestasi(req, res) {
    const param = req.query;
    try {
      const result = await selectAllPrestasi(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchAllPrestasi", err);
    }
  }

  async doInsertPrestasi(req, res) {
    const param = req.body;
    try {
      const result = await insertPrestasi(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doInsert", err);
    }
  }

  async doUpdatePrestasi(req, res) {
    const param = req.body;
    try {
      const result = await udpatePrestasi(param, param.id);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doUpdate", err);
    }
  }

  async doDeletePrestasi(req, res) {
    const param = req.query;
    try {
      const result = await deletePrestasi(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doDelete", err);
    }
  }
}

module.exports = new PrestasiController();
