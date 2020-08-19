const {
  selectIbu,
  insertIbu,
  udpateIbu,
  deleteIbu,
  selectAllIbu,
} = require("../model/Ibu");

class IbuController {
  async doSearchIbu(req, res) {
    const param = req.query;
    try {
      const result = await selectIbu(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearch", err);
    }
  }

  async doSearchAllIbu(req, res) {
    const param = req.query;
    try {
      const result = await selectAllIbu(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchAllIbu", err);
    }
  }

  async doInsertIbu(req, res) {
    const param = req.body;
    try {
      const result = await insertIbu(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doInsert", err);
    }
  }

  async doUpdateIbu(req, res) {
    const param = req.body;
    try {
      const result = await udpateIbu(param, param.id);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doUpdate", err);
    }
  }

  async doDeleteIbu(req, res) {
    const param = req.query;
    try {
      const result = await deleteIbu(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doDelete", err);
    }
  }
}

module.exports = new IbuController();
