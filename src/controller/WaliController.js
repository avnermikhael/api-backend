const {
  selectWali,
  insertWali,
  udpateWali,
  deleteWali,
} = require("../model/Wali");

class WaliController {
  async doSearchWali(req, res) {
    const param = req.query;
    try {
      const result = await selectWali(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchWali", err);
    }
  }

  async doInsertWali(req, res) {
    const param = req.body;
    try {
      const result = await insertWali(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doInsertWali", err);
    }
  }

  async doUpdateWali(req, res) {
    const param = req.body;
    try {
      const result = await udpateWali(param, param.id);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doUpdateWali", err);
    }
  }

  async doDeleteWali(req, res) {
    const param = req.query;
    try {
      const result = await deleteWali(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doDeleteWali", err);
    }
  }
}

module.exports = new WaliController();
