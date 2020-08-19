const {
  selectKeluar,
  insertKeluar,
  udpateKeluar,
  deleteKeluar,
  selectAllKeluar,
} = require("../model/Keluar");

class KeluarController {
  async doSearchKeluar(req, res) {
    const param = req.query;
    try {
      const result = await selectKeluar(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearch", err);
    }
  }

  async doSearchAllKeluar(req, res) {
    const param = req.query;
    try {
      const result = await selectAllKeluar(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchAllKeluar", err);
    }
  }

  async doInsertKeluar(req, res) {
    const param = req.body;
    try {
      const result = await insertKeluar(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doInsert", err);
    }
  }

  async doUpdateKeluar(req, res) {
    const param = req.body;
    try {
      const result = await udpateKeluar(param, param.id);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doUpdate", err);
    }
  }

  async doDeleteKeluar(req, res) {
    const param = req.query;
    try {
      const result = await deleteKeluar(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doDelete", err);
    }
  }
}

module.exports = new KeluarController();
